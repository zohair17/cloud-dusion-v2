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
  teams: (
    <>
      <circle cx="18.6" cy="5.2" r="2.3" fill="#5059C9" />
      <path d="M15.7 8.6h6c.4 0 .8.4.8.8v4.7a3.5 3.5 0 0 1-7 0V9.4c0-.4.3-.8.7-.8Z" fill="#5059C9" />
      <circle cx="10.9" cy="5" r="2.9" fill="#7B83EB" />
      <path d="M5 8.6h11.2c.6 0 1 .4 1 1v6a5.6 5.6 0 0 1-11.2 0v-6c0-.6.4-1 1-1Z" fill="#7B83EB" />
      <rect x="2" y="6.5" width="11" height="11" rx="1.4" fill="#4B53BC" />
      <path d="M4.2 8.8h6.6v1.6H8.4v5.3H6.6v-5.3H4.2V8.8Z" fill="#fff" />
    </>
  ),
  onedrive: (
    <>
      <path d="M9.1 7.3a4.6 4.6 0 0 1 8.2 1.5 3.7 3.7 0 0 1-.5 7.3H8.5a4.3 4.3 0 0 1-.4-8.7c.3 0 .7 0 1 .1Z" fill="#0078D4" />
      <path d="M8.5 16.1a4.3 4.3 0 0 1-.4-8.7c.6 0 1.2.2 1.7.5a4.4 4.4 0 0 0-1 2.7 4.3 4.3 0 0 0 4.3 4.3v1.2H8.5Z" fill="#28A8EA" />
    </>
  ),
  exchange: (
    <>
      <rect x="2.5" y="5.6" width="19" height="12.8" rx="1.6" fill="#0078D4" />
      <path
        d="M3.4 7.8 12 13.2l8.6-5.4"
        stroke="#fff"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  viva: (
    <>
      <path
        d="M12 3.4c3.3 2.1 5.5 5.5 6.2 9 .5 2.3-.6 4.5-2.7 5.5"
        fill="none"
        stroke="#2764E7"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M12 3.4C8.7 5.5 6.5 8.9 5.8 12.4c-.5 2.3.6 4.5 2.7 5.5"
        fill="none"
        stroke="#50C2FF"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="12" cy="19.4" r="1.9" fill="#2764E7" />
    </>
  ),
  "power-bi": (
    <>
      <rect x="3.4" y="12.6" width="4.3" height="8" rx="1" fill="#F2C811" opacity=".65" />
      <rect x="9.9" y="7.8" width="4.3" height="12.8" rx="1" fill="#F2C811" opacity=".85" />
      <rect x="16.3" y="3.4" width="4.3" height="17.2" rx="1" fill="#E8A200" />
    </>
  ),
  "power-apps": (
    <>
      <path d="M11.3 2.9a1 1 0 0 1 1.4 0l8.4 8.4a1 1 0 0 1 0 1.4l-8.4 8.4a1 1 0 0 1-1.4 0l-8.4-8.4a1 1 0 0 1 0-1.4l8.4-8.4Z" fill="#742774" />
      <path d="M11.6 7.4a.6.6 0 0 1 .8 0l4.2 4.2a.6.6 0 0 1 0 .8l-4.2 4.2a.6.6 0 0 1-.8 0l-4.2-4.2a.6.6 0 0 1 0-.8l4.2-4.2Z" fill="#fff" opacity=".9" />
    </>
  ),
  "power-automate": (
    <path
      d="M13.4 2.9a1 1 0 0 1 1.5 1v5.2h4.2a1 1 0 0 1 .8 1.6l-8.5 10.9a1 1 0 0 1-1.8-.6v-5.4H5.4a1 1 0 0 1-.8-1.6l8.8-11.1Z"
      fill="#0066FF"
    />
  ),
  copilot: (
    <>
      <path d="M11 4.2c.2-.5.9-.5 1.1 0l1 2.6a5 5 0 0 0 2.9 2.9l2.6 1c.5.2.5.9 0 1.1l-2.6 1a5 5 0 0 0-2.9 2.9l-1 2.6c-.2.5-.9.5-1.1 0l-1-2.6a5 5 0 0 0-2.9-2.9l-2.6-1a.6.6 0 0 1 0-1.1l2.6-1A5 5 0 0 0 10 6.8l1-2.6Z" fill="#0F9BD7" />
      <path d="M18.2 2.9c.1-.4.6-.4.8 0l.5 1.2a2.6 2.6 0 0 0 1.5 1.5l1.2.5c.4.2.4.7 0 .8l-1.2.5a2.6 2.6 0 0 0-1.5 1.5l-.5 1.2c-.2.4-.7.4-.8 0l-.5-1.2a2.6 2.6 0 0 0-1.5-1.5l-1.2-.5a.5.5 0 0 1 0-.8l1.2-.5a2.6 2.6 0 0 0 1.5-1.5l.5-1.2Z" fill="#D4308F" />
    </>
  ),
  openai: (
    <path
      d="M12 2.7 20 7.2v9.6L12 21.3 4 16.8V7.2l8-4.5Z"
      fill="none"
      stroke="#10A37F"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  dynamics: (
    <>
      <path d="M4.6 4.4 17.4 2.2v6.3L9.9 10.9l7.5 1.4v9.5L4.6 19.6V4.4Z" fill="#0078D4" />
      <path d="M17.4 8.5v3.8l-7.5-1.4 7.5-2.4Z" fill="#002050" opacity=".6" />
    </>
  ),
  sql: (
    <>
      <ellipse cx="12" cy="5.6" rx="7.2" ry="2.8" fill="#CC2927" />
      <path d="M4.8 5.6v12.8c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8V5.6c0 1.5-3.2 2.8-7.2 2.8S4.8 7.1 4.8 5.6Z" fill="#A4262C" />
      <path d="M4.8 12c0 1.6 3.2 2.8 7.2 2.8s7.2-1.2 7.2-2.8" stroke="#E8656A" strokeWidth="1" fill="none" />
    </>
  ),
  purview: (
    <>
      <path d="M12 2.6c3.4 1.5 5.6 4.4 5.6 7.7 0 3.8-2.6 6.6-5.6 6.6V2.6Z" fill="#0078D4" />
      <path d="M12 2.6C8.6 4.1 6.4 7 6.4 10.3c0 3.8 2.6 6.6 5.6 6.6V2.6Z" fill="#50E6FF" />
      <path d="M6.6 19.2h10.8" stroke="#0078D4" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  entra: (
    <>
      <path d="M12 2.8 21 19.6h-4.2L12 10.4 7.2 19.6H3L12 2.8Z" fill="#225FD5" />
      <path d="M12 10.4 16.8 19.6H7.2L12 10.4Z" fill="#50C2FF" />
    </>
  ),
  graph: (
    <>
      <path d="M6.2 8.4 12 5.2l5.8 3.2M6.2 8.4v7.2L12 18.8l5.8-3.2V8.4M6.2 8.4 12 18.8l5.8-10.4" stroke="#0364B8" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      <circle cx="12" cy="4.4" r="2.2" fill="#0078D4" />
      <circle cx="5.4" cy="8.2" r="2.2" fill="#28A8EA" />
      <circle cx="18.6" cy="8.2" r="2.2" fill="#28A8EA" />
      <circle cx="5.4" cy="15.8" r="2.2" fill="#50E6FF" />
      <circle cx="18.6" cy="15.8" r="2.2" fill="#50E6FF" />
      <circle cx="12" cy="19.6" r="2.2" fill="#0078D4" />
    </>
  ),
  defender: (
    <>
      <path d="M12 2.4 4.8 5.2v6.1c0 4.3 3 8.3 7.2 10.3V2.4Z" fill="#0078D4" />
      <path d="M12 2.4v19.2c4.2-2 7.2-6 7.2-10.3V5.2L12 2.4Z" fill="#50E6FF" />
      <path d="m8.6 11.8 2.6 2.6 4.4-4.6" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  intune: (
    <>
      <rect x="2.6" y="4.4" width="18.8" height="12.2" rx="1.5" fill="#0078D4" />
      <rect x="4.4" y="6.2" width="15.2" height="8.6" rx="0.8" fill="#fff" opacity=".92" />
      <path d="M8 19.6h8" stroke="#0078D4" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9.4 8.4h5.2v4.2H9.4z" fill="#50E6FF" />
    </>
  ),
  sentinel: (
    <>
      <path d="M12 2.4 4.8 5.2v6.1c0 4.3 3 8.3 7.2 10.3 4.2-2 7.2-6 7.2-10.3V5.2L12 2.4Z" fill="#0F5FB2" />
      <ellipse cx="12" cy="11.2" rx="4.8" ry="3.3" fill="#fff" opacity=".92" />
      <circle cx="12" cy="11.2" r="1.9" fill="#0078D4" />
    </>
  ),
  fabric: (
    <>
      <path d="M12 2.6 19.6 7v9.9L12 21.4 4.4 16.9V7L12 2.6Z" fill="#0F9BD7" opacity=".25" />
      <path d="M12 6.2 16.6 8.9v5.3L12 16.9l-4.6-2.7V8.9L12 6.2Z" fill="#118DCC" />
      <path d="M12 6.2v10.7l4.6-2.7V8.9L12 6.2Z" fill="#50E6FF" />
    </>
  ),
  dataverse: (
    <>
      <ellipse cx="12" cy="5.8" rx="7" ry="2.8" fill="#B57BD6" />
      <path d="M5 5.8v12.4c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V5.8c0 1.6-3.1 2.8-7 2.8S5 7.4 5 5.8Z" fill="#742774" />
      <path d="M5 12.1c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" stroke="#B57BD6" strokeWidth="1" fill="none" />
    </>
  ),
  "power-pages": (
    <>
      <rect x="3.6" y="3.4" width="16.8" height="17.2" rx="2.2" fill="#0066FF" />
      <rect x="5.8" y="6.2" width="12.4" height="2.4" rx="0.8" fill="#fff" opacity=".95" />
      <rect x="5.8" y="10.2" width="7.4" height="1.9" rx="0.8" fill="#fff" opacity=".72" />
      <rect x="5.8" y="13.6" width="12.4" height="1.9" rx="0.8" fill="#fff" opacity=".72" />
      <rect x="5.8" y="17" width="9" height="1.9" rx="0.8" fill="#fff" opacity=".55" />
    </>
  ),
  uipath: (
    <>
      <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="4.4" fill="#FA4616" />
      <path d="M7.4 7.2v5.4a4.6 4.6 0 0 0 9.2 0V7.2h-2.5v5.4a2.1 2.1 0 0 1-4.2 0V7.2H7.4Z" fill="#fff" />
    </>
  ),
  dotnet: (
    <>
      <circle cx="12" cy="12" r="9.4" fill="#512BD4" />
      <path d="M8 15.8V8.6h1.9l3 4.6V8.6h1.8v7.2h-1.9l-3-4.6v4.6H8Z" fill="#fff" />
      <circle cx="5.6" cy="15.4" r="1.1" fill="#fff" />
    </>
  ),
  react: (
    <>
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
        <ellipse cx="12" cy="12" rx="9.2" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(120 12 12)" />
      </g>
    </>
  ),
  nextjs: (
    <>
      <circle cx="12" cy="12" r="9.4" fill="#111" />
      <path d="M8.6 16.4V7.6h1.5l5.4 7.5V7.6h1.4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  typescript: (
    <>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="2.4" fill="#3178C6" />
      <path d="M6.4 11.2h5.6v1.7h-1.9v5.5H8.3v-5.5H6.4v-1.7Z" fill="#fff" />
      <path d="M18.4 11.6a3.6 3.6 0 0 0-1.9-.5c-1.6 0-2.7.9-2.7 2.2 0 2.2 3 1.9 3 3 0 .4-.4.7-1 .7a3 3 0 0 1-1.9-.7v1.8c.6.3 1.3.4 2 .4 1.7 0 2.8-.8 2.8-2.3 0-2.2-3-2-3-3 0-.4.3-.6.9-.6.6 0 1.2.2 1.8.6v-1.6Z" fill="#fff" />
    </>
  ),
  nodejs: (
    <>
      <path d="M12 2.4 20.4 7v10L12 21.6 3.6 17V7L12 2.4Z" fill="#539E43" />
      <path d="M9.2 9.2h1.6l3 4.9V9.2h1.5v5.9h-1.6l-3-4.8v4.8H9.2V9.2Z" fill="#fff" />
    </>
  ),
  flutter: (
    <>
      <path d="M13.9 2.6 5 11.5l2.8 2.8 11.7-11.7h-5.6Z" fill="#47C5FB" />
      <path d="M13.9 11.2 8.7 16.4l2.9 2.9 2.6-2.6h5.5l-5.8-5.5Z" fill="#00569E" />
      <path d="m11.6 19.3 2.3 2.3h5.6l-5.1-5.1-2.8 2.8Z" fill="#00B5F8" />
    </>
  ),
  swift: (
    <>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="4.6" fill="#F05138" />
      <path d="M7 6.4c3.4 3.2 6.6 5.6 9.6 7.2-1-1.9-2.5-4-4.4-6.2 2.7 2 5 3.9 6.3 5.7.5 1.9.2 3.6-.9 4.5-1.6-1-4-1.3-6.3-.6 2.6.6 4.5 1.5 5.6 2.6-2.6 1-6.7.4-9.9-2.6 2.5.7 5 .6 6.9-.2C11.4 15.2 8.7 12 7 6.4Z" fill="#fff" />
    </>
  ),
  kotlin: (
    <>
      <path d="M3.4 3.4h17.2L12 12l8.6 8.6H3.4V3.4Z" fill="#7F52FF" />
      <path d="M3.4 3.4h8.6L3.4 12V3.4Z" fill="#E44857" />
      <path d="M12 3.4h8.6L12 12 3.4 3.4H12Z" fill="#C711E1" opacity=".55" />
    </>
  ),
};

/**
 * The vendor's own mark, where a label names a product that has one.
 *
 * A reader scanning a row of chips is looking for Teams, or Power BI, or
 * Sentinel, and the logo is what they find it by. Order is significant: the
 * specific product wins over the family it belongs to, so "Microsoft 365
 * Copilot" is Copilot and "Azure OpenAI" is OpenAI. Anything with no product
 * behind it returns null, and the caller keeps its drawn glyph rather than
 * borrowing somebody else's badge.
 */
const LOGO_RULES = [
  [/microsoft sentinel/i, "sentinel"],
  [/microsoft defender/i, "defender"],
  [/microsoft intune/i, "intune"],
  [/purview/i, "purview"],
  [/entra|active directory/i, "entra"],
  [/microsoft graph/i, "graph"],
  [/fabric/i, "fabric"],
  [/dataverse/i, "dataverse"],
  [/sharepoint|syntex/i, "sharepoint"],
  [/teams/i, "teams"],
  [/onedrive/i, "onedrive"],
  [/exchange|outlook|\bmail\b/i, "exchange"],
  [/viva/i, "viva"],
  [/power bi/i, "power-bi"],
  [/power apps|powerapps/i, "power-apps"],
  [/power automate/i, "power-automate"],
  [/power pages/i, "power-pages"],
  [/power platform/i, "power-platform"],
  [/copilot/i, "copilot"],
  [/dynamics/i, "dynamics"],
  [/uipath/i, "uipath"],
  [/openai|\bgpt\b/i, "openai"],
  [/azure/i, "azure"],
  [/sql|synapse/i, "sql"],
  [/microsoft 365|\bm365\b|office 365/i, "microsoft-365"],
  [/\.net|maui/i, "dotnet"],
  [/react/i, "react"],
  [/next\.js/i, "nextjs"],
  [/typescript/i, "typescript"],
  [/node\.js/i, "nodejs"],
  [/flutter/i, "flutter"],
  [/swift/i, "swift"],
  [/kotlin/i, "kotlin"],
];

export function productLogoFor(label = "") {
  for (const [pattern, id] of LOGO_RULES) if (pattern.test(label)) return id;
  return null;
}

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
