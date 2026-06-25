export const reactQuestions = [
  // Easy Questions (1-8)
  {
    id: "react_e1",
    category: "React",
    difficulty: "Easy",
    question: "What is the primary purpose of the Virtual DOM in React?",
    options: [
      "To store state directly in the browser memory",
      "To improve performance by minimizing direct updates to the real DOM",
      "To provide a backup of the HTML page structure",
      "To manage CSS styles dynamically and automatically"
    ],
    answerIndex: 1,
    explanation: "React maintains a virtual representation of the UI in memory (Virtual DOM) and syncs it with the real DOM via reconciliation. This minimizes slow direct DOM operations, boosting performance."
  },
  {
    id: "react_e2",
    category: "React",
    difficulty: "Easy",
    question: "How do you pass data from a parent component to a child component?",
    options: [
      "Using Redux dispatchers",
      "Through State properties",
      "Using custom HTML attributes called Props",
      "Using local browser storage"
    ],
    answerIndex: 2,
    explanation: "Props (short for properties) are read-only inputs passed from a parent component down to a child component to pass data and configuration."
  },
  {
    id: "react_e3",
    category: "React",
    difficulty: "Easy",
    question: "Which React hook is used to perform side effects in functional components?",
    options: [
      "useState",
      "useContext",
      "useSideEffect",
      "useEffect"
    ],
    answerIndex: 3,
    explanation: "The useEffect hook lets you perform side effects in functional components, such as data fetching, subscriptions, manual DOM mutations, and setting up timers."
  },
  {
    id: "react_e4",
    category: "React",
    difficulty: "Easy",
    question: "Why is it important to provide a unique 'key' prop to elements in a React list?",
    options: [
      "To apply CSS styles to specific list elements",
      "To help React identify which items have changed, been added, or been removed",
      "To secure the elements against cross-site scripting (XSS) attacks",
      "To automatically bind click listeners to the list items"
    ],
    answerIndex: 1,
    explanation: "Keys help React identify which items have changed, are added, or are removed. They give elements a stable identity, allowing React to optimize rendering performance during diffing."
  },
  {
    id: "react_e5",
    category: "React",
    difficulty: "Easy",
    question: "What is the correct way to update a state variable named 'count' using the useState hook?",
    options: [
      "count = count + 1",
      "setCount(count + 1)",
      "this.state.count = count + 1",
      "updateState('count', count + 1)"
    ],
    answerIndex: 1,
    explanation: "State in React is read-only. You must use the setter function returned by the useState hook (e.g., setCount) to update the state and trigger a component re-render."
  },
  {
    id: "react_e6",
    category: "React",
    difficulty: "Easy",
    question: "What does JSX stand for in React development?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML Syntax",
      "JavaScript Extra"
    ],
    answerIndex: 0,
    explanation: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript code."
  },
  {
    id: "react_e7",
    category: "React",
    difficulty: "Easy",
    question: "How do functional components differ from class components historically?",
    options: [
      "Functional components cannot render HTML elements",
      "Functional components are simpler JS functions, and hooks enabled them to manage state and life cycles",
      "Class components are compiled directly into web assembly",
      "Functional components run only on the server side"
    ],
    answerIndex: 1,
    explanation: "Historically, class components were needed for state and lifecycle methods. React 16.8 introduced Hooks, which let functional components use state and other features, making class components largely obsolete."
  },
  {
    id: "react_e8",
    category: "React",
    difficulty: "Easy",
    question: "In React, how do you render a component conditionally based on a boolean variable 'isLoggedIn'?",
    options: [
      "Using a standard HTML 'if' attribute",
      "Using the ternary operator or logical && operator in JSX brackets",
      "Using the 'v-if' directive",
      "By calling context.renderCondition('isLoggedIn')"
    ],
    answerIndex: 1,
    explanation: "JSX expressions allow standard JavaScript operators like the ternary operator (condition ? trueVal : falseVal) or logical AND (condition && element) to render components conditionally."
  },

  // Medium Questions (9-16)
  {
    id: "react_m1",
    category: "React",
    difficulty: "Medium",
    question: "What is the key difference between useMemo and useCallback hooks?",
    options: [
      "useMemo caches a computed value; useCallback caches the callback function itself",
      "useMemo works with class components; useCallback works with functional components",
      "useMemo runs synchronously; useCallback runs asynchronously",
      "useMemo stores data in local storage; useCallback stores it in session storage"
    ],
    answerIndex: 0,
    explanation: "useMemo returns a memoized *value* computed from a function (caching the calculation). useCallback returns a memoized version of the *function itself*, preventing unnecessary recreation on every render."
  },
  {
    id: "react_m2",
    category: "React",
    difficulty: "Medium",
    question: "According to the Rules of Hooks, which of the following is correct?",
    options: [
      "Hooks can be called inside nested JavaScript if/else conditions",
      "Hooks should only be called at the top level of React functions, before any early returns",
      "Hooks must be defined inside standard javascript loops for lists",
      "Hooks can be invoked from vanilla global javascript helper functions"
    ],
    answerIndex: 1,
    explanation: "Hooks must only be called at the top level of your functional component. Do not call Hooks inside loops, conditions, or nested functions to ensure they always execute in the same order on every render."
  },
  {
    id: "react_m3",
    category: "React",
    difficulty: "Medium",
    question: "What is the primary use case of the useRef hook in React?",
    options: [
      "To trigger a re-render when a variable changes",
      "To persist a mutable value across renders without triggering a re-render, and to reference DOM elements directly",
      "To share state globally among multiple independent components",
      "To register routes inside a Single Page Application (SPA)"
    ],
    answerIndex: 1,
    explanation: "useRef returns a mutable object whose '.current' property persists. Modifying '.current' does not cause a re-render. It is commonly used to access DOM elements directly or keep track of interval/timer IDs."
  },
  {
    id: "react_m4",
    category: "React",
    difficulty: "Medium",
    question: "What problem does the React Context API primarily solve?",
    options: [
      "Slow network requests to third-party APIs",
      "CSS style collisions in large codebases",
      "Prop drilling, which is passing props through many layers of components that do not need them",
      "Synchronous rendering issues in React 18"
    ],
    answerIndex: 2,
    explanation: "React Context provides a way to pass data down the component tree without having to pass props manually through intermediate components (solving the 'prop drilling' issue)."
  },
  {
    id: "react_m5",
    category: "React",
    difficulty: "Medium",
    question: "How does React handle events in terms of performance and browser compatibility?",
    options: [
      "By adding standard event listeners to every individual DOM node in the browser",
      "Using SyntheticEvent, which delegates events to a single root listener and standardizes browser behaviors",
      "By compiling JSX events to native WebAssembly click events",
      "By using a background web worker thread for event delegation"
    ],
    answerIndex: 1,
    explanation: "React uses SyntheticEvent, a cross-browser wrapper around native events. It uses event delegation (binding a single event listener to the root container) to improve memory consumption and performance."
  },
  {
    id: "react_m6",
    category: "React",
    difficulty: "Medium",
    question: "What is a Higher-Order Component (HOC) in React?",
    options: [
      "A component that resides at the absolute root of the DOM tree",
      "A function that takes a component and returns a new component with enhanced capabilities",
      "A component written using React class lifecycle methods",
      "A service that handles HTTP requests on the server side"
    ],
    answerIndex: 1,
    explanation: "A Higher-Order Component is an advanced pattern in React. It is a pure function that takes a component as an argument and returns a new, enhanced component (used for cross-cutting concerns like auth checks or logging)."
  },
  {
    id: "react_m7",
    category: "React",
    difficulty: "Medium",
    question: "How does the cleanup function in useEffect work, and when is it executed?",
    options: [
      "It is executed only when the browser tab is closed",
      "It runs before the component unmounts and before the effect runs again on dependency updates to clean up resources",
      "It runs immediately before the render phase of the parent component",
      "It is a function that clears the state to initial values"
    ],
    answerIndex: 1,
    explanation: "The cleanup function returned by useEffect runs when the component unmounts. It also runs right before the effect re-runs due to a change in the dependencies, preventing memory leaks (e.g., unsubscribing, clearing timers)."
  },
  {
    id: "react_m8",
    category: "React",
    difficulty: "Medium",
    question: "What is the difference between a controlled and an uncontrolled input component?",
    options: [
      "Controlled is animated; uncontrolled is static",
      "Controlled inputs have their value managed by React state; uncontrolled inputs let the DOM manage the value",
      "Controlled inputs are only for email validation; uncontrolled are for text",
      "Controlled inputs run server-side; uncontrolled inputs run client-side"
    ],
    answerIndex: 1,
    explanation: "A controlled component has its current value driven by React state (via a 'value' prop and 'onChange' handler). An uncontrolled component stores its value within the DOM (accessed using refs)."
  },

  // Hard Questions (17-24)
  {
    id: "react_h1",
    category: "React",
    difficulty: "Hard",
    question: "What algorithm does React use in its reconciliation process to diff two virtual DOM trees in O(n) time?",
    options: [
      "Breadth-First Search with quadratic comparison matrices",
      "A heuristic algorithm assuming different types produce different trees and keys identify stable elements",
      "A depth-first search that updates all properties regardless of component similarity",
      "Dynamic programming matching longest common subsequences of DOM nodes"
    ],
    answerIndex: 1,
    explanation: "Comparing two arbitrary trees is O(n^3). React implements a heuristic O(n) algorithm based on two assumptions: 1. Two elements of different types will produce different trees, and 2. Keys allow React to match children across renders."
  },
  {
    id: "react_h2",
    category: "React",
    difficulty: "Hard",
    question: "What is the purpose of React 18's Concurrent Feature 'Transitions' (startTransition, useTransition)?",
    options: [
      "To animate page routes using CSS slide transitions",
      "To mark updates as non-urgent, allowing React to interrupt them to keep the UI responsive for urgent interactions",
      "To run React rendering processes on multiple server CPU cores concurrently",
      "To preload next page bundles in background web worker threads"
    ],
    answerIndex: 1,
    explanation: "Transitions allow developers to mark expensive updates as non-blocking. If a user triggers a priority action (like typing in an input) during a transition render, React halts the transition and renders the input update immediately."
  },
  {
    id: "react_h3",
    category: "React",
    difficulty: "Hard",
    question: "How does the React 'Fiber' architecture enable incremental rendering?",
    options: [
      "By compiling JavaScript components to optimized machine code WebAssembly",
      "By breaking rendering work into smaller units called fibers that can be paused, yielded, and prioritized",
      "By executing components directly in multi-threaded environments of the host OS",
      "By bypassing the browser event loop completely with native C++ bindings"
    ],
    answerIndex: 1,
    explanation: "React Fiber is the core re-architecture of React's reconciliation engine. Its main feature is incremental rendering: the ability to split rendering work into chunks, spread it over multiple frames, and pause/resume work."
  },
  {
    id: "react_h4",
    category: "React",
    difficulty: "Hard",
    question: "Why was the useSyncExternalStore hook introduced in React 18?",
    options: [
      "To replace standard useEffect fetches with synchronous XMLHttpRequests",
      "To read and subscribe to external stores safely in a way that is compatible with React's concurrent rendering features",
      "To synchronize state across multiple browser tabs using local storage sync events",
      "To bind class component state to functional component states"
    ],
    answerIndex: 1,
    explanation: "useSyncExternalStore is a hook recommended for libraries (like Redux or Zustand) that manage state outside of React. It prevents 'tearing' (UI showing inconsistent states for the same data) during concurrent rendering."
  },
  {
    id: "react_h5",
    category: "React",
    difficulty: "Hard",
    question: "How do React Server Components (RSC) fundamentally differ from Server-Side Rendering (SSR)?",
    options: [
      "RSC operates on static pages only, whereas SSR is dynamic",
      "SSR outputs HTML representations of components; RSCs execute on the server, return serialized JSON tree data, and do not ship JS for static parts",
      "RSC runs inside the browser sandbox; SSR runs inside a Node.js process",
      "There is no difference; they are different terms for the same technology"
    ],
    answerIndex: 1,
    explanation: "SSR compiles React components into HTML on the server. RSC allows components to run exclusively on the server, outputting a serialized JSON representation. They don't send their component definitions (or dependencies) to the client bundle, minimizing bundle sizes."
  },
  {
    id: "react_h6",
    category: "React",
    difficulty: "Hard",
    question: "Which of the following is a advanced optimization technique to minimize unnecessary re-renders of a large component tree?",
    options: [
      "Wrapping every single element in a custom <div> wrapper",
      "Moving state down to leaf nodes, using children props for layout components, and memoizing with React.memo",
      "Converting functional components back into ES5 class components",
      "Enabling strict mode in production builds of the application"
    ],
    answerIndex: 1,
    explanation: "Optimizations include localizing state so only small subtrees re-render, wrapping components in React.memo (with custom comparison functions if needed), and composition (e.g., passing components as props/children so they don't re-render with container state)."
  },
  {
    id: "react_h7",
    category: "React",
    difficulty: "Hard",
    question: "What is the correct purpose and usage of the useImperativeHandle hook in React?",
    options: [
      "To force React to execute components synchronously during network requests",
      "To customize the instance value (methods or properties) exposed to parent components when they attach a ref to a child",
      "To override native HTML input validation rules with custom regular expressions",
      "To write direct SQL statements within a React layout"
    ],
    answerIndex: 1,
    explanation: "useImperativeHandle is used with forwardRef to customize the instance value that is exposed to parent components. It allows exposing custom methods (like focus(), select(), or custom trigger functions) rather than raw DOM elements."
  },
  {
    id: "react_h8",
    category: "React",
    difficulty: "Hard",
    question: "What type of errors can React Error Boundaries NOT catch in a application?",
    options: [
      "Errors during the render phase of child components",
      "Errors in constructor methods of child components",
      "Errors in event handlers, asynchronous code (e.g., setTimeout), or server-side rendering processes",
      "Errors inside static getDerivedStateFromError of child components"
    ],
    answerIndex: 2,
    explanation: "Error Boundaries are React components that catch JS errors anywhere in their child component tree *during rendering, in lifecycle methods, and constructors*. They do NOT catch errors in event handlers, async code (like promises or setTimeout), or SSR."
  }
];
