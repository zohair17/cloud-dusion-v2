/**
 * Microsoft product marks, described once as primitives.
 *
 * The ecosystem diagram needs the real, coloured logos rather than generic
 * glyphs — recognising Azure or SharePoint at a glance is the whole point. It
 * draws its labels into a canvas that becomes a WebGL texture, so the marks are
 * held as data (paths, circles, ellipses on a 24×24 grid) that can be replayed
 * into either a 2D context or JSX, instead of as markup only one of the two can
 * read.
 */
export const MARKS = {
  data: [
    { ellipse: [12, 5.6, 7.4, 2.9], fill: "#50E6FF" },
    {
      d: "M4.6 5.6v12.8c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V5.6c0 1.6-3.3 2.9-7.4 2.9S4.6 7.2 4.6 5.6Z",
      fill: "#0078D4",
    },
    { d: "M4.6 12c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9", stroke: "#50E6FF", width: 1.1 },
  ],
  automation: [
    {
      d: "M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2Zm0 5.9a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z",
      fill: "#0078D4",
    },
    {
      d: "m20.4 13.7-1.7-.4a6.9 6.9 0 0 0 0-2.6l1.7-.4a.6.6 0 0 0 .4-.7l-.4-1.5a.6.6 0 0 0-.7-.4l-1.7.4a6.9 6.9 0 0 0-1.8-1.8l.4-1.7a.6.6 0 0 0-.4-.7l-1.5-.4a.6.6 0 0 0-.7.4l-.4 1.7a6.9 6.9 0 0 0-2.6 0l-.4-1.7a.6.6 0 0 0-.7-.4l-1.5.4a.6.6 0 0 0-.4.7l.4 1.7a6.9 6.9 0 0 0-1.8 1.8l-1.7-.4a.6.6 0 0 0-.7.4l-.4 1.5a.6.6 0 0 0 .4.7l1.7.4a6.9 6.9 0 0 0 0 2.6l-1.7.4a.6.6 0 0 0-.4.7l.4 1.5a.6.6 0 0 0 .7.4l1.7-.4a6.9 6.9 0 0 0 1.8 1.8l-.4 1.7a.6.6 0 0 0 .4.7l1.5.4a.6.6 0 0 0 .7-.4l.4-1.7a6.9 6.9 0 0 0 2.6 0l.4 1.7a.6.6 0 0 0 .7.4l1.5-.4a.6.6 0 0 0 .4-.7l-.4-1.7a6.9 6.9 0 0 0 1.8-1.8l1.7.4a.6.6 0 0 0 .7-.4l.4-1.5a.6.6 0 0 0-.4-.7ZM12 17.5A5.5 5.5 0 1 1 12 6.5a5.5 5.5 0 0 1 0 11Z",
      fill: "#742774",
    },
  ],
  azure: [
    { d: "M9.6 2.7h4.6L9.4 17.1a1 1 0 0 1-.9.7H5a1 1 0 0 1-.9-1.3l4.6-13a1 1 0 0 1 .9-.8Z", fill: "#0078D4" },
    { d: "M15.9 15.4H8.6a.5.5 0 0 0-.3.8l4.7 4.4a1 1 0 0 0 .7.3h4.1l-1.9-5.5Z", fill: "#0078D4" },
    {
      d: "M14.2 2.7H9.6a1 1 0 0 0-.9.8L4.1 16.5a1 1 0 0 0 .9 1.3h3.5a1 1 0 0 0 .8-.7l1-2.8 3.5 3.2a1 1 0 0 0 .6.3h4.1l-1.8-5.2H12l3-8.7a1 1 0 0 0-.8-1.2Z",
      fill: "#0078D4",
      opacity: 0.5,
    },
    {
      d: "M15.4 3.4a1 1 0 0 0-.9-.7h-4.7a1 1 0 0 1 .9.7l4.7 13.6a1 1 0 0 1-.9 1.3h4.7a1 1 0 0 0 .9-1.3L15.4 3.4Z",
      fill: "#50E6FF",
    },
  ],
  "microsoft-365": [
    { d: "M3 3h8.5v8.5H3V3Z", fill: "#F25022" },
    { d: "M12.5 3H21v8.5h-8.5V3Z", fill: "#7FBA00" },
    { d: "M3 12.5h8.5V21H3v-8.5Z", fill: "#00A4EF" },
    { d: "M12.5 12.5H21V21h-8.5v-8.5Z", fill: "#FFB900" },
  ],
  sharepoint: [
    { circle: [9.4, 6.6, 4.6], fill: "#036C70" },
    { circle: [15.2, 11.6, 4.6], fill: "#1A9BA1" },
    { circle: [10.4, 17, 4], fill: "#37C6D0" },
    { d: "M5.2 8.4h6.4a1 1 0 0 1 1 1v8.4a1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1V9.4a1 1 0 0 1 1-1Z", fill: "#038387" },
    {
      d: "M8.7 11.6c-.9 0-1.6.2-2 .6-.5.4-.7.9-.7 1.5 0 .5.2.9.5 1.2.3.3.8.6 1.5.8.5.2.8.3 1 .4.1.1.2.3.2.4a.5.5 0 0 1-.2.4c-.2.1-.4.2-.8.2a3 3 0 0 1-1.7-.6v1.4c.5.2 1.1.4 1.8.4.9 0 1.6-.2 2.1-.6.5-.4.7-.9.7-1.6 0-.5-.1-.9-.4-1.2-.3-.3-.8-.5-1.4-.8-.5-.2-.9-.3-1-.4-.2-.1-.2-.3-.2-.4 0-.2 0-.3.2-.4.2-.1.4-.2.7-.2.6 0 1.1.2 1.6.5v-1.3a4 4 0 0 0-1.6-.3Z",
      fill: "#fff",
    },
  ],
  "power-platform": [
    { d: "M12.9 2.4a1 1 0 0 1 1.5.9V10a1 1 0 0 1-.5.9L6.7 15a1 1 0 0 1-1.5-.9V7.5a1 1 0 0 1 .5-.9l7.2-4.2Z", fill: "#0066FF" },
    {
      d: "M12.9 9.1a1 1 0 0 1 1.5.9v6.7a1 1 0 0 1-.5.9l-7.2 4.1a1 1 0 0 1-1.5-.9v-6.6a1 1 0 0 1 .5-.9l7.2-4.2Z",
      fill: "#3B8CFF",
      opacity: 0.85,
    },
    {
      d: "M17.3 6.1a1 1 0 0 1 1.5.9v6.6a1 1 0 0 1-.5.9L14 17a1 1 0 0 1-1.5-.9V9.5a1 1 0 0 1 .5-.9l4.3-2.5Z",
      fill: "#742774",
      opacity: 0.7,
    },
  ],
  /** Outcome glyphs — brand-coloured, since they are ours rather than Microsoft's. */
  "enterprise-applications": [
    { d: "M3.5 3.5h8v8h-8v-8Z", fill: "#3533cd" },
    { d: "M12.5 3.5h8v8h-8v-8Z", fill: "#5b59e0" },
    { d: "M3.5 12.5h8v8h-8v-8Z", fill: "#5b59e0" },
    { d: "M12.5 12.5h8v8h-8v-8Z", fill: "#3533cd" },
  ],
  "business-outcomes": [
    { circle: [8.6, 7.6, 3.1], fill: "#3533cd" },
    { circle: [16.4, 8.6, 2.5], fill: "#5b59e0" },
    { d: "M2.6 18.4c0-3.1 2.7-5.2 6-5.2s6 2.1 6 5.2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1Z", fill: "#3533cd" },
    { d: "M15.6 19.4a3 3 0 0 0 .3-1.3c0-1.7-.7-3.2-1.9-4.3a5 5 0 0 1 2.4-.6c2.7 0 4.9 1.7 4.9 4.3a1 1 0 0 1-1 1Z", fill: "#5b59e0" },
  ],
};

/**
 * Replays a mark into a 2D context, scaled to `size` pixels square with its top
 * left at the current origin. Path2D is what makes this possible — the same
 * path data the SVG uses, no re-authoring.
 */
export function drawMark(ctx, id, size) {
  const parts = MARKS[id];
  if (!parts) return;

  const scale = size / 24;
  ctx.save();
  ctx.scale(scale, scale);

  for (const part of parts) {
    ctx.globalAlpha = part.opacity ?? 1;
    ctx.beginPath();

    if (part.circle) {
      const [cx, cy, r] = part.circle;
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
    } else if (part.ellipse) {
      const [cx, cy, rx, ry] = part.ellipse;
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    }

    const path = part.d ? new Path2D(part.d) : null;

    if (part.stroke) {
      ctx.strokeStyle = part.stroke;
      ctx.lineWidth = part.width ?? 1;
      if (path) ctx.stroke(path);
      else ctx.stroke();
    } else {
      ctx.fillStyle = part.fill;
      if (path) ctx.fill(path);
      else ctx.fill();
    }
  }

  ctx.restore();
  ctx.globalAlpha = 1;
}
