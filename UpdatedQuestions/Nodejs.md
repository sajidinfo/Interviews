

---

### Node.js Interview Questions: Answers

#### Conceptual Questions (1-20)

1. **Explain the architecture of Node.js and its single-threaded nature.**
   - Node.js is a runtime built on Chrome’s V8 engine, designed for non-blocking, event-driven I/O operations. It uses a single-threaded event loop to handle asynchronous tasks, offloading I/O operations to a thread pool via `libuv`.
   - **Single-threaded**: Executes JavaScript in a single thread but leverages asynchronous I/O to handle concurrency, making it efficient for I/O-bound tasks like APIs or file operations.

2. **What is the event loop in Node.js, and how does it work?**
   - The event loop manages asynchronous operations in Node.js, processing tasks in phases: timers, pending callbacks, poll, check, and close.
   - **How it works**:
     1. Executes synchronous code.
     2. Processes tasks from the event queue (e.g., callbacks from `setTimeout`, I/O).
     3. Uses `libuv` for non-blocking I/O.
     ```javascript
     setTimeout(() => console.log("Timer"), 0);
     console.log("Sync"); // Sync, then Timer
     ```

3. **Describe the difference between `process.nextTick` and `setImmediate`.**
   - `process.nextTick`: Queues a callback to execute before the next event loop phase, higher priority than `setImmediate`.
   - `setImmediate`: Queues a callback to execute after the current phase (in the check phase).
     ```javascript
     process.nextTick(() => console.log("Next Tick"));
     setImmediate(() => console.log("Immediate"));
     // Next Tick, then Immediate
     ```

4. **What is the purpose of the `module.exports` object in Node.js?**
   - `module.exports` defines what a module exposes to other modules when required.
     ```javascript
     module.exports = { add: (a, b) => a + b };
     // Usage: const { add } = require('./module');
     ```

5. **Explain how Node.js handles asynchronous I/O operations.**
   - Node.js uses non-blocking I/O via `libuv`, delegating tasks (e.g., file reading, network requests) to a thread pool while the main thread continues. Callbacks, Promises, or `async/await` handle results.
     ```javascript
     const fs = require('fs');
     fs.readFile('file.txt', (err, data) => console.log(data));
     ```

6. **What is the difference between synchronous and asynchronous functions in Node.js?**
   - **Synchronous**: Blocks execution until complete (e.g., `fs.readFileSync`).
   - **Asynchronous**: Non-blocking, uses callbacks/Promises (e.g., `fs.readFile`).
     ```javascript
     // Sync
     const data = fs.readFileSync('file.txt');
     // Async
     fs.readFile('file.txt', (err, data) => console.log(data));
     ```

7. **Describe the role of the `package.json` file in a Node.js project.**
   - `package.json` is the project’s metadata file, defining:
     - Dependencies (`dependencies`, `devDependencies`).
     - Scripts (e.g., `npm start`).
     - Project info (name, version).
     - Example:
       ```json
       {
         "name": "my-app",
         "dependencies": { "express": "^4.18.2" },
         "scripts": { "start": "node app.js" }
       }
       ```

8. **What is the purpose of the `fs` module in Node.js?**
   - The `fs` (File System) module provides APIs for file operations (e.g., reading, writing, deleting).
     ```javascript
     const fs = require('fs');
     fs.writeFileSync('file.txt', 'Hello');
     ```

9. **Explain how clustering works in Node.js for scalability.**
   - Clustering creates multiple worker processes to utilize multiple CPU cores, managed by a master process.
     ```javascript
     const cluster = require('cluster');
     if (cluster.isMaster) {
       for (let i = 0; i < require('os').cpus().length; i++) {
         cluster.fork();
       }
     } else {
       // Worker process
       require('./server');
     }
     ```

10. **What are streams in Node.js, and when would you use them?**
    - Streams process data in chunks, ideal for large files or real-time data.
    - **Types**: Readable, Writable, Duplex, Transform.
    - **Use case**: Streaming large files to avoid loading into memory.
      ```javascript
      fs.createReadStream('large.txt').pipe(fs.createWriteStream('output.txt'));
      ```

11. **Describe the difference between `require` and `import` in Node.js.**
    - `require`: CommonJS, synchronous, used in older Node.js projects.
      ```javascript
      const express = require('express');
      ```
    - `import`: ES Modules, asynchronous, supported in modern Node.js (requires `"type": "module"` in `package.json`).
      ```javascript
      import express from 'express';
      ```

12. **What is the purpose of the `EventEmitter` class in Node.js?**
    - `EventEmitter` enables pub-sub pattern for custom event handling.
      ```javascript
      const EventEmitter = require('events');
      const emitter = new EventEmitter();
      emitter.on('event', () => console.log('Triggered'));
      emitter.emit('event');
      ```

13. **Explain how Node.js handles errors in asynchronous code.**
    - Errors are passed to callbacks, caught in Promises, or handled with `try/catch` in `async/await`.
      ```javascript
      // Callback
      fs.readFile('file.txt', (err, data) => { if (err) throw err; });
      // Promise
      fs.promises.readFile('file.txt').catch(err => console.error(err));
      ```

14. **What is middleware in the context of Node.js applications?**
    - Middleware are functions executed in the request-response cycle, handling tasks like logging, authentication, or parsing.
      ```javascript
      app.use((req, res, next) => {
        console.log('Request received');
        next();
      });
      ```

15. **How does Node.js handle memory management and garbage collection?**
    - Node.js uses V8’s mark-and-sweep garbage collection.
    - Memory leaks occur from global variables, unclosed timers, or retained closures.
    - Monitor with `--inspect` or tools like `heapdump`.

16. **What is the difference between `fork` and `spawn` in the `child_process` module?**
    - `fork`: Spawns a new Node.js process, ideal for JavaScript-heavy tasks.
    - `spawn`: Spawns a new process for any command, ideal for shell commands.
      ```javascript
      const { fork, spawn } = require('child_process');
      fork('child.js'); // Node.js process
      spawn('ls', ['-l']); // Shell command
      ```

17. **Explain how to secure a Node.js application against common vulnerabilities.**
    - Use `helmet` for secure HTTP headers.
    - Sanitize inputs to prevent XSS/SQL injection.
    - Validate JWT tokens for authentication.
    - Limit requests with rate-limiting middleware.
    - Keep dependencies updated (`npm audit`).

18. **What is the role of npm in Node.js development?**
    - npm (Node Package Manager) manages dependencies, scripts, and publishes packages.
    - Commands: `npm install`, `npm run`, `npm publish`.
    - Example: `npm install express` adds Express to `package.json`.

19. **Describe how to handle environment variables in Node.js.**
    - Use `process.env` or libraries like `dotenv`.
      ```javascript
      require('dotenv').config();
      console.log(process.env.API_KEY);
      ```
    - Store sensitive data in `.env` files, ignored by `.gitignore`.

20. **What are microservices, and how can Node.js be used to build them?**
    - Microservices are small, independent services communicating via APIs.
    - Node.js is ideal due to its lightweight, non-blocking nature.
    - Use frameworks like Express for APIs, message queues (e.g., RabbitMQ) for communication, and Docker for deployment.

#### Coding Questions (21-40)

21. **Write a Node.js script to read a file and log its contents.**
    ```javascript
    const fs = require('fs');
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

22. **Create a simple HTTP server using Node.js core modules.**
    ```javascript
    const http = require('http');
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    });
    server.listen(3000, () => console.log('Server running on port 3000'));
    ```

23. **Implement a function to parse a CSV file in Node.js.**
    ```javascript
    const fs = require('fs');
    const csv = require('csv-parser');
    function parseCSV(filePath) {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', data => results.push(data))
        .on('end', () => console.log(results));
    }
    parseCSV('data.csv');
    ```

24. **Write a script to handle file uploads using the `fs` module.**
    ```javascript
    const http = require('http');
    const fs = require('fs');
    const server = http.createServer((req, res) => {
      if (req.method === 'POST') {
        req.pipe(fs.createWriteStream('upload.txt')).on('finish', () => {
          res.end('File uploaded');
        });
      }
    });
    server.listen(3000);
    ```

25. **Create a Node.js script to schedule a task using `setInterval`.**
    ```javascript
    setInterval(() => {
      console.log(`Task executed at ${new Date()}`);
    }, 5000);
    ```

26. **Implement a basic WebSocket server in Node.js.**
    ```javascript
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ port: 8080 });
    wss.on('connection', ws => {
      ws.on('message', message => {
        ws.send(`Received: ${message}`);
      });
    });
    ```

27. **Write a function to compress a file using the `zlib` module.**
    ```javascript
    const fs = require('fs');
    const zlib = require('zlib');
    function compressFile(input, output) {
      fs.createReadStream(input)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(output));
    }
    compressFile('file.txt', 'file.txt.gz');
    ```

28. **Create a script to connect to a MongoDB database and fetch data.**
    ```javascript
    const { MongoClient } = require('mongodb');
    async function fetchData() {
      const client = new MongoClient('mongodb://localhost:27017');
      await client.connect();
      const db = client.db('mydb');
      const users = await db.collection('users').find().toArray();
      console.log(users);
      await client.close();
    }
    fetchData();
    ```

29. **Implement a Node.js function to retry failed API calls.**
    ```javascript
    const axios = require('axios');
    async function retryRequest(url, maxRetries = 3) {
      for (let i = 0; i < maxRetries; i++) {
        try {
          return await axios.get(url);
        } catch (err) {
          if (i === maxRetries - 1) throw err;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }
    ```

30. **Write a script to handle streaming of a large file in Node.js.**
    ```javascript
    const fs = require('fs');
    const http = require('http');
    http.createServer((req, res) => {
      fs.createReadStream('large.txt').pipe(res);
    }).listen(3000);
    ```

31. **Create a Node.js module to export utility functions for string manipulation.**
    ```javascript
    // utils.js
    module.exports = {
      capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
      reverse: str => str.split('').reverse().join('')
    };
    // Usage
    const { capitalize } = require('./utils');
    console.log(capitalize('hello')); // Hello
    ```

32. **Implement a basic REST API using Node.js core HTTP module.**
    ```javascript
    const http = require('http');
    const users = [{ id: 1, name: 'John' }];
    http.createServer((req, res) => {
      if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
      }
    }).listen(3000);
    ```

33. **Write a script to monitor system memory usage in Node.js.**
    ```javascript
    const os = require('os');
    setInterval(() => {
      const memory = process.memoryUsage();
      console.log(`Heap: ${memory.heapUsed / 1024 / 1024} MB`);
    }, 1000);
    ```

34. **Create a function to validate JSON data against a schema.**
    ```javascript
    const Ajv = require('ajv');
    const ajv = new Ajv();
    const schema = { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] };
    function validateJSON(data) {
      const validate = ajv.compile(schema);
      return validate(data) ? true : validate.errors;
    }
    console.log(validateJSON({ name: 'John' })); // true
    ```

35. **Implement a Node.js script to send an email using Nodemailer.**
    ```javascript
    const nodemailer = require('nodemailer');
    async function sendEmail() {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'user@gmail.com', pass: 'password' }
      });
      await transporter.sendMail({
        from: 'user@gmail.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'Hello!'
      });
      console.log('Email sent');
    }
    sendEmail();
    ```

36. **Write code to handle pagination in a Node.js API.**
    ```javascript
    const express = require('express');
    const app = express();
    const users = Array(100).fill().map((_, i) => ({ id: i + 1 }));
    app.get('/users', (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const start = (page - 1) * limit;
      res.json(users.slice(start, start + limit));
    });
    app.listen(3000);
    ```

37. **Create a script to log HTTP requests to a file in Node.js.**
    ```javascript
    const http = require('http');
    const fs = require('fs');
    const server = http.createServer((req, res) => {
      fs.appendFileSync('requests.log', `${new Date()} ${req.method} ${req.url}\n`);
      res.end('Logged');
    });
    server.listen(3000);
    ```

38. **Implement a function to generate a UUID in Node.js.**
    ```javascript
    const { v4: uuidv4 } = require('uuid');
    function generateUUID() {
      return uuidv4();
    }
    console.log(generateUUID()); // e.g., '123e4567-e89b-12d3-a456-426614174000'
    ```

39. **Write a script to connect to a Redis server and cache data.**
    ```javascript
    const redis = require('redis');
    const client = redis.createClient({ url: 'redis://localhost:6379' });
    async function cacheData(key, value) {
      await client.connect();
      await client.set(key, JSON.stringify(value));
      const data = await client.get(key);
      console.log(JSON.parse(data));
      await client.disconnect();
    }
    cacheData('user', { id: 1, name: 'John' });
    ```

40. **Create a Node.js script to process a large JSON file in chunks.**
    ```javascript
    const fs = require('fs');
    const JSONStream = require('JSONStream');
    fs.createReadStream('large.json')
      .pipe(JSONStream.parse('*'))
      .on('data', data => console.log(data))
      .on('end', () => console.log('Done'));
    ```

#### Scenario-Based Questions (41-50)

41. **How would you optimize a Node.js app for high concurrency?**
    - Use clustering to leverage multiple CPU cores.
    - Implement async operations to avoid blocking.
    - Use a reverse proxy (e.g., Nginx) for load balancing.
    - Cache responses with Redis.
    - Optimize database queries with indexing.

42. **Explain how you’d handle a memory leak in a Node.js application.**
    - Use `heapdump` or Chrome DevTools to analyze heap snapshots.
    - Check for unclosed timers, event listeners, or retained closures.
    - Unsubscribe from Observables or event emitters.
    - Monitor with `process.memoryUsage()`.

43. **How would you implement rate limiting in a Node.js API?**
    - Use `express-rate-limit` middleware.
      ```javascript
      const rateLimit = require('express-rate-limit');
      app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
      ```
    - Store request counts in Redis for distributed systems.

44. **Describe how you’d scale a Node.js app across multiple servers.**
    - Use a load balancer (e.g., Nginx, AWS ELB).
    - Deploy with Docker and Kubernetes for orchestration.
    - Share state via Redis or a database.
    - Use PM2 for process management in a single server.

45. **How would you debug a Node.js app crashing in production?**
    - Enable logging with `winston` or `morgan`.
    - Use `node --inspect` for remote debugging.
    - Analyze core dumps with `heapdump`.
    - Monitor with tools like New Relic or AWS CloudWatch.
    - Check error logs for stack traces.

46. **Explain how you’d secure a Node.js app against SQL injection.**
    - Use parameterized queries or ORMs (e.g., Sequelize, Mongoose).
    - Sanitize inputs with libraries like `express-validator`.
      ```javascript
      const { body, validationResult } = require('express-validator');
      app.post('/user', body('username').isAlphanumeric(), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);
      });
      ```

47. **How would you implement logging in a Node.js application?**
    - Use `winston` for flexible logging (console, file, remote).
      ```javascript
      const winston = require('winston');
      const logger = winston.createLogger({
        transports: [
          new winston.transports.File({ filename: 'app.log' })
        ]
      });
      logger.info('App started');
      ```

48. **Describe how you’d handle file uploads for large files in Node.js.**
    - Use `multer` for parsing multipart forms.
    - Stream uploads to avoid buffering in memory.
      ```javascript
      const multer = require('multer');
      const upload = multer({ dest: 'uploads/' });
      app.post('/upload', upload.single('file'), (req, res) => {
        res.send('File uploaded');
      });
      ```

49. **How would you integrate a message queue (e.g., RabbitMQ) with Node.js?**
    - Use `amqplib` to connect to RabbitMQ.
      ```javascript
      const amqp = require('amqplib');
      async function sendMessage(queue, msg) {
        const conn = await amqp.connect('amqp://localhost');
        const channel = await conn.createChannel();
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(msg));
        await conn.close();
      }
      sendMessage('tasks', 'Process this');
      ```

50. **Explain how you’d deploy a Node.js app to a cloud platform like AWS.**
    - Package the app with Docker for consistency.
    - Deploy to AWS ECS or Elastic Beanstalk.
    - Use S3 for static assets, RDS for databases.
    - Configure CI/CD with AWS CodePipeline.
    - Monitor with CloudWatch and enable auto-scaling.

---

### Notes
- **Experience Context**: With 4 years of full-stack experience, you likely have hands-on knowledge of Node.js in APIs, microservices, and backend integration. These answers focus on practical implementations (e.g., Express, MongoDB, Redis) and production concerns like scaling and security.
- **Memory Instructions**: To manage or forget this conversation, use the "Data Controls" section in settings or the book icon to select specific chats to forget.
- **Further Clarification**: If you need deeper explanations (e.g., advanced microservices patterns, AWS deployment details), more code examples, or integration with frontend frameworks like Angular, let me know!
