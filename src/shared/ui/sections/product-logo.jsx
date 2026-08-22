/**
 * Microsoft product marks, drawn inline.
 *
 * The constellation needs the real, coloured logos rather than generic glyphs —
 * recognising Azure or SharePoint at a glance is the whole point of the diagram.
 * They are paths rather than image files so they stay crisp at any node size and
 * cost no extra requests.
 */
const MARKS = {
  data: (
    <>
      <ellipse cx="12" cy="5.6" rx="7.4" ry="2.9" fill="#50E6FF" />
      <path d="M4.6 5.6v12.8c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V5.6c0 1.6-3.3 2.9-7.4 2.9S4.6 7.2 4.6 5.6Z" fill="#0078D4" />
      <path d="M4.6 12c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9" stroke="#50E6FF" strokeWidth="1.1" fill="none" />
    </>
  ),
  automation: (
    <>
      <path
        d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2Zm0 5.9a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z"
        fill="#0078D4"
      />
      <path
        d="m20.4 13.7-1.7-.4a6.9 6.9 0 0 0 0-2.6l1.7-.4a.6.6 0 0 0 .4-.7l-.4-1.5a.6.6 0 0 0-.7-.4l-1.7.4a6.9 6.9 0 0 0-1.8-1.8l.4-1.7a.6.6 0 0 0-.4-.7l-1.5-.4a.6.6 0 0 0-.7.4l-.4 1.7a6.9 6.9 0 0 0-2.6 0l-.4-1.7a.6.6 0 0 0-.7-.4l-1.5.4a.6.6 0 0 0-.4.7l.4 1.7a6.9 6.9 0 0 0-1.8 1.8l-1.7-.4a.6.6 0 0 0-.7.4l-.4 1.5a.6.6 0 0 0 .4.7l1.7.4a6.9 6.9 0 0 0 0 2.6l-1.7.4a.6.6 0 0 0-.4.7l.4 1.5a.6.6 0 0 0 .7.4l1.7-.4a6.9 6.9 0 0 0 1.8 1.8l-.4 1.7a.6.6 0 0 0 .4.7l1.5.4a.6.6 0 0 0 .7-.4l.4-1.7a6.9 6.9 0 0 0 2.6 0l.4 1.7a.6.6 0 0 0 .7.4l1.5-.4a.6.6 0 0 0 .4-.7l-.4-1.7a6.9 6.9 0 0 0 1.8-1.8l1.7.4a.6.6 0 0 0 .7-.4l.4-1.5a.6.6 0 0 0-.4-.7ZM12 17.5A5.5 5.5 0 1 1 12 6.5a5.5 5.5 0 0 1 0 11Z"
        fill="#742774"
      />
    </>
  ),
  azure: (
    <>
      <path d="M9.6 2.7h4.6L9.4 17.1a1 1 0 0 1-.9.7H5a1 1 0 0 1-.9-1.3l4.6-13a1 1 0 0 1 .9-.8Z" fill="#0078D4" />
      <path d="M15.9 15.4H8.6a.5.5 0 0 0-.3.8l4.7 4.4a1 1 0 0 0 .7.3h4.1l-1.9-5.5Z" fill="#0078D4" />
      <path d="M14.2 2.7H9.6a1 1 0 0 0-.9.8L4.1 16.5a1 1 0 0 0 .9 1.3h3.5a1 1 0 0 0 .8-.7l1-2.8 3.5 3.2a1 1 0 0 0 .6.3h4.1l-1.8-5.2H12l3-8.7a1 1 0 0 0-.8-1.2Z" fill="#0078D4" opacity=".5" />
      <path d="M15.4 3.4a1 1 0 0 0-.9-.7h-4.7a1 1 0 0 1 .9.7l4.7 13.6a1 1 0 0 1-.9 1.3h4.7a1 1 0 0 0 .9-1.3L15.4 3.4Z" fill="#50E6FF" />
    </>
  ),
  "microsoft-365": (
    <>
      <path d="M3 3h8.5v8.5H3V3Z" fill="#F25022" />
      <path d="M12.5 3H21v8.5h-8.5V3Z" fill="#7FBA00" />
      <path d="M3 12.5h8.5V21H3v-8.5Z" fill="#00A4EF" />
      <path d="M12.5 12.5H21V21h-8.5v-8.5Z" fill="#FFB900" />
    </>
  ),
  sharepoint: (
    <>
      <circle cx="9.4" cy="6.6" r="4.6" fill="#036C70" />
      <circle cx="15.2" cy="11.6" r="4.6" fill="#1A9BA1" />
      <circle cx="10.4" cy="17" r="4" fill="#37C6D0" />
      <path d="M5.2 8.4h6.4a1 1 0 0 1 1 1v8.4a1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1V9.4a1 1 0 0 1 1-1Z" fill="#038387" />
      <path
        d="M8.7 11.6c-.9 0-1.6.2-2 .6-.5.4-.7.9-.7 1.5 0 .5.2.9.5 1.2.3.3.8.6 1.5.8.5.2.8.3 1 .4.1.1.2.3.2.4a.5.5 0 0 1-.2.4c-.2.1-.4.2-.8.2a3 3 0 0 1-1.7-.6v1.4c.5.2 1.1.4 1.8.4.9 0 1.6-.2 2.1-.6.5-.4.7-.9.7-1.6 0-.5-.1-.9-.4-1.2-.3-.3-.8-.5-1.4-.8-.5-.2-.9-.3-1-.4-.2-.1-.2-.3-.2-.4 0-.2 0-.3.2-.4.2-.1.4-.2.7-.2.6 0 1.1.2 1.6.5v-1.3a4 4 0 0 0-1.6-.3Z"
        fill="#fff"
      />
    </>
  ),
  "power-platform": (
    <>
      <path d="M12.9 2.4a1 1 0 0 1 1.5.9V10a1 1 0 0 1-.5.9L6.7 15a1 1 0 0 1-1.5-.9V7.5a1 1 0 0 1 .5-.9l7.2-4.2Z" fill="#0066FF" />
      <path d="M12.9 9.1a1 1 0 0 1 1.5.9v6.7a1 1 0 0 1-.5.9l-7.2 4.1a1 1 0 0 1-1.5-.9v-6.6a1 1 0 0 1 .5-.9l7.2-4.2Z" fill="#3B8CFF" opacity=".85" />
      <path d="M17.3 6.1a1 1 0 0 1 1.5.9v6.6a1 1 0 0 1-.5.9L14 17a1 1 0 0 1-1.5-.9V9.5a1 1 0 0 1 .5-.9l4.3-2.5Z" fill="#742774" opacity=".7" />
    </>
  ),
};

export function ProductLogo({ id, className }) {
  const mark = MARKS[id];
  if (!mark) return null;

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {mark}
    </svg>
  );
}

export default ProductLogo;
