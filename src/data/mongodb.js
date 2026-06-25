export const mongodbQuestions = [
  {
    "id": "db_e1",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "What is MongoDB?",
    "options": [
      "A relational SQL database storing data in rows and tables",
      "A NoSQL, document-oriented database that stores data in flexible, JSON-like BSON documents",
      "A CSS compiler database running inside client browsers",
      "A server-side JavaScript framework for API routing"
    ],
    "answerIndex": 1,
    "explanation": "MongoDB is a document-oriented NoSQL database. It replaces traditional SQL tables and rows with flexible collections containing JSON-like documents, enabling quick schema evolution."
  },
  {
    "id": "db_e2",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "How are data records structured inside MongoDB collections?",
    "options": [
      "In tables with rows and columns",
      "In BSON (Binary JSON) documents containing key-value pairs",
      "In plain text files separated by commas (CSV)",
      "In binary trees saved in local browser cookies"
    ],
    "answerIndex": 1,
    "explanation": "MongoDB documents are JSON-like objects stored in BSON format, which supports more data types (like Date or Binary) than standard JSON."
  },
  {
    "id": "db_e3",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "Which query method is used to retrieve documents from a MongoDB collection?",
    "options": [
      "db.collection.select()",
      "db.collection.find()",
      "db.collection.get()",
      "db.collection.fetch()"
    ],
    "answerIndex": 1,
    "explanation": "The find() method queries a collection for documents, returning a cursor to the matching documents."
  },
  {
    "id": "db_e4",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "What is the unique default identifier field automatically generated for every MongoDB document?",
    "options": [
      "id",
      "_id",
      "uuid",
      "key"
    ],
    "answerIndex": 1,
    "explanation": "Every MongoDB document must have a unique '_id' field that acts as its primary key. If omitted, MongoDB automatically generates a 12-byte ObjectId for it."
  },
  {
    "id": "db_e5",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "What is the difference between a Collection and a Document in MongoDB?",
    "options": [
      "A document holds collections; a collection holds fields",
      "A collection is equivalent to a SQL table; a document is equivalent to a row in that table",
      "A collection is client-side; a document is server-side",
      "They are identical terms in NoSQL databases"
    ],
    "answerIndex": 1,
    "explanation": "In MongoDB, documents are individual data records. A collection is a grouping of these documents, equivalent to a relational table."
  },
  {
    "id": "db_e6",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "Which operator is used to update fields inside a document using updateOne()?",
    "options": [
      "$update",
      "$set",
      "$change",
      "$put"
    ],
    "answerIndex": 1,
    "explanation": "The '$set' operator replaces the value of a field with the specified value. Without it, updateOne() will replace the entire document."
  },
  {
    "id": "db_e7",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "What is MongoDB Compass?",
    "options": [
      "Command line tool used to compile schema validators",
      "A graphical user interface (GUI) tool for querying, visualizing, and analyzing MongoDB data",
      "A navigation utility inside Node.js directories",
      "A cloud backup server for replica sets"
    ],
    "answerIndex": 1,
    "explanation": "Compass is MongoDB's official visual GUI. It lets developers explore data, construct queries, explain index paths, and inspect collections visually."
  },
  {
    "id": "db_e8",
    "category": "MongoDB",
    "difficulty": "Easy",
    "question": "Which method adds a single document to a collection in MongoDB?",
    "options": [
      "db.collection.add()",
      "db.collection.insertOne()",
      "db.collection.push()",
      "db.collection.save()"
    ],
    "answerIndex": 1,
    "explanation": "The insertOne() method inserts a single document into a collection. Use insertMany() to insert multiple documents."
  },
  {
    "id": "db_m1",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "What is the purpose of the MongoDB Aggregation Pipeline?",
    "options": [
      "To encrypt databases before transport",
      "To process documents in stages (e.g. matching, grouping, sorting) and return computed results, similar to SQL GROUP BY",
      "To balance read traffic among replica sets",
      "To compile schemas in Mongoose"
    ],
    "answerIndex": 1,
    "explanation": "The aggregation pipeline is a framework for data aggregation. Documents enter a multi-stage pipeline ($match, $group, $sort, $project) that transforms them into aggregated results."
  },
  {
    "id": "db_m2",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "What is Mongoose in Node.js/MongoDB development?",
    "options": [
      "An open-source database server competing with MongoDB Atlas",
      "An Object Data Modeling (ODM) library that provides schema validation and business logic integration for MongoDB",
      "A template styling engine for HTML outputs",
      "A caching server stored in RAM"
    ],
    "answerIndex": 1,
    "explanation": "Mongoose is a Node.js ODM library. Because MongoDB is schema-less, Mongoose provides structured schemas, validatons, queries, and hooks (middleware) to manage data safely from Node."
  },
  {
    "id": "db_m3",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "How do you create an index on the 'email' field in a MongoDB collection, and why?",
    "options": [
      "db.collection.createIndex({ email: 1 }); to speed up read queries filtering by email",
      "db.collection.setIndex('email'); to encrypt email strings",
      "db.collection.addIndex({ email: -1 }); to restrict duplicate emails automatically",
      "db.collection.index('email'); to validate email regex formats"
    ],
    "answerIndex": 0,
    "explanation": "createIndex({ email: 1 }) creates an ascending index. Indexes allow MongoDB to find matching documents quickly without performing slow collection scans (inspecting every document in the database)."
  },
  {
    "id": "db_m4",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "What is the Mongoose populate() method used for?",
    "options": [
      "To seed a database with mock dummy data",
      "To automatically reference documents in other collections (similar to a SQL join operation)",
      "To compress document file sizes before storage",
      "To render documents inside HTML templates"
    ],
    "answerIndex": 1,
    "explanation": "populate() lets you reference documents in other collections. When querying a document containing a reference ID (ref), calling populate('field') replaces the ID with the actual populated document from the referenced collection."
  },
  {
    "id": "db_m5",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "Which operator is used to filter documents where a value is greater than or equal to 50?",
    "options": [
      "{ price: { $gt: 50 } }",
      "{ price: { $gte: 50 } }",
      "{ price: { $eq: 50 } }",
      "{ price: { $in: 50 } }"
    ],
    "answerIndex": 1,
    "explanation": "$gte stands for 'Greater Than or Equal'. $gt is 'Greater Than', $lt is 'Less Than', and $lte is 'Less Than or Equal'."
  },
  {
    "id": "db_m6",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "What does the Mongoose schema 'timestamps: true' option do?",
    "options": [
      "It clocks the execution time of database queries",
      "It automatically adds 'createdAt' and 'updatedAt' Date fields to your documents",
      "It records user login session histories in client cookies",
      "It synchronizes the database with regional time zones"
    ],
    "answerIndex": 1,
    "explanation": "Setting { timestamps: true } in a Mongoose Schema options tells Mongoose to automatically generate and update 'createdAt' and 'updatedAt' fields on creation and update operations."
  },
  {
    "id": "db_m7",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "What is the difference between db.collection.updateOne() and db.collection.findOneAndUpdate()?",
    "options": [
      "updateOne is client-side; findOneAndUpdate is server-side",
      "updateOne only updates; findOneAndUpdate updates a document and returns the original or updated document in a single atomic step",
      "They are identical helper functions",
      "findOneAndUpdate does not support $set filters"
    ],
    "answerIndex": 1,
    "explanation": "updateOne() returns metadata about the write operation (matched/modified counts). findOneAndUpdate() returns the document itself (either before or after the update depending on the 'new' or 'returnNewDocument' option)."
  },
  {
    "id": "db_m8",
    "category": "MongoDB",
    "difficulty": "Medium",
    "question": "What are MongoDB security 'Role-Based Access Control' (RBAC) rules?",
    "options": [
      "Rules separating database models into independent folders",
      "A system defining user accounts and assigning specific read/write roles (readWrite, dbAdmin, root) to limit database access",
      "Encryption settings for local browser caches",
      "CORS settings inside Express.js middleware"
    ],
    "answerIndex": 1,
    "explanation": "RBAC allows you to secure MongoDB by creating user credentials and assigning them roles (e.g. readWrite only on a specific database, or administrative credentials) to prevent unauthorized queries."
  },
  {
    "id": "db_h1",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "What is a 'Compound Index' in MongoDB, and what is the 'Equality, Sort, Range' (ESR) rule for ordering fields in it?",
    "options": [
      "An index compressing multiple collections; ESR rules compress variables",
      "An index on multiple fields; ESR states that compound index fields should be ordered with Equality filters first, Sort fields second, and Range filters last",
      "An index validating SQL join structures",
      "An index stored in multi-threaded CPU cache systems"
    ],
    "answerIndex": 1,
    "explanation": "Compound indexes support queries matching multiple fields. To optimize index usage, the ESR rule suggests: 1. Equality: fields tested for exact matches, 2. Sort: fields used to sort results, 3. Range: fields tested with inequalities. Placing Sort before Range allows index-based sorting without loading data in memory."
  },
  {
    "id": "db_h2",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "How does the '$lookup' stage function inside the MongoDB Aggregation Pipeline, and what is its performance concern?",
    "options": [
      "It performs a search index lookup; concern: it can corrupt documents",
      "It performs a left outer join to another collection; concern: it can cause performance degradation (N+1 queries) if not backed by indexes on the foreign fields",
      "It encrypts foreign collection models; concern: CPU latency",
      "$lookup operates client-side only"
    ],
    "answerIndex": 1,
    "explanation": "$lookup merges documents from another collection based on matching fields. Because it acts like a nested loop join, running $lookup on unindexed fields forces MongoDB to scan the foreign collection repeatedly, causing massive read latencies."
  },
  {
    "id": "db_h3",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "What is the role of the 'Oplog' (Operations Log) in a MongoDB Replica Set?",
    "options": [
      "A backup file containing SQL queries",
      "A capped collection that records all write operations, which secondary members replicate to keep database states synchronized",
      "A log tracking system logins for GPG verification",
      "A temporary database tracking index builds in memory"
    ],
    "answerIndex": 1,
    "explanation": "Oplog is the heart of replication. When write operations hit the primary node, they are logged in the local.oplog.rs capped collection. Secondaries query this log asynchronously and apply the operations to their local data."
  },
  {
    "id": "db_h4",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "What are the primary considerations when selecting a 'Shard Key' to distribute collections across multiple MongoDB servers (sharding)?",
    "options": [
      "The shard key must be an integer, and the shard key size must exceed 1KB",
      "High cardinality (many unique values) and even write distribution (avoiding monotonic keys like dates that cause hot spots on a single shard)",
      "The shard key must match the _id field always",
      "There are no considerations; MongoDB shards data automatically without keys"
    ],
    "answerIndex": 1,
    "explanation": "Sharding distributes data across shards. A bad shard key (e.g. monotonically increasing IDs or dates) routes all writes to a single shard (hotspotting), defeating the purpose. A good key has high cardinality and write-distribution across all shards."
  },
  {
    "id": "db_h5",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "How does the WiredTiger storage engine handle concurrency control (locks) in modern MongoDB?",
    "options": [
      "It uses global database locking, preventing concurrent operations",
      "It uses document-level concurrency control, permitting multiple clients to modify different documents in the same collection simultaneously",
      "It uses collection-level locking exclusively",
      "It offloads concurrency control to the client-side JavaScript engine"
    ],
    "answerIndex": 1,
    "explanation": "WiredTiger uses document-level concurrency. Unlike older engines that locked entire databases or collections during write operations, WiredTiger permits simultaneous writes to different documents, dramatically increasing concurrent write throughput."
  },
  {
    "id": "db_h6",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "In Mongoose, how do 'pre' and 'post' save middleware hooks function, and what is a common pitfall when using arrow functions inside them?",
    "options": [
      "Hooks execute client-side; pitfall: they block React state updates",
      "They run before/after saving documents; pitfall: arrow functions bind 'this' lexically, losing access to the document instance (this)",
      "They are security triggers; pitfall: they can bypass encryption rules",
      "They are deprecated features in Mongoose v6"
    ],
    "answerIndex": 1,
    "explanation": "Pre-save hooks run validation or hash passwords before commit. Post-save hooks run notifications. Using an arrow function binds 'this' to the global context or parent module, so 'this.isModified()' throws an error because 'this' is not the Mongoose document."
  },
  {
    "id": "db_h7",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "How do you analyze a slow MongoDB query using the '.explain(\"executionStats\")' method?",
    "options": [
      "It prints query syntax errors to the terminal console",
      "It returns execution statistics (COLLSCAN vs IXSCAN, docs examined, keys examined, time execution), letting you identify missing indexes",
      "It sends slow query reports to MongoDB Atlas support automatically",
      "It deletes slow indexes automatically"
    ],
    "answerIndex": 1,
    "explanation": "explain('executionStats') returns execution details. If 'stage' is 'COLLSCAN', MongoDB scanned the whole collection (slow). If 'IXSCAN', it used an index. Comparing 'totalDocsExamined' to 'nReturned' tells you if the index is efficient."
  },
  {
    "id": "db_h8",
    "category": "MongoDB",
    "difficulty": "Hard",
    "question": "What is the difference between Write Concern and Read Concern in MongoDB replica set configurations?",
    "options": [
      "Write Concern encrypts write inputs; Read Concern decrypts them",
      "Write Concern defines when a write is confirmed (e.g. w: 1, w: 'majority'); Read Concern defines the consistency level of read data (e.g. local, majority, linearizable)",
      "Write Concern limits client uploads; Read Concern limits page downloads",
      "They are deprecated options in MongoDB Atlas"
    ],
    "answerIndex": 1,
    "explanation": "Write Concern controls when MongoDB reports a write successful (e.g. once written to disk on primary, or replicated to a majority). Read Concern controls read isolation and consistency (e.g. 'majority' only reads data acknowledged by a majority of replica members, preventing dirty reads)."
  }
];
