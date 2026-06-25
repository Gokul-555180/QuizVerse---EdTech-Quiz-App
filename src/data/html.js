export const htmlQuestions = [
  {
    "id": "html_e1",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "What does HTML stand for?",
    "options": [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markdown Language",
      "Hyperlink Text Management Language"
    ],
    "answerIndex": 0,
    "explanation": "HTML stands for Hyper Text Markup Language. It is the standard markup language used to structure pages on the Web."
  },
  {
    "id": "html_e2",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "Which HTML5 element is used to represent self-contained content, like photos, diagrams, or code listings?",
    "options": [
      "<section>",
      "<figure>",
      "<article>",
      "<aside>"
    ],
    "answerIndex": 1,
    "explanation": "The <figure> element is used to mark up self-contained content, and it is usually accompanied by <figcaption> to provide a caption."
  },
  {
    "id": "html_e3",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "What is the purpose of the 'alt' attribute on an <img> tag?",
    "options": [
      "To provide a tooltip when hovering over the image",
      "To specify an alternative URL if the main image fails to load",
      "To provide a text description of the image for screen readers and search engines",
      "To change the visual style of the image dynamically"
    ],
    "answerIndex": 2,
    "explanation": "The 'alt' attribute provides an alternative description of the image. This is vital for accessibility (screen readers) and for SEO."
  },
  {
    "id": "html_e4",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "Which anchor tag attribute is used to open a linked document in a new window or tab?",
    "options": [
      "target='_self'",
      "target='_blank'",
      "target='_parent'",
      "target='_top'"
    ],
    "answerIndex": 1,
    "explanation": "Setting target='_blank' tells the browser to open the linked document in a new tab or window."
  },
  {
    "id": "html_e5",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "How do inline elements differ from block-level elements by default?",
    "options": [
      "Inline elements start on a new line; block elements do not",
      "Inline elements only take up as much width as necessary and do not start on a new line; block elements take up full width and start on a new line",
      "Inline elements cannot contain text content; block elements can",
      "Inline elements are processed on the server; block elements in the browser"
    ],
    "answerIndex": 1,
    "explanation": "Block-level elements (like <div>, <p>) take up the full width available and start on a new line. Inline elements (like <span>, <a>) do not start on a new line and only occupy the space required by their contents."
  },
  {
    "id": "html_e6",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "What is the correct tag for making a checkbox input in HTML?",
    "options": [
      "<checkbox>",
      "<input type='checkbox'>",
      "<input type='check'>",
      "<check>"
    ],
    "answerIndex": 1,
    "explanation": "To create a checkbox, use the <input> tag with the type attribute set to 'checkbox'."
  },
  {
    "id": "html_e7",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "Which tag is used to create a numbered ordered list of items?",
    "options": [
      "<ul>",
      "<li>",
      "<ol>",
      "<list>"
    ],
    "answerIndex": 2,
    "explanation": "The <ol> element defines an ordered list. Items are numbered by default. The <ul> tag creates a bulleted unordered list."
  },
  {
    "id": "html_e8",
    "category": "HTML",
    "difficulty": "Easy",
    "question": "What is the function of the <!DOCTYPE html> declaration at the very top of a document?",
    "options": [
      "To tell the browser which version of HTML the page is written in (HTML5)",
      "To import default CSS styles from the browser",
      "To initialize a JavaScript compilation process",
      "To secure the page against server-side injection"
    ],
    "answerIndex": 0,
    "explanation": "The <!DOCTYPE html> declaration is an instruction to the web browser about what version of HTML the page is written in. For HTML5, it triggers standard layout mode in browsers."
  },
  {
    "id": "html_m1",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "What is the storage limit difference between localStorage and sessionStorage?",
    "options": [
      "localStorage stores data with no expiration; sessionStorage data is cleared when the page session ends (tab closed)",
      "sessionStorage has a 100MB limit; localStorage has a 5MB limit",
      "sessionStorage is accessible across all browser tabs; localStorage is restricted to one tab",
      "sessionStorage encrypts data; localStorage stores it in plain text"
    ],
    "answerIndex": 0,
    "explanation": "Both store key-value pairs in the browser. localStorage persists indefinitely until explicitly cleared, while sessionStorage is deleted automatically when the tab or window is closed."
  },
  {
    "id": "html_m2",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "How do SVG and Canvas differ in web graphics?",
    "options": [
      "SVG is raster-based; Canvas is vector-based",
      "SVG is part of the DOM and is styled with CSS/JS; Canvas is pixel-based and drawn programmatically via JavaScript",
      "Canvas retains event handlers on individual shapes; SVG does not",
      "SVG is slower than Canvas for drawing large, complex charts"
    ],
    "answerIndex": 1,
    "explanation": "SVG is vector-based, uses XML, and fits into the DOM (meaning you can style/bind events to elements). Canvas is a resolution-dependent pixel canvas that requires JS to draw paths and pixels, making it highly performant for gaming or dense charts."
  },
  {
    "id": "html_m3",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "What are HTML5 custom 'data-*' attributes used for?",
    "options": [
      "To create new browser tags dynamically",
      "To store custom private data properties directly on HTML elements, which can be read using JS dataset",
      "To specify custom styling classes for TailwindCSS",
      "To bypass HTML validations"
    ],
    "answerIndex": 1,
    "explanation": "Custom data attributes (prefixed with 'data-') allow you to store extra data on standard, semantic HTML elements. This data can be accessed easily in JavaScript using element.dataset."
  },
  {
    "id": "html_m4",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "What is the impact of placing the 'defer' attribute on a <script> tag?",
    "options": [
      "It stops the page from loading until the script has executed completely",
      "It downloads the script in parallel and executes it only after the HTML document is fully parsed",
      "It executes the script synchronously in the background",
      "It compresses the script in the client browser memory"
    ],
    "answerIndex": 1,
    "explanation": "The 'defer' attribute tells the browser to download the script in parallel with parsing the HTML, but to wait to execute it until the HTML parsing is complete. This prevents render blocking."
  },
  {
    "id": "html_m5",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "Which meta tag is crucial for setting up a mobile-responsive viewport in HTML?",
    "options": [
      "<meta name='screen-size' content='mobile'>",
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
      "<meta name='responsive' content='true'>",
      "<meta name='mobile-first' content='width=max-width'>"
    ],
    "answerIndex": 1,
    "explanation": "The viewport meta tag with width=device-width, initial-scale=1.0 tells the browser to set the width of the page to match the screen width of the device, rendering layout responsively."
  },
  {
    "id": "html_m6",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "What is the semantic purpose of the <aside> tag in HTML5?",
    "options": [
      "To contain secondary content that is tangentially related to the surrounding main content (like a sidebar)",
      "To position content at the absolute bottom of the screen",
      "To define a section of links that are hidden on mobile devices",
      "To declare inline JavaScript functions"
    ],
    "answerIndex": 0,
    "explanation": "The <aside> element represents a portion of a document whose content is only indirectly related to the document's main content, commonly used for sidebars, callouts, or advertising."
  },
  {
    "id": "html_m7",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "How do 'defer' and 'async' script behaviors differ?",
    "options": [
      "async blocks HTML parsing; defer does not",
      "async downloads and runs scripts as soon as they are ready, interrupting HTML parsing; defer waits for parsing to finish",
      "defer runs scripts on a separate background thread",
      "async is only for internal scripts; defer is for external scripts"
    ],
    "answerIndex": 1,
    "explanation": "Both download scripts in parallel. However, 'async' pauses HTML parsing to execute the script the moment it finishes downloading (out of order), while 'defer' maintains script order and executes only after HTML parsing is complete."
  },
  {
    "id": "html_m8",
    "category": "HTML",
    "difficulty": "Medium",
    "question": "What does the 'preload' attribute on an HTML5 <audio> or <video> tag do?",
    "options": [
      "It forces the media to play automatically on page load",
      "It suggests to the browser how much media data should be downloaded in the background before playback begins",
      "It caches the video in localStorage for offline access",
      "It compiles the media files into base64 streams"
    ],
    "answerIndex": 1,
    "explanation": "The 'preload' attribute (which accepts values like 'none', 'metadata', 'auto') hints to the browser how to load media, helping balance bandwidth usage and startup speed."
  },
  {
    "id": "html_h1",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "What is the primary role of WAI-ARIA and why should you use it?",
    "options": [
      "To speed up browser styling and layout computations",
      "To provide attributes to make web content accessible to people with disabilities, filling semantic gaps in HTML",
      "To validate form inputs using secure backend API tokens",
      "To create custom web component templates dynamically"
    ],
    "answerIndex": 1,
    "explanation": "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) defines attributes (roles, states, and properties) that make dynamic web content and advanced widgets accessible to screen readers."
  },
  {
    "id": "html_h2",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "In HTML5 Web Components, what is the role of the 'Shadow DOM'?",
    "options": [
      "To hide elements from search engine crawlers and indexing",
      "To provide encapsulated styling and DOM isolation for a component, preventing styles from leaking in or out",
      "To render 3D drop shadows on layout containers using GPU acceleration",
      "To back up the DOM tree in local browser storage in case of errors"
    ],
    "answerIndex": 1,
    "explanation": "The Shadow DOM allows a web component to have its own isolated DOM tree and CSS scopes. This encapsulation prevents parent page styles from affecting the component and vice versa."
  },
  {
    "id": "html_h3",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "What is a 'focus trap' in HTML accessibility and how is it implemented?",
    "options": [
      "A bug that freezes the browser when users click an input",
      "A mechanism that confines keyboard focus (Tab key) to a specific container, crucial for modals and dialogs",
      "A design pattern that blocks navigation to other pages until a form is filled",
      "A security rule preventing external scripting focus"
    ],
    "answerIndex": 1,
    "explanation": "A focus trap ensures that when a modal is open, a keyboard user pressing 'Tab' only cycles through interactive elements inside that modal, preventing them from interacting with background elements."
  },
  {
    "id": "html_h4",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "What is the difference between <template> and <slot> in Web Components?",
    "options": [
      "<template> is styled; <slot> is not",
      "<template> holds markup that is not rendered on page load but can be cloned later; <slot> acts as a placeholder for user content",
      "<template> is processed on the server; <slot> is client-side only",
      "They are obsolete terms replaced by React children props"
    ],
    "answerIndex": 1,
    "explanation": "The <template> tag defines HTML structure that is ignored by the parser on load, allowing JS to instantiate it dynamically. The <slot> tag is a placeholder inside a shadow DOM where developers can inject markup from light DOM."
  },
  {
    "id": "html_h5",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "How do Resource Hints (dns-prefetch, preconnect, prefetch, preload) optimize the critical rendering path?",
    "options": [
      "They compile JavaScript scripts in secondary browser threads",
      "They tell the browser to resolve domains, establish connections, or fetch resources early to improve load times",
      "They reduce the physical size of HTML files by striping white spaces",
      "They encrypt connections before server-side routing"
    ],
    "answerIndex": 1,
    "explanation": "These link rel values help optimize resource delivery: dns-prefetch resolves DNS early, preconnect establishes socket connections, preload fetches critical resources needed for the current page immediately, and prefetch fetches resources needed for future pages."
  },
  {
    "id": "html_h6",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "What is 'aria-live' used for in web accessibility?",
    "options": [
      "To broadcast live video streams to screen readers",
      "To tell screen readers to announce dynamic content changes in that region automatically (e.g. alerts, toast messages)",
      "To keep a WebSocket connection active in the HTML header",
      "To force the page to reload every time a state updates"
    ],
    "answerIndex": 1,
    "explanation": "The aria-live attribute (values: 'polite' or 'assertive') specifies that an element will be updated dynamically, prompting assistive technologies to read the updates to the user as they happen."
  },
  {
    "id": "html_h7",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "What is the new Sanitizer API in HTML, and how does it prevent Cross-Site Scripting (XSS)?",
    "options": [
      "It runs an antivirus scan on local script files",
      "It provides a browser-native way to sanitize untrusted strings of HTML before inserting them into the DOM, stripping unsafe code",
      "It forces all scripts to use HTTPS encryption",
      "It redirects users to secure authentication login pages"
    ],
    "answerIndex": 1,
    "explanation": "The Sanitizer API allows developers to safely insert dynamic HTML strings into a page without risk of XSS, by leveraging browser-native parsers to strip dangerous script tags or inline handlers."
  },
  {
    "id": "html_h8",
    "category": "HTML",
    "difficulty": "Hard",
    "question": "What is JSON-LD and how does it relate to HTML SEO schemas?",
    "options": [
      "A JSON compression standard used in storage keys",
      "A script-embedded JSON format representing structured data (schema.org) that search engines read to display rich snippets",
      "A javascript database client running directly in HTML headers",
      "A secure authentication token template"
    ],
    "answerIndex": 1,
    "explanation": "JSON-LD (JavaScript Object Notation for Linked Data) is a standard method of embedding structured data inside a <script type='application/ld+json'> tag, helping search engines understand page content and display rich results."
  }
];
