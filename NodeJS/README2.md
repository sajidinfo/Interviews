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


### **Q.1. What is Node.js and Where can you use it?

**Answer:** Node.js ek JavaScript runtime environment hai jo server-side par code run karne ke liye use hota hai. Ye Chrome ke V8 JavaScript engine par built hai. 
Iska use hum real-time applications, APIs, microservices, aur I/O intensive applications (jaise chat apps, streaming apps) banane ke liye kar sakte hain.


### **Q.2. Why use Node.js?

**Answer:**
• Node.js use karte hain kyunki:
• Ye fast aur scalable hai.
• Non-blocking I/O model use karta hai, jisse high performance milti hai.
• JavaScript use hota hai, jo frontend aur backend dono ke liye ek hi language hai.
• Large ecosystem hai (NPM packages ke through).


### **Q.3. How does Node.js work?

**Answer:** Node.js ek event-driven architecture use karta hai. Ye single-threaded hai, lekin non-blocking I/O operations ke through multiple requests handle kar 
leta hai. Event loop har request ko process karta hai aur callbacks ko execute karta hai.


### **Q.4. Why is Node.js Single-threaded?

**Answer:** Node.js single-threaded hai taki blocking operations se bacha ja sake. Ye event loop aur non-blocking I/O ke through multiple requests handle karta 
hai, jisse performance improve hoti hai.


### **Q.5. If Node.js is single-threaded then how does it handle concurrency?

**Answer:** Node.js single-threaded hai, lekin ye asynchronous operations aur event loop ke through concurrency handle karta hai. Jab ek I/O operation hota hai, 
Node.js usko background mein process karta hai aur next request handle karta hai. Jab I/O operation complete hota hai, uska callback execute hota hai.


### **Q.6. Explain callback in Node.js.

**Answer:** Callback ek function hota hai jo dusre function ke completion par call hota hai. Node.js mein callbacks ka use asynchronous operations ko handle 
karne ke liye kiya jata hai. Example:
**************************************************************************
```js
fs.readFile('file.txt', (err, data) => {
if (err) throw err;
console.log(data);
});
**************************************************************************
```

### **Q.7. What are the advantages of using promises instead of callbacks?

**Answer:** Promises ke advantages:
1. Code readable aur maintainable hota hai.
2. Callback hell se bachte hain.
3. Error handling better hoti hai .catch() ke through.
4. Chaining possible hai .then() ke through.


### **Q.8. How would you define the term I/O?

**Answer:** I/O (Input/Output) se matlab hai data read/write operations, jaise file system operations, database queries, network requests, etc. Node.js non￾blocking I/O use karta hai, jisse performance improve hoti hai.


### **Q.9. How is Node.js most frequently used?

**Answer:** Node.js sabse zyada use hota hai:
1. Real-time applications (chat apps, gaming apps).
2. APIs aur microservices banane ke liye.
3. Data streaming applications (video/audio streaming).
4. Single-page applications (SPAs) ke backend ke liye.


### **Q.10. Explain the difference between frontend and backend development?

**Answer:**
• Frontend Development: Ye user interface (UI) aur user experience (UX) banane ke liye hota hai. HTML, CSS, JavaScript use hota hai.
• Backend Development: Ye server-side logic, databases, aur APIs handle karta hai. Node.js, Python, Java, etc. use hote hain.


### **Q.11. What is NPM?

**Answer:** NPM (Node Package Manager) Node.js ka package manager hai. Isse hum libraries aur tools install aur manage kar sakte hain. npm install command se 
packages install kiye jaate hain.


### **Q.12. What are the modules in Node.js?

**Answer:** Modules reusable code blocks hote hain jo specific functionality provide karte hain. Node.js mein har file ek module hoti hai. Example: fs (file system), 
http, path, etc.


### **Q.13. What is the purpose of the module.exports?

**Answer:** module.exports ka use kisi module ko export karne ke liye hota hai, taki use dusre files mein import kiya ja sake. Example:
**************************************************************************
```js
// math.js
module.exports = {
add: (a, b) => a + b
};
```
**************************************************************************
```js
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Output: 5
```


### **Q.14. Why is Node.js preferred over other backend technologies like Java and PHP?

**Answer:** Node.js preferred hai kyunki:
1. Ye fast aur scalable hai.
2. JavaScript use hota hai, jo frontend aur backend dono ke liye ek hi language hai.
3. Non-blocking I/O model use karta hai.
4. Large ecosystem hai (NPM packages).


### **Q.15. What is the difference between Angular and Node.js?

**Answer:**
• Angular: Ye ek frontend framework hai jo single-page applications banane ke liye use hota hai.
• Node.js: Ye ek backend runtime environment hai jo server-side code run karne ke liye use hota hai.


### **Q.16. Which database is more popularly used with Node.js?

**Answer:** Node.js ke saath MongoDB (NoSQL database) aur MySQL/PostgreSQL (SQL databases) commonly use kiye jaate hain. MongoDB aur Node.js ka 
combination zyada popular hai kyunki dono JSON-like data structure use karte hain.


### **Q.17. What are some of the most commonly used libraries in Node.js?

**Answer:** Commonly used libraries:
1. Express.js: Web applications aur APIs banane ke liye.
2. Socket.io: Real-time communication ke liye.
3. Mongoose: MongoDB ke saath interact karne ke liye.
4. Axios: HTTP requests ke liye.


### **Q.18. What are the pros and cons of Node.js?

**Answer:**
• Pros:
1. Fast aur scalable hai.
2. JavaScript use hota hai.
3. Large ecosystem (NPM).
4. Non-blocking I/O.
• Cons:
1. CPU-intensive tasks ke liye suitable nahi hai.
2. Callback hell ka risk hota hai (lekin promises aur async/await se solve ho jata hai).


### **Q.19. What is the command used to import external libraries?

**Answer:** External libraries ko import karne ke liye require() function use hota hai. Example:
**************************************************************************
```js
const express = require('express');
```
**************************************************************************


### **Q.20. What does event-driven programming mean?

**Answer:** Event-driven programming mein code execution events (jaise user actions, I/O operations) ke basis par hota hai. Node.js event-driven hai, jahan event 
loop events ko handle karta hai aur callbacks ko trigger karta hai.


### **Q.21. What is an Event Loop in Node.js?

**Answer:** Event Loop Node.js ka core concept hai. Ye ek mechanism hai jo asynchronous operations ko handle karta hai. Event Loop continuously check karta hai 
ki koi pending callbacks, timers, ya I/O operations hai ya nahi. Agar hai, to unhe execute karta hai. Ye single-threaded hai, lekin non-blocking I/O ke through 
multiple tasks handle kar leta hai.


### **Q.22. Differentiate between process.nextTick() and setImmediate()?

**Answer:**
process.nextTick(): Ye callback ko current operation ke baad immediately execute karta hai, even before timers aur I/O events.
setImmediate(): Ye callback ko next iteration of the event loop mein execute karta hai, after I/O events.
Example:
**************************************************************************
```js
process.nextTick(() => console.log('nextTick'));
setImmediate(() => console.log('setImmediate'));
// Output: nextTick, setImmediate
```
**************************************************************************


### **Q.23. What is an EventEmitter in Node.js?

**Answer:** EventEmitter Node.js ka built-in class hai jo events create, listen, aur emit karne ke liye use hota hai. Ye events module mein available hai. Example:
**************************************************************************
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', () => console.log('Hello World'));
emitter.emit('greet'); // Output: Hello World
```
**************************************************************************


### **Q.24. What are the two types of API functions in Node.js?

**Answer:** Asynchronous (Non-blocking): Ye functions background mein execute hote hain aur callback return karte hain. Example: fs.readFile().
Synchronous (Blocking): Ye functions execute hone tak code execution block karte hain. Example: fs.readFileSync().


### **Q.25. What is the package.json file?

**Answer:** package.json file Node.js project ka metadata store karti hai. Isme project details, dependencies, scripts, aur configurations hoti hain. Example:
**************************************************************************
```js
{
"name": "my-app",
"version": "1.0.0",
"scripts": {
"start": "node app.js"
},
"dependencies": {
"express": "^4.17.1"
}
}
```
**************************************************************************


### **Q.26. How would you use a URL module in Node.js?

**Answer:** URL module URLs ko parse aur format karne ke liye use hota hai. Example:
**************************************************************************
```js
const url = require('url');
const myUrl = new URL('https://example.com:8080/path?name=John');
console.log(myUrl.hostname); // Output: example.com
console.log(myUrl.pathname); // Output: /path
```
**************************************************************************


### **Q.27. What is the Express.js package?

**Answer:** Express.js Node.js ka popular web framework hai. Isse hum web applications aur APIs easily create kar sakte hain. Ye routing, middleware, aur 
request/response handling provide karta hai.


### **Q.28. How do you create a simple Express.js application?

**Answer:** Example:
**************************************************************************
```js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello World');
});
app.listen(3000, () => console.log('Server running on port 3000'));
```
**************************************************************************


### **Q.29. What are streams in Node.js?

**Answer:** Streams data ko chunks mein process karne ka tarika hai. Ye large data ko efficiently handle karte hain. Types of streams:
1. Readable: Data read karne ke liye (e.g., fs.createReadStream()).
2. Writable: Data write karne ke liye (e.g., fs.createWriteStream()).
3. Duplex: Read aur write dono kar sakte hain.
4. Transform: Data ko modify kar sakte hain.


### **Q.30. How do you install update and delete a dependency?

**Answer:**
**************************************************************************
```js
Install: npm install package-name
Update: npm update package-name
Delete: npm uninstall package-name
```
**************************************************************************


### **Q.31. How do you create a simple server in Node.js that returns Hello World?

**Answer:** Example:
**************************************************************************
```js
const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World');
});
server.listen(3000, () => console.log('Server running on port 3000'));
```
**************************************************************************


### **Q.32. Explain asynchronous and non-blocking APIs in Node.js.

**Answer:** Asynchronous APIs: Ye APIs background mein execute hoti hain aur callback return karti hain. Example: fs.readFile().
Non-blocking APIs: Ye APIs code execution block nahi karti hain. Example: fs.readFile() (non-blocking I/O).


### **Q.33. How do we implement async in Node.js?

**Answer:** Async implement karne ke liye hum async/await ya promises use kar sakte hain. Example:
**************************************************************************
```js
async function fetchData() {
const data = await someAsyncFunction();
console.log(data);
}
```
**************************************************************************


### **Q.34. What is a callback function in Node.js?

**Answer:** Callback function ek function hota hai jo dusre function ke completion par call hota hai. Example:
**************************************************************************
```js
fs.readFile('file.txt', (err, data) => {
if (err) throw err;
console.log(data);
});
```
**************************************************************************


### **Q.35. What is REPL in Node.js?

**Answer:** REPL (Read-Eval-Print Loop) ek interactive environment hai jahan hum Node.js code directly execute kar sakte hain. Isse start karne ke liye terminal 
mein node type karo.


### **Q.36. What is the control flow function?

**Answer:** Control flow function ka use asynchronous operations ko sequence mein execute karne ke liye hota hai. Example: async.series(), async.parallel().


### **Q.37. How does control flow manage the function calls?

**Answer:** Control flow functions asynchronous tasks ko manage karte hain, unhe sequence ya parallel mein execute karte hain. Example:
**************************************************************************
```js
async.series([
(callback) => { /* Task 1 */ callback(); },
(callback) => { /* Task 2 */ callback(); }
]);
```
**************************************************************************


### **Q.38. What is the difference between fork() and spawn() methods in Node.js?

**Answer:**
• fork(): Ye child process create karta hai aur parent-child communication ke liye IPC (Inter-Process Communication) provide karta hai.
• spawn(): Ye new process create karta hai, lekin IPC provide nahi karta.


### **Q.39. What is the buffer class in Node.js?

**Answer:** Buffer class binary data ko handle karne ke liye use hoti hai. Example:
**************************************************************************
```js
const buf = Buffer.from('Hello');
console.log(buf.toString()); // Output: Hello
```
**************************************************************************


### **Q.40. What is piping in Node.js?

**Answer:** Piping ek stream ka output dusre stream ka input banane ka tarika hai. Example:
**************************************************************************
```js
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);
```
**************************************************************************


### **Q.41. What are some of the flags used in the read/write operations in files?

**Answer:** File operations mein commonly used flags:
1. r: Read-only mode (file must exist).
2. w: Write-only mode (creates file if it doesn't exist, truncates if it does).
3. a: Append mode (creates file if it doesn't exist).
4. r+: Read and write mode (file must exist).
5. w+: Read and write mode (creates file if it doesn't exist, truncates if it does).
6. a+: Read and append mode (creates file if it doesn't exist).
Example:
**************************************************************************
```js
fs.open('file.txt', 'r', (err, fd) => {
if (err) throw err;
console.log('File opened');
});
```
**************************************************************************


### **Q.42. How do you open a file in Node.js?

**Answer:** File open karne ke liye fs.open() method use hota hai. Example:
**************************************************************************
```js
const fs = require('fs');
fs.open('file.txt', 'r', (err, fd) => {
if (err) throw err;
console.log('File opened');
});
```
**************************************************************************


### **Q.43. What is callback hell?

**Answer:** Callback hell tab hota hai jab multiple nested callbacks use kiye jaate hain, jisse code read aur maintain karna mushkil ho jata hai. Example:
**************************************************************************
```js
fs.readFile('file1.txt', (err, data1) => {
fs.readFile('file2.txt', (err, data2) => {
fs.readFile('file3.txt', (err, data3) => {
console.log(data1 + data2 + data3);
});
});
});
```
**************************************************************************
Isse avoid karne ke liye hum promises ya async/await use karte hain.


### **Q.44. What is a reactor pattern in Node.js?

**Answer:** Reactor pattern Node.js ka core concept hai. Ye ek design pattern hai jo event-driven programming ko handle karta hai. Isme:
1. Event Demultiplexer events ko detect karta hai.
2. Event Queue events ko store karti hai.
3. Event Loop events ko process karta hai aur callbacks ko execute karta hai.


### **Q.45. What is a test pyramid in Node.js?

**Answer:** Test pyramid testing strategy hai jisme tests ko layers mein divide kiya jata hai:
1. Unit Tests: Smallest units (functions) ko test karna.
2. Integration Tests: Multiple units ko ek saath test karna.
3. End-to-End (E2E) Tests: Complete application flow ko test karna.


### **Q.46. For Node.js why does Google use the V8 engine?

**Answer:** Google V8 engine use karta hai kyunki:
1. Ye fast hai aur JavaScript code ko machine code mein compile karta hai.
2. Ye open-source hai aur regularly updated hota hai.
3. Non-blocking I/O aur event-driven architecture support karta hai.


### **Q.47. Describe Node.js exit codes.

**Answer:** Node.js exit codes batate hain ki process kyun terminate hua. Common exit codes:
• 0: Successful execution.
• 1: Uncaught exception.
• 2: Unused (reserved by Bash).
• 3: Internal JavaScript parse error.


### **Q.48. Explain the concept of middleware in Node.js.

**Answer:** Middleware functions wo functions hote hain jo request aur response objects ko access karte hain aur next middleware function ko call karte hain. Ye 
routing se pehle execute hote hain. Example:
**************************************************************************
```js
app.use((req, res, next) => {
console.log('Middleware executed');
next();
});
```
**************************************************************************


### **Q.49. What are the different types of HTTP requests?

**Answer:** Common HTTP requests:
1. GET: Data fetch karne ke liye.
2. POST: Data submit karne ke liye.
3. PUT: Data update karne ke liye.
4. DELETE: Data delete karne ke liye.
5. PATCH: Partial data update karne ke liye.
Summary Table:
HTTP Method Purpose
GET Retrieve data
POST Create new data
PUT Update/replace data
PATCH Partially update data
DELETE Remove data
HEAD Retrieve headers only
OPTIONS Check allowed methods
TRACE Debugging request path
CONNECT Establish a secure tunnel


### **Q.50. How would you connect a MongoDB database to Node.js?

**Answer:** MongoDB connect karne ke liye mongoose package use karte hain. Example:
**************************************************************************
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error', err));
```
**************************************************************************


### **Q.51. What is the purpose of NODE_ENV?

**Answer:** NODE_ENV environment variable hai jo application ka environment (development, production, etc.) specify karta hai. Example:
NODE_ENV=production node app.js


### **Q.52. List the various Node.js timing features.

**Answer:** Node.js timing features:
1. setTimeout(): Code ko delay ke saath execute karta hai.
2. setInterval(): Code ko repeatedly execute karta hai.
3. setImmediate(): Code ko next event loop iteration mein execute karta hai.
4. process.nextTick(): Code ko current operation ke baad immediately execute karta hai.


### **Q.53. What is WASI and why is it being introduced?

**Answer:** WASI (WebAssembly System Interface) WebAssembly ke liye system interface hai. Isse WebAssembly applications ko system resources (file system, 
network, etc.) access karne ki capability milti hai.


### **Q.54. What is a first-class function in Javascript?

**Answer:** First-class function means functions ko variables ki tarah treat kiya ja sakta hai. Example:
**************************************************************************
```js
const greet = () => console.log('Hello');
greet();
```
**************************************************************************


### **Q.55. How do you manage packages in your Node.Js project?

**Answer:** Packages manage karne ke liye npm (Node Package Manager) use karte hain:
1. Install: npm install package-name
2. Update: npm update package-name
3. Delete: npm uninstall package-name


### **Q.56. How is Node.js better than other frameworks?

**Answer:** Node.js better hai kyunki:
1. Ye fast aur scalable hai.
2. JavaScript use hota hai, jo frontend aur backend dono ke liye ek hi language hai.
3. Non-blocking I/O model use karta hai.
4. Large ecosystem hai (NPM packages).


### **Q.57. What is a fork in node JS?

**Answer:** fork() method child process create karta hai aur parent-child communication ke liye IPC (Inter-Process Communication) provide karta hai. Example:
**************************************************************************
```js
const { fork } = require('child_process');
const child = fork('child.js');
```
**************************************************************************


### **Q.58. List down the two arguments that async. First does the queue take as input?

**Answer:** async.queue ke do arguments hote hain:
1. Worker Function: Jo task ko process karti hai.
2. Concurrency Value: Maximum number of tasks jo ek saath process ho sakte hain.


### **Q.59. What is the purpose of the module.exports?

**Answer:** module.exports ka use kisi module ko export karne ke liye hota hai, taki use dusre files mein import kiya ja sake. Example:
**************************************************************************
```js
// math.js
module.exports = {
add: (a, b) => a + b
};
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Output: 5
```
**************************************************************************


### **Q.60. What tools can be used to assure consistent code style?

**Answer:** Code style maintain karne ke liye tools:
1. ESLint: Code linting ke liye.
2. Prettier: Code formatting ke liye.
3. Husky: Pre-commit hooks ke liye.


### **Q.61. What is the difference between JavaScript and Node.js?

**Answer:**
• JavaScript: Ye ek programming language hai jo mainly browsers mein use hoti hai. Ye client-side scripting ke liye use hoti hai.
• Node.js: Ye ek runtime environment hai jo JavaScript ko server-side par run karne ke liye use hota hai. Ye Chrome ke V8 engine par built hai.


### **Q.62. What is the difference between asynchronous and synchronous functions?

**Answer:**
• Synchronous Functions: Ye functions ek ke baad ek execute hote hain aur code execution block karte hain. Example: fs.readFileSync().
• Asynchronous Functions: Ye functions background mein execute hote hain aur callback return karte hain. Example: fs.readFile().


### **Q.63. What are the asynchronous tasks that should occur in an event loop?

**Answer:** Asynchronous tasks jo event loop mein hote hain:
1. I/O Operations: File system, network requests.
2. Timers: setTimeout(), setInterval().
3. Callbacks: Event-driven callbacks.
4. Promises: Async/await operations.


### **Q.64. What is the order of execution in control flow statements?

**Answer:** Control flow statements ka order:
1. Synchronous Code: Top to bottom execute hota hai.
2. Asynchronous Code: Callbacks, promises, aur async/await ke through manage hota hai.
3. Event Loop: Asynchronous tasks ko sequence mein execute karta hai.


### **Q.65. What are the input arguments for an asynchronous queue?

**Answer:** async.queue ke input arguments:
• Worker Function: Jo task ko process karti hai.
• Concurrency Value: Maximum number of tasks jo ek saath process ho sakte hain.


### **Q.66. Are there any disadvantages to using Node.js?

**Answer:** Node.js ke disadvantages:
• CPU-intensive Tasks: Ye CPU-intensive tasks ke liye suitable nahi hai.
• Callback Hell: Nested callbacks code ko complex bana sakte hain (lekin promises aur async/await se solve ho jata hai).
• Less Mature Libraries: Kuch libraries mature nahi hain.


### **Q.67. What is the primary reason for using the event-based model in Node.js?

**Answer:** Event-based model use karne ka primary reason hai non-blocking I/O operations ko handle karna. Ye high performance aur scalability provide karta 
hai.


### **Q.68. What is the difference between Node.js and Ajax?

**Answer:**
• Node.js: Ye ek server-side runtime environment hai jo JavaScript ko server par run karne ke liye use hota hai.
• Ajax: Ye client-side technology hai jo browsers mein use hoti hai aur server se data fetch karne ke liye use hoti hai.


### **Q.69. What is the advantage of using Node.js?

**Answer:** Node.js ke advantages:
1. Fast aur Scalable: Non-blocking I/O ke through.
2. JavaScript: Frontend aur backend dono ke liye ek hi language.
3. Large Ecosystem: NPM packages ke through.
4. Real-time Applications: Chat apps, gaming apps, etc.


### **Q.70. Does Node run on Windows?

**Answer:** Haan, Node.js Windows, macOS, aur Linux sab platforms par run hota hai.


### **Q.71. Can you access DOM in Node?

**Answer:** Nahi, Node.js mein DOM access nahi hota kyunki ye server-side environment hai. DOM browser-specific hai.


### **Q.72. Why is Node.JS quickly gaining attention from JAVA programmers?

**Answer:** Node.js Java programmers ko attract kar raha hai kyunki:
1. Ye fast aur scalable hai.
2. JavaScript use hota hai, jo frontend aur backend dono ke liye ek hi language hai.
3. Real-time applications banane ke liye suitable hai.


### **Q.73. What are the Challenges with Node.js?

**Answer:** Node.js ke challenges:
1. Callback Hell: Nested callbacks code ko complex bana sakte hain.
2. CPU-intensive Tasks: Ye CPU-intensive tasks ke liye suitable nahi hai.
3. Less Mature Libraries: Kuch libraries mature nahi hain.


### **Q.74. What is \non-blocking\ in node.js?

**Answer:** Non-blocking ka matlab hai ki code execution block nahi hota. Node.js non-blocking I/O operations use karta hai, jisse multiple requests 
simultaneously handle kiye ja sakte hain.


### **Q.75. How does Node.js overcome the problem of blocking I/O operations?

**Answer:** Node.js non-blocking I/O aur event loop ke through blocking I/O operations ko overcome karta hai. Ye asynchronous operations use karta hai, jisse 
code execution block nahi hota.


### **Q.76. How can we use async await in node.js?

**Answer:** Async/await use karne ke liye:
1. Function ko async keyword se define karo.
2. Asynchronous operations ke liye await keyword use karo.
Example:
**************************************************************************
```js
async function fetchData() { const data = await someAsyncFunction(); console.log(data)}
```
**************************************************************************


### **Q.77. Why should you separate the Express app and server?

**Answer:** Express app aur server ko separate karne ka reason hai:
1. Testing: App ko easily test kiya ja sakta hai.
2. Scalability: Server configuration ko easily change kiya ja sakta hai.
3. Separation of Concerns: Code maintainable aur modular ban jata hai.


### **Q.78. Explain the concept of stub in Node.js.

**Answer:** Stub ek dummy function ya module hota hai jo testing ke liye use hota hai. Ye actual implementation ko replace karta hai aur predefined responses 
return karta hai.


### **Q.79. What is the framework that is used majorly in Node.js today?

**Answer:** Aajkal Node.js mein sabse zyada use hone wala framework Express.js hai. Ye web applications aur APIs banane ke liye use hota hai.


### **Q.80. What are the security implementations that are present in Node.js?

**Answer:** Node.js mein security implementations:
1. Helmet: HTTP headers secure karne ke liye.
2. CORS: Cross-Origin Resource Sharing manage karne ke liye.
3. CSRF Protection: Cross-Site Request Forgery attacks se bachne ke liye.
4. Input Validation: User input ko validate karne ke liye.


### **Q.81. What is Libuv?

**Answer:** Libuv ek cross-platform library hai jo Node.js ke liye asynchronous I/O operations handle karti hai. Ye event loop, thread pool, aur file system 
operations ko manage karti hai. Libuv Node.js ko non-blocking I/O aur event-driven architecture provide karti hai.


### **Q.82. What are global objects in Node.js?

**Answer:** Global objects Node.js mein predefined objects hote hain jo har module mein available hote hain. Examples:
1. global: Global scope object.
2. process: Current Node.js process ke liye information provide karta hai.
3. console: Output print karne ke liye.
4. __dirname: Current directory ka path.
5. __filename: Current file ka path.


### **Q.83. Why is assert used in Node.js?

**Answer:** Assert module ka use testing ke liye hota hai. Ye conditions check karta hai aur agar condition false hoti hai, to error throw karta hai. Example:
**************************************************************************
```js
const assert = require('assert');
assert.strictEqual(1, 1); // No error
assert.strictEqual(1, 2); // Throws AssertionError
```
**************************************************************************


### **Q.84. Why is ExpressJS used?

**Answer:** ExpressJS use kiya jata hai kyunki:
1. Ye web applications aur APIs banane ke liye simple aur flexible hai.
2. Routing, middleware, aur request/response handling provide karta hai.
3. Large ecosystem hai aur NPM packages ke saath easily integrate hota hai.


### **Q.85. What is the use of the connect module in Node.js?

**Answer:** Connect module middleware framework hai jo HTTP servers ke liye middleware provide karta hai. Express.js Connect par built hai. Example:
**************************************************************************
```js
const connect = require('connect');
const app = connect();
app.use((req, res) => res.end('Hello World'));
app.listen(3000);
```
**************************************************************************


### **Q.86. What's the difference between 'front-end' and 'back-end' development?

**Answer:**
• Front-end Development: Ye user interface (UI) aur user experience (UX) banane ke liye hota hai. HTML, CSS, JavaScript use hota hai.
• Back-end Development: Ye server-side logic, databases, aur APIs handle karta hai. Node.js, Python, Java, etc. use hote hain.


### **Q.87. What are LTS releases of Node.js?

**Answer:** LTS (Long Term Support) releases stable versions hote hain jo long-term support aur security updates provide karte hain. Ye production environments 
ke liye recommended hote hain.


### **Q.88. What do you understand about ESLint?

**Answer:** ESLint ek static code analysis tool hai jo JavaScript code ko lint karta hai. Ye code style, syntax errors, aur best practices ko enforce karta hai. Example:
npm install eslint --save-dev
npx eslint yourfile.js


### **Q.89. Define the concept of the test pyramid. Please explain the process of implementing them in terms of HTTP APIs.

**Answer:** Test pyramid testing strategy hai jisme tests ko layers mein divide kiya jata hai:
1. Unit Tests: Smallest units (functions) ko test karna.
2. Integration Tests: Multiple units ko ek saath test karna.
3. End-to-End (E2E) Tests: Complete application flow ko test karna.
4. HTTP APIs ke liye:
5. Unit Tests: Individual API endpoints ko test karna.
6. Integration Tests: Multiple APIs aur databases ko ek saath test karna.
7. E2E Tests: Complete API flow ko test karna.


### **Q.90. How does Node.js handle the child threads?

**Answer:** Node.js child threads ko child_process module ke through handle karta hai. Ye processes create karne aur unse communicate karne ke liye methods 
provide karta hai. Example:
**************************************************************************
```js
const { fork } = require('child_process');
const child = fork('child.js');
```
**************************************************************************


### **Q.91. What is an Event Emitter in Node.js?

**Answer:** EventEmitter Node.js ka built-in class hai jo events create, listen, aur emit karne ke liye use hota hai. Example:
**************************************************************************
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', () => console.log('Hello World'));
emitter.emit('greet'); // Output: Hello World
```
**************************************************************************


### **Q.92. How to Enhance Node.js Performance through Clustering?

**Answer:** Clustering ke through Node.js performance enhance karne ke liye:
Cluster Module: Multiple child processes create karo.
Load Balancing: Incoming requests ko child processes mein distribute karo.
Example:
**************************************************************************
```js
const cluster = require('cluster');
if (cluster.isMaster) {
for (let i = 0; i < 4; i++) cluster.fork();
} else {
require('./app');
}
```
**************************************************************************


### **Q.93. What is a thread pool and which library handles it in Node.js?

**Answer:** Thread pool worker threads ka collection hai jo CPU-intensive tasks ko handle karte hain. Libuv library thread pool ko manage karti hai.


### **Q.94. How are worker threads different from clusters?

**Answer:**
• Worker Threads: Ye single process mein multiple threads create karte hain.
• Clusters: Ye multiple processes create karte hain.


### **Q.95. How to measure the duration of async operations?

**Answer:** Async operations ka duration measure karne ke liye console.time() aur console.timeEnd() use karo. Example:
**************************************************************************
```js
console.time('asyncOp');
await someAsyncFunction();
console.timeEnd('asyncOp');
```
**************************************************************************


### **Q.96. How to measure the performance of async operations?

**Answer:** Async operations ka performance measure karne ke liye:
• Timing Functions: console.time() aur console.timeEnd().
• Performance Hooks: perf_hooks module use karo.


### **Q.97. What are the types of streams available in Node.js?

**Answer:** Streams ke types:
• Readable: Data read karne ke liye.
• Writable: Data write karne ke liye.
• Duplex: Read aur write dono kar sakte hain.
• Transform: Data ko modify kar sakte hain.


### **Q.98. What is meant by tracing in Node.js?

**Answer:** Tracing ka matlab hai application ke execution flow ko track karna. Node.js mein trace_events module tracing provide karta hai.


### **Q.99. Where is package.json used in Node.js?

**Answer:** package.json file Node.js project ka metadata store karti hai. Isme project details, dependencies, scripts, aur configurations hoti hain.


### **Q.100. What is the difference between readFile and create Read Stream in Node.js?

**Answer:**
• readFile: Ye entire file ko memory mein load karta hai. Large files ke liye suitable nahi hai.
• createReadStream: Ye file ko chunks mein read karta hai. Large files ke liye suitable hai.


### **Q.101. What is the use of the crypto module in Node.js?

**Answer:** Crypto module cryptographic functionality provide karta hai, jaise:
Hashing: Data ko hash karna (e.g., SHA-256).
Encryption/Decryption: Data ko encrypt aur decrypt karna.
Digital Signatures: Data authenticity verify karna.
Example:
**************************************************************************
```js
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello').digest('hex');
console.log(hash);
```
**************************************************************************


### **Q.102. What is a passport in Node.js?

**Answer:** Passport.js authentication middleware hai jo Node.js applications mein user authentication handle karta hai. Ye multiple strategies (e.g., OAuth, JWT) 
support karta hai.
Example:
**************************************************************************
```js
const passport = require('passport');
passport.use(new LocalStrategy((username, password, done) => {
// Authentication logic
});
```
**************************************************************************


### **Q.103. How to get information about a file in Node.js?

**Answer:** File information get karne ke liye fs.stat() method use karo. Example:
**************************************************************************
```js
const fs = require('fs');
fs.stat('file.txt', (err, stats) => {
if (err) throw err;
console.log(stats);
});
```
**************************************************************************


### **Q.104. How does the DNS lookup function work in Node.js?

**Answer:** DNS lookup domain name ko IP address mein resolve karta hai. dns module use karo. Example:
**************************************************************************
```js
const dns = require('dns');
dns.lookup('example.com', (err, address) => {
if (err) throw err;
console.log(address);
});
```
**************************************************************************


### **Q.105. What is the difference between setImmediate() and setTimeout()?

**Answer:**
• setImmediate(): Ye callback ko next event loop iteration mein execute karta hai.
• setTimeout(): Ye callback ko specified delay ke baad execute karta hai.
Example:
**************************************************************************
```js
setImmediate(() => console.log('setImmediate'));
setTimeout(() => console.log('setTimeout'), 0);
// Output: setImmediate, setTimeout
```
**************************************************************************


### **Q.106. Explain the concept of Punycode in Node.js.

**Answer:** Punycode ek encoding technique hai jo Unicode characters ko ASCII mein convert karti hai. Ye internationalized domain names (IDNs) ke liye use hoti 
hai. Node.js mein punycode module available hai.


### **Q.107. Does Node.js provide any Debugger?

**Answer:** Haan, Node.js built-in debugger provide karta hai. Isse use karne ke liye node inspect command use karo. Example:
node inspect app.js


### **Q.108. Is cryptography supported in Node.js?

**Answer:** Haan, Node.js crypto module ke through cryptography support karta hai. Ye hashing, encryption, decryption, aur digital signatures provide karta hai.


### **Q.109. Why do you think you are the right fit for this Node.js role?

**Answer:** Mujhe lagta hai ki main is role ke liye perfect fit hoon kyunki:
Mujhe 3 saal ka Node.js ka experience hai.
Main real-time applications, APIs, aur microservices banane mein expert hoon.
Mujhe JavaScript aur Node.js ecosystem ka strong understanding hai.


### **Q.110. Do you have any past Node.js work experience?

**Answer:** Haan, mere paas 3 saal ka Node.js ka experience hai. Maine real-time applications, REST APIs, aur microservices banaye hain.


### **Q.111. Do you have any experience working in the same industry as ours?

**Answer:** Haan, maine [Industry Name] mein kaam kiya hai aur mujhe is industry ke challenges aur requirements ka accha understanding hai.


### **Q.112. Do you have any certification to boost your candidature for this Node.js role?

**Answer:** Haan, maine [Certification Name] certification li hai, jo Node.js aur JavaScript ke advanced concepts cover karti hai.


### **Q.113. What is CSRF (Cross-Site Request Forgery), and how does it affect APIs?

**Answer:** CSRF (Cross-Site Request Forgery) ek security attack hai jisme attacker user ko bewajah requests send karne ke liye force karta hai. Ye authenticated 
users ke sessions ka misuse karta hai. APIs ke liye, CSRF attacks sensitive data ko expose kar sakte hain aur unauthorized actions perform kar sakte hain.


### **Q.114. How can you prevent CSRF attacks in a Node.js API?

**Answer:** CSRF attacks prevent karne ke liye:
• CSRF Tokens: Har request ke saath unique token send karo aur verify karo.
• SameSite Cookies: Cookies ko SameSite attribute ke saath set karo.
• CORS Configuration: Proper CORS policies implement karo.
Example (CSRF Token):
**************************************************************************
```js
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);
app.get('/form', (req, res) => {


res.render('form', { csrfToken: re### **q.csrfToken() });

});
```
**************************************************************************


### **Q.115. Which middleware can be used in Express.js to handle CSRF protection?

**Answer:** Express.js mein CSRF protection ke liye csurf middleware use kiya jata hai. Example:
**************************************************************************
```js
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);
```
**************************************************************************


### **Q.116. Why is it important to update dependencies regularly in a Node.js application?

**Answer:** Dependencies regularly update karne ke fayde:
• Security Patches: Vulnerabilities fix hoti hain.
• New Features: Latest features aur improvements milte hain.
• Bug Fixes: Bugs resolve hote hain.
• Compatibility: Newer versions ke saath compatibility maintain hoti hai.


### **Q.117. How can you check for outdated packages in a Node.js project?

**Answer:** Outdated packages check karne ke liye npm outdated command use karo.
Example:
npm outdated


### **Q.118. What are some tools to identify security vulnerabilities in dependencies?

**Answer:** Security vulnerabilities identify karne ke liye tools:
• npm audit: Built-in tool for vulnerability scanning.
• Snyk: Third-party tool for dependency scanning.
• Dependabot: Automated dependency updates.
Example (npm audit):
```js
npm audit
```
**************************************************************************


### **Q.119. Why should default error messages be disabled in production?

**Answer:** Default error messages disable karne ka reason hai:
• Security: Sensitive information expose nahi hoti.
• User Experience: User-friendly error messages display kiye ja sakte hain.
• Debugging: Logs mein detailed errors capture kiye ja sakte hain.


### **Q.120. How can you customize error handling in an Express.js application?

**Answer:** Error handling customize karne ke liye middleware use karo. Example:
**************************************************************************
```js
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ error: 'Something went wrong!' });
});
```
**************************************************************************


### **Q.121. What is the best way to log errors without exposing sensitive information?

**Answer:** Errors log karne ka best tarika:
• Logging Libraries: winston ya bunyan use karo.
• Sanitize Data: Sensitive information remove karo.
• Environment-Based Logging: Production mein detailed logs avoid karo.
Example (winston):
**************************************************************************
```js
const winston = require('winston');
const logger = winston.createLogger({
level: 'error',
format: winston.format.json(),
transports: [new winston.transports.File({ filename: 'error.log' })],
});
logger.error('Error message');
```
**************************************************************************


### **Q.122. How do you implement secure session management in Node.js?

**Answer:** Secure session management implement karne ke liye:
• Use HTTPS: Data encryption ke liye.
• Secure Cookies: secure aur httpOnly flags use karo.
• Session Expiry: Sessions ko expire karo.
• Session Storage: Secure session storage (e.g., Redis) use karo.
Example (Express-session):
**************************************************************************
```js
const session = require('express-session');
app.use(session({
secret: 'your-secret-key',
resave: false,
saveUninitialized: false,
cookie: { secure: true, httpOnly: true, maxAge: 60000 }
}));
```
**************************************************************************


### **Q.123. What are the risks of storing session data in cookies?

**Answer:** Session data cookies mein store karne ke risks:
• Data Exposure: Cookies easily accessible hote hain aur sensitive data expose ho sakta hai.
• Tampering: Cookies modify kiye ja sakte hain.
• Size Limitations: Cookies ka size limited hota hai.
• CSRF Attacks: Cookies CSRF attacks ke liye vulnerable hote hain.


### **Q.124. How can you use express-session securely?

**Answer:** express-session securely use karne ke liye:
• Secure Cookies: secure aur httpOnly flags use karo.
• Session Expiry: Sessions ko expire karo.
• Secret Key: Strong secret key use karo.
• Session Storage: Secure session storage (e.g., Redis) use karo.
Example:
**************************************************************************
```js
const session = require('express-session');
app.use(session({
secret: 'your-secret-key',
resave: false,
saveUninitialized: false,
cookie: { secure: true, httpOnly: true, maxAge: 60000 }
}));
```
**************************************************************************


### **Q.125. What are the security risks of exposing API documentation?

**Answer:** API documentation expose karne ke risks:
• Information Leakage: Sensitive endpoints aur parameters expose ho sakte hain.
• Attack Surface: Attackers documentation ka use kar ke vulnerabilities exploit kar sakte hain.
• Unauthorized Access: Documentation mein sensitive information ho sakti hai.


### **Q.126. How can you secure Swagger UI in a Node.js API?

**Answer:** Swagger UI secure karne ke liye:
• Authentication: Swagger UI ko password protect karo.
• Environment-Based Access: Swagger UI ko sirf development environment mein enable karo.
• IP Whitelisting: Specific IPs ko access allow karo.
Example (Swagger UI with Basic Auth):
**************************************************************************
```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const basicAuth = require('express-basic-auth');
const app = express();
app.use('/api-docs', basicAuth({
users: { 'admin': 'password' },
challenge: true
}), 
swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```
**************************************************************************


### **Q.127. What are some best practices for documenting APIs securely?

**Answer:** API documentation securely karne ke best practices:
• Access Control: Documentation ko restrict karo.
• Environment-Based Documentation: Production mein sensitive details hide karo.
• Versioning: Documentation ko version karo.
• Obfuscation: Sensitive information obfuscate karo.


### **Q.128. What security testing tools can be used for a Node.js API?

**Answer:** Security testing tools:
• OWASP ZAP: Open-source security testing tool.
• Burp Suite: Comprehensive web vulnerability scanner.
• Nmap: Network scanning tool.
• Nessus: Vulnerability assessment tool.


### **Q.129. How can you perform penetration testing on an API?

**Answer:** API penetration testing karne ke steps:
• Reconnaissance: API endpoints aur parameters identify karo.
• Vulnerability Scanning: Tools like OWASP ZAP use karo.
• Exploitation: Vulnerabilities ko exploit karke test karo.
• Reporting: Findings ko document karo aur fixes suggest karo.


### **Q.130. What is OWASP ZAP, and how can it be used in API security testing?

**Answer:** OWASP ZAP (Zed Attack Proxy) ek open-source security testing tool hai jo web applications aur APIs ke vulnerabilities detect karne ke liye use hota hai. 
Isse use karne ke liye:
• Install ZAP: Download aur install karo.
• Configure Target: API endpoint set karo.
• Run Scan: Automated scan start karo.
• Analyze Results: Vulnerabilities ko review karo.


### **Q.131. Why is it important to set token expiration times?

**Answer:** Token expiration times set karne ka reason hai:
• Security: Expired tokens misuse nahi ho sakte.
• Session Management: User sessions ko manage karna easy hota hai.
• Compliance: Security standards aur regulations follow kiye ja sakte hain.


### **Q.132. How can you implement token expiration with JWT in Node.js?

**Answer:** JWT mein token expiration implement karne ke liye exp claim use karo. Example:
**************************************************************************
```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'your-secret-key', { expiresIn: '1h' });
console.log(token);
```
**************************************************************************


### **Q.133. What is refresh token rotation, and how does it improve security?

**Answer:** Refresh token rotation ek security practice hai jisme refresh token regularly update kiye jaate hain. Isse security improve hoti hai kyunki:
• Token Reuse Prevention: Agar refresh token compromise ho jaye, to uska reuse nahi ho sakta.
• Short-Lived Tokens: Tokens ka lifespan kam hota hai, jisse risk kam hota hai.
• Detection of Compromise: Token rotation se compromised tokens quickly detect kiye ja sakte hain.


### **Q.134. Why is input validation critical for API security?

**Answer:** Input validation critical hai kyunki:
• Prevents Injection Attacks: SQL injection, XSS, etc. se bachata hai.
• Data Integrity: Invalid data ko block karta hai.
• User Experience: Invalid inputs ke liye meaningful error messages provide karta hai.


### **Q.135. How can you use Joi or express-validator for input validation?

**Answer:** Joi aur express-validator input validation ke liye use kiye jaate hain. Example:
Using Joi:
**************************************************************************
```js
const Joi = require('joi');
const schema = Joi.object({
username: Joi.string().min(3).required(),
password: Joi.string().min(6).required()
});
const { error } = schema.validate({ username: 'abc', password: '123456' });
if (error) console.log(error.details);
```
**************************************************************************
Using express-validator:
**************************************************************************
```js
const { body, validationResult } = require('express-validator');
app.post('/user', [
body('username').isLength({ min: 3 }),
body('password').isLength({ min: 6 })
], (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
res.send('User created');
});
```
**************************************************************************


### **Q.136. What is the difference between sanitization and validation?

**Answer:**
• Validation: Ye check karta hai ki input valid hai ya nahi (e.g., required fields, data types).
• Sanitization: Ye input ko clean karta hai aur harmful content ko remove karta hai (e.g., removing HTML tags).


### **Q.137. What are some important security headers for APIs?

**Answer:** Important security headers:
• Content-Security-Policy: Cross-site scripting (XSS) attacks se bachata hai.
• X-Frame-Options: Clickjacking attacks se bachata hai.
• Strict-Transport-Security: HTTPS enforce karta hai.
• X-Content-Type-Options: MIME type sniffing se bachata hai.


### **Q.138. How can you set security headers using helmet middleware in Express.js?

**Answer:** helmet middleware security headers set karne ke liye use hota hai. Example:
**************************************************************************
```js
const helmet = require('helmet');
app.use(helmet());
```
**************************************************************************


### **Q.139. What does X-Frame-Options header do?

**Answer:** X-Frame-Options header clickjacking attacks se bachata hai. Ye specify karta hai ki webpage iframe mein load ho sakta hai ya nahi. Common values:
• DENY: Page iframe mein load nahi ho sakta.
• SAMEORIGIN: Page sirf same origin ke iframe mein load ho sakta hai.


### **Q.140. What is CORS, and why is it important for APIs?

**Answer:** CORS (Cross-Origin Resource Sharing) ek mechanism hai jo browsers ko allow karta hai ki wo different origins se resources request kar sake. APIs ke 
liye important hai kyunki:
• Security: Unauthorized access se bachata hai.
• Flexibility: Multiple domains se resources share karne ki facility deta hai.


### **Q.141. How can you configure CORS properly in an Express.js API?

**Answer:** CORS configure karne ke liye cors middleware use karo. Example:
**************************************************************************
```js
const cors = require('cors');
app.use(cors({
origin: 'https://example.com',
methods: ['GET', 'POST'],
allowedHeaders: ['Content-Type', 'Authorization']
}));
```
**************************************************************************


### **Q.142. What are the security risks of allowing Access-Control-Allow-Origin: *?

**Answer:**
• Access-Control-Allow-Origin: * allow karne ke risks:
• Unauthorized Access: Koi bhi domain API access kar sakta hai.
• Data Exposure: Sensitive data expose ho sakta hai.
• CSRF Attacks: Cross-site request forgery attacks ka risk badh jata hai.


### **Q.143. How do you prevent brute-force attacks on login endpoints?

**Answer:** Brute-force attacks prevent karne ke liye:
• Rate Limiting: Login attempts ko limit karo.
• Account Lockout: Multiple failed attempts ke baad account temporarily lock karo.
• CAPTCHA: CAPTCHA use karo.
• Strong Passwords: Users ko strong passwords use karne ke liye encourage karo.


### **Q.144. How can you use express-rate-limit middleware to limit login attempts?

**Answer:** express-rate-limit middleware use karne ka example:
**************************************************************************
```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
windowMs: 15 * 60 * 1000, // 15 minutes
max: 5, // Limit each IP to 5 requests per windowMs
message: 'Too many login attempts, please try again later.'
});
app.use('/login', limiter);
```
**************************************************************************


### **Q.145. What are some alternative ways to secure authentication endpoints?

**Answer:** Authentication endpoints secure karne ke alternative ways:
• Multi-Factor Authentication (MFA): Additional security layer add karo.
• IP Whitelisting: Specific IPs ko access allow karo.
• Token-Based Authentication: JWT ya OAuth use karo.
• Monitoring: Suspicious activity ko monitor karo.


### **Q.146. Why is API versioning important?

**Answer:** API versioning important hai kyunki:
• Backward Compatibility: Existing clients ko break nahi karta.
• Feature Rollout: New features ko safely introduce karta hai.
• Maintenance: Different versions ko independently maintain kiya ja sakta hai.


### **Q.147. What are the different strategies for API versioning in Node.js?

**Answer:** API versioning strategies:
• URL Versioning: /v1/resource
• Header Versioning: Accept: application/vnd.example.v1+json
• Query Parameter Versioning: /resource?version=1


### **Q.148. How can you implement versioning in an Express.js API?

**Answer:** Express.js mein versioning implement karne ka example:
**************************************************************************
```js
app.use('/v1', require('./routes/v1'));
app.use('/v2', require('./routes/v2'));
```
**************************************************************************


### **Q.149. What is the difference between encryption at rest and in transit?

**Answer:**
• Encryption at Rest: Data storage mein encrypt kiya jata hai (e.g., databases, files).
• Encryption in Transit: Data transfer ke dauraan encrypt kiya jata hai (e.g., HTTPS).


### **Q.150. How can you encrypt sensitive data before storing it in a database?

**Answer:** Sensitive data encrypt karne ke liye libraries like crypto use karo. Example:
**************************************************************************
```js
const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'your-secret-key');
let encrypted = cipher.update('sensitive-data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
```
**************************************************************************


### **Q.151. What are some libraries for encrypting data in Node.js?

**Answer:** Encryption libraries:
• crypto: Built-in Node.js module.
• bcrypt: Password hashing ke liye.
• jsonwebtoken: JWT tokens generate karne ke liye.


### **Q.152. Why is logging important for security monitoring?

**Answer:** Logging important hai kyunki:
• Incident Detection: Suspicious activity detect karne mein help karta hai.
• Audit Trail: Actions ka record maintain karta hai.
• Debugging: Issues ko diagnose karne mein help karta hai.


### **Q.153. How can you implement structured logging in Node.js?

**Answer:** Structured logging implement karne ke liye winston use karo. Example:
**************************************************************************
```js
const winston = require('winston');
const logger = winston.createLogger({
level: 'info',
format: winston.format.json(),
transports: [new winston.transports.File({ filename: 'app.log' })]
});
logger.info('This is a structured log message', { user: 'John', action: 'login' });
```
**************************************************************************


### **Q.154. What are the best practices for log management and retention?

**Answer:** Log management best practices:
• Centralized Logging: Logs ko central location mein store karo.
• Retention Policies: Logs ko specific period tak retain karo.
• Access Control: Logs ko restrict karo.
• Monitoring: Logs ko regularly monitor karo.


### **Q.155. How does rate limiting protect APIs from abuse?

**Answer:** Rate limiting APIs ko abuse se bachata hai:
• Prevents Overload: Server resources ko protect karta hai.
• DDoS Protection: Distributed Denial of Service attacks se bachata hai.
• Fair Usage: Resources ko fairly distribute karta hai.


### **Q.156. How can you implement rate limiting using express-rate-limit?

**Answer:** express-rate-limit use karne ka example:
**************************************************************************
```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
windowMs: 15 * 60 * 1000, // 15 minutes
max: 100, // Limit each IP to 100 requests per windowMs
message: 'Too many requests, please try again later.'
});
app.use(limiter);
```
**************************************************************************


### **Q.157. What are some strategies to handle rate-limited requests?

**Answer:** Rate-limited requests handle karne ke strategies:
• Retry-After Header: Client ko retry karne ka time batana.
• Queueing: Requests ko queue mein add karna.
• Throttling: Requests ko slow down karna.


### **Q.158. Why should error messages be generic in production?

**Answer:** Error messages generic honi chahiye kyunki:
Security: Sensitive information expose nahi hoti.
User Experience: User-friendly error messages display kiye ja sakte hain.
Debugging: Logs mein detailed errors capture kiye ja sakte hain.


### **Q.159. How can you configure Express.js to show different errors in development and production?

**Answer:** Express.js mein environment-based error handling ka example:
**************************************************************************
```js
app.use((err, req, res, next) => {
if (process.env.NODE_ENV === 'development') {
res.status(500).json({ error: err.message, stack: err.stack });
} else {
res.status(500).json({ error: 'Something went wrong!' });
}
});
```
**************************************************************************


### **Q.160. What are some common mistakes developers make when handling API errors?

**Answer:** Common mistakes:
• Exposing Sensitive Information: Detailed error messages expose karna.
• Ignoring Errors: Errors ko handle nahi karna.
• Inconsistent Error Responses: Different formats mein error responses dena.
• Not Logging Errors: Errors ko log nahi karna.