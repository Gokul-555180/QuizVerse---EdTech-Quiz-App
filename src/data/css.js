export const cssQuestions = [
  {
    "id": "css_e1",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "What does CSS stand for?",
    "options": [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colored Style Sheets"
    ],
    "answerIndex": 1,
    "explanation": "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media."
  },
  {
    "id": "css_e2",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "In the CSS box model, what is the order of areas from the inside out?",
    "options": [
      "Content, Padding, Border, Margin",
      "Content, Margin, Border, Padding",
      "Padding, Content, Border, Margin",
      "Border, Padding, Content, Margin"
    ],
    "answerIndex": 0,
    "explanation": "The CSS box model consists of the Content area in the middle, surrounded by Padding, then the Border, and finally the Margin on the absolute outside."
  },
  {
    "id": "css_e3",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "Which CSS property is used to change the background color of an element?",
    "options": [
      "color",
      "background-color",
      "bgcolor",
      "surface-color"
    ],
    "answerIndex": 1,
    "explanation": "The background-color property specifies the background color of an element. The color property is used to change the text color."
  },
  {
    "id": "css_e4",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "How do you select an element with the id 'header' in a CSS stylesheet?",
    "options": [
      ".header",
      "#header",
      "header",
      "*header"
    ],
    "answerIndex": 1,
    "explanation": "The hash selector (#) is used to select elements by their ID, while the dot (.) selects elements by their class name."
  },
  {
    "id": "css_e5",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "What value does the display property need to center items in a flex container?",
    "options": [
      "display: block",
      "display: flex",
      "display: grid",
      "display: center"
    ],
    "answerIndex": 1,
    "explanation": "Setting 'display: flex' initializes a flex container, which allows aligning items inside it using properties like justify-content and align-items."
  },
  {
    "id": "css_e6",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "Which property controls the text size of an element?",
    "options": [
      "font-style",
      "text-size",
      "font-size",
      "font-weight"
    ],
    "answerIndex": 2,
    "explanation": "The font-size property sets the size of the font. Font-weight changes thickness, and font-style toggles italic options."
  },
  {
    "id": "css_e7",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "How do you apply a style to an element when the user's mouse hovers over it?",
    "options": [
      "element:active",
      "element:hover",
      "element:focus",
      "element:visited"
    ],
    "answerIndex": 1,
    "explanation": "The :hover pseudo-class applies styles when the user points to an element with a cursor without activating it."
  },
  {
    "id": "css_e8",
    "category": "CSS",
    "difficulty": "Easy",
    "question": "Which CSS position value keeps an element in the normal document flow but offsets it relative to itself?",
    "options": [
      "position: absolute",
      "position: relative",
      "position: fixed",
      "position: static"
    ],
    "answerIndex": 1,
    "explanation": "position: relative offsets an element relative to its normal position in the document flow. The space it would have occupied is preserved."
  },
  {
    "id": "css_m1",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "What is the difference between box-sizing: content-box and box-sizing: border-box?",
    "options": [
      "border-box is default; content-box includes padding in size",
      "content-box is default; border-box includes padding and border in the element's total width and height",
      "content-box is only for text; border-box is for divs",
      "border-box excludes margins; content-box includes margins"
    ],
    "answerIndex": 1,
    "explanation": "With content-box (default), width/height apply only to content; padding and border add to the element's size. With border-box, padding and border are absorbed into the width/height, making layout sizing much simpler."
  },
  {
    "id": "css_m2",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "What does the justify-content property align in Flexbox?",
    "options": [
      "Aligns items along the cross axis (vertical by default)",
      "Aligns items along the main axis (horizontal by default)",
      "Aligns the text content inside individual flex items",
      "Defines the sorting order of the flex items"
    ],
    "answerIndex": 1,
    "explanation": "justify-content aligns flex items along the main axis of the flex container (e.g. horizontally if flex-direction is row). align-items aligns items along the cross axis."
  },
  {
    "id": "css_m3",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "How do you declare and reference a custom CSS variable?",
    "options": [
      "Declare: $varName: value; Reference: $varName",
      "Declare: --var-name: value; Reference: var(--var-name)",
      "Declare: @var-name: value; Reference: @var-name",
      "Declare: varName = value; Reference: get(varName)"
    ],
    "answerIndex": 1,
    "explanation": "Custom properties (CSS variables) are declared with double dashes (e.g., --main-color: blue;) and accessed using the var() function (e.g., color: var(--main-color);)."
  },
  {
    "id": "css_m4",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "Given specificity rules, which selector has the highest priority?",
    "options": [
      "An ID selector (#sidebar)",
      "A Class selector (.menu-item)",
      "A Tag selector (div)",
      "A universal selector (*)"
    ],
    "answerIndex": 0,
    "explanation": "CSS specificity is calculated using weights. ID selectors have a higher weight than class/attribute selectors, which have higher weight than element/pseudo-element selectors. Inline styles override all stylesheet selectors."
  },
  {
    "id": "css_m5",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "What does 'em' stand for as a unit of measurement in CSS?",
    "options": [
      "Element Millimeter",
      "Equal Margin",
      "A relative unit based on the font-size of the element's parent (or the element itself)",
      "An absolute unit based on screen pixel density"
    ],
    "answerIndex": 2,
    "explanation": "The 'em' unit is relative. For font-size, 1em is equal to the font-size of the element's parent. For other properties (like width/padding), it is relative to the element's own font-size."
  },
  {
    "id": "css_m6",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "What is the difference between display: none and visibility: hidden?",
    "options": [
      "display: none takes up space; visibility: hidden does not",
      "display: none hides the element and removes it from the document layout; visibility: hidden hides it but preserves its space",
      "display: none is for mobile; visibility: hidden is for desktop",
      "They have the exact same effect in modern browsers"
    ],
    "answerIndex": 1,
    "explanation": "display: none hides the element completely, collapsing its space in the layout. visibility: hidden renders the element invisible, but it still takes up its normal physical space."
  },
  {
    "id": "css_m7",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "What does the pseudo-element '::before' do?",
    "options": [
      "Inserts style rules before compiling the stylesheet",
      "Creates a pseudo-element that is the first child of the selected element, often used to add decorative content",
      "Triggers a JavaScript callback before click events",
      "Checks if a preceding sibling element exists in the DOM"
    ],
    "answerIndex": 1,
    "explanation": "::before creates a pseudo-element that is inserted before the content of the selected element. It must be accompanied by the 'content' property to be visible."
  },
  {
    "id": "css_m8",
    "category": "CSS",
    "difficulty": "Medium",
    "question": "How does the 'sticky' position value work?",
    "options": [
      "It acts like absolute position at all times",
      "It behaves like relative positioning until it reaches a specified scroll threshold, where it sticks (like fixed positioning)",
      "It sticks to other sibling elements physically in layout",
      "It prevents scrolling of the parent container"
    ],
    "answerIndex": 1,
    "explanation": "position: sticky toggles between relative and fixed positioning depending on the user's scroll position. It sticks to its defined offset boundary within its scrollable parent."
  },
  {
    "id": "css_h1",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "What are CSS 'composite' operations and how does forcing elements onto a new compositing layer optimize animations?",
    "options": [
      "They join CSS variables from external documents",
      "By moving rendering work from the CPU to the GPU (layer compositing) using properties like transform: translateZ(0) or will-change, preventing slow repaints",
      "They combine multiple layout styles into a single compressed string",
      "They run animations in secondary JavaScript service threads"
    ],
    "answerIndex": 1,
    "explanation": "Rendering has phases: Layout, Paint, and Composite. Animating composite-only properties (like transform and opacity) lets the browser skip slow Layout and Paint phases. Forcing a compositing layer offloads compositing to the GPU, guaranteeing smooth 60fps."
  },
  {
    "id": "css_h2",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "What do 'Container Queries' solve that standard Media Queries cannot?",
    "options": [
      "They target specific screen heights instead of screen widths",
      "They allow styling elements based on the size of their containing parent element rather than the viewport size",
      "They target specific container classes in TailwindCSS directly",
      "They allow styling files downloaded inside zip folders"
    ],
    "answerIndex": 1,
    "explanation": "Standard media queries inspect the global viewport. Container queries (@container) inspect the dimensions of a component's parent container. This makes components truly modular and self-responsive regardless of where they are placed in a layout."
  },
  {
    "id": "css_h3",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "What is the behavior of the 'clamp()' function in CSS?",
    "options": [
      "It crops an image to fit a circle shape",
      "It defines a central value clamped between a defined minimum and maximum threshold value",
      "It binds layout sizing to browser storage limits",
      "It removes white space characters from style sheets"
    ],
    "answerIndex": 1,
    "explanation": "clamp(min, preferred, max) calculates a value (like font-size or width) that grows relative to a preferred unit (e.g. 5vw), but is strictly constrained between the specified minimum and maximum bounds."
  },
  {
    "id": "css_h4",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "In CSS Grid, what is the key difference between grid-template-columns auto-fill and auto-fit?",
    "options": [
      "auto-fill stretches columns to fit; auto-fit creates empty slots",
      "auto-fill creates empty columns if space is available; auto-fit collapses empty columns and stretches the remaining ones to fill the container",
      "auto-fill works only on mobile layout; auto-fit is for desktop",
      "They are aliases with identical layouts in all engines"
    ],
    "answerIndex": 1,
    "explanation": "Both fit as many grid columns as possible based on minmax(). If there is excess space, auto-fill leaves empty columns (preserving their tracks), while auto-fit collapses empty tracks to 0, stretching the filled tracks to absorb the remaining width."
  },
  {
    "id": "css_h5",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "How does the 'subgrid' value for grid-template-rows/columns work?",
    "options": [
      "It imports columns from a secondary stylesheet",
      "It allows a nested grid item to inherit and align directly with the grid track lines of its parent grid layout",
      "It splits the grid into smaller virtual subgrids in worker threads",
      "It serves as a fallback grid when main grids fail to render"
    ],
    "answerIndex": 1,
    "explanation": "Normally, grid layouts do not inherit down. By declaring grid-template-columns: subgrid, a nested grid element matches the columns of its parent grid, enabling perfect alignment of nested components across grid rows."
  },
  {
    "id": "css_h6",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "What does the 'will-change' property do, and what is the caution regarding its usage?",
    "options": [
      "It dynamically changes CSS variables; caution: it can break theme variables",
      "It hints to the browser what properties will animate, prompting optimization; caution: overuse consumes significant GPU memory and degrades performance",
      "It alters the specificity calculation; caution: it can cause style bugs",
      "It acts as a breakpoint trigger; caution: it is deprecated"
    ],
    "answerIndex": 1,
    "explanation": "will-change prompts the browser to set up optimizations (like creating a compositing layer) in advance. However, keeping layers in memory consumes resources. It should only be used as a last resort on active animations and removed afterwards."
  },
  {
    "id": "css_h7",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "What is the CSS 'containing block' of an element with position: absolute?",
    "options": [
      "The viewport container always",
      "The nearest ancestor element with a position value other than static",
      "The direct parent element regardless of its position value",
      "The body element always"
    ],
    "answerIndex": 1,
    "explanation": "For absolute elements, the containing block is established by the nearest ancestor with a position other than static (relative, absolute, fixed, sticky). If none exists, it defaults to the initial containing block (root document)."
  },
  {
    "id": "css_h8",
    "category": "CSS",
    "difficulty": "Hard",
    "question": "How does the CSS nested rules syntax (native nesting) handle selector chaining (&)?",
    "options": [
      "& compiles selectors into separate files",
      "& represents the parent selector, allowing chaining of classes, pseudo-classes, or modifiers directly inside nested brackets",
      "& binds elements to event handlers in client-side JS",
      "& is a math operator calculating layout percentages"
    ],
    "answerIndex": 1,
    "explanation": "In native CSS nesting (similar to Sass), the nesting selector (&) refers directly to the outer parent selector. For example, selector-chaining like '&:hover' inside '.btn' resolves to '.btn:hover' in compilation."
  }
];
