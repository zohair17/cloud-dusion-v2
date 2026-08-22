"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Line } from "@react-three/drei";
import { drawMark } from "./product-marks";

/**
 * The ecosystem diagram, as geometry.
 *
 * A horizontal plane seen from about forty degrees up: the agent hub is a puck
 * lying on it, the Microsoft stack stands around it on six hexagonal tiles, and
 * the outcomes it drives lie in front as two flat plaques. That single viewing
 * angle is the whole trick — enough depth to be real, too little to become a
 * scene you have to read spatially. It stays a diagram.
 *
 * Every label is a canvas drawn at texture resolution rather than extruded
 * type, so the words stay flat, sharp, and the colour they were designed in.
 */
const ELEVATION = THREE.MathUtils.degToRad(40);
const RING_R = 2.85;
const TILE_R = 0.86;
const HUB_R = 1.0;

/** Angle on the floor for each stack member, so the layout matches the source. */
const ANGLES = {
  "microsoft-365": 0,
  automation: -60,
  data: -120,
  azure: 180,
  sharepoint: 120,
  "power-platform": 60,
};

const NEAR_WHITE = "#f8faff";
const BRAND = "#3533cd";

function floorPoint(angleDeg, radius) {
  const a = THREE.MathUtils.degToRad(angleDeg);
  return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius);
}

/* ------------------------------------------------------------------ labels */

/**
 * A label painted into a canvas and hung on a plane.
 *
 * Redrawn once the webfont resolves: the first paint necessarily happens in
 * whatever fallback is loaded, and a diagram whose type silently stays in
 * Arial is not the diagram anyone approved.
 */
function LabelPlane({ markId, label, variant, width, height, ...props }) {
  // The first paint necessarily happens in whatever fallback font is loaded, so
  // the texture is rebuilt once the real face resolves rather than repainted in
  // place — a new texture is a render React and the demand loop both notice.
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let alive = true;
    document.fonts?.ready?.then(() => {
      if (alive) setFontsReady(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  const texture = useMemo(() => {
    const px = 640;
    const canvas = document.createElement("canvas");
    const w = Math.round(px * (width >= height ? 1 : width / height));
    const h = Math.round(px * (height >= width ? 1 : height / width));
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    // The site's own type stack, resolved through the body so the
    // next/font-generated family name comes along with it.
    const family = getComputedStyle(document.body).fontFamily || "sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (variant === "hub") {
      ctx.fillStyle = "#ffffff";
      ctx.font = `600 ${Math.round(h * 0.42)}px ${family}`;
      ctx.fillText(label, w / 2 + h * 0.16, h * 0.54);
      ctx.fillText("✦", w / 2 + h * 0.16 - ctx.measureText(label).width / 2 - h * 0.3, h * 0.52);
    } else if (variant === "pill") {
      const size = h * 0.46;
      ctx.font = `600 ${Math.round(h * 0.3)}px ${family}`;
      const textWidth = ctx.measureText(label).width;
      const left = (w - (size + h * 0.22 + textWidth)) / 2;
      ctx.save();
      ctx.translate(left, (h - size) / 2);
      drawMark(ctx, markId, size);
      ctx.restore();
      ctx.fillStyle = "#0b0b2a";
      ctx.textAlign = "left";
      ctx.fillText(label, left + size + h * 0.22, h * 0.54);
    } else {
      // Tile: mark above, name beneath, both centred on the hexagon's face.
      const size = w * 0.4;
      ctx.save();
      ctx.translate((w - size) / 2, h * 0.24);
      drawMark(ctx, markId, size);
      ctx.restore();
      ctx.fillStyle = "#0b0b2a";
      ctx.font = `600 ${Math.round(w * 0.13)}px ${family}`;
      ctx.fillText(label, w / 2, h * 0.75);
    }

    const created = new THREE.CanvasTexture(canvas);
    created.colorSpace = THREE.SRGBColorSpace;
    created.anisotropy = 8;
    return created;
    // fontsReady is not read here — it is the signal to repaint in the real face.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markId, label, variant, width, height, fontsReady]);

  useEffect(() => {
    const painted = texture;
    return () => painted.dispose();
  }, [texture]);

  return (
    <mesh {...props}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

/* ------------------------------------------------------------------- parts */

function hexShape(radius) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 6; i += 1) {
    const a = Math.PI / 2 + (i * Math.PI) / 3;
    const x = Math.cos(a) * radius;
    const y = Math.sin(a) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

function roundedRectShape(width, height, radius) {
  const shape = new THREE.Shape();
  const w = width / 2;
  const h = height / 2;
  shape.moveTo(-w + radius, -h);
  shape.lineTo(w - radius, -h);
  shape.absarc(w - radius, -h + radius, radius, -Math.PI / 2, 0, false);
  shape.lineTo(w, h - radius);
  shape.absarc(w - radius, h - radius, radius, 0, Math.PI / 2, false);
  shape.lineTo(-w + radius, h);
  shape.absarc(-w + radius, h - radius, radius, Math.PI / 2, Math.PI, false);
  shape.lineTo(-w, -h + radius);
  shape.absarc(-w + radius, -h + radius, radius, Math.PI, Math.PI * 1.5, false);
  return shape;
}

/** One stack member: a hexagonal tile standing on the plane, facing the eye. */
function Tile({ node, index, still }) {
  const group = useRef(null);
  const base = floorPoint(ANGLES[node.id] ?? 0, RING_R);

  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(hexShape(TILE_R), {
      depth: 0.13,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
      curveSegments: 1,
    });
    geo.center();
    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state) => {
    if (!group.current || still) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = 1.02 + Math.sin(t * 0.85 + index * 1.1) * 0.045;
  });

  return (
    <group ref={group} position={[base.x, 1.02, base.z]} rotation={[-ELEVATION, 0, 0]}>
      <mesh geometry={geometry} castShadow>
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.42}
          metalness={0}
          clearcoat={0.35}
          clearcoatRoughness={0.4}
        />
      </mesh>
      {/* A hairline of brand colour along the tile's foot, as in the source. */}
      <mesh position={[0, -TILE_R * 0.76, 0.12]}>
        <planeGeometry args={[TILE_R * 0.8, 0.03]} />
        <meshBasicMaterial color={BRAND} toneMapped={false} />
      </mesh>
      {/* White on white needs a drawn edge to exist at all. */}
      <mesh position={[0, 0, -0.14]} scale={1.05}>
        <shapeGeometry args={[hexShape(TILE_R)]} />
        <meshBasicMaterial color="#c6d3f4" toneMapped={false} />
      </mesh>
      <LabelPlane
        markId={node.id}
        label={node.label}
        variant="tile"
        width={TILE_R * 1.62}
        height={TILE_R * 1.62}
        position={[0, 0, 0.125]}
      />
    </group>
  );
}

/** The agent hub: a puck on the plane, lit from inside, ringed with light. */
function Hub({ label, still }) {
  const halo = useRef(null);

  useFrame((state) => {
    if (!halo.current || still) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.035;
    halo.current.scale.set(pulse, 1, pulse);
    halo.current.material.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 1.4) * 0.2;
  });

  return (
    <group>
      {/* Dais: two wider, flatter discs, so the hub has something to stand on. */}
      <mesh position={[0, 0.06, 0]} receiveShadow>
        <cylinderGeometry args={[HUB_R * 1.42, HUB_R * 1.42, 0.12, 64]} />
        <meshPhysicalMaterial color="#eef1fb" roughness={0.5} metalness={0} />
      </mesh>
      <mesh position={[0, 0.17, 0]}>
        <cylinderGeometry args={[HUB_R * 1.18, HUB_R * 1.18, 0.14, 64]} />
        <meshPhysicalMaterial color="#e2e8f8" roughness={0.45} metalness={0} />
      </mesh>

      <mesh position={[0, 0.42, 0]} castShadow>
        <cylinderGeometry args={[HUB_R, HUB_R, 0.36, 64]} />
        <meshStandardMaterial color="#4149e8" roughness={0.28} metalness={0.05} emissive="#2f36c9" emissiveIntensity={0.5} />
      </mesh>

      <mesh ref={halo} position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[HUB_R * 1.5, HUB_R * 1.62, 96]} />
        <meshBasicMaterial color="#7aa8ff" transparent opacity={0.65} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>

      <LabelPlane
        label={label}
        variant="hub"
        width={HUB_R * 1.9}
        height={HUB_R * 0.68}
        position={[0, 0.605, 0.02]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

/** An outcome plaque, lying on the plane in front of the ring. */
function Plaque({ outcome, z }) {
  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(roundedRectShape(3.3, 0.76, 0.36), {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 2,
      curveSegments: 12,
    });
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <group position={[0, 0.04, z]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial color={NEAR_WHITE} roughness={0.38} metalness={0} clearcoat={0.4} />
      </mesh>
      <LabelPlane
        markId={outcome.id}
        label={outcome.label}
        variant="pill"
        width={3.15}
        height={0.66}
        position={[0, 0.165, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

/** A packet of work travelling from the hub out to one of the products. */
function Pulse({ angle, still }) {
  const ref = useRef(null);
  const from = floorPoint(angle, HUB_R * 1.5);
  const to = floorPoint(angle, RING_R - 0.55);
  // A fixed offset per spoke, so the packets never travel in lockstep.
  const phase = ((angle % 360) + 360) / 360;

  useFrame((state) => {
    if (!ref.current) return;
    const t = still ? 0.5 : (state.clock.elapsedTime * 0.32 + phase) % 1;
    ref.current.position.lerpVectors(from, to, t);
    ref.current.position.y = 0.05;
    ref.current.material.opacity = Math.sin(t * Math.PI) * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.075, 12, 12]} />
      <meshBasicMaterial color="#4f6dff" transparent toneMapped={false} />
    </mesh>
  );
}

/* ------------------------------------------------------------------- scene */

/** Screen-vertical in world space, for a camera that only ever looks down. */
const SCREEN_UP = new THREE.Vector3(0, Math.cos(ELEVATION), -Math.sin(ELEVATION));
const CORNER = new THREE.Vector3();

/** The diagram's projected bounds, in normalised device coordinates. */
function projectedBounds(object, camera) {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return null;

  const b = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
  for (const x of [box.min.x, box.max.x]) {
    for (const y of [box.min.y, box.max.y]) {
      for (const z of [box.min.z, box.max.z]) {
        CORNER.set(x, y, z).project(camera);
        b.minX = Math.min(b.minX, CORNER.x);
        b.maxX = Math.max(b.maxX, CORNER.x);
        b.minY = Math.min(b.minY, CORNER.y);
        b.maxY = Math.max(b.maxY, CORNER.y);
      }
    }
  }
  return b;
}

export function EcosystemScene({ constellation, still = false }) {
  const { camera, size } = useThree();
  const root = useRef(null);
  const content = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });

  const nodes = constellation.nodes;
  const outcomes = constellation.outcomes;

  // One viewing angle for the whole diagram, and a fit that is measured rather
  // than guessed: the scene is scaled and nudged until its own projected bounds
  // sit inside the canvas. Whatever shape the column takes, nothing is cropped.
  useLayoutEffect(() => {
    const group = root.current;
    const parts = content.current;
    if (!group || !parts) return;

    const distance = 14.5;
    camera.position.set(0, Math.sin(ELEVATION) * distance, Math.cos(ELEVATION) * distance);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld();
    camera.updateProjectionMatrix();

    group.scale.setScalar(1);
    group.position.set(0, 0, 0);
    group.updateMatrixWorld(true);

    const viewH = 2 * distance * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    const viewW = viewH * camera.aspect;
    const target = 1.9;

    for (let pass = 0; pass < 4; pass += 1) {
      const bounds = projectedBounds(parts, camera);
      if (!bounds) break;

      const scale = Math.min(
        target / Math.max(bounds.maxX - bounds.minX, 1e-4),
        target / Math.max(bounds.maxY - bounds.minY, 1e-4),
      );
      group.scale.multiplyScalar(scale);
      group.position.multiplyScalar(scale);
      group.updateMatrixWorld(true);

      const centred = projectedBounds(parts, camera);
      if (!centred) break;
      const cx = (centred.minX + centred.maxX) / 2;
      const cy = (centred.minY + centred.maxY) / 2;
      group.position.x -= (cx * viewW) / 2;
      group.position.addScaledVector(SCREEN_UP, (-cy * viewH) / 2);
      group.updateMatrixWorld(true);
    }
  }, [camera, size.width, size.height]);

  useFrame((state) => {
    if (!root.current) return;
    if (still || !content.current) {
      content.current?.rotation.set(0, 0, 0);
      return;
    }
    const t = state.clock.elapsedTime;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.05;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.05;
    content.current.rotation.y = Math.sin(t * 0.16) * 0.03 + pointer.current.x * 0.06;
    content.current.rotation.x = pointer.current.y * 0.02;
  });

  const rings = [1.72, 2.24];

  return (
    <>
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 9, 7]} intensity={1.35} />
      <directionalLight position={[-8, 5, 4]} intensity={0.5} color="#9fb4ff" />
      <pointLight position={[0, 1.4, 0]} intensity={8} distance={7} color="#4f6dff" />

      <group ref={root}>
        <group ref={content}>
          {/* Floor circles the whole layout is built on. */}
          {rings.map((r) => (
            <mesh key={r} position={[0, 0.012, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[r - 0.008, r + 0.008, 128]} />
              <meshBasicMaterial color="#9db4f5" transparent opacity={0.5} toneMapped={false} side={THREE.DoubleSide} />
            </mesh>
          ))}

          {/* Hub-to-product connectors, and the outcome chain running forward. */}
          {nodes.map((node) => {
            const angle = ANGLES[node.id] ?? 0;
            return (
              <Line
                key={node.id}
                points={[
                  floorPoint(angle, HUB_R * 1.5).setY(0.02).toArray(),
                  floorPoint(angle, RING_R - 0.55).setY(0.02).toArray(),
                ]}
                color="#6f86e0"
                lineWidth={1.4}
                dashed
                dashSize={0.16}
                gapSize={0.14}
                transparent
                opacity={0.85}
              />
            );
          })}
          <Line
            points={[
              [0, 0.02, HUB_R * 1.5],
              [0, 0.02, 5.4],
            ]}
            color="#6f86e0"
            lineWidth={1.4}
            dashed
            dashSize={0.16}
            gapSize={0.14}
            transparent
            opacity={0.85}
          />

          {nodes.map((node) => (
            <Pulse key={node.id} angle={ANGLES[node.id] ?? 0} still={still} />
          ))}

          <Hub label={constellation.hub} still={still} />

          {nodes.map((node, index) => (
            <Tile key={node.id} node={node} index={index} still={still} />
          ))}

          {outcomes.map((outcome, index) => (
            <Plaque key={outcome.id} outcome={outcome} z={4.15 + index * 1.25} />
          ))}

        </group>

        <ContactShadows
          frames={1}
          position={[0, -0.06, 0]}
          scale={16}
          opacity={0.24}
          blur={3}
          far={4}
          resolution={512}
          color="#1a2456"
        />
      </group>
    </>
  );
}

export default EcosystemScene;
