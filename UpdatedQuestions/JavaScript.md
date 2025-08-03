
---

### JavaScript Interview Questions: Answers

#### Conceptual Questions (1-20)

1. **Explain how `this` keyword works in JavaScript with examples for different contexts.**
   - `this` refers to the object executing the current function. Its value depends on how a function is called:
     - **Global context**: `this` is `window` (browser) or `global` (Node.js).
       ```javascript
       console.log(this); // window (in browser)
       ```
     - **Object method**: `this` is the object the method is called on.
       ```javascript
       const obj = { name: "John", greet: function() { console.log(this.name); } };
       obj.greet(); // "John"
       ```
     - **Constructor**: `this` refers to the newly created instance.
       ```javascript
       function Person(name) { this.name = name; }
       const john = new Person("John"); // this = new instance
       console.log(john.name); // "John"
       ```
     - **Event handlers**: `this` is the element that triggered the event.
       ```javascript
       document.querySelector("button").addEventListener("click", function() {
         console.log(this); // <button> element
       });
       ```
     - **Arrow functions**: `this` is lexically bound (inherits from the outer scope).
       ```javascript
       const obj = {
         name: "John",
         greet: () => console.log(this.name)
       };
       obj.greet(); // undefined (this = window, not obj)
       ```
     - Use `bind`, `call`, or `apply` to explicitly set `this`.

2. **What is the difference between `==` and `===` operators? Provide examples.**
   - `==` (loose equality) compares values after type coercion.
   - `===` (strict equality) compares values and types without coercion.
     ```javascript
     console.log(5 == "5"); // true (string "5" coerced to number)
     console.log(5 === "5"); // false (different types)
     console.log(null == undefined); // true (coerced)
     console.log(null === undefined); // false (different types)
     ```

3. **Describe hoisting in JavaScript and how it affects variables and functions.**
   - Hoisting moves variable and function declarations to the top of their scope during compilation.
   - **Variables**:
     - `var`: Declared but initialized as `undefined`.
     - `let`/`const`: Declared but not initialized (Temporal Dead Zone).
       ```javascript
       console.log(x); // undefined
       var x = 5;
       console.log(y); // ReferenceError: Cannot access 'y' before initialization
       let y = 10;
       ```
   - **Functions**: Function declarations are fully hoisted (can be called before declaration).
       ```javascript
       myFunc(); // Works
       function myFunc() { console.log("Hello"); }
       ```

4. **What are closures? Provide a real-world use case in a project.**
   - A closure is a function that retains access to its outer scope’s variables even after the outer function has returned.
     ```javascript
     function outer() {
       let count = 0;
       return function inner() {
         return ++count;
       };
     }
     const counter = outer();
     console.log(counter()); // 1
     console.log(counter()); // 2
     ```
   - **Use case**: In a React project, a closure can manage stateful logic, like a counter in a custom hook:
     ```javascript
     function useCounter() {
       let count = 0;
       return {
         increment: () => ++count,
         getCount: () => count
       };
     }
     ```

5. **Explain the event loop and how it handles asynchronous operations.**
   - The event loop manages JavaScript’s single-threaded, asynchronous execution.
   - It processes the call stack, task queue (for callbacks, e.g., `setTimeout`), and microtask queue (for Promises).
   - **Execution**:
     1. Synchronous code runs first.
     2. Microtasks (e.g., `Promise.then`) are processed next.
     3. Tasks (e.g., `setTimeout` callbacks) run after.
     ```javascript
     console.log("Start");
     setTimeout(() => console.log("Timeout"), 0);
     Promise.resolve().then(() => console.log("Promise"));
     console.log("End");
     // Output: Start, End, Promise, Timeout
     ```

6. **What is the difference between `null`, `undefined`, and `NaN`?**
   - `null`: Explicitly represents "no value" or an intentional absence.
   - `undefined`: Indicates a variable has been declared but not assigned a value.
   - `NaN`: Represents an invalid number (result of invalid math operations).
     ```javascript
     let a;
     console.log(a); // undefined
     let b = null;
     console.log(b); // null
     console.log(0 / 0); // NaN
     ```

7. **How does prototypal inheritance work in JavaScript?**
   - JavaScript uses prototypes for inheritance. Objects inherit properties and methods from their prototype.
   - The `__proto__` property or `Object.getPrototypeOf` links to the prototype.
     ```javascript
     function Animal(name) {
       this.name = name;
     }
     Animal.prototype.speak = function() {
       console.log(`${this.name} speaks`);
     };
     const dog = new Animal("Dog");
     dog.speak(); // Dog speaks
     ```
   - Prototypes form a chain, checked for properties/methods until `null` is reached.

8. **Explain the difference between `call`, `apply`, and `bind` methods.**
   - `call`: Invokes a function with a specified `this` and arguments individually.
     ```javascript
     function greet(greeting) {
       console.log(`${greeting}, ${this.name}`);
     }
     greet.call({ name: "John" }, "Hello"); // Hello, John
     ```
   - `apply`: Invokes a function with a specified `this` and arguments as an array.
     ```javascript
     greet.apply({ name: "John" }, ["Hello"]); // Hello, John
     ```
   - `bind`: Returns a new function with a fixed `this` and optional preset arguments.
     ```javascript
     const boundGreet = greet.bind({ name: "John" }, "Hi");
     boundGreet(); // Hi, John
     ```

9. **What are arrow functions, and how do they differ from regular functions?**
   - Arrow functions (`=>`) are concise and have lexical `this` (inherits from surrounding scope).
   - Differences:
     - No `this`, `arguments`, or `prototype`.
     - Cannot be used as constructors.
     ```javascript
     const arrow = () => console.log(this); // this = outer scope
     function regular() { console.log(this); } // this = caller
     ```

10. **Describe the concept of Promises and their states (pending, fulfilled, rejected).**
    - A Promise is an object representing the eventual completion or failure of an async operation.
    - **States**:
      - **Pending**: Initial state, neither fulfilled nor rejected.
      - **Fulfilled**: Operation completed successfully (`resolve`).
      - **Rejected**: Operation failed (`reject`).
      ```javascript
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Success"), 1000);
      });
      promise.then(result => console.log(result)); // Success
      ```

11. **How does `async/await` work, and how is it different from Promises?**
    - `async/await` is syntactic sugar over Promises for cleaner async code.
    - `async` functions return a Promise; `await` pauses execution until the Promise resolves.
      ```javascript
      async function fetchData() {
        const response = await fetch("https://api.example.com/data");
        return response.json();
      }
      ```
    - **Difference**: `async/await` avoids `.then` chaining, making code more readable. Error handling uses `try/catch` instead of `.catch`.

12. **What is event delegation, and why is it useful?**
    - Event delegation attaches a single event listener to a parent element to handle events on its children, leveraging event bubbling.
    - **Benefits**: Reduces memory usage, handles dynamic elements, simplifies code.
      ```javascript
      document.querySelector("ul").addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          console.log(e.target.textContent);
        }
      });
      ```

13. **Explain the difference between `let`, `const`, and `var` in terms of scope and mutability.**
    - `var`: Function-scoped, hoisted, mutable.
    - `let`: Block-scoped, hoisted but not initialized (TDZ), mutable.
    - `const`: Block-scoped, hoisted but not initialized (TDZ), immutable (but object properties can change).
      ```javascript
      var x = 1; // Function/global scope
      let y = 2; // Block scope
      const z = 3; // Block scope, cannot reassign
      ```

14. **What are JavaScript modules? Compare CommonJS and ES Modules.**
    - Modules encapsulate code, exposing only specified exports.
    - **CommonJS** (Node.js):
      - Uses `require` and `module.exports`.
      - Synchronous loading, suitable for server-side.
      ```javascript
      const module = require("./module");
      module.exports = { func };
      ```
    - **ES Modules** (modern browsers/Node.js):
      - Uses `import`/`export`.
      - Asynchronous, supports tree-shaking.
      ```javascript
      import { func } from "./module.js";
      export const func = () => {};
      ```

15. **How does garbage collection work in JavaScript?**
    - JavaScript uses a mark-and-sweep algorithm.
    - Objects are marked as reachable from the root (e.g., global object). Unreachable objects are collected.
    - Common leak causes: forgotten timers, detached DOM nodes, or closures holding references.

16. **What is the difference between shallow and deep copying? How would you implement each?**
    - **Shallow copy**: Copies top-level properties, references nested objects.
      ```javascript
      const obj = { a: 1, b: { c: 2 } };
      const shallow = { ...obj };
      shallow.b.c = 3; // Affects original
      ```
    - **Deep copy**: Copies all levels recursively.
      ```javascript
      function deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj)); // Simple but limited
      }
      ```
      - Advanced: Use recursion or libraries like Lodash for circular references.

17. **Explain the concept of currying in JavaScript with an example.**
    - Currying transforms a function with multiple arguments into a sequence of single-argument functions.
      ```javascript
      function curry(fn) {
        return function curried(...args) {
          return args.length >= fn.length
            ? fn(...args)
            : (...nextArgs) => curried(...args, ...nextArgs);
        };
      }
      const add = curry((a, b) => a + b);
      console.log(add(2)(3)); // 5
      ```

18. **What are IIFEs (Immediately Invoked Function Expressions), and when would you use them?**
    - An IIFE is a function expression executed immediately after definition.
      ```javascript
      (function() {
        var privateVar = "Hidden";
        console.log(privateVar); // Hidden
      })();
      ```
    - **Use cases**: Avoid polluting global scope, initialize code, or create private scopes.

19. **How does JavaScript handle type coercion? Provide examples of implicit coercion.**
    - Type coercion converts values to another type during operations.
    - **Implicit coercion**:
      ```javascript
      console.log("5" + 1); // "51" (number to string)
      console.log("5" - 1); // 4 (string to number)
      console.log(!!"hello"); // true (to boolean)
      ```

20. **What is the Temporal Dead Zone (TDZ) in JavaScript?**
    - TDZ is the period between entering a scope and the declaration of `let`/`const` variables, where accessing them throws a `ReferenceError`.
      ```javascript
      console.log(x); // ReferenceError: Cannot access 'x' before initialization
      let x = 10;
      ```

#### Coding Questions (21-40)

21. **Write a function to reverse a string without using built-in methods.**
    ```javascript
    function reverseString(str) {
      let result = "";
      for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
      }
      return result;
    }
    console.log(reverseString("hello")); // "olleh"
    ```

22. **Implement a debounce function for optimizing API calls.**
    ```javascript
    function debounce(fn, delay) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    }
    const log = debounce(console.log, 1000);
    log("Test"); // Logs after 1s if no further calls
    ```

23. **Write a function to check if two strings are anagrams.**
    ```javascript
    function areAnagrams(str1, str2) {
      const normalize = str => str.toLowerCase().split("").sort().join("");
      return normalize(str1) === normalize(str2);
    }
    console.log(areAnagrams("listen", "silent")); // true
    ```

24. **Create a function to flatten a nested array without using `flat()`.**
    ```javascript
    function flatten(arr) {
      return arr.reduce((flat, item) =>
        flat.concat(Array.isArray(item) ? flatten(item) : item), []);
    }
    console.log(flatten([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]
    ```

25. **Write a polyfill for the `map` method.**
    ```javascript
    Array.prototype.myMap = function(callback, thisArg) {
      const result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(callback.call(thisArg, this[i], i, this));
      }
      return result;
    };
    console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
    ```

26. **Implement a function to merge two sorted arrays into one sorted array.**
    ```javascript
    function mergeSortedArrays(arr1, arr2) {
      const result = [];
      let i = 0, j = 0;
      while (i < arr1.length && j < arr2.length) {
        result.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
      }
      return result.concat(arr1.slice(i), arr2.slice(j));
    }
    console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
    ```

27. **Write a function to remove duplicates from an array in O(n) time.**
    ```javascript
    function removeDuplicates(arr) {
      const seen = new Set();
      return arr.filter(item => !seen.has(item) && seen.add(item));
    }
    console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
    ```

28. **Create a function to check if a number is prime.**
    ```javascript
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    console.log(isPrime(17)); // true
    ```

29. **Write a function to find the intersection of two arrays.**
    ```javascript
    function intersection(arr1, arr2) {
      const set = new Set(arr1);
      return arr2.filter(item => set.has(item));
    }
    console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
    ```

30. **Implement a throttle function for rate-limiting events.**
    ```javascript
    function throttle(fn, delay) {
      let lastCall = 0;
      return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
          fn.apply(this, args);
          lastCall = now;
        }
      };
    }
    const log = throttle(console.log, 1000);
    log("Test"); // Logs immediately, then only after 1s intervals
    ```

31. **Write a function to deep clone an object, handling nested objects and arrays.**
    ```javascript
    function deepClone(obj) {
      if (obj === null || typeof obj !== "object") return obj;
      const clone = Array.isArray(obj) ? [] : {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          clone[key] = deepClone(obj[key]);
        }
      }
      return clone;
    }
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    clone.b.c = 3;
    console.log(obj.b.c); // 2
    ```

32. **Create a function to parse a query string into an object.**
    ```javascript
    function parseQueryString(query) {
      const params = new URLSearchParams(query);
      const result = {};
      for (const [key, value] of params) {
        result[key] = value;
      }
      return result;
    }
    console.log(parseQueryString("?name=John&age=30")); // { name: "John", age: "30" }
    ```

33. **Write a function to implement a simple Promise-based delay.**
    ```javascript
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function example() {
      await delay(1000);
      console.log("Delayed");
    }
    example(); // Logs "Delayed" after 1s
    ```

34. **Implement a function to group objects by a property.**
    ```javascript
    function groupBy(arr, key) {
      return arr.reduce((acc, obj) => {
        const group = obj[key];
        acc[group] = acc[group] || [];
        acc[group].push(obj);
        return acc;
      }, {});
    }
    const users = [{ name: "John", city: "NY" }, { name: "Jane", city: "NY" }, { name: "Bob", city: "LA" }];
    console.log(groupBy(users, "city"));
    // { NY: [{ name: "John", city: "NY" }, { name: "Jane", city: "NY" }], LA: [{ name: "Bob", city: "LA" }] }
    ```

35. **Write a function to check if a string is a palindrome.**
    ```javascript
    function isPalindrome(str) {
      const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
      return clean === clean.split("").reverse().join("");
    }
    console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
    ```

36. **Create a function to find the longest common prefix in an array of strings.**
    ```javascript
    function longestCommonPrefix(strs) {
      if (!strs.length) return "";
      return strs.reduce((prefix, str) => {
        while (str.indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, -1);
          if (!prefix) return "";
        }
        return prefix;
      }, strs[0]);
    }
    console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
    ```

37. **Implement a basic event emitter class in JavaScript.**
    ```javascript
    class EventEmitter {
      constructor() {
        this.events = {};
      }
      on(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
      }
      emit(event, ...args) {
        if (this.events[event]) {
          this.events[event].forEach(callback => callback(...args));
        }
      }
      off(event, callback) {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      }
    }
    const emitter = new EventEmitter();
    emitter.on("greet", name => console.log(`Hello, ${name}`));
    emitter.emit("greet", "John"); // Hello, John
    ```

38. **Write a function to convert a camelCase string to snake_case.**
    ```javascript
    function camelToSnake(str) {
      return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }
    console.log(camelToSnake("camelCaseString")); // "camel_case_string"
    ```

39. **Create a function to validate an email address using regex.**
    ```javascript
    function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    console.log(isValidEmail("test@example.com")); // true
    ```

40. **Write a function to calculate the factorial of a number recursively and iteratively.**
    ```javascript
    // Recursive
    function factorialRecursive(n) {
      return n <= 1 ? 1 : n * factorialRecursive(n - 1);
    }
    // Iterative
    function factorialIterative(n) {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
    console.log(factorialRecursive(5)); // 120
    console.log(factorialIterative(5)); // 120
    ```

#### Scenario-Based Questions (41-50)

41. **How would you optimize a JavaScript function handling large datasets?**
    - Use efficient algorithms (e.g., O(n) over O(n²)).
    - Implement pagination or chunking to process data in batches.
    - Use Web Workers for CPU-intensive tasks to avoid blocking the main thread.
    - Leverage data structures like Sets for O(1) lookups.
    - Memoize results for repeated computations.

42. **Explain how you’d handle memory leaks in a JavaScript application.**
    - Identify leaks using browser dev tools (e.g., Chrome’s Memory tab).
    - Avoid global variables and unremoved event listeners.
    - Clear timers (`setTimeout`, `setInterval`) when components unmount.
    - Use weak references (e.g., `WeakMap`) for temporary data.
    - Profile heap snapshots to find detached DOM nodes or closures.

43. **How would you implement a caching mechanism for API calls in JavaScript?**
    - Use a cache object or `Map` to store responses with keys (e.g., URL + params).
    - Implement time-based expiration or LRU (Least Recently Used) eviction.
    - Example:
      ```javascript
      const cache = new Map();
      async function fetchWithCache(url) {
        if (cache.has(url)) return cache.get(url);
        const response = await fetch(url).then(res => res.json());
        cache.set(url, response);
        return response;
      }
      ```

44. **Describe how you’d handle cross-browser compatibility issues in JavaScript.**
    - Use feature detection (e.g., `if ("fetch" in window)`).
    - Polyfill missing features (e.g., `Promise` for older browsers).
    - Test across browsers using tools like BrowserStack.
    - Normalize CSS with resets or libraries like Normalize.css.
    - Avoid browser-specific APIs or use libraries like jQuery for abstraction.

45. **How would you debug a JavaScript function that’s throwing unexpected errors?**
    - Use `console.log` or debugger statements to trace execution.
    - Set breakpoints in browser dev tools to inspect variables.
    - Check stack traces for error origins.
    - Validate inputs and edge cases.
    - Use tools like ESLint to catch potential issues early.

46. **Explain how you’d implement lazy loading for images in a web app.**
    - Use the `loading="lazy"` attribute for modern browsers.
    - For older browsers, use IntersectionObserver to load images when they enter the viewport.
      ```javascript
      const images = document.querySelectorAll("img[data-src]");
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            obs.unobserve(entry.target);
          }
        });
      });
      images.forEach(img => observer.observe(img));
      ```

47. **How would you handle asynchronous file uploads in a JavaScript app?**
    - Use `FormData` and `fetch`/`XMLHttpRequest` for uploads.
    - Provide progress feedback with `onprogress` event.
    - Handle errors and retries with `try/catch` and exponential backoff.
      ```javascript
      async function uploadFile(file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("/upload", { method: "POST", body: formData });
        return response.json();
      }
      ```

48. **Describe how you’d secure client-side JavaScript code against XSS attacks.**
    - Sanitize user inputs using libraries like DOMPurify.
    - Avoid `innerHTML`; use `textContent` or `createElement`.
    - Set `Content-Security-Policy` headers to restrict script sources.
    - Use frameworks (e.g., React) that escape output by default.
    - Validate and encode data before rendering.

49. **How would you optimize a recursive function to avoid stack overflow?**
    - Use tail recursion where possible (though JavaScript doesn’t optimize it).
    - Convert to iterative solutions using loops or stacks.
    - Implement trampolining for recursive calls.
    - Memoize results to reduce redundant calculations.
      ```javascript
      function factorial(n, acc = 1) {
        return n <= 1 ? acc : factorial(n - 1, n * acc); // Tail recursion
      }
      ```

50. **Explain how you’d implement a pub-sub pattern in JavaScript for real-time updates.**
    - Use an `EventEmitter`-like structure to manage subscriptions and events.
    - Example:
      ```javascript
      class PubSub {
        constructor() {
          this.subscribers = {};
        }
        subscribe(event, callback) {
          this.subscribers[event] = this.subscribers[event] || [];
          this.subscribers[event].push(callback);
        }
        publish(event, data) {
          if (this.subscribers[event]) {
            this.subscribers[event].forEach(callback => callback(data));
          }
        }
      }
      const pubsub = new PubSub();
      pubsub.subscribe("update", data => console.log(data));
      pubsub.publish("update", { message: "New data" });
      ```
    - Use WebSockets or Server-Sent Events for real-time communication.

---

### Notes
- **Experience Context**: As a full-stack developer with 4 years of experience, you likely have hands-on knowledge of these concepts. The answers focus on practical implementations and real-world applications, such as React hooks, API optimizations, and debugging strategies, which align with your skill set.
- **Memory Instructions**: If you want to manage or forget this conversation, you can do so via the "Data Controls" section in settings or by using the book icon to select specific chats to forget.
- **Further Clarification**: If you need deeper explanations, code walkthroughs, or specific scenarios (e.g., integrating these in a Node.js/React project), let me know!
