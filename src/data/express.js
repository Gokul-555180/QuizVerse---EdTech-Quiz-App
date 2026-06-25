export const expressQuestions = [
  {
    "id": "exp_e1",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "What is Express.js?",
    "options": [
      "A compilation library for CSS styling",
      "A minimal, flexible Node.js web application framework providing routing and middleware features",
      "A relational SQL database server",
      "A command line tool used to publish NPM packages"
    ],
    "answerIndex": 1,
    "explanation": "Express.js is a minimalist web framework for Node.js, simplifying the creation of web servers, API routing, and middleware integration."
  },
  {
    "id": "exp_e2",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "What is 'middleware' in Express.js?",
    "options": [
      "A backend database stored inside server processes",
      "Functions that have access to the request object (req), response object (res), and the next function in the application cycle",
      "CSS templates used to style response pages",
      "Hardware infrastructure separating frontend and database servers"
    ],
    "answerIndex": 1,
    "explanation": "Middleware functions run sequentially during the request-response lifecycle. They can execute code, modify request/response objects, end the request cycle, or call next() to pass execution to the next middleware."
  },
  {
    "id": "exp_e3",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "Which function call initiates an Express application instance?",
    "options": [
      "const app = new Express();",
      "const app = express();",
      "const app = express.start();",
      "const app = express.init();"
    ],
    "answerIndex": 1,
    "explanation": "You initialize an Express app by importing the express module and calling it: 'const app = express();'."
  },
  {
    "id": "exp_e4",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "How do you serve static files like images, CSS, or client-side JS in Express?",
    "options": [
      "app.use(express.static('public'));",
      "app.serveFiles('public');",
      "app.use(express.serve('public'));",
      "app.static('public');"
    ],
    "answerIndex": 0,
    "explanation": "Express provides the built-in middleware 'express.static' to serve static assets directly from a designated directory (e.g. 'public')."
  },
  {
    "id": "exp_e5",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "What is the role of the third parameter 'next' in Express route handlers?",
    "options": [
      "It acts as a redirect URL to the login page",
      "It passes control of the current request execution to the next middleware function in the stack",
      "It forces the connection to terminate",
      "It handles database connection inputs"
    ],
    "answerIndex": 1,
    "explanation": "Calling next() tells Express to invoke the next middleware function in the routing pipeline. Skipping next() and not returning a response leaves the request hanging."
  },
  {
    "id": "exp_e6",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "How do you define a GET route handler at the path '/info' in Express?",
    "options": [
      "app.post('/info', handler);",
      "app.get('/info', handler);",
      "app.route('/info', GET, handler);",
      "app.use('/info', GET, handler);"
    ],
    "answerIndex": 1,
    "explanation": "To handle HTTP GET requests, use 'app.get(path, callback)'. Similarly, use app.post() for POST, app.put() for PUT, etc."
  },
  {
    "id": "exp_e7",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "Which of the following describes how you read URL path parameters, like ':id' in '/user/:id'?",
    "options": [
      "req.query.id",
      "req.params.id",
      "req.body.id",
      "req.headers.id"
    ],
    "answerIndex": 1,
    "explanation": "Path parameters (route parameters) are captured in the 'req.params' object. Query parameters (e.g. ?id=5) are captured in 'req.query'."
  },
  {
    "id": "exp_e8",
    "category": "Express.js",
    "difficulty": "Easy",
    "question": "Which method is used to bind and listen for connections on a specified port?",
    "options": [
      "app.listen(port, callback);",
      "app.bind(port, callback);",
      "app.start(port, callback);",
      "app.connect(port, callback);"
    ],
    "answerIndex": 0,
    "explanation": "The 'app.listen()' method starts a UNIX socket or TCP server, listening for incoming network connections on the specified port."
  },
  {
    "id": "exp_m1",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "How do you write an Express error-handling middleware function?",
    "options": [
      "app.use((req, res, next) => {});",
      "app.use((err, req, res, next) => {});",
      "app.use((err, req, res) => {});",
      "app.onError((err, req) => {});"
    ],
    "answerIndex": 1,
    "explanation": "Express identifies error-handling middleware by its signature: it MUST accept exactly 4 arguments: (err, req, res, next)."
  },
  {
    "id": "exp_m2",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "What middleware is required in modern Express (v4.16+) to parse incoming JSON payloads in request bodies?",
    "options": [
      "app.use(express.bodyParser());",
      "app.use(express.json());",
      "app.use(bodyParser.json());",
      "app.use(express.parseJSON());"
    ],
    "answerIndex": 1,
    "explanation": "Express v4.16.0 reintroduced built-in JSON parsing middleware based on body-parser. Calling 'app.use(express.json())' automatically parses JSON bodies into 'req.body'."
  },
  {
    "id": "exp_m3",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "What is the purpose of the Express.Router class?",
    "options": [
      "To direct network traffic to server nodes",
      "To create modular, mountable route handlers, grouping related routes together (routing architecture)",
      "To compress URL string redirects",
      "To fetch third-party API results asynchronously"
    ],
    "answerIndex": 1,
    "explanation": "Express.Router is a mini-application that can handle middleware and routing. It allows you to organize routes in separate files and mount them (e.g. app.use('/api', apiRouter)), keeping codebase maintainable."
  },
  {
    "id": "exp_m4",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "Why should you use the 'cors' middleware in an Express REST API?",
    "options": [
      "To compress the size of API JSON responses",
      "To enable Cross-Origin Resource Sharing, allowing client web pages on different domains to query the API",
      "To encrypt connection tokens",
      "To compile JSX components on server routes"
    ],
    "answerIndex": 1,
    "explanation": "Browsers restrict cross-origin network requests due to Same-Origin Policy. The 'cors' middleware sets the appropriate HTTP headers (like Access-Control-Allow-Origin), letting authorized client domains request data from your server."
  },
  {
    "id": "exp_m5",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "What happens if you pass an argument into next() in standard Express middleware, like next('error')?",
    "options": [
      "Express immediately exits the process",
      "Express skips all remaining normal middleware and routes, jumping directly to the error-handling middleware",
      "Express reloads the client browser page",
      "The string is printed directly to the stdout console logs"
    ],
    "answerIndex": 1,
    "explanation": "If you pass any value to next() (except the string 'route'), Express considers the current request an error and bypasses all remaining non-error-handling routing and middleware."
  },
  {
    "id": "exp_m6",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "How do you send a JSON response with an HTTP status code of 404 in Express?",
    "options": [
      "res.status(404).json({ error: 'Not Found' });",
      "res.send(404, { error: 'Not Found' });",
      "res.json(404, { error: 'Not Found' });",
      "res.setStatusCode(404).sendJSON({ error: 'Not Found' });"
    ],
    "answerIndex": 0,
    "explanation": "To send status codes and response bodies in a chain, use res.status(code).json(data) or res.status(code).send(data)."
  },
  {
    "id": "exp_m7",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "What is the purpose of the 'helmet' middleware in Express?",
    "options": [
      "To backup the database locally in case of failures",
      "To secure your Express app by setting various HTTP headers (security rules like XSS filters, clickjacking blocks)",
      "To compress response scripts",
      "To check if routes are responsive on mobile viewport layouts"
    ],
    "answerIndex": 1,
    "explanation": "Helmet is a popular middleware that sets headers (e.g. X-Content-Type-Options, Content-Security-Policy, Strict-Transport-Security) to protect your application from common web vulnerabilities."
  },
  {
    "id": "exp_m8",
    "category": "Express.js",
    "difficulty": "Medium",
    "question": "How does the 'dotenv' package integrate with an Express application?",
    "options": [
      "It styles the command line logs automatically",
      "It loads variables from a .env file into the process.env object, hiding secrets from code repositories",
      "It caches route endpoints in local browser memory",
      "It routes HTTP requests to secondary servers"
    ],
    "answerIndex": 1,
    "explanation": "dotenv reads a local '.env' file during initialization, adding configuration and secrets (like API keys, database URLs) to process.env, preventing developers from committing sensitive credentials."
  },
  {
    "id": "exp_h1",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "How does Express resolve overlapping routes, for example GET '/user/profile' versus GET '/user/:id'?",
    "options": [
      "Express checks the specificity of the route strings",
      "Express executes routes in the order they are registered in the code; if '/user/:id' is declared first, it will consume '/user/profile'",
      "Express throws a routing syntax collision error on startup",
      "Express runs routes in separate threads in parallel"
    ],
    "answerIndex": 1,
    "explanation": "Express routes are resolved sequentially in the order they are defined. If a parameter route like '/user/:id' is declared before a static route like '/user/profile', the parameter route will capture '/profile' as the :id parameter."
  },
  {
    "id": "exp_h2",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "What is the security risk of using default Express session cookie naming schemas?",
    "options": [
      "They make cookies too large for browser headers",
      "Using the default name 'connect.sid' exposes the server stack technology (Express), allowing targeted exploit attempts",
      "They compress session tokens incorrectly",
      "They block CORS configurations automatically"
    ],
    "answerIndex": 1,
    "explanation": "Exposing that an application runs on Express/Node allows attackers to focus on known vulnerabilities of that specific environment. Changing cookie names to generic identifiers (e.g. 'session_id') hides the server technologies."
  },
  {
    "id": "exp_h3",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "How does Express's 'trust proxy' setting impact request IP validation and secure cookies?",
    "options": [
      "It forces proxy servers to encrypt databases",
      "It tells Express to trust X-Forwarded-* headers (like X-Forwarded-For, X-Forwarded-Proto) set by reverse proxies like Nginx/Cloudflare, validating true client IPs and enabling secure-only cookies",
      "It permits routing connections without security key validation",
      "It directs client routes to backup host targets"
    ],
    "answerIndex": 1,
    "explanation": "When behind a proxy (like Nginx, Heroku, or Cloudflare), request properties (like req.ip or req.protocol) will reflect the proxy's IP, not the client's. Enabling 'trust proxy' makes Express trust the proxy headers to resolve the true client location and support secure HTTPS cookies."
  },
  {
    "id": "exp_h4",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "In Express, if an asynchronous middleware handler throws an error (e.g. database query failure), how must it be handled in Express v4 vs Express v5?",
    "options": [
      "In v4, it is ignored; in v5 it exits the server",
      "In v4, you must capture it and pass it to next(err) manually; in v5, rejected promises are caught and routed to error handler automatically",
      "In v4, async errors are logged to console; in v5 they are sent to client browsers",
      "They have identical requirements for manual catch blocks"
    ],
    "answerIndex": 1,
    "explanation": "In Express v4, unhandled errors in async routes cause the request to hang or crash the server; developers must wrap them in try/catch and call next(err). Express v5 automatically catches rejected promises and routes them to error middleware."
  },
  {
    "id": "exp_h5",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "What is a memory leak risk associated with registering middleware inside request route handlers dynamically?",
    "options": [
      "It causes browser cookie headers to overflow",
      "It adds middleware to the global application stack on every request, expanding the router stack array in memory indefinitely, causing a memory leak",
      "It forces Express to recreate routing regex tables in background worker threads",
      "It causes database sockets to duplicate"
    ],
    "answerIndex": 1,
    "explanation": "If you call 'app.use()' or 'router.use()' inside a route handler (e.g. on req), you append a new middleware function to the router's internal array. With every incoming request, this array grows, eventually leaking memory and crashing the node process."
  },
  {
    "id": "exp_h6",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "How does the 'path-to-regexp' library compile Express route parameters under the hood?",
    "options": [
      "It converts route paths into standard database queries",
      "It compiles route strings (e.g. '/user/:id') into regular expressions, which Express uses to test incoming URLs and extract params",
      "It styles the routing URL in the client browser bar",
      "It caches routing targets in server RAM"
    ],
    "answerIndex": 1,
    "explanation": "Express relies on path-to-regexp. It translates routes with parameters, wildcards, or regex matches into a RegExp object. When a request arrives, Express tests req.path against this RegExp to see if it matches and extracts path variables."
  },
  {
    "id": "exp_h7",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "How would you implement Server-Sent Events (SSE) inside an Express route?",
    "options": [
      "By returning a fast JSON response every 1 second",
      "By setting headers to 'text/event-stream' and 'Connection: keep-alive', keeping the socket open, and writing events using res.write()",
      "By binding the route to a WebSocket client script in local storage",
      "SSE is not supported in Express"
    ],
    "answerIndex": 1,
    "explanation": "SSE is a lightweight real-time protocol. In Express, you write a route that keeps the response stream open: setting 'Content-Type: text/event-stream', disabling caching, keeping connection alive, and writing data using res.write('data: ...\\n\\n')."
  },
  {
    "id": "exp_h8",
    "category": "Express.js",
    "difficulty": "Hard",
    "question": "What is the concern of using 'app.all()' vs 'app.use()' in route configuration?",
    "options": [
      "app.all handles CSS only; app.use handles HTML",
      "app.use matches path prefixes and intercepts sub-paths; app.all matches the exact route path for all HTTP methods",
      "app.use is client-side only; app.all runs server-side",
      "There is no difference in routing behavior"
    ],
    "answerIndex": 1,
    "explanation": "app.use('/api', ...) intercepts any request that STARTS with '/api' (e.g. '/api/users'). app.all('/api', ...) only matches the EXACT path '/api' for all HTTP verbs (GET, POST, etc.)."
  }
];
