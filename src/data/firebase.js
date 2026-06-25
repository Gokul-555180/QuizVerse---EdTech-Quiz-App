export const firebaseQuestions = [
  {
    "id": "fb_e1",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "What is Google Firebase?",
    "options": [
      "An open-source compiler for JavaScript applications",
      "A Backend-as-a-Service (BaaS) platform providing databases, auth, hosting, and cloud functions",
      "A relational database engine running locally in standard browsers",
      "A server-side framework competing with Express.js"
    ],
    "answerIndex": 1,
    "explanation": "Firebase is Google's Backend-as-a-Service platform. It helps developers build, manage, and grow apps quickly by handling backend infrastructure (auth, databases, storage) automatically."
  },
  {
    "id": "fb_e2",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "What kind of database is Cloud Firestore?",
    "options": [
      "A relational SQL database with schema validations",
      "A NoSQL document-oriented database that stores data in documents and collections",
      "A key-value store stored in browser cookies",
      "A graph database specialized in social connections"
    ],
    "answerIndex": 1,
    "explanation": "Firestore is a NoSQL, document-based database. It structures data as collections containing documents, which can contain subcollections or fields mapped to JSON-like values."
  },
  {
    "id": "fb_e3",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "Which Firebase service provides easy user registration and sign-in capabilities?",
    "options": [
      "Cloud Firestore",
      "Firebase Authentication",
      "Cloud Storage",
      "Firebase Cloud Messaging"
    ],
    "answerIndex": 1,
    "explanation": "Firebase Authentication handles user registration, login, and identity provider integration (Google, GitHub, email/password) out of the box."
  },
  {
    "id": "fb_e4",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "How do you listen to real-time document updates in Cloud Firestore?",
    "options": [
      "By polling the API every 3 seconds",
      "Using the onSnapshot() listener function",
      "Using getDoc() in a recursive loop",
      "By setting up a web socket connection manually in the component"
    ],
    "answerIndex": 1,
    "explanation": "Firestore's onSnapshot() method allows you to listen to a document or query in real time. It triggers a callback whenever the database data changes."
  },
  {
    "id": "fb_e5",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "What is Firebase Hosting primarily used for?",
    "options": [
      "Running heavy machine learning computations",
      "Hosting static and dynamic web apps with fast, global CDN delivery",
      "Storing large user-uploaded media files like videos",
      "Managing server databases in cloud processes"
    ],
    "answerIndex": 1,
    "explanation": "Firebase Hosting provides fast, secure hosting for web apps (static HTML/JS/CSS, Next.js, etc.) served from a global CDN with SSL enabled by default."
  },
  {
    "id": "fb_e6",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "Where do you configure security rules to protect database access in Firebase?",
    "options": [
      "In the client-side React App.jsx",
      "In the Firebase Console or in firestore.rules configuration files",
      "Inside browser cookies settings",
      "Inside package.json environment tags"
    ],
    "answerIndex": 1,
    "explanation": "Firebase Security Rules (set up in the console or in local rule files) control access to Firestore or Storage, validating read/write permissions securely on Google's servers."
  },
  {
    "id": "fb_e7",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "Which authentication method allows users to sign in temporary without credentials?",
    "options": [
      "Google Sign-In",
      "Anonymous Authentication",
      "Phone Authentication",
      "Custom Token Sign-In"
    ],
    "answerIndex": 1,
    "explanation": "Anonymous Authentication allows users to access protected resources without requiring them to enter email/password, creating a temporary profile that can later be linked to full credentials."
  },
  {
    "id": "fb_e8",
    "category": "Firebase",
    "difficulty": "Easy",
    "question": "What does Firebase SDK's initializeApp() do?",
    "options": [
      "Compiles the frontend components to WebAssembly",
      "Establishes connection config and initializes Firebase services in the client app",
      "Deploys files to production servers instantly",
      "Validates HTML pages for SEO"
    ],
    "answerIndex": 1,
    "explanation": "initializeApp() takes configuration keys (API Key, Project ID, App ID, etc.) and initializes the connection between your frontend client and Firebase backend services."
  },
  {
    "id": "fb_m1",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "What is the difference between Firestore and Firebase Realtime Database (RTDB)?",
    "options": [
      "RTDB is relational; Firestore is NoSQL",
      "RTDB stores data as one giant JSON tree; Firestore stores data in structured documents, collections, and supports complex queries",
      "Firestore is only for mobile apps; RTDB is for web apps",
      "RTDB does not support real-time data sync; Firestore does"
    ],
    "answerIndex": 1,
    "explanation": "RTDB is Firebase's original database, storing all data as a single JSON tree. Firestore is the newer database, storing data as collections of documents. Firestore scales better and supports more complex queries and indexing."
  },
  {
    "id": "fb_m2",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "How do you write a Firestore query to fetch users where 'age' is greater than 18 and sort them by 'name'?",
    "options": [
      "query(collection(db, 'users'), where('age', '>', 18), orderBy('name'))",
      "db.users.find({ age: { $gt: 18 } }).sort('name')",
      "query(collection(db, 'users'), filter('age > 18'), sort('name'))",
      "fetch('users').where('age > 18').orderBy('name')"
    ],
    "answerIndex": 0,
    "explanation": "In Firebase JS SDK v9+, queries are constructed using functional operators: query(collectionRef, where('age', '>', 18), orderBy('name'))."
  },
  {
    "id": "fb_m3",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "How does the 'onAuthStateChanged' listener behave in Firebase Authentication?",
    "options": [
      "It fires only when a user registers for the first time",
      "It monitors auth state shifts, triggering callbacks on user sign-in, sign-out, or session initialization",
      "It reloads the browser page whenever session cookies expire",
      "It checks if password meets security complexity rules"
    ],
    "answerIndex": 1,
    "explanation": "onAuthStateChanged is an observer that listens to changes in the user's sign-in state. It is triggered when a user signs in, signs out, or when the SDK restores the session state on page refresh."
  },
  {
    "id": "fb_m4",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "What are Firebase Cloud Functions used for?",
    "options": [
      "To host React client-side pages on global CDNs",
      "To write server-side code that runs automatically in response to events (e.g. database changes, HTTPS requests)",
      "To run graphic rendering calculations for games",
      "To style layout elements using CSS variables"
    ],
    "answerIndex": 1,
    "explanation": "Cloud Functions allow you to run server-side JavaScript/TypeScript code in a managed environment. They can be triggered by HTTP endpoints or by event listeners like Firestore writes, Auth user creations, or Cloud Storage uploads."
  },
  {
    "id": "fb_m5",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "What security rule would allow any user to read a document, but only authenticated users to write to it?",
    "options": [
      "allow read; allow write: if request.auth != null;",
      "allow read: true; allow write: false;",
      "allow read: if auth; allow write: if admin;",
      "allow read: if true; allow write: if request.auth != null;"
    ],
    "answerIndex": 3,
    "explanation": "In Firestore rules syntax, allowing anyone to read translates to 'allow read: if true;', and restricting writes to authenticated users translates to checking if request.auth is not null: 'allow write: if request.auth != null;'."
  },
  {
    "id": "fb_m6",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "What service does Firebase provide to store user-generated content like photos and videos?",
    "options": [
      "Firebase Hosting",
      "Cloud Storage for Firebase",
      "Cloud Firestore",
      "Firebase Cloud Messaging"
    ],
    "answerIndex": 1,
    "explanation": "Cloud Storage stores and serves user-generated content (like photos, audio, or video files), backed by Google Cloud Storage for high durability and massive scale."
  },
  {
    "id": "fb_m7",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "How does offline persistence work in Firestore?",
    "options": [
      "By copying the database to a secondary SQL database inside web pages",
      "By caching data in IndexedDB, allowing reading/writing data offline and syncing when connection resumes",
      "By disabling database interactions when offline",
      "By saving data directly to the user's local downloads directory"
    ],
    "answerIndex": 1,
    "explanation": "When persistence is enabled, Firestore caches documents locally in the browser's IndexedDB. Apps can read/write data offline, and the SDK automatically syncs local mutations back to Firestore when the network reconnects."
  },
  {
    "id": "fb_m8",
    "category": "Firebase",
    "difficulty": "Medium",
    "question": "What is the purpose of custom security rules helper functions?",
    "options": [
      "To compress rule files for production",
      "To write reusable validation checks (e.g. checkAdminOrOwner()) to keep security rules maintainable",
      "To run Express.js middleware routes inside Firebase rule configurations",
      "To encrypt security logs in the Firebase dashboard"
    ],
    "answerIndex": 1,
    "explanation": "Firestore rules support custom functions: 'function isAdmin() { return request.auth.token.admin == true; }'. They improve readability and promote reuse of validation logic."
  },
  {
    "id": "fb_h1",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "Why does Cloud Firestore sometimes require you to create a 'Composite Index' for queries?",
    "options": [
      "To encrypt databases for security compliance",
      "To query multiple fields with inequalities (<, >, etc.) or sort by one field while filtering on another",
      "To join collections like a SQL inner join operation",
      "To bypass security rule validations"
    ],
    "answerIndex": 1,
    "explanation": "Firestore automatically indexes single fields. However, complex queries filtering and sorting on different fields require a composite index (created in Firebase console) so Firestore can fetch results in a single scan without scanning the whole database."
  },
  {
    "id": "fb_h2",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "In Cloud Firestore, what happens under the hood during a Transaction and how does it prevent race conditions?",
    "options": [
      "It locks the entire database, preventing all writes by other clients",
      "It reads values, and if a concurrent write alters the documents before commit, the transaction retries automatically",
      "It copies records to a local database sandbox before committing asynchronously",
      "It executes queries in parallel using background worker threads"
    ],
    "answerIndex": 1,
    "explanation": "Firestore uses optimistic concurrency control. A transaction performs reads first. When writing, if the database detects that any read documents were modified by another client during the transaction, it rolls back and retries the entire operation."
  },
  {
    "id": "fb_h3",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "What is the Firestore write limit constraint (per document) that developers must plan for in high-concurrency apps?",
    "options": [
      "100 writes per second per document",
      "1 write per second per document",
      "1,000 writes per second per document",
      "No limits on document writes"
    ],
    "answerIndex": 1,
    "explanation": "Firestore has a soft limit of 1 write per second to any single document. Exceeding this limit in high-concurrency scenarios (e.g. a global counter document) causes contention and slows down operations. Developers use distributed counters to solve this."
  },
  {
    "id": "fb_h4",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "How do Custom Claims work in Firebase Authentication, and what is their limit size?",
    "options": [
      "They customize the email validation text; limit: 1MB",
      "They add custom properties (like user roles) to the user's ID token, validated server-side; limit: 1000 bytes",
      "They link database models to Auth profiles; limit: 10KB",
      "They encrypt authentication passwords; limit: 512 bits"
    ],
    "answerIndex": 1,
    "explanation": "Custom Claims allow adding metadata (like role: 'admin') to Firebase Auth ID tokens. This is useful for role-based access control. Because these claims are embedded in JWTs, they must be small (under 1000 bytes) to prevent network bloat."
  },
  {
    "id": "fb_h5",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "In Cloud Firestore security rules, what is the difference between 'request.resource' and 'resource' variables?",
    "options": [
      "request.resource is client-side; resource is server-side",
      "request.resource represents the pending document data being written; resource represents the existing document data on the server",
      "request.resource is temporary; resource is persistent",
      "They are aliases with identical properties"
    ],
    "answerIndex": 1,
    "explanation": "During a write operation, 'resource' represents the document state as it exists on the database server before the write. 'request.resource' represents the document state that will exist if the write succeeds, allowing you to validate changes."
  },
  {
    "id": "fb_h6",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "What is the key benefit of Firebase Cloud Functions v2 over v1?",
    "options": [
      "v2 functions can run without Node.js",
      "v2 supports request concurrency (up to 80 requests per instance) and is built on Google Cloud Run",
      "v2 is completely free of charge",
      "v2 bypasses API routes completely"
    ],
    "answerIndex": 1,
    "explanation": "Cloud Functions v2 runs on Cloud Run, introducing support for request concurrency (handling multiple parallel requests on a single instance, reducing cold starts), larger memory limits, and integration with Eventarc."
  },
  {
    "id": "fb_h7",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "How would you handle a secure Firestore database operation that depends on validating third-party payment APIs?",
    "options": [
      "Write payment validation inside React components directly",
      "Perform payment validation in a Firebase Cloud Function (HTTPS callable) and update Firestore from the server side",
      "Add the payment API key into Firestore security rules",
      "Use local storage flags to verify payments"
    ],
    "answerIndex": 1,
    "explanation": "Client-side code cannot securely verify payments since it can be manipulated. You must run this validation in a secure, server-side environment like a Cloud Function, which validates the payment and updates Firestore directly using the Admin SDK."
  },
  {
    "id": "fb_h8",
    "category": "Firebase",
    "difficulty": "Hard",
    "question": "What is the difference between subcollections and nested maps in Cloud Firestore schema design?",
    "options": [
      "Subcollections can only hold text; maps hold integers",
      "Nested maps are embedded inside the parent document, contributing to its 1MB size limit; subcollections are independent documents and scale infinitely",
      "Maps are relational tables; subcollections are arrays",
      "Maps are slower than subcollections for small datasets"
    ],
    "answerIndex": 1,
    "explanation": "Nested maps are fields within a document, which has a 1MB limit. Subcollections exist as separate documents underneath the parent document path. Subcollections can scale to billions of documents and support independent querying."
  }
];
