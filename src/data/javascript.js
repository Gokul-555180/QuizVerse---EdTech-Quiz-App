export const javascriptQuestions = [
  // Easy Questions (1-8)
  {
    id: "js_e1",
    category: "JavaScript",
    difficulty: "Easy",
    question: "What is the primary difference between let/const and var declarations?",
    options: [
      "let/const are block-scoped, while var is function-scoped",
      "var is block-scoped, while let/const are globally scoped",
      "const can be reassigned at any time; let cannot",
      "There is no difference; they are identical in behavior"
    ],
    answerIndex: 0,
    explanation: "let and const are block-scoped (restricted to the nearest curly braces {}), whereas var is function-scoped or globally scoped and is hoisted to the top of its containing function."
  },
  {
    id: "js_e2",
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: [
      "String",
      "Boolean",
      "Array",
      "Symbol"
    ],
    answerIndex: 2,
    explanation: "JavaScript primitives include String, Number, Boolean, undefined, null, Symbol, and BigInt. Arrays and Objects are non-primitive, reference types."
  },
  {
    id: "js_e3",
    category: "JavaScript",
    difficulty: "Easy",
    question: "What is the difference between the double equals (==) and triple equals (===) operators?",
    options: [
      "== compares values after performing type coercion; === compares values and types strictly",
      "== is faster and should always be used; === is deprecated",
      "== compares references; === compares primitive values",
      "They are identical in all JavaScript engines"
    ],
    answerIndex: 0,
    explanation: "The loose equality operator (==) performs type conversion (coercion) before comparing two values. The strict equality operator (===) compares both the value and the type, returning false if types differ."
  },
  {
    id: "js_e4",
    category: "JavaScript",
    difficulty: "Easy",
    question: "What does the expression 'typeof []' return in JavaScript?",
    options: [
      "'array'",
      "'object'",
      "'list'",
      "'undefined'"
    ],
    answerIndex: 1,
    explanation: "In JavaScript, arrays are considered objects. Therefore, calling 'typeof []' returns the string 'object'."
  },
  {
    id: "js_e5",
    category: "JavaScript",
    difficulty: "Easy",
    question: "What is the purpose of the 'use strict' directive at the top of a JS script?",
    options: [
      "It disables all async operations to prevent race conditions",
      "It enforces stricter parsing and error handling, turning silent errors into thrown exceptions",
      "It compresses the JavaScript code to run faster",
      "It allows the script to run on the server side only"
    ],
    answerIndex: 1,
    explanation: "'use strict' enables strict mode, which catches common coding mistakes (such as assigning values to undeclared variables), prevents unsafe actions, and throws errors instead of failing silently."
  },
  {
    id: "js_e6",
    category: "JavaScript",
    difficulty: "Easy",
    question: "How do arrow functions behave differently regarding the 'this' keyword compared to regular functions?",
    options: [
      "Arrow functions have their own dynamically bound 'this' context",
      "Arrow functions do not have their own 'this'; they inherit it lexically from the enclosing scope",
      "Arrow functions cannot use the 'this' keyword at all",
      "Arrow functions bind 'this' to the global window object always"
    ],
    answerIndex: 1,
    explanation: "Arrow functions do not define their own 'this' context. Instead, they capture the 'this' value of the enclosing lexical context in which they were defined."
  },
  {
    id: "js_e7",
    category: "JavaScript",
    difficulty: "Easy",
    question: "What does the value 'NaN' stand for, and how can you reliably check if a value is NaN?",
    options: [
      "Null and Negative; check using x === null",
      "Not a Number; check using Number.isNaN(value)",
      "New Array Node; check using Array.isNaN()",
      "Name and Number; check using typeof value === 'nan'"
    ],
    answerIndex: 1,
    explanation: "NaN stands for 'Not a Number'. Because NaN is the only value in JavaScript that does not equal itself (NaN === NaN is false), you must use Number.isNaN() or isNaN() to check for it."
  },
  {
    id: "js_e8",
    category: "JavaScript",
    difficulty: "Easy",
    question: "What is the result of '1' + 1 - 1 in JavaScript?",
    options: [
      "10",
      "11",
      "1",
      "NaN"
    ],
    answerIndex: 0,
    explanation: "The expression '1' + 1 performs string concatenation, resulting in the string '11'. Then, '11' - 1 performs numeric subtraction, coercing '11' to the number 11, resulting in 10."
  },

  // Medium Questions (9-16)
  {
    id: "js_m1",
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which of the following best describes a 'closure' in JavaScript?",
    options: [
      "The termination of a script block using a return statement",
      "The combination of a function and the lexical environment within which that function was declared",
      "A security mechanism that hides functions from the global namespace",
      "A loop that has finished its iterations and closed its variables"
    ],
    answerIndex: 1,
    explanation: "A closure is created when a function is defined inside another function, allowing the inner function to access variables of the outer function's scope even after the outer function has finished executing."
  },
  {
    id: "js_m2",
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is 'hoisting' in JavaScript?",
    options: [
      "Uploading files from client browser to the server",
      "The process where the JS interpreter moves declarations to the top of their containing scope prior to execution",
      "The mechanism where slow async callbacks are prioritized over sync operations",
      "An optimization method that combines multiple script files into one"
    ],
    answerIndex: 1,
    explanation: "Hoisting is JavaScript's default behavior of moving declarations (variables and functions) to the top of their current scope. Only the declarations are hoisted, not assignments/initializations."
  },
  {
    id: "js_m3",
    category: "JavaScript",
    difficulty: "Medium",
    question: "What are the states of a Promise in JavaScript?",
    options: [
      "Active, Paused, Resumed",
      "Pending, Fulfilled, Rejected",
      "Initialized, Resolved, Destroyed",
      "Waiting, Completed, Failed"
    ],
    answerIndex: 1,
    explanation: "A Promise is in one of three states: pending (initial state), fulfilled (operation completed successfully), or rejected (operation failed)."
  },
  {
    id: "js_m4",
    category: "JavaScript",
    difficulty: "Medium",
    question: "Explain the difference between bind, call, and apply methods.",
    options: [
      "bind executes the function immediately; call and apply return a new bound function",
      "call and apply execute the function immediately; bind returns a new function with 'this' pre-bound",
      "call accepts arguments as an array; apply accepts them individually",
      "They are identical helper functions and do not alter the 'this' context"
    ],
    answerIndex: 1,
    explanation: "call() and apply() invoke the function immediately, where call() takes arguments separated by commas and apply() takes them as an array. bind() returns a new function with 'this' set, which can be executed later."
  },
  {
    id: "js_m5",
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the JavaScript 'event loop' responsible for?",
    options: [
      "It coordinates user gestures like mouse scrolling and clicks",
      "It monitors the call stack and callback queue, pushing tasks to the stack when it is empty to run async code",
      "It compiles code dynamically from ES6 to ES5 format",
      "It cycles through network ports to listen for server events"
    ],
    answerIndex: 1,
    explanation: "The event loop is a single-threaded loop that monitors the Call Stack and the Callback Queue. If the Call Stack is empty, it takes the first task from the queue and pushes it to the stack, enabling non-blocking async execution."
  },
  {
    id: "js_m6",
    category: "JavaScript",
    difficulty: "Medium",
    question: "How does prototypal inheritance work in JavaScript?",
    options: [
      "Objects inherit features directly from classes compiled in backend servers",
      "Every object has an internal link to a prototype object, from which it inherits properties and methods",
      "By copying all code snippets from parent files into child components",
      "Through a central database of class blueprints stored in browser cookies"
    ],
    answerIndex: 1,
    explanation: "Objects in JavaScript have a private property (referred to as [[Prototype]]) which links to another object. When attempting to access a property, JS searches the object first, then its prototype, up the chain until it finds it or reaches null."
  },
  {
    id: "js_m7",
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is event delegation in client-side JavaScript?",
    options: [
      "Assigning web design tasks to junior frontend engineers",
      "Attaching a single event listener to a parent element to handle events on its child elements via event bubbling",
      "Passing event parameters from the client side to server database APIs",
      "Using web workers to delegate event handling calculations to background threads"
    ],
    answerIndex: 1,
    explanation: "Event delegation is a technique where a single event listener is attached to a parent element instead of attaching listeners to multiple individual child nodes. When a child is clicked, the event bubbles up to the parent, which handles it."
  },
  {
    id: "js_m8",
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the difference between a shallow copy and a deep copy of an object?",
    options: [
      "A shallow copy duplicates all nested objects; a deep copy only references them",
      "A shallow copy only copies the top-level references; a deep copy copies all nested objects recursively",
      "Shallow copy is for arrays; deep copy is for objects",
      "There is no difference in memory allocation"
    ],
    answerIndex: 1,
    explanation: "A shallow copy copies top-level properties. If properties are nested objects, it copies references, meaning changes to the copy affect the original. A deep copy duplicates all levels recursively, fully separating the new object."
  },

  // Hard Questions (17-24)
  {
    id: "js_h1",
    category: "JavaScript",
    difficulty: "Hard",
    question: "In the event loop, what is the execution priority difference between Microtasks (e.g. Promises) and Macrotasks (e.g. setTimeout)?",
    options: [
      "Macrotasks are executed immediately after the stack clears, before Microtasks",
      "All Microtasks in the microtask queue are executed before the next Macrotask is run, even after rendering",
      "Microtasks and Macrotasks are executed in parallel using CPU multi-threading",
      "Microtasks are executed in the next tick, whereas Macrotasks are executed instantly"
    ],
    answerIndex: 1,
    explanation: "The microtask queue has higher priority. When the call stack clears, the engine executes ALL tasks in the microtask queue before moving on to the next macrotask (such as setTimeout, setInterval, or rendering updates)."
  },
  {
    id: "js_h2",
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
    options: [
      "A time period where async network requests fail due to server timeouts",
      "The region of a block where a let or const variable is declared but cannot be accessed before its physical initialization",
      "The inactive lifecycle phase of a deleted browser cookie",
      "The duration when a web page is frozen during rendering calculations"
    ],
    answerIndex: 1,
    explanation: "TDZ is the period between entering a block scope and the variable declaration being evaluated. Accessing let or const variables in this zone throws a ReferenceError because they are not initialized (unlike var, which is initialized to undefined)."
  },
  {
    id: "js_h3",
    category: "JavaScript",
    difficulty: "Hard",
    question: "How does the Mark-and-Sweep garbage collection algorithm function in modern engines?",
    options: [
      "It deletes variables after they have been unused for more than 5 minutes",
      "It determines reachability by starting at 'roots' and marking all referenced objects, then sweeping away unmarked ones",
      "It counts references and deletes objects when reference count drops below 1",
      "It deletes objects in order of memory allocation size"
    ],
    answerIndex: 1,
    explanation: "Mark-and-Sweep is the standard garbage collection algorithm. It solves reference-cycle loops by starting at root objects (like window or global). It marks all objects reachable from roots, and then deallocates memory for unmarked (unreachable) objects."
  },
  {
    id: "js_h4",
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which of the following is a key feature of WeakMap compared to standard Map?",
    options: [
      "WeakMap keys can only be primitives",
      "WeakMap keys must be objects, and they do not prevent garbage collection of those objects if there are no other references",
      "WeakMap is iterable and allows checking its total size at any time",
      "WeakMap stores values in browser session storage automatically"
    ],
    answerIndex: 1,
    explanation: "WeakMap keys must be objects, and they are held weakly. If there are no other references to a key object, it can be garbage-collected, which prevents memory leaks. WeakMap is not iterable, and its size cannot be queried."
  },
  {
    id: "js_h5",
    category: "JavaScript",
    difficulty: "Hard",
    question: "How do Generator functions work and what is returned when you invoke one?",
    options: [
      "Generators return a promise that resolves when the generator returns",
      "Generators return an Iterator object, and execution can be paused and resumed using the 'yield' keyword",
      "Generators execute on a separate CPU thread, returning values asynchronously",
      "Generators compile JS structures into optimized JSON arrays"
    ],
    answerIndex: 1,
    explanation: "Generator functions (function*) return an Iterator object. When the generator's next() method is called, it executes until it encounters the 'yield' keyword, pauses its execution state, and returns the yielded value."
  },
  {
    id: "js_h6",
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is tail call optimization (TCO) in recursive function executions?",
    options: [
      "A compiler optimization where a recursive function's tail call does not allocate a new stack frame, preventing stack overflow",
      "An optimization that shortens the names of recursive variables",
      "A feature that executes recursive function steps in background web workers",
      "A library that converts recursion into standard while loops automatically"
    ],
    answerIndex: 0,
    explanation: "TCO is supported in ES6 (though not implemented in all browsers). If a function returns the result of calling another function (or itself) as its very last action (in tail position), the engine reuses the current stack frame, avoiding stack overflows."
  },
  {
    id: "js_h7",
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the output of 'console.log(0.1 + 0.2 === 0.3)' and why?",
    options: [
      "true, because basic arithmetic is exact in standard JavaScript",
      "false, due to floating-point binary representation inaccuracies (IEEE 754 precision issues)",
      "undefined, because arithmetic comparison returns empty variables",
      "TypeError, because strict comparison cannot be performed on floats"
    ],
    answerIndex: 1,
    explanation: "JavaScript numbers are represented as 64-bit floats (IEEE 754). The binary representation of 0.1 and 0.2 results in rounding errors, making 0.1 + 0.2 equal 0.30000000000000004, which is not strictly equal to 0.3."
  },
  {
    id: "js_h8",
    category: "JavaScript",
    difficulty: "Hard",
    question: "How is the 'this' context resolved in a function nested inside a method of an object?",
    options: [
      "It resolves to the containing object automatically",
      "It resolves to the global object (or undefined in strict mode) unless using an arrow function or binding explicitly",
      "It resolves to the outer function name",
      "Nested functions throw a SyntaxError in modern JS"
    ],
    answerIndex: 1,
    explanation: "A regular function's 'this' is determined by its call site. A nested helper function invoked directly (e.g. helper()) is not called on the object, so its 'this' resolves to global/undefined. Arrow functions solve this by inheriting 'this' lexically."
  }
];
