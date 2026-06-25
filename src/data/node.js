export const nodeQuestions = [
  {
    "id": "node_e1",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "What is Node.js?",
    "options": [
      "A client-side JavaScript library for building UI interfaces",
      "A JavaScript runtime environment built on Google Chrome's V8 engine that runs outside the browser",
      "A database management system competing with MongoDB",
      "A CSS compilation framework for TailwindCSS styles"
    ],
    "answerIndex": 1,
    "explanation": "Node.js is a server-side runtime environment built on Google V8, allowing developers to execute JavaScript code directly on servers or local operating systems."
  },
  {
    "id": "node_e2",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "Which Node.js core module is used to handle file path strings?",
    "options": [
      "fs",
      "path",
      "filepath",
      "url"
    ],
    "answerIndex": 1,
    "explanation": "The 'path' core module provides utilities for working with file and directory paths (e.g. path.join, path.resolve)."
  },
  {
    "id": "node_e3",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "In Node.js, what does NPM stand for?",
    "options": [
      "Node Project Manager",
      "Node Package Manager",
      "Network Protocol Manager",
      "Node Program Module"
    ],
    "answerIndex": 1,
    "explanation": "NPM stands for Node Package Manager. It is the default package manager for Node.js, hosting millions of open-source packages."
  },
  {
    "id": "node_e4",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "What is the correct way to import a module named 'fs' using CommonJS syntax?",
    "options": [
      "import fs from 'fs';",
      "const fs = require('fs');",
      "const fs = import('fs');",
      "const fs = requireModule('fs');"
    ],
    "answerIndex": 1,
    "explanation": "CommonJS (default syntax historically in Node.js) uses require() to load modules. ES modules use the 'import' syntax."
  },
  {
    "id": "node_e5",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "What is the role of the 'process' object in Node.js?",
    "options": [
      "To compile HTML templates into scripts",
      "A global object providing info about, and control over, the current Node.js process (e.g. process.env, process.exit)",
      "To manage database queries inside MongoDB",
      "To route incoming HTTP requests"
    ],
    "answerIndex": 1,
    "explanation": "The 'process' object is global in Node.js. It provides environment variables (process.env), process control (process.exit), and architecture/argument details."
  },
  {
    "id": "node_e6",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "Which command runs a file named 'app.js' using Node.js in the terminal?",
    "options": [
      "run app.js",
      "node app.js",
      "npm app.js",
      "execute app.js"
    ],
    "answerIndex": 1,
    "explanation": "To execute a local JavaScript file using Node.js, run the 'node' CLI command followed by the file path: 'node app.js'."
  },
  {
    "id": "node_e7",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "Which core module is responsible for working with the local filesystem (reading/writing files)?",
    "options": [
      "path",
      "fs",
      "os",
      "http"
    ],
    "answerIndex": 1,
    "explanation": "The 'fs' (File System) module allows your application to interact with the file system on the host computer (reading, writing, deleting, and renaming files)."
  },
  {
    "id": "node_e8",
    "category": "Node.js",
    "difficulty": "Easy",
    "question": "What is the default global object in Node.js that is equivalent to 'window' in browsers?",
    "options": [
      "window",
      "global",
      "process",
      "document"
    ],
    "answerIndex": 1,
    "explanation": "In Node.js, the global namespace object is named 'global'. It contains functions and properties that are available anywhere in your code."
  },
  {
    "id": "node_m1",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "What is the EventEmitter class in Node.js?",
    "options": [
      "A class used to compile Express routing patterns",
      "A core class in the 'events' module that allows objects to emit events and listen for them (publish-subscribe pattern)",
      "An API handler for streaming video components",
      "A utility class converting strings to numbers"
    ],
    "answerIndex": 1,
    "explanation": " EventEmitter is a core class in Node.js events module. It allows objects to emit named events (emitter.emit()) which trigger registered listeners (emitter.on()) to run synchronously."
  },
  {
    "id": "node_m2",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "What is the difference between process.nextTick() and setImmediate()?",
    "options": [
      "process.nextTick() executes immediately in the current phase of the event loop; setImmediate() runs in the Check phase",
      "setImmediate() executes before process.nextTick() always",
      "process.nextTick() is asynchronous; setImmediate() is synchronous",
      "They are aliases with identical microtask execution order"
    ],
    "answerIndex": 0,
    "explanation": "process.nextTick() triggers its callback immediately after the current operation finishes, before the event loop continues to any other phase. setImmediate() is queued for execution in the 'check' phase of the next loop tick."
  },
  {
    "id": "node_m3",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "What are Buffers in Node.js?",
    "options": [
      "Temporary memory spots used to accelerate video styling",
      "A global class representing a fixed-length sequence of bytes, used to handle raw binary data",
      "Databases stored in client cookies",
      "Middleware scripts handling CORS authentication"
    ],
    "answerIndex": 1,
    "explanation": "Buffers are designed to handle raw binary data. They represent memory allocated outside the V8 heap, critical for I/O operations (like files, streams, or TCP sockets)."
  },
  {
    "id": "node_m4",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "How do Streams improve performance in Node.js compared to reading files with fs.readFile?",
    "options": [
      "Streams encrypt files automatically",
      "Streams read and write files chunk-by-chunk in a non-blocking way, saving memory compared to loading the entire file in RAM",
      "Streams run operations in native WebAssembly",
      "Streams force calculations to execute on server GPUs"
    ],
    "answerIndex": 1,
    "explanation": "fs.readFile loads the complete file content into RAM before executing callbacks, which fails or slows down for large files. Streams process data in smaller chunks sequentially, optimizing memory usage."
  },
  {
    "id": "node_m5",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "What is the purpose of the Node.js 'cluster' module?",
    "options": [
      "To group database query documents together",
      "To create multiple child processes (workers) that share the same server ports, utilizing multi-core CPU architectures",
      "To host scripts on multiple hosting CDNs in parallel",
      "To balance file upload routes"
    ],
    "answerIndex": 1,
    "explanation": "Node.js is single-threaded. The cluster module allows you to spawn worker processes (usually one per CPU core) that share the master port, increasing application performance and handling higher concurrency."
  },
  {
    "id": "node_m6",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "How do you handle errors securely in Node.js asynchronous functions using async/await?",
    "options": [
      "By setting up global try/catch blocks or handling unhandledRejection events",
      "By ignoring the errors since Node.js handles them automatically",
      "By writing errors inside browser session storages",
      "By converting async functions to synchronous class structures"
    ],
    "answerIndex": 0,
    "explanation": "Using async/await, you wrap operations inside try/catch blocks. For global safety, developers listen to process.on('unhandledRejection') and process.on('uncaughtException') to prevent server crashes."
  },
  {
    "id": "node_m7",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "What does the package-lock.json file serve to do?",
    "options": [
      "It locks the files to prevent developers from making edits",
      "It records the exact dependency tree version installed to ensure consistent builds across environments",
      "It ensures that npm installs produce identical trees across all developers' machines",
      "It contains secret database connection strings"
    ],
    "answerIndex": 1,
    "explanation": "package-lock.json locks down the exact version of every package and its dependencies installed in node_modules, ensuring that npm installs produce identical trees across all developers' machines."
  },
  {
    "id": "node_m8",
    "category": "Node.js",
    "difficulty": "Medium",
    "question": "What is the purpose of the 'os' core module?",
    "options": [
      "To build custom operation systems from JavaScript",
      "To provide operating system-related utility methods (e.g. os.cpus(), os.freemem(), os.homedir())",
      "To route network requests to server nodes",
      "To compile CSS animations"
    ],
    "answerIndex": 1,
    "explanation": "The 'os' module exposes system-level information about the host machine, including CPU architecture, network interfaces, memory capacity, and uptime."
  },
  {
    "id": "node_h1",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "What are the phases of the Node.js Event Loop, and in what order do they execute?",
    "options": [
      "Timers, Check, Poll, Close Callbacks",
      "Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close Callbacks",
      "Poll, Timers, Check, Close Callbacks, Idle",
      "Microtasks, Macrotasks, Rendering, Execution"
    ],
    "answerIndex": 1,
    "explanation": "The event loop executes in distinct phases: 1. Timers (setTimeout/setInterval callbacks), 2. Pending Callbacks (deferred I/O errors), 3. Idle/Prepare (internal), 4. Poll (retrieve new I/O events), 5. Check (setImmediate), 6. Close Callbacks."
  },
  {
    "id": "node_h2",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "What is 'backpressure' in Node.js streams and how is it managed?",
    "options": [
      "A network latency issue caused by high server port queries",
      "A condition where a writable stream's buffer fills up because the readable stream is sending data too fast",
      "A database collision resolving transactions",
      "An optimization method speed limits files"
    ],
    "answerIndex": 1,
    "explanation": "Backpressure occurs when data writing cannot keep up with data reading. In Node.js, writable.write() returns false when its internal buffer (highWaterMark) is full. The readable stream should then pause() reading until the writable stream emits the 'drain' event."
  },
  {
    "id": "node_h3",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "How do Worker Threads in Node.js (worker_threads module) differ from child processes spawned using child_process?",
    "options": [
      "Worker threads are slower and run on secondary server hosts",
      "Worker threads run in the same process, sharing memory using SharedArrayBuffer; child processes run in separate OS processes with isolated memory",
      "Child processes are only for Windows; worker threads are for Unix",
      "They are identical terms in the V8 engine architecture"
    ],
    "answerIndex": 1,
    "explanation": "Worker threads are threads inside the main Node.js process. They share memory (via SharedArrayBuffer) and execute JavaScript in separate V8 instances, which is highly efficient for CPU-intensive tasks. Child processes require IPC communication."
  },
  {
    "id": "node_h4",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "What is the purpose of AsyncLocalStorage in Node.js?",
    "options": [
      "To save variables in the browser's local storage asynchronously",
      "To store data that persists across asynchronous execution contexts, similar to thread-local storage in other languages",
      "To cache static image files inside V8 engine memory",
      "To synchronize database transactions"
    ],
    "answerIndex": 1,
    "explanation": "AsyncLocalStorage (from the 'async_hooks' core module) allows developers to persist state (like request IDs or user sessions) across asynchronous call chains (callbacks, promises, awaits) without passing them explicitly as arguments."
  },
  {
    "id": "node_h5",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "What is the difference between child_process.spawn() and child_process.exec()?",
    "options": [
      "spawn is synchronous; exec is asynchronous",
      "exec buffers the command output in memory and returns it all at once; spawn returns streams, making it better for large volumes of data",
      "exec runs code in worker threads; spawn runs it in child processes",
      "They are aliases with identical performance impact"
    ],
    "answerIndex": 1,
    "explanation": "exec() spawns a shell and buffers the entire output. If output exceeds its limit (default 200KB), it crashes. spawn() executes a command directly without a shell, returning stdout/stderr as streams, ideal for continuous output or large files."
  },
  {
    "id": "node_h6",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "How does the V8 garbage collector handle memory heap allocation in Node.js (New space vs Old space)?",
    "options": [
      "New space holds variables forever; Old space holds temporary ones",
      "New space holds short-lived objects (scavenged using minor GC); survivors are promoted to Old space (cleaned using major Mark-Sweep GC)",
      "Memory heap is managed by local browser cache",
      "All variables are saved in a single flat array in memory"
    ],
    "answerIndex": 1,
    "explanation": "V8 splits heap memory: New space (small, fast allocation/deallocation, scavenged frequently) holds short-lived objects. If objects survive cycles, they promote to the Old space (larger, cleaned less frequently using Mark-Sweep-Compact)."
  },
  {
    "id": "node_h7",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "What does the Libuv library provide to Node.js?",
    "options": [
      "A standard HTML compiler interface",
      "A multi-platform C library that handles the event loop, thread pool, and asynchronous I/O operations",
      "A CSS variable compression module",
      "A NoSQL database client connecting to Firestore"
    ],
    "answerIndex": 1,
    "explanation": "Libuv is a core C library in Node.js. It manages the event loop, handles non-blocking network operations, and maintains a default thread pool of 4 threads to handle blocking filesystem/crypto/DNS tasks."
  },
  {
    "id": "node_h8",
    "category": "Node.js",
    "difficulty": "Hard",
    "question": "How does Node.js load modules recursively using the CommonJS require() algorithm?",
    "options": [
      "It downloads files from GitHub repositories every time you run require",
      "It checks for core modules, looks in node_modules, reads package.json main fields, resolves extensions (.js, .json, .node), and caches the module",
      "It runs scripts in independent web worker threads synchronously",
      "It reads modules from browser cookie headers"
    ],
    "answerIndex": 1,
    "explanation": "CommonJS resolves require() by: 1. Checking core modules, 2. Checking local files relative to directory, 3. Checking node_modules recursively up the directory tree. It resolves directories using package.json 'main' or index.js, and caches the exports."
  }
];
