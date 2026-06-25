export const generalQuestions = [
  {
    "id": "gen_e1",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "What is the primary role of a compiler in software development?",
    "options": [
      "To host web application pages on cloud servers",
      "To translate high-level source code into low-level machine code or bytecode that a computer CPU can execute",
      "To validate user login password hashes",
      "To compress stylesheet files"
    ],
    "answerIndex": 1,
    "explanation": "A compiler reads the entire source code file written in a high-level language (like C++, Go, or Rust) and translates it into a binary machine file that can run directly on target systems."
  },
  {
    "id": "gen_e2",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "What does the 'DRY' design principle stand for?",
    "options": [
      "Do Request Yesterday",
      "Don't Repeat Yourself",
      "Data Routing Yield",
      "Determine Robust Yields"
    ],
    "answerIndex": 1,
    "explanation": "DRY stands for 'Don't Repeat Yourself'. It aims to reduce repetition of software patterns, replacing duplicated code blocks with abstractions (like functions or loops)."
  },
  {
    "id": "gen_e3",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "In programming, what is a 'recursion'?",
    "options": [
      "A loop that iterates a fixed number of times",
      "A programming technique where a function calls itself to solve smaller instances of the same problem",
      "A method that checks if variables are null",
      "A database transaction backup script"
    ],
    "answerIndex": 1,
    "explanation": "Recursion is when a function calls itself. It must have a base case (to stop recursion) and a recursive case (to continue calculations), otherwise it triggers stack overflow."
  },
  {
    "id": "gen_e4",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal number 10?",
    "options": [
      "1001",
      "1010",
      "1100",
      "0111"
    ],
    "answerIndex": 1,
    "explanation": "In binary: 1010. Calculation: (1 * 8) + (0 * 4) + (1 * 2) + (0 * 1) = 8 + 2 = 10."
  },
  {
    "id": "gen_e5",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "Which data structure follows the Last-In, First-Out (LIFO) access pattern?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Binary Tree"
    ],
    "answerIndex": 1,
    "explanation": "A Stack is a LIFO data structure. The last item pushed onto the stack is the first item popped off. A Queue is First-In, First-Out (FIFO)."
  },
  {
    "id": "gen_e6",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "What does the 'KISS' design principle represent?",
    "options": [
      "Keep It Simple, Stupid",
      "Key Initialization Security System",
      "Keyboard Input Sorting Selector",
      "Kernel Information Sharing Software"
    ],
    "answerIndex": 0,
    "explanation": "KISS stands for 'Keep It Simple, Stupid'. It is a design principle stating that systems work best if they are kept simple rather than made complex."
  },
  {
    "id": "gen_e7",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "What does a 403 HTTP status code mean?",
    "options": [
      "The requested resource was not found on the server",
      "The client is forbidden from accessing the resource, even if authenticated",
      "The server encountered an internal database error",
      "The client request timed out before completion"
    ],
    "answerIndex": 1,
    "explanation": "403 Forbidden indicates that the server understands the request, but the client does not have authorization permissions to access the resource."
  },
  {
    "id": "gen_e8",
    "category": "General Programming",
    "difficulty": "Easy",
    "question": "What is the difference between a local variable and a global variable?",
    "options": [
      "Local variables are encrypted; global variables are open-source",
      "Local variables are restricted to the function or block they are defined in; global variables can be accessed anywhere in the script",
      "Local variables run client-side; global variables run server-side",
      "They are identical terms in standard algorithms"
    ],
    "answerIndex": 1,
    "explanation": "Scope determines variable accessibility. A local variable is only accessible within its declaring block/function. A global variable is declared outside and is accessible anywhere."
  },
  {
    "id": "gen_m1",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What are the four pillars of Object-Oriented Programming (OOP)?",
    "options": [
      "Variables, Loops, Conditions, Functions",
      "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Recursion, Iteration, Compilation, Interpretation",
      "GET, POST, PUT, DELETE"
    ],
    "answerIndex": 1,
    "explanation": "OOP pillars are: 1. Encapsulation (hiding inner state), 2. Inheritance (reusing parent properties), 3. Polymorphism (objects taking multiple forms), 4. Abstraction (hiding complex implementations)."
  },
  {
    "id": "gen_m2",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What does the 'S' in SOLID principles represent, and what does it declare?",
    "options": [
      "Staged Compilation: compile files in stages",
      "Single Responsibility Principle: a class or module should have only one reason to change (do one thing well)",
      "Secure Storage: encrypt all data files",
      "Speed Optimization: execute operations in parallel"
    ],
    "answerIndex": 1,
    "explanation": "The Single Responsibility Principle (SRP) states that a class, function, or module should be responsible for a single part of the software's functionality, making code cleaner and easier to test."
  },
  {
    "id": "gen_m3",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What is the key structural difference between a Stack and a Queue?",
    "options": [
      "Stacks are sorting algorithms; Queues are search trees",
      "Stack is Last-In-First-Out (LIFO); Queue is First-In-First-Out (FIFO)",
      "Stack is stored on server disk; Queue is stored in CPU cache",
      "Stacks hold strings; Queues hold numbers"
    ],
    "answerIndex": 1,
    "explanation": "A stack pushes and pops items from the same end (LIFO). A queue adds items to the tail (enqueue) and removes items from the head (dequeue), representing a FIFO queue."
  },
  {
    "id": "gen_m4",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What does a RESTful API utilize to define actions on resources?",
    "options": [
      "Custom database query structures",
      "Standard HTTP methods (GET, POST, PUT, DELETE) mapping to CRUD operations, and resource-identifying URLs",
      "WebSocket events in background browser sessions",
      "GPG encryption signatures"
    ],
    "answerIndex": 1,
    "explanation": "REST (Representational State Transfer) maps actions to resources using standard HTTP verbs: GET (Read), POST (Create), PUT/PATCH (Update), and DELETE (Delete), identifying resources with clean path strings."
  },
  {
    "id": "gen_m5",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "In Model-View-Controller (MVC) architecture, what is the role of the Controller?",
    "options": [
      "To render the visual HTML/CSS elements to user browsers",
      "To act as the intermediary, intercepting user inputs from the View, updating the Model, and updating the View",
      "To store data records inside the backend database server",
      "To compile scripts before server deployments"
    ],
    "answerIndex": 1,
    "explanation": "The Controller intercepts user events (clicks, typing, submissions) from the View, processes the request (performing business logic or querying the Model), and updates the View with new outputs."
  },
  {
    "id": "gen_m6",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What is the difference between a Unit Test and an Integration Test?",
    "options": [
      "Unit tests check syntax; integration tests check styling",
      "Unit tests check small, isolated components of code; integration tests check how multiple modules interact together",
      "Unit tests are executed by developers; integration tests run automatically on servers",
      "There is no difference in testing structures"
    ],
    "answerIndex": 1,
    "explanation": "Unit tests mock dependencies to test single units (like a function). Integration tests test the connection between modules (like an API endpoint writing to a real database) to ensure they work together."
  },
  {
    "id": "gen_m7",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What is the difference between SQL and NoSQL databases?",
    "options": [
      "SQL is for web apps; NoSQL is for mobile apps",
      "SQL databases are relational and table-based with rigid schemas; NoSQL databases are non-relational, flexible, and document/key-value/graph-based",
      "SQL databases are stored in RAM; NoSQL databases are stored on disks",
      "SQL databases are free; NoSQL databases require license fees"
    ],
    "answerIndex": 1,
    "explanation": "SQL databases (MySQL, PostgreSQL) use tables, rows, foreign keys, and strict schemas. NoSQL databases (MongoDB, Redis, Cassandra) use documents, key-value trees, or graphs, scaling horizontally easily."
  },
  {
    "id": "gen_m8",
    "category": "General Programming",
    "difficulty": "Medium",
    "question": "What does the 'Liskov Substitution Principle' in SOLID declare?",
    "options": [
      "Subclasses should replace parent classes globally to optimize memory",
      "Subtypes must be substitutable for their base types without altering the correctness of the program",
      "Database connections must be swapped when servers time out",
      "Variables must be renamed when refactoring files"
    ],
    "answerIndex": 1,
    "explanation": "Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without affecting the application's behavior. Subclasses must adhere to the contract of the parent."
  },
  {
    "id": "gen_h1",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "Explain the Singleton design pattern and a common criticism of using it in modern software development.",
    "options": [
      "It restricts a class to one instance; criticism: it makes unit testing and modular mock development difficult due to global state",
      "It duplicates instances for multi-threading; criticism: high GPU consumption",
      "It compresses code into a single file; criticism: poor layout rendering",
      "It runs actions in a single worker thread; criticism: event loop blockage"
    ],
    "answerIndex": 0,
    "explanation": "Singleton ensures a class has only one instance and provides a global access point to it. Criticisms include: it introduces global state into applications, hides dependencies in code, and makes unit testing difficult because state persists across tests."
  },
  {
    "id": "gen_h2",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "What is the difference in Big O time complexity between searching for an item in a sorted Array vs a Hash Map (average case)?",
    "options": [
      "Array is O(1); Hash Map is O(N)",
      "Array is O(log N) using binary search; Hash Map is O(1) using key hashing",
      "Array is O(N); Hash Map is O(log N)",
      "They are both O(1) in modern engines"
    ],
    "answerIndex": 1,
    "explanation": "Searching a sorted array takes O(log N) time using binary search. A Hash Map hashes keys to lookup entries directly in memory, yielding O(1) constant time complexity on average."
  },
  {
    "id": "gen_h3",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "How does the Observer design pattern facilitate loose coupling in component communications?",
    "options": [
      "It forces components to import parent classes directly",
      "It defines a one-to-many dependency where an object (subject) maintains a list of dependents (observers) and notifies them automatically of changes",
      "It runs operations in separate background service threads in parallel",
      "It encrypts variables before sending them to database collections"
    ],
    "answerIndex": 1,
    "explanation": "The Observer pattern allows a subject to notify observers of changes without knowing anything about the observers' concrete classes, establishing a decoupled publish-subscribe communication mechanism."
  },
  {
    "id": "gen_h4",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "What is the difference between a compiler and an interpreter regarding code execution?",
    "options": [
      "Compilers run code online; interpreters run code offline",
      "Compilers translate the entire code into machine language at once before execution; interpreters translate and execute code line-by-line during runtime",
      "Compilers are client-side; interpreters are server-side",
      "There is no difference in modern JavaScript V8 execution"
    ],
    "answerIndex": 1,
    "explanation": "Compilers (e.g. gcc, rustc) produce a standalone machine-code executable first. Interpreters (e.g. basic Python, Ruby) parse and execute source code line-by-line dynamically at runtime. Modern engines (V8) use JIT (Just-In-Time) compilation combining both."
  },
  {
    "id": "gen_h5",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "What is the role of authorization flows like OAuth 2.0 and what is the difference between an Authorization Code grant and an Implicit grant?",
    "options": [
      "OAuth 2.0 encrypts database records; grants define compression size",
      "OAuth 2.0 is an authorization framework; Authorization Code grant uses a secure backend server to exchange codes for tokens, while Implicit grant sends tokens directly to the client browser",
      "Implicit grant is more secure than Authorization Code grant",
      "They are local browser cookie authentication patterns"
    ],
    "answerIndex": 1,
    "explanation": "Authorization Code grant is secure because the access token is requested server-to-server (via authorization code exchange), preventing browser leaks. Implicit grant returns tokens directly in the URL hash, exposing it to client scripts, and is now deprecated."
  },
  {
    "id": "gen_h6",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "In database design, what does 'Database Normalization' achieve, and what is the trade-off?",
    "options": [
      "It encrypts database tables; trade-off: high CPU usage",
      "It organizes fields and tables to minimize data redundancy and dependency; trade-off: increased query complexity and slower reads due to multiple joins",
      "It compiles queries into JSON arrays; trade-off: memory leak risks",
      "It allows duplicate records; trade-off: database size"
    ],
    "answerIndex": 1,
    "explanation": "Normalization (1NF, 2NF, 3NF) structures databases to prevent data anomalies (update, insert, delete conflicts) and redundancy. The trade-off is performance: querying normalized data requires joining multiple tables, which is slower than reading flat denormalized records."
  },
  {
    "id": "gen_h7",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "What is 'Thread Safety' and what mechanism resolves it in multi-threaded runtime environments?",
    "options": [
      "A feature disabling script executions; resolved by standard antivirus software",
      "A property of code ensuring correct execution by multiple threads simultaneously; resolved using synchronization primitives like Mutexes, Semaphores, or Locks",
      "A compiler flag optimizing file paths; resolved by package.json",
      "A browser sandbox security rule; resolved by CSP headers"
    ],
    "answerIndex": 1,
    "explanation": "Thread safety prevents 'race conditions' where multiple threads read/write shared memory concurrently, corrupting state. Primitives like a Mutex (mutual exclusion lock) ensure that only one thread can access a critical section of code at a time."
  },
  {
    "id": "gen_h8",
    "category": "General Programming",
    "difficulty": "Hard",
    "question": "What is the difference between symmetric and asymmetric encryption?",
    "options": [
      "Symmetric encryption is only for strings; asymmetric is for files",
      "Symmetric uses the same key for encryption and decryption; asymmetric uses a public key to encrypt and a mathematically linked private key to decrypt",
      "Asymmetric encryption is slower than symmetric encryption",
      "Symmetric encryption is server-side; asymmetric is browser-native"
    ],
    "answerIndex": 1,
    "explanation": "Symmetric encryption (AES) is fast and uses one shared secret key. Asymmetric encryption (RSA, ECC) uses a key pair: anyone can encrypt a message with your public key, but only you can decrypt it using your private key. It is slower and used for key exchanges."
  }
];
