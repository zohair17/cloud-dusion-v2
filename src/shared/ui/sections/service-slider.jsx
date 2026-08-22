"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * The photo strip at the foot of a service card.
 *
 * A fixed 4:3 window whatever the column width, with the frames crossfading in
 * place rather than sliding — nothing moves horizontally, so a card can sit in a
 * tight grid without its neighbour's image ever appearing at the edge.
 *
 * Dragging or swiping past a threshold steps the strip; the dots do the same
 * for anyone not using a pointer.
 */
const THRESHOLD = 30;

export function ServiceSlider({ images, alt }) {
  const [active, setActive] = useState(0);
  const start = useRef({ x: 0, y: 0 });
  const total = images.length;

  if (!total) return null;

  const go = (index) => setActive(((index % total) + total) % total);

  const onPointerDown = (event) => {
    start.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event) => {
    const dx = start.current.x - event.clientX;
    const dy = Math.abs(start.current.y - event.clientY);
    // Vertical intent is a scroll, not a swipe — leave it alone.
    if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > dy) go(active + (dx > 0 ? 1 : -1));
  };

  return (
    <div
      className="relative aspect-[4/3] w-full shrink-0 cursor-grab select-none overflow-hidden bg-surface"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={index === 0 ? alt : ""}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
          draggable={false}
          className={`object-cover transition-opacity duration-500 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {total > 1 ? (
        <div className="absolute inset-x-0 bottom-3.5 z-[2] flex justify-center gap-1.5">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setActive(index);
              }}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index === active ? "scale-[1.35] bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ServiceSlider;
