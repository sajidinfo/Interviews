# NodeJS Interview Questions & Answers

---

<p align="center">
  <a href=https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions>
    <img src=https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:70/https://www.filepicker.io/api/file/AKYtjj5SSGyJuyZrkAB2 alt="ZTM Logo" width="100" height="50">
  </a>
  <p align="center">
    <ol>
    <li>Take this <a href=https://links.zerotomastery.io/jsp_sudheer>NodeJS Projects</a> course to go from a JS beginner to confidently building your own projects</li>
    <li>Take this <a href=https://links.zerotomastery.io/mci_sudheer2>coding interview bootcamp</a> if you’re serious about getting hired and don’t have a CS degree</li>
    <li>Take this <a href=https://links.zerotomastery.io/ajs_sudheer>Advanced NodeJS Course</a> to learn advanced JS concepts and become a top JS developer</li>
    </ol>
  </p>
</p>

---

Here are well-structured answers to your Node.js interview questions based on your 4 years of experience:

---

### **Q1. What is Node.js and Where can you use it?**  
**Answer:**  
Node.js is a JavaScript runtime built on Chrome's V8 engine that executes JavaScript outside the browser. It uses an event-driven, non-blocking I/O model, making it lightweight and efficient.  

**Where I’ve used it:**  
- **Backend APIs** (RESTful & GraphQL)  
- **Real-time apps** (Chat, Gaming, Live Updates)  
- **Microservices Architecture**  
- **Serverless Functions** (AWS Lambda, Firebase)  
- **Scripting & Automation** (Build tools, Data processing)  

---

### **Q2. Why use Node.js?**  
**Answer:**  
Node.js is ideal for:  
- **High concurrency** (Handles thousands of connections efficiently).  
- **Fast execution** (V8 engine + asynchronous processing).  
- **Unified language** (JavaScript for both frontend and backend).  
- **Rich ecosystem** (npm’s 2M+ packages).  
- **Scalability** (Horizontal scaling with clusters).  

**From my experience**, it reduced development time by reusing code (e.g., shared validation logic between frontend/backend).  

---

### **Q3. How does Node.js work?**  
**Answer:**  
Node.js operates on:  
1. **Event Loop** (Single-threaded, handles async callbacks).  
2. **Worker Pool** (Libuv manages threads for I/O tasks like FS, DNS).  
3. **V8 Engine** (Compiles JS to machine code).  

**Example:** When an API request arrives, Node offloads blocking operations (DB calls) to the worker pool and continues processing other requests.  

---

### **Q4. Why is Node.js Single-threaded?**  
**Answer:**  
Node.js is single-threaded to:  
- Simplify code execution (no thread synchronization).  
- Avoid context-switching overhead.  
- Leverage JavaScript’s event-driven nature.  

**Trade-off:** CPU-heavy tasks (e.g., image processing) can block the thread, requiring solutions like worker threads (which I’ve used for PDF generation).  

---

### **Q5. How does Node.js handle concurrency if it’s single-threaded?**  
**Answer:**  
Node.js uses:  
- **Event Loop** for non-blocking operations (e.g., HTTP requests).  
- **Worker Pool** (via Libuv) for parallel I/O tasks.  
- **Event Emitters** (e.g., `http.Server` emits ‘request’ events).  

**In my projects**, this allowed handling 10K+ concurrent WebSocket connections efficiently.  

---

### **Q6. Explain callback in Node.js.**  
**Answer:**  
A callback is a function passed as an argument to another function, executed after an async operation completes.  

**Example from my work:**  
```javascript 
fs.readFile('data.json', (err, data) => { 
  if (err) throw err; 
  console.log(data); 
}); 
```  
**Challenge:** Callback hell (nested callbacks). Solved using **promises/async-await**.  

---

### **Q7. Advantages of promises over callbacks?**  
**Answer:**  
1. **Readability** (Avoid nested "pyramid of doom").  
2. **Error Handling** (Single `.catch()` vs multiple `if(err)` checks).  
3. **Chaining** (`.then().then()` for sequential tasks).  
4. **Composition** (`Promise.all()` for parallel tasks).  

**Example:** I refactored a legacy callback-based DB module to promises, reducing bugs by 30%.  

---

### **Q8. What is I/O?**  
**Answer:**  
I/O (Input/Output) refers to data movement between a system and external sources (e.g., disk, network, DB). Node.js optimizes I/O via:  
- **Non-blocking ops** (Overlaps I/O with other tasks).  
- **Event notifications** (e.g., `epoll` in Linux).  

**Experience:** Improved API response times by 40% by optimizing DB I/O with connection pooling.  

---

### **Q9. How is Node.js most frequently used?**  
**Answer:**  
- **APIs/Microservices** (Express, Fastify).  
- **Real-time apps** (Socket.io, Pusher).  
- **Serverless** (AWS Lambda).  
- **Tools/CLIs** (Webpack, ESLint).  

**My Work:** Built a microservice for payment processing handling 500+ TPS.  

---

### **Q10. Frontend vs Backend Development?**  
**Answer:**  
| **Frontend**              | **Backend**               |  
|---------------------------|---------------------------|  
| UI/UX (React, Vue)        | Server logic (Node, DBs)  |  
| Runs in browser           | Runs on server            |  
| Concerned with visuals    | Handles data, security    |  

**My Experience:** Full-stack roles taught me to optimize API payloads to reduce frontend load times.  

---
  

---

### **Q11. What is NPM?**  
**Answer:**  
NPM (Node Package Manager) is the default package manager for Node.js, hosting over 2 million reusable packages. It handles:  
- **Dependency management** (`package.json`).  
- **Script execution** (e.g., `npm run dev`).  
- **Version control** (`semver` in `package-lock.json`).  

**My Use Case:** Automated deployments using `npm scripts` to build and deploy microservices.  

---

### **Q12. What are the modules in Node.js?**  
**Answer:**  
Modules are reusable code blocks. Types:  
1. **Core Modules** (`fs`, `http` – built into Node.js).  
2. **Local Modules** (Custom files, e.g., `./utils/logger.js`).  
3. **Third-party Modules** (Installed via npm, e.g., `express`).  

**Example:** I created a shared `auth` module for JWT validation across 5+ APIs.  

---

### **Q13. Purpose of module.exports?**  
**Answer:**  
`module.exports` exposes functions/objects from a module for reuse in other files.  

**Before (CommonJS):**  
```javascript
// logger.js
module.exports = { log: msg => console.log(msg) };
```
**After (ES6):**  
```javascript
// Importer
import { log } from './logger.js';
```  
**Experience:** Migrated a legacy codebase from `module.exports` to ES6 modules for better tree-shaking.  

---

### **Q14. Why Node.js over Java/PHP?**  
**Answer:**  

| **Node.js**               | **Java/PHP**              |  
|---------------------------|---------------------------|  
| Non-blocking I/O (Fast)   | Thread-per-request (Slower) |  
| JavaScript (Full-stack)   | Language switching needed  |  
| Lightweight (Microservices)| Heavier (Monoliths)       |  

**Case Study:** Scaled a real-time analytics dashboard to 10K users with Node.js, while a Java prototype failed at 2K.  

---

### **Q15. Angular vs Node.js?**  
**Answer:**  

| **Angular**               | **Node.js**               |  
|---------------------------|---------------------------|  
| Frontend Framework        | Backend Runtime           |  
| TypeScript-based          | JavaScript-based          |  
| Renders UI                | Handles APIs/DB Calls     |  

**My Work:** Used Angular for admin dashboards and Node.js to serve their APIs.  

---

### **Q16. Popular Databases with Node.js?**  
**Answer:**  
- **NoSQL:** MongoDB (MERN stack), Redis (caching).  
- **SQL:** PostgreSQL (Prisma/Knex), MySQL.  
- **GraphQL:** Apollo Server with any DB.  

**Project Example:** Built a fraud detection system using MongoDB’s aggregation pipeline.  

---

### **Q17. Commonly Used Node.js Libraries**  
**Answer:**  
- **HTTP:** `express`, `fastify`.  
- **Database:** `mongoose` (MongoDB), `sequelize` (SQL).  
- **Auth:** `passport`, `jsonwebtoken`.  
- **Testing:** `jest`, `mocha`.  
- **Logging:** `winston`, `morgan`.  

**Experience:** Reduced API latency by 30% using `fastify` instead of `express`.  

---

### **Q18. Pros and Cons of Node.js**  
**Answer:**  

**Pros:**  
- High performance for I/O-heavy apps.  
- Large ecosystem (npm).  
- Easy to learn (JavaScript).  

**Cons:**  
- Not ideal for CPU-heavy tasks (e.g., video encoding).  
- Callback hell (mitigated by async/await).  
- Less mature than Java for enterprise apps.  

**Lesson Learned:** Used worker threads to offload CPU-heavy report generation.  

---

### **Q19. Command to Import External Libraries?**  
**Answer:**  
- **CommonJS:**  
  ```javascript
  const express = require('express');
  ```  
- **ES6:**  
  ```javascript
  import express from 'express';
  ```  
**Note:** Enable ES6 by adding `"type": "module"` in `package.json`.  

---

### **Q20. Event-Driven Programming?**  
**Answer:**  
A paradigm where code execution is triggered by events (e.g., clicks, HTTP requests).  

**Node.js Example:**  
```javascript
server.on('request', (req, res) => { 
  res.end('Hello World'); 
});
```  
**Real-World Use:** Built a logistics tracker emitting `location_update` events via EventEmitter.  

--- 

**Key Tip:** Relate answers to your projects (e.g., *"I chose MongoDB for its flexibility in handling evolving schemas in my startup’s MVP"*).  

Need refinements? Let me know!

Here are clear, experience-driven answers to your Node.js interview questions:  

---

### **Q21. What is an Event Loop in Node.js?**  
**Answer:**  
The **Event Loop** is Node.js’s mechanism for handling asynchronous operations. It allows Node to perform non-blocking I/O despite being single-threaded.  

**Phases of the Event Loop (Order of Execution):**  
1. **Timers** (`setTimeout`, `setInterval`).  
2. **Pending Callbacks** (Executes I/O callbacks deferred to the next loop).  
3. **Poll** (Retrieves new I/O events; executes their callbacks).  
4. **Check** (`setImmediate` callbacks run here).  
5. **Close** (Clean-up callbacks, e.g., `socket.on('close')`).  

**Real-World Use:** Optimized an API by batching DB calls in the **Poll phase** to reduce latency.  

---

### **Q22. Difference Between `process.nextTick()` and `setImmediate()`?**  
**Answer:**  

| **`process.nextTick()`**      | **`setImmediate()`**          |  
|-------------------------------|--------------------------------|  
| Executes **before** the next event loop phase. | Executes **in the Check phase** of the event loop. |  
| Higher priority (runs immediately after the current operation). | Lower priority. |  

**Example:**  
```javascript
console.log('Start');  
process.nextTick(() => console.log('NextTick'));  
setImmediate(() => console.log('Immediate'));  
console.log('End');  
```  
**Output:**  
```
Start → End → NextTick → Immediate  
```  

**Use Case:** Used `nextTick` to ensure a config file was loaded before server startup.  

---

### **Q23. What is an EventEmitter in Node.js?**  
**Answer:**  
`EventEmitter` (from the `events` module) allows objects to emit and listen for events.  

**Key Methods:**  
- `.emit(eventName, args)`: Triggers the event.  
- `.on(eventName, listener)`: Attaches a listener.  

**Example:**  
```javascript
const EventEmitter = require('events');  
class Logger extends EventEmitter {  
  log(msg) {  
    this.emit('message', { id: 1, msg });  
  }  
}  
const logger = new Logger();  
logger.on('message', data => console.log(data));  
logger.log('Hello!');  
```  

**Project Use:** Built a real-time notification system using `EventEmitter`.  

---

### **Q24. Two Types of API Functions in Node.js?**  
**Answer:**  
1. **Blocking (Synchronous):**  
   - Pauses execution until completion (e.g., `fs.readFileSync`).  
   - Used in scripts where order is critical.  

2. **Non-Blocking (Asynchronous):**  
   - Uses callbacks/promises (e.g., `fs.readFile`).  
   - Preferred for I/O operations (DB calls, HTTP requests).  

**Optimization Tip:** Used async APIs exclusively in a high-traffic e-commerce backend to handle 5K RPM.  

---

### **Q25. What is `package.json`?**  
**Answer:**  
A configuration file that includes:  
- **Dependencies** (`dependencies`, `devDependencies`).  
- **Scripts** (e.g., `start`, `test`).  
- **Metadata** (name, version, license).  

**Key Command:**  
```bash
npm init -y  # Generates a default package.json
```  

**Pro Tip:** Use `npm ci` (clean install) in production for deterministic builds.  

---

### **Q26. How to Use the URL Module?**  
**Answer:**  
Parses and formats URLs.  

**Example:**  
```javascript
const url = require('url');  
const parsed = url.parse('https://example.com/api?user=1', true);  
console.log(parsed.query.user); // 1  
```  

**Use Case:** Extracted query params in a legacy API before migrating to Express.  

---

### **Q27. What is Express.js?**  
**Answer:**  
A minimal, flexible Node.js web framework for building:  
- **APIs** (REST, GraphQL).  
- **Server-rendered apps** (with templating like EJS).  
- **Middleware pipelines** (e.g., auth, logging).  

**Why I Use It:** Simplified routing in a microservices project (50+ endpoints).  

---

### **Q28. Create a Simple Express App**  
**Answer:**  
```javascript
const express = require('express');  
const app = express();  

app.get('/', (req, res) => res.send('Hello World'));  

app.listen(3000, () => console.log('Server running on port 3000'));  
```  

**Added Complexity:** Integrated `helmet` for security and `morgan` for logging.  

---

### **Q29. What are Streams in Node.js?**  
**Answer:**  
Streams process data **chunk by chunk** (without loading entire files into memory).  

**Types:**  
- **Readable** (`fs.createReadStream`).  
- **Writable** (`fs.createWriteStream`).  
- **Duplex** (TCP sockets).  
- **Transform** (e.g., Gzip compression).  

**Project Use:** Streamed 10GB CSV files into MongoDB using `csv-parser`.  

---

### **Q30. Install/Update/Delete a Dependency**  
**Answer:**  
- **Install:**  
  ```bash
  npm install express        # Latest version
  npm install express@4.18.2 # Specific version
  ```  
- **Update:**  
  ```bash
  npm update express        # Updates to latest allowed by package.json
  ```  
- **Delete:**  
  ```bash
  npm uninstall express
  ```  

**Pro Tip:** Use `npm outdated` to check for updatable packages.  

---

### **Q31. Simple "Hello World" Server**  
**Answer:**  
```javascript
const http = require('http');  
const server = http.createServer((req, res) => {  
  res.writeHead(200, { 'Content-Type': 'text/plain' });  
  res.end('Hello World');  
});  
server.listen(3000);  
```  

**Upgraded Later:** Added Express for routing and middleware.  

---

### **Q32. Asynchronous vs Non-Blocking APIs**  
**Answer:**  
- **Asynchronous:** Operations complete at any time; results handled via callbacks/promises.  
- **Non-Blocking:** The thread isn’t paused (e.g., Node.js’s Event Loop).  

**Key Point:** All non-blocking APIs in Node.js are asynchronous, but not all async APIs are non-blocking (e.g., `fs.readFileSync` is blocking).  

---

### **Q33. Implementing Async in Node.js**  
**Answer:**  
1. **Callbacks:**  
   ```javascript
   fs.readFile('file.txt', (err, data) => { /* ... */ });  
   ```  
2. **Promises:**  
   ```javascript
   fs.promises.readFile('file.txt').then(data => { /* ... */ });  
   ```  
3. **Async/Await:**  
   ```javascript
   const data = await fs.promises.readFile('file.txt');  
   ```  

**Refactoring Win:** Migrated a callback-heavy codebase to async/await, reducing bugs by 40%.  

---

### **Q34. Callback Function in Node.js**  
**Answer:**  
A function passed as an argument to another function, executed after an async operation.  

**Example:**  
```javascript
function fetchData(callback) {  
  setTimeout(() => callback('Data loaded'), 1000);  
}  
fetchData(data => console.log(data));  
```  

**Legacy Challenge:** Solved callback hell using `Promise.promisify`.  

---

### **Q35. What is REPL in Node.js?**  
**Answer:**  
**Read-Eval-Print Loop** – An interactive Node.js shell for quick testing.  

**Access:** Run `node` in the terminal.  

**Use Case:** Debugged a regex pattern live in REPL before adding it to a validator.  

---

### **Q36. What is Control Flow?**  
**Answer:**  
The order in which function calls are executed, especially in async code.  

**Libraries for Control Flow:**  
- `async.js` (e.g., `series`, `parallel`).  
- Native `Promise.all`/`Promise.race`.  

**Project Example:** Used `Promise.all` to concurrently fetch user data and orders.  

---

### **Q37. How Control Flow Manages Function Calls**  
**Answer:**  
- **Sequential:** Callbacks/promises chain operations in order.  
- **Parallel:** `Promise.all` runs tasks simultaneously.  
- **Race:** `Promise.race` resolves when the first task completes.  

**Optimization:** Parallelized API calls to third-party services, cutting response time by 60%.  

---

### **Q38. `fork()` vs `spawn()` in Node.js**  
**Answer:**  

| **`fork()`**                  | **`spawn()`**                |  
|-------------------------------|-------------------------------|  
| Special case of `spawn()` for **Node.js scripts**. | Launches **any system command**. |  
| Uses IPC (Inter-Process Communication). | No IPC by default. |  
| Shares memory (if needed).    | Isolated process.            |  

**Use Case:** Used `fork()` to parallelize CPU-heavy image processing.  

---

### **Q39. Buffer Class in Node.js****  
**Answer:**  
Buffers temporarily store **binary data** (e.g., file streams, network packets).  

**Example:**  
```javascript
const buf = Buffer.from('Hello', 'utf8');  
console.log(buf); // <Buffer 48 65 6c 6c 6f>  
```  

**Real-World Use:** Processed uploaded PDFs by chunking them into buffers.  

---

### **Q40. Piping in Node.js**  
**Answer:**  
Connects a **Readable stream** to a **Writable stream** directly.  

**Example:**  
```javascript
const fs = require('fs');  
fs.createReadStream('input.txt')  
  .pipe(fs.createWriteStream('output.txt'));  
```  

**Optimization:** Piped 1GB+ log files to a compression stream (Gzip) without memory overload.  

--- 

---

### **Q41. Flags for File Read/Write in Node.js**  
**Answer:**  
Flags define how files are opened/created:  
- `'r'` – Read (default, throws error if file doesn’t exist).  
- `'w'` – Write (creates file or overwrites existing).  
- `'a'` – Append (creates file or appends to existing).  
- `'r+'` – Read + write (file must exist).  
- `'wx'` – Write (fails if file exists).  

**Example:**  
```javascript
fs.writeFile('log.txt', 'data', { flag: 'a' }, (err) => { /* ... */ });  
```  
**Use Case:** Used `'a'` flag for audit logs to preserve historical data.  

---

### **Q42. Opening a File in Node.js**  
**Answer:**  
Using `fs.open()`:  
```javascript
const fs = require('fs');  
fs.open('file.txt', 'r', (err, fd) => {  
  if (err) throw err;  
  fs.close(fd, () => console.log('File closed'));  
});  
```  
**Alternative:** Prefer `fs.readFile()`/`fs.writeFile()` for simple operations.  

---

### **Q43. Callback Hell**  
**Answer:**  
Nested callbacks making code unreadable and hard to maintain.  

**Example:**  
```javascript
getUser(id, (user) => {  
  getOrders(user, (orders) => {  
    getItems(orders, (items) => { /* ... */ });  
  });  
});  
```  
**Solution:**  
- **Promises** + `async/await`.  
- **Libraries:** `async.js`, `Promise.all`.  

**Refactor Win:** Flattened a 5-layer callback pyramid using async/await.  

---

### **Q44. Reactor Pattern in Node.js**  
**Answer:**  
The core architecture of Node.js:  
1. **Event Demultiplexer** (Handles I/O requests).  
2. **Event Queue** (Stores completed I/O events).  
3. **Event Loop** (Processes events in phases).  

**Key Point:** Enables non-blocking I/O by delegating operations to the OS and reacting to completion events.  

---

### **Q45. Test Pyramid in Node.js**  
**Answer:**  
A strategy for balancing tests:  
- **Unit Tests (70%)**: Test individual functions (Jest/Mocha).  
- **Integration Tests (20%)**: Test API endpoints (Supertest).  
- **E2E Tests (10%)**: Test full user flows (Cypress).  

**My Approach:** Achieved 80% test coverage by focusing on unit tests for core logic.  

---

### **Q46. Why V8 Engine?**  
**Answer:**  
- **Speed**: Compiles JS to machine code (faster than interpreters).  
- **Performance**: Optimized for Chrome, now adapted for Node.js.  
- **Features**: Supports modern JS (ES6+).  

**Fun Fact:** Used V8’s heap snapshots to debug memory leaks in a microservice.  

---

### **Q47. Node.js Exit Codes**  
**Answer:**  
Common codes:  
- `0` – Success.  
- `1` – Uncaught exception.  
- `2` – Misused shell/Bash.  
- `128 + N` – Process terminated by signal `N` (e.g., `SIGKILL` = `137`).  

**Debug Tip:** Used `process.exitCode = 1` to gracefully exit on DB connection failures.  

---

### **Q48. Middleware in Node.js**  
**Answer:**  
Functions that execute between request and response in frameworks like Express.  

**Types:**  
- **Application-level**: `app.use(helmet())`.  
- **Router-level**: `router.use(authMiddleware)`.  
- **Error-handling**: `app.use((err, req, res, next) => {})`.  

**Example:** Built a middleware to validate API keys for 50+ endpoints.  

---

### **Q49. HTTP Request Types**  
**Answer:**  
- **GET**: Fetch data (idempotent).  
- **POST**: Create data.  
- **PUT/PATCH**: Update data.  
- **DELETE**: Remove data.  
- **HEAD**: Fetch headers only.  

**RESTful Use:** Designed a CRUD API with proper HTTP verbs for a CMS.  

---

### **Q50. Connect MongoDB to Node.js**  
**Answer:**  
Using `mongoose`:  
```javascript
const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost:27017/mydb', {  
  useNewUrlParser: true,  
  useUnifiedTopology: true  
}).then(() => console.log('Connected!'));  
```  
**Optimization:** Used connection pooling (`poolSize: 10`) to handle 500+ concurrent requests.  

---

### **Q51. Purpose of `NODE_ENV`**  
**Answer:**  
Environment variable to set the app’s mode:  
- `development`: Verbose logging, hot-reload.  
- `production`: Optimized performance, caching.  
- `test`: Mock DBs, isolated configs.  

**Example:**  
```bash
NODE_ENV=production node app.js  
```  

---

### **Q52. Node.js Timing Features**  
**Answer:**  
- `setTimeout` / `clearTimeout`: One-time delay.  
- `setInterval` / `clearInterval`: Repeat at intervals.  
- `setImmediate`: Run after I/O callbacks.  
- `process.nextTick`: Run before the next event loop tick.  

**Performance Tip:** Used `setImmediate` for CPU-heavy tasks to avoid blocking I/O.  

---

### **Q53. WASI (WebAssembly System Interface)**  
**Answer:**  
A standard to run WebAssembly (Wasm) outside browsers (e.g., in Node.js).  

**Why?**  
- **Security**: Sandboxed execution.  
- **Portability**: Run binaries across platforms.  
- **Performance**: Near-native speed for C/Rust code.  

**Use Case:** Ran FFmpeg in Node.js via Wasm for video transcoding.  

---

### **Q54. First-Class Functions in JavaScript**  
**Answer:**  
Functions treated like variables:  
- Assigned to variables.  
- Passed as arguments.  
- Returned from other functions.  

**Example:**  
```javascript
const logger = (msg) => console.log(msg);  
const executor = (fn) => fn('Hello');  
executor(logger);  
```  

---

### **Q55. Managing Packages in Node.js**  
**Answer:**  
- **Install**: `npm install lodash`.  
- **Update**: `npm update lodash`.  
- **Delete**: `npm uninstall lodash`.  
- **Audit**: `npm audit fix`.  
- **Lockfile**: `package-lock.json` for version pinning.  

**Pro Tip:** Use `npm ci` in CI/CD for reproducible builds.  

---

### **Q56. Why Node.js is Better**  
**Answer:**  
- **Single Language**: JS for frontend + backend.  
- **Scalability**: Event-driven, non-blocking I/O.  
- **Ecosystem**: Largest package registry (npm).  
- **Performance**: V8 engine + async processing.  

**Case Study:** Migrated a Java monolith to Node.js microservices, reducing latency by 60%.  

---

### **Q57. Fork in Node.js**  
**Answer:**  
`child_process.fork()` spawns a new Node.js process with IPC (Inter-Process Communication).  

**Example:**  
```javascript
const { fork } = require('child_process');  
const child = fork('worker.js');  
child.send({ data: 'Hello' });  
```  
**Use Case:** Parallelized CSV processing across 4 CPU cores.  

---

### **Q58. `async.queue` Input Arguments**  
**Answer:**  
1. **Worker Function**: Processes tasks.  
2. **Concurrency Value**: Max parallel workers (default: 1).  

**Example:**  
```javascript
const queue = async.queue((task, callback) => {  
  processTask(task, callback);  
}, 2); // 2 concurrent workers  
```  

---

### **Q59. Purpose of `module.exports`**  
**Answer:**  
Exports functions/objects from a module for reuse.  

**CommonJS:**  
```javascript
// math.js  
module.exports = { add: (a, b) => a + b };  
```  
**ES6:**  
```javascript
// Importer  
import { add } from './math.js';  
```  

---

### **Q60. Code Style Tools**  
**Answer:**  
- **Linters**: ESLint (with Airbnb/Standard configs).  
- **Formatters**: Prettier.  
- **Husky**: Git hooks for pre-commit checks.  
- **EditorConfig**: Consistent indentation across editors.  

**My Setup:** ESLint + Prettier auto-format on save.  

---

**Pro Tip:** Relate answers to your work (e.g., *“Used WASI to integrate a Rust-based encryption module in our Node.js API”*).  

Need refinements? Let me know!

### **Q61. Difference Between JavaScript and Node.js**  
**Answer:**  
| **JavaScript** | **Node.js** |  
|----------------|-------------|  
| Runs in the browser (client-side). | Runs on the server (via V8 engine). |  
| Manipulates DOM (e.g., `document.getElementById`). | No DOM access (uses `fs`, `http` modules). |  
| Used for frontend interactivity. | Used for backend APIs, servers, and scripts. |  

**Example:**  
- **JavaScript (Browser):** `alert('Hello')`  
- **Node.js:** `console.log('Hello')`  

---

### **Q62. Asynchronous vs Synchronous Functions**  
**Answer:**  
| **Asynchronous** | **Synchronous** |  
|------------------|----------------|  
| Non-blocking (runs in background). | Blocking (pauses execution). |  
| Uses callbacks/promises/async-await. | Returns result immediately. |  
| Ideal for I/O (DB calls, APIs). | Used for CPU-heavy tasks (rare in Node). |  

**Example:**  
```javascript
// Synchronous  
const data = fs.readFileSync('file.txt');  

// Asynchronous  
fs.readFile('file.txt', (err, data) => { /* ... */ });  
```  

---

### **Q63. Asynchronous Tasks in Event Loop**  
**Answer:**  
Tasks delegated to the **Worker Pool** (Libuv):  
- File I/O (`fs.readFile`).  
- Network requests (`http.get`).  
- Crypto operations (`crypto.pbkdf2`).  
- DNS lookups (`dns.resolve`).  

**Event Loop Phases:**  
1. **Timers** → **I/O Callbacks** → **Poll** → **Check** → **Close**  

**Key Point:** Async tasks complete outside the main thread, then trigger callbacks.  

---

### **Q64. Order of Execution in Control Flow**  
**Answer:**  
1. **Synchronous code** (top to bottom).  
2. **Microtasks** (e.g., `process.nextTick`, `Promise.then`).  
3. **Macrotasks** (e.g., `setTimeout`, `setImmediate`, I/O).  

**Example:**  
```javascript
console.log('1');  
setTimeout(() => console.log('2'), 0);  
Promise.resolve().then(() => console.log('3'));  
console.log('4');  
```  
**Output:** `1 → 4 → 3 → 2`  

---

### **Q65. Input Arguments for Async Queue**  
**Answer:**  
Using `async.queue`:  
1. **Worker function**: Processes tasks.  
2. **Concurrency value**: Max parallel tasks (default: 1).  

**Example:**  
```javascript
const queue = async.queue((task, done) => {  
  processTask(task, done);  
}, 3); // 3 concurrent workers  
```  

---

### **Q66. Disadvantages of Node.js**  
**Answer:**  
- **Not for CPU-heavy tasks** (e.g., video encoding).  
- **Callback hell** (mitigated by Promises/async-await).  
- **Immature tooling** vs. Java/.NET (debugging, threading).  
- **Security risks** if misconfigured (e.g., `eval` usage).  

**Workaround:** Use **worker threads** for CPU tasks.  

---

### **Q67. Event-Based Model in Node.js**  
**Answer:**  
**Why?**  
- Handles **10K+ concurrent connections** with minimal threads.  
- **Non-blocking I/O**: Delegates tasks to the OS, reacts to events.  
- **Scalability**: No thread overhead (vs. Apache/Java).  

**Example:** A chat app handling 50K WebSocket connections.  

---

### **Q68. Node.js vs Ajax**  
**Answer:**  
| **Node.js** | **Ajax** |  
|-------------|----------|  
| Backend runtime. | Frontend technique (XMLHttpRequest/fetch). |  
| Uses JavaScript on the server. | Requests data from a server asynchronously. |  
| Can serve APIs consumed by Ajax. | Can call Node.js APIs. |  

**Analogy:**  
- **Ajax** = "Client asks for data."  
- **Node.js** = "Server provides data."  

---

### **Q69. Advantages of Node.js**  
**Answer:**  
- **Single-threaded + Event Loop**: High concurrency.  
- **Full-stack JavaScript**: Shared language (React + Node).  
- **NPM**: 2M+ packages (Express, Mongoose, etc.).  
- **Fast prototyping**: Minimal boilerplate.  

**Case Study:** Built a REST API in 2 days (vs. 1 week in Java).  

---

### **Q70. Does Node Run on Windows?**  
**Answer:**  
**Yes**, but:  
- Some native modules require **Windows Build Tools** (`npm install --global windows-build-tools`).  
- File paths use `\` (handle with `path.join()`).  

**Best Practice:** Use WSL2 for Linux-compatible development.  

---

### **Q71. Can You Access DOM in Node?**  
**Answer:**  
**No**, but:  
- **Workarounds**:  
  - **JSDOM**: Simulates DOM (for testing).  
  - **Cheerio**: Lightweight DOM parser (for web scraping).  

**Example:**  
```javascript
const cheerio = require('cheerio');  
const $ = cheerio.load('<div>Hello</div>');  
console.log($('div').text()); // "Hello"  
```  

---

### **Q72. Why Java Programmers Switch to Node.js**  
**Answer:**  
- **Faster development**: No compilation, dynamic typing.  
- **Performance**: Event loop vs. thread-per-request.  
- **Modern ecosystem**: NPM vs. Maven/Gradle.  
- **Full-stack potential**: React/Angular + Node.  

**Trend:** Microservices favor Node.js over Spring Boot for lightweight APIs.  

---

### **Q73. Challenges with Node.js**  
**Answer:**  
1. **Debugging async code** (solution: `async/await` + stack traces).  
2. **Unhandled promise rejections** (use `process.on('unhandledRejection')`).  
3. **Memory leaks** (debug with `heapdump`).  
4. **Callback hell** (use `Promise.all`/`async.js`).  

**Lesson Learned:** Used `--inspect` flag + Chrome DevTools to fix a memory leak.  

---

### **Q74. What is "Non-Blocking" in Node.js?**  
**Answer:**  
- **Non-blocking**: I/O operations run in the background, freeing the main thread.  
- **Blocking**: Thread waits for I/O to complete (e.g., `fs.readFileSync`).  

**Example:**  
```javascript
// Non-blocking  
fs.readFile('file.txt', (err, data) => { /* ... */ });  
// Main thread continues executing  
```  

---

### **Q75. How Node.js Handles Blocking I/O**  
**Answer:**  
1. **Delegates I/O** to Libuv’s worker pool (threads).  
2. **Event Loop** checks for completed I/O, triggers callbacks.  
3. **Async APIs**: `fs.readFile`, `http.get`, etc.  

**Optimization:** Used `streams` for 1GB+ file processing without blocking.  

---

### **Q76. Using Async/Await in Node.js**  
**Answer:**  
1. **Mark function as `async`**:  
   ```javascript
   async function fetchData() {  
     const data = await fs.promises.readFile('file.txt');  
     return data;  
   }  
   ```  
2. **Error handling**:  
   ```javascript
   try { await fetchData(); } catch (err) { console.log(err); }  
   ```  

**Pro Tip:** Always wrap `await` in `try/catch`.  

---

### **Q77. Separate Express App and Server**  
**Answer:**  
**Why?**  
- **Testing**: SuperTest can target `app` without `listen()`.  
- **Scalability**: Reuse `app` in Lambda/Serverless.  
- **Security**: Isolate server config (HTTPS, ports).  

**Example:**  
```javascript
// app.js  
const app = express();  
module.exports = app;  

// server.js  
const app = require('./app');  
app.listen(3000);  
```  

---

### **Q78. Stub in Node.js**  
**Answer:**  
A **fake function** replacing real logic during testing.  

**Example (Sinon.js):**  
```javascript
const stub = sinon.stub(db, 'getUser').returns({ id: 1 });  
assert(stub.calledOnce);  
```  

**Use Case:** Mocked AWS S3 calls to avoid costs in unit tests.  

---

### **Q79. Popular Node.js Frameworks**  
**Answer:**  
1. **Express.js**: Minimalist, unopinionated.  
2. **NestJS**: TypeScript, modular (like Angular).  
3. **Fastify**: High-performance, low overhead.  
4. **Koa**: Modern middleware flow (by Express creators).  

**My Choice:** Express for APIs, NestJS for enterprise apps.  

---

### **Q80. Security in Node.js**  
**Answer:**  
- **Helmet.js**: Secure HTTP headers.  
- **CORS**: Restrict API access (`express-cors`).  
- **Rate Limiting**: `express-rate-limit`.  
- **Input Validation**: `joi`/`zod`.  
- **Auth**: JWT (`jsonwebtoken`), OAuth (`passport`).  

**Critical Fix:** Patched a SQL injection using `pg-parameterize`.  

---

**Interview Tip:** Link answers to real projects (e.g., *"Used stubs to test a payment gateway integration without real transactions"*).  

Need adjustments? Let me know!

### **Q81. What is Libuv?**  
**Answer:**  
Libuv is a **multi-platform C library** that provides Node.js with:  
- **Event Loop** (handles async I/O operations).  
- **Thread Pool** (for offloading blocking tasks like FS, DNS).  
- **TCP/UDP sockets**, file system operations, and more.  

**Key Role:** Enables Node.js to be non-blocking and event-driven.  

---

### **Q82. Global Objects in Node.js**  
**Answer:**  
Objects available globally without requiring any module:  
- `process` (Environment, args, exit codes).  
- `console` (Logging).  
- `__dirname` / `__filename` (File paths).  
- `Buffer` (Binary data handling).  
- `setTimeout` / `setImmediate`.  

**Example:**  
```javascript
console.log(__dirname); // Prints current directory path  
```  

---

### **Q83. Why is `assert` Used in Node.js?**  
**Answer:**  
The `assert` module is used for **writing unit tests** to verify conditions:  
```javascript
const assert = require('assert');  
assert.strictEqual(1 + 1, 2); // Throws error if false  
```  
**Use Case:** Validated API response shapes in integration tests.  

---

### **Q84. Why Use ExpressJS?**  
**Answer:**  
Express is a minimalist web framework for Node.js used to:  
- Build **RESTful APIs** quickly.  
- Add middleware (auth, logging).  
- Handle routing (e.g., `app.get('/users', handler)`).  
- Integrate with templating engines (EJS, Pug).  

**Project Example:** Built a microservice with 50+ endpoints in Express.  

---

### **Q85. Use of the `connect` Module**  
**Answer:**  
`connect` is a middleware framework (predecessor to Express). Now largely replaced by Express, but still used for:  
- Modular middleware stacks.  
- Custom HTTP server pipelines.  

**Example:**  
```javascript
const connect = require('connect');  
const app = connect();  
app.use((req, res) => res.end('Hello'));  
```  

---

### **Q86. Frontend vs Backend Development**  
**Answer:**  

| **Frontend**                | **Backend**                |  
|-----------------------------|----------------------------|  
| UI/UX (React, Vue, HTML/CSS)| Server logic (Node.js, DBs)|  
| Runs in browser             | Runs on server             |  
| Focus: Visuals, interactivity | Focus: Data, security, APIs |  

**Full-Stack Insight:** Used React + Node.js to build a seamless user dashboard.  

---

### **Q87. LTS Releases of Node.js**  
**Answer:**  
**LTS (Long-Term Support)** versions are stable releases with:  
- **30 months** of maintenance (bug fixes, security patches).  
- Recommended for **production**.  
- Current LTS: Node.js 20.x (as of 2023).  

**Best Practice:** Always use LTS in production for reliability.  

---

### **Q88. ESLint in Node.js**  
**Answer:**  
A **linter** that enforces code style and catches errors:  
- Configurable rules (Airbnb, Standard).  
- Auto-fix with `--fix` flag.  
- Integrates with VS Code, CI/CD.  

**Example Config:**  
```json
{ "rules": { "semi": ["error", "always"] } }  
```  

---

### **Q89. Test Pyramid for HTTP APIs**  
**Answer:**  
A strategy to balance tests:  

| **Layer**          | **Tools**          | **Example**              |  
|---------------------|--------------------|--------------------------|  
| Unit Tests (70%)    | Jest, Mocha        | Test service functions.  |  
| Integration (20%)   | Supertest          | Test API endpoints.      |  
| E2E (10%)          | Cypress, Postman   | Test full user flow.     |  

**Implementation:**  
- Mock DBs in unit tests.  
- Test `/users` API with Supertest.  
- Validate login-to-checkout flow in E2E.  

---

### **Q90. How Node.js Handles Child Threads**  
**Answer:**  
Via the `child_process` module:  
- **`fork()`**: Spawns a new Node.js process (with IPC).  
- **`spawn()`**: Runs system commands (e.g., `ls`).  
- **`exec()`**: Runs shell commands, buffers output.  

**Use Case:** Used `fork()` to parallelize CSV processing.  

---

### **Q91. Event Emitter in Node.js**  
**Answer:**  
A class (`events.EventEmitter`) to handle custom events:  
```javascript
const EventEmitter = require('events');  
const emitter = new EventEmitter();  
emitter.on('event', () => console.log('Fired!'));  
emitter.emit('event');  
```  
**Real-World Use:** Built a real-time notification system.  

---

### **Q92. Enhancing Performance with Clustering**  
**Answer:**  
Use the `cluster` module to leverage multi-core CPUs:  
```javascript
const cluster = require('cluster');  
if (cluster.isPrimary) {  
  for (let i = 0; i < 4; i++) cluster.fork(); // 4 workers  
} else {  
  require('./server.js'); // Each worker runs the server  
}  
```  
**Result:** 4x throughput for a REST API.  

---

### **Q93. Thread Pool in Node.js**  
**Answer:**  
- Managed by **Libuv**.  
- Default size: **4 threads** (adjust with `UV_THREADPOOL_SIZE`).  
- Handles **FS, DNS, crypto** ops.  

**Optimization:** Increased pool size to 8 for a file-heavy app.  

---

### **Q94. Worker Threads vs Clusters**  
**Answer:**  

| **Worker Threads**          | **Clusters**               |  
|-----------------------------|----------------------------|  
| Share memory (via `SharedArrayBuffer`). | Separate processes (isolated). |  
| Best for CPU tasks (e.g., math). | Best for scaling HTTP servers. |  

**Example:** Used worker threads for image processing.  

---

### **Q95. Measuring Async Operation Duration**  
**Answer:**  
Use `console.time()` and `performance.now()`:  
```javascript
console.time('dbQuery');  
await db.query();  
console.timeEnd('dbQuery'); // Prints duration  
```  

---

### **Q96. Measuring Async Performance**  
**Answer:** Tools:  
- **Node.js built-in**: `perf_hooks`.  
- **Libraries**: `benchmark.js`, `autocannon` (HTTP load testing).  
- **APM**: New Relic, Datadog.  

**Example:**  
```javascript
const { performance } = require('perf_hooks');  
const start = performance.now();  
await asyncOp();  
console.log(performance.now() - start);  
```  

---

### **Q97. Types of Streams in Node.js**  
**Answer:**  
1. **Readable**: `fs.createReadStream`.  
2. **Writable**: `fs.createWriteStream`.  
3. **Duplex**: `net.Socket` (read + write).  
4. **Transform**: `zlib.Gzip` (modify data mid-stream).  

**Use Case:** Streamed 10GB logs to S3 without memory overload.  

---

### **Q98. Tracing in Node.js**  
**Answer:**  
Capturing detailed runtime metrics:  
- **Node.js API**: `trace_events`.  
- **Tools**: Chrome DevTools, `clinic.js`.  

**Command:**  
```bash
node --trace-event-categories=v8,node myApp.js  
```  

---

### **Q99. Purpose of `package.json`**  
**Answer:**  
- Lists **dependencies** (`dependencies`, `devDependencies`).  
- Defines **scripts** (`start`, `test`).  
- Configures **project metadata** (name, version).  

**Key File:** Always commit `package-lock.json` for reproducible builds.  

---

### **Q100. `readFile` vs `createReadStream`**  

| **`fs.readFile`**           | **`fs.createReadStream`**   |  
|-----------------------------|----------------------------|  
| Loads entire file into memory. | Reads file in chunks (stream). |  
| Blocks memory for large files. | Memory-efficient for GBs of data. |  

**Example:** Used streams to process 20GB CSV files.  

---

### **Q101. `crypto` Module**  
**Answer:**  
Provides cryptographic functions:  
- **Hashing**: `crypto.createHash('sha256')`.  
- **Encryption**: `crypto.createCipheriv`.  
- **JWT**: Signing/verifying tokens.  

**Use Case:** Implemented password hashing with `bcrypt` (uses `crypto` internally).  

---

### **Q102. Passport in Node.js**  
**Answer:**  
Authentication middleware for:  
- **OAuth** (Google, Facebook).  
- **JWT** / **Local** (username/password).  

**Example:**  
```javascript
passport.use(new LocalStrategy(verifyUser));  
app.post('/login', passport.authenticate('local'));  
```  

---

### **Q103. Getting File Info**  
**Answer:**  
Use `fs.stat()`:  
```javascript
const fs = require('fs');  
fs.stat('file.txt', (err, stats) => {  
  console.log(stats.size, stats.mtime);  
});  
```  

---

### **Q104. DNS Lookup in Node.js**  
**Answer:**  
```javascript
const dns = require('dns');  
dns.lookup('google.com', (err, address) => {  
  console.log(address); // '142.250.190.78'  
});  
```  
**Note:** Uses OS DNS cache. For network DNS, use `dns.resolve()`.  

---

### **Q105. `setImmediate()` vs `setTimeout()`**  

| **`setImmediate()`**        | **`setTimeout(fn, 0)`**    |  
|-----------------------------|----------------------------|  
| Runs in the **Check phase**. | Runs in the **Timers phase**. |  
| Slightly faster for I/O-heavy apps. | Slightly delayed after I/O. |  

**Example:**  
```javascript
setImmediate(() => console.log('Immediate'));  
setTimeout(() => console.log('Timeout'), 0);  
// Order: Non-deterministic in main module, but Immediate first in I/O cycle  
```  

---

### **Q106. Punycode in Node.js**  
**Answer:**  
Encodes Unicode to ASCII for **IDNs** (Internationalized Domain Names):  
```javascript
const punycode = require('punycode');  
punycode.toASCII('mañana.com'); // 'xn--maana-pta.com'  
```  
**Use Case:** Handled multilingual domains in a URL shortener.  

---

### **Q107. Node.js Debugger**  
**Answer:**  
- **Built-in**: Run with `node inspect app.js` (Chrome DevTools).  
- **VS Code**: Launch config with `"type": "node"`.  
- **Logpoints**: `console.log` alternatives.  

**Command:**  
```bash
node --inspect-brk app.js  
```  

---

### **Q108. Cryptography in Node.js**  
**Answer:**  
Yes, via:  
- **`crypto` module** (AES, SHA, HMAC).  
- **TLS/SSL**: `https`, `tls` modules.  
- **Libraries**: `bcrypt`, `jsonwebtoken`.  

**Example:** Implemented AES-256 encryption for user data.  

---

### **Q109. Why Am I the Right Fit?**  
**Answer:**  
- **4 years of Node.js experience** (APIs, microservices, real-time apps).  
- **Deep ecosystem knowledge** (Express, MongoDB, Jest).  
- **Performance optimization** (clustering, streams).  
- **Problem-solving**: Debugged memory leaks, scaled to 10K+ RPM.  

**Example:** “At [CompanyX], I reduced API latency by 40% using Redis caching.”  

---

### **Q110. Past Node.js Experience**  
**Answer:**  
- Built **REST/GraphQL APIs** for e-commerce.  
- Optimized **WebSocket servers** for real-time analytics.  
- Migrated **Java monoliths** to Node.js microservices.  
- Led **performance audits** (APM tools, load testing).  
- Led **performance audits** (APM tools, load testing).  

**Metric:** Scaled a payment gateway to handle 5K TPS.  

---

**Final Tip:** Customize answers with **specific metrics** (e.g., “Improved throughput by 70% using worker threads”). Let me know if you’d like refinements!