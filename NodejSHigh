
---

## **Node.js / JavaScript Interview Answers**

---

### **1. Node.js API sudden high traffic (10x) load handle nahi kar pa rahi – kya karoge?**

👉 **Answer:**

* Sabse pehle **scaling** karunga – horizontal scaling using **Node.js cluster** ya Docker containers + load balancer.
* **Caching** use karunga (Redis / in-memory) taaki repeated requests fast ho.
* **DB optimization** karunga (indexes, pagination).
* Heavy kaam background jobs me dal dunga (Bull queue, RabbitMQ).
* Static content ke liye CDN use karunga.

---

### **2. Agar ek Node.js process memory leak kar raha hai to kaise debug karoge?**

👉 **Answer:**

* **Node.js `--inspect` flag** aur Chrome DevTools se heap snapshot check karunga.
* Memory profiling karunga (tools: `clinic.js`, `heapdump`).
* Long-living objects aur event listeners check karunga jo release nahi ho rahe.
* **Process Manager (PM2)** use karke restart policy lagata hoon taaki app crash na ho.

---

### **3. API bana rahe ho jo 3rd party service call karti hai – agar wo service slow / down ho jaye to kaise handle karoge?**

👉 **Answer:**

* **Timeout** set karunga request ke liye.
* **Retry with exponential backoff** (jaise 1s, 2s, 4s).
* Agar fir bhi fail ho to **fallback response** dunga (cached data / default response).
* **Circuit breaker pattern** implement karunga (jaise library `opossum`).

---

### **4. REST API response time 2s hai, client bol raha 500ms chahiye – optimization kaise karoge?**

👉 **Answer:**

* **Query optimization** karunga (DB indexes, avoid N+1 queries).
* Frequently used data ko **cache** karunga (Redis).
* Jo heavy computation hai usko async/background jobs me move karunga.
* Network optimization (gzip compression, keep-alive connections).
* Agar possible ho to **parallel API calls** karunga instead of sequential.

---

### **5. Node.js me async function me exception aa jaye aur crash ho jaye, prevent kaise karoge?**

👉 **Answer:**

* Async functions me **try-catch** use karunga.
* Promises me `.catch()` lagana jaruri hai.
* Global error handling middleware banata hoon Express me.
* `process.on('uncaughtException')` aur `process.on('unhandledRejection')` me logging karunga, lekin crash-proof architecture banane ke liye PM2 cluster use karunga.

---

### **6. Multiple users ek saath data update kar rahe hain – race condition avoid kaise karoge?**

👉 **Answer:**

* **DB transactions** ka use karunga (MySQL / PostgreSQL).
* **Optimistic locking** ya **pessimistic locking** lagata hoon (versioning with updatedAt).
* Agar distributed system hai to **Redis lock (Redlock)** use karunga.
* Queue based processing bhi ek option hai.

---

### **7. Large JSON (50MB) response return karna hai – efficiently kaise bhejoge?**

👉 **Answer:**

* JSON ko **stream** karke bhejunga instead of ek saath (Node.js streams).
* Agar client support karta ho to **gzip compression** lagata hoon.
* Large data ko **paginate** ya **chunk** karke bhejta hoon instead of ek saath.
* Agar possible ho to binary format (Protocol Buffers, MessagePack) use karunga JSON ke jagah.

---

### **8. Microservice ki dependency service down ho jaye to fallback kaise implement karoge?**

👉 **Answer:**

* **Circuit breaker pattern** use karunga taaki dependent service continuously hit na ho.
* Agar possible ho to **cache data** return karunga as fallback.
* Critical service hai to **backup service / secondary API** call karunga.
* User ko meaningful error message ya degraded mode service provide karunga.

---

---

## **Error Handling & Performance – Interview Answers**

---

### **1. Agar Node.js API me ek external API call bahut slow ho raha hai, toh pura server block na ho – kaise handle karoge?**

👉 **Answer:**

* Node.js non-blocking hai, to main **async/await** ya **promises** ke saath call karunga, taaki event loop block na ho.
* **Timeout set** karunga request ke liye (e.g., 3s me response na aaye to abort).
* **Retry with backoff** lagata hoon slow APIs ke liye.
* **Circuit breaker** pattern implement karta hoon (agar external service slow/ down ho, to auto fallback).
* Fallback ke liye **cached response / default data** return karunga.

**Example:**

```js
const axios = require("axios");

async function getUserData() {
  try {
    const response = await axios.get("https://external-api.com/user", {
      timeout: 3000   // slow ho to 3s me abort
    });
    return response.data;
  } catch (err) {
    console.error("External API failed:", err.message);
    return { message: "Fallback response" };  // fallback
  }
}
```

---

### **2. Agar ek request continuously crash kar rahi hai aur logs me clear error nahi dikh raha, debugging kaise karoge?**

👉 **Answer:**

* Sabse pehle **structured logging** enable karunga (Winston / Pino) taaki proper stack trace mile.
* **Debug mode** (`node --inspect`) me run karke Chrome DevTools se step-by-step debugging karunga.
* Agar memory issue lag raha hai to **heap snapshot** ya `clinic.js` use karunga.
* Request/Response tracking ke liye **correlation ID** implement karunga, taaki ek request ka poora flow trace ho sake.
* Agar production me hai to **Sentry / Elastic APM / Datadog** jaise monitoring tools use karunga.

---

### **3. API ka response time reduce karna hai (500ms → 100ms). Node.js me kaunse techniques use karoge?**

👉 **Answer:**

* **Caching:** Frequently used data ko Redis / in-memory cache me store karke directly return karunga.
* **DB optimization:** Queries fast karne ke liye indexing, SELECT only required fields, avoid joins.
* **Parallel requests:** Agar multiple APIs call karni hain to Promise.all() use karunga instead of sequential.
* **Compression:** Gzip / Brotli enable karunga responses ke liye.
* **Load distribution:** CPU intensive task ko worker threads / background jobs me move karunga.
* **Connection keep-alive:** Repeated connections fast ho jate hain.
* Agar data bada hai to **streaming / pagination** karunga instead of full data ek baar me.

**Example Parallel API Calls:**

```js
async function getDashboardData() {
  const [users, orders] = await Promise.all([
    axios.get("/users"),
    axios.get("/orders")
  ]);
  return { users: users.data, orders: orders.data };
}
```

---

## ⚡ **Asynchronous Programming**

---

### **4. Ek file read karni hai aur uske data ke basis pe dusra API call karna hai (callback, promises, async/await me).**

👉 **Answer:**

**(a) Callback:**

```js
const fs = require("fs");
const axios = require("axios");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  axios.get(`https://api.com/user/${data}`, (res) => {
    console.log(res.data);
  });
});
```

**(b) Promises:**

```js
const fs = require("fs").promises;
const axios = require("axios");

fs.readFile("data.txt", "utf8")
  .then(data => axios.get(`https://api.com/user/${data}`))
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

**(c) Async/Await:**

```js
const fs = require("fs").promises;
const axios = require("axios");

async function run() {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    const res = await axios.get(`https://api.com/user/${data}`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}
run();
```

---

### **5. Agar ek DB query aur ek external API call parallel me chalani ho, toh kaunsa Node.js pattern use karoge?**

👉 **Answer:**

* **Promise.all()** use karunga.
* Ye dono tasks ek saath start honge aur fastest response milega.

**Example:**

```js
async function getData() {
  const [dbData, apiData] = await Promise.all([
    db.query("SELECT * FROM users"),
    axios.get("https://api.com/data")
  ]);
  return { dbData, apiData: apiData.data };
}
```

---

## 🌐 **API Design & REST**

---

### **6. Heavy JSON object return karne wali API frontend slow kar rahi hai – performance optimize kaise karoge?**

👉 **Answer:**

* **Pagination / Limit-Offset** – ek baar me pura JSON bhejne ki jagah chunks me.
* **Projection** – sirf required fields bhejunga, unnecessary data nahi.
* **Compression (gzip / brotli)** enable karunga.
* **Streaming response** bhejunga agar data bahut bada hai.
* **Caching** (Redis / HTTP caching headers) use karunga.

---

### **7. Agar ek API endpoint par DDOS attack ho raha hai, toh Node.js me kaise protect karoge?**

👉 **Answer:**

* **Rate limiting** (e.g., `express-rate-limit` middleware) – ek IP per fixed requests allow.
* **Reverse proxy (Nginx/Cloudflare)** – unwanted traffic filter.
* **CAPTCHA / Token validation** – bots ko rokne ke liye.
* **Circuit breaker / Throttling** – excessive load handle karne ke liye.
* Logs aur monitoring tools se suspicious IP ko block karunga.

---
---

## 📊 **Database Scenarios**

---

### **8. Ek query slow chal rahi hai – kaise identify karoge issue Node.js code me hai ya DB me?**

👉 **Answer:**

* Pehle Node.js side pe **API response time logging** karunga (before & after query).
* Agar sirf query part slow hai to issue DB me hai.
* DB side pe **EXPLAIN / execution plan** run karunga to check indexing.
* Agar DB fast hai but API slow hai → Node.js code inefficient hai (loops, serialization).

---

### **9. Query bahut heavy hai – optimization kaise karoge?**

👉 **Answer:**

* **Indexes** lagana (WHERE, JOIN, ORDER BY columns).
* **Pagination / LIMIT-OFFSET** use karna instead of full table scan.
* **SELECT specific columns** (avoid SELECT \*).
* Frequently used data ko **Redis cache** me dalna.
* DB normalisation + query rewrite (avoid N+1 queries).

---

## 🔐 **Authentication & Security**

---

### **10. JWT authentication me agar token expire ho jaye to kaise handle karoge?**

👉 **Answer:**

* Server 401 “Unauthorized” return karega.
* Client side pe refresh token rakha hoga, usse naya access token generate hoga.
* Agar refresh token bhi expire ho jaye → user ko dobara login karna hoga.

---

### **11. Node.js app ko SQL Injection aur XSS se kaise secure karoge?**

👉 **Answer:**

* **SQL Injection:** Prepared statements / parameterized queries use karunga (e.g., Sequelize, Knex, `?` placeholders).
* **XSS:** Input sanitization + output escaping (DOMPurify, helmet.js).
* **Helmet middleware** lagata hoon Express me headers secure karne ke liye.
* Validation libraries (Joi, Yup) se input validate karta hoon.

---

## ⚡ **Scaling & Load Handling**

---

### **12. Node.js server ko 1 lakh concurrent users handle karne hain – scaling kaise karoge?**

👉 **Answer:**

* Node.js **cluster mode** (PM2 / native cluster) use karunga taaki multi-core CPUs utilize ho.
* **Horizontal scaling** – multiple Node.js instances behind **load balancer** (NGINX / HAProxy).
* **Stateless architecture** banata hoon (sessions Redis/DB me store).
* Heavy tasks background workers me move (RabbitMQ, Kafka).
* CDN + caching use karunga static content ke liye.

---

### **13. Ek microservice 100 req/sec handle kar raha hai, mujhe 1000 req/sec chahiye – Node.js side se kya karoge?**

👉 **Answer:**

* Node.js **event loop blocking** ka check (avoid sync functions).
* API optimize karna (caching, DB optimization, async parallel requests).
* **Cluster mode + horizontal scaling** se requests distribute karunga.
* **Connection pooling** DB ke liye setup karunga.
* Agar possible ho to **rate limiting** set karunga taaki fair distribution ho.

---

---

## 📂 **File Handling & Streams**

---

### **14. 1GB+ CSV file read/process karna hai bina crash ke – Node.js me kaise karoge?**

👉 **Answer:**

* Pure file `fs.readFile()` se load nahi karunga (crash ho jayega).
* **Streams (`fs.createReadStream`)** ka use karunga line-by-line read karne ke liye.
* Saath me **csv-parser** / `fast-csv` package use karke streaming parse karunga.
* Backpressure handle karne ke liye `pipe()` ka use karunga.

---

### **15. Image upload API slow hai kyunki bada file hai – kaise optimize karoge?**

👉 **Answer:**

* File ko **streaming upload** karunga instead of buffer.
* Agar client support karta hai to **chunk upload** (split file → multiple parts).
* Cloud storage (S3 / GCS) ke direct signed URLs use karunga → Node.js me extra load nahi.
* Compression + parallel chunk uploads se speed improve karunga.

---

## 🧪 **Testing & Debugging**

---

### **16. API DB pe depend karti hai – unit test isolate kaise likhoge?**

👉 **Answer:**

* **Mocking / stubbing** DB layer karunga (sinon, jest.mock).
* Actual DB call nahi, fake response return karunga test ke liye.
* Integration test alag run karunga actual DB ke saath.

---

### **17. Test cases CI/CD pipeline me fail ho rahe hain but local pe pass ho rahe – troubleshoot kaise karoge?**

👉 **Answer:**

* **Env mismatch check** (Node version, DB config, env vars).
* CI pipeline me dependencies / services (DB, Redis) properly running hai ya nahi check karunga.
* Test data seed properly hua hai ya nahi verify karunga.
* CI/CD me extra logs enable karke reproduce karunga.

---

## 🏗️ **Real-World Scenarios**

---

### **18. Node.js service memory usage continuously badh raha hai (memory leak) – kaise detect/fix karoge?**

👉 **Answer:**

* `node --inspect` / Chrome DevTools se **heap snapshot** analyze karunga.
* Long-living objects, event listeners, unclosed timers detect karunga.
* Tools like **clinic.js, heapdump** use karunga.
* Fix: proper cleanup, remove unused listeners, close DB connections.

---

### **19. Background job (cron job) fail ho raha hai bina error ke – monitoring & alerting kaise karoge?**

👉 **Answer:**

* Job start/end ke logs dalunga with unique IDs.
* Job failure/success ko **DB ya monitoring tool** me store karunga.
* Alerting ke liye **Prometheus + Grafana** ya Sentry/Datadog use karunga.
* Retry logic dalunga failed jobs ke liye.

---

### **20. User ko 500 error aa raha hai but logs me kuch nahi – root cause kaise find karoge?**

👉 **Answer:**

* **Request correlation ID** implement karunga taaki request trace ho.
* Middleware add karke har request-response log karunga (status code, headers).
* Check karunga ki error middleware properly set hai ya nahi (kabhi kabhi error swallow ho jata hai).
* External service / reverse proxy logs (Nginx, Load balancer) bhi check karunga.
* Monitoring tools (New Relic, Elastic APM, Sentry) enable karunga for hidden errors.

---

---

## 🚀 **DevOps / CI-CD / Jenkins Q\&A**

---

### **9. Jenkins pipeline slow chal rahi hai – optimize kaise karoge?**

👉 **Answer:**

* Unnecessary steps remove karunga.
* **Parallel stages** use karunga (test/build in parallel).
* Heavy dependencies ko **cache** karunga (npm cache, Docker layers).
* Static analysis aur linting ko pre-commit hooks me shift karunga.
* Jo step baar-baar repeat ho raha hai use ek hi baar run karunga.

---

### **10. Jenkins build frequently fail ho raha hai due to flaky tests – diagnose kaise karoge?**

👉 **Answer:**

* Flaky tests ko **isolate** karunga aur retry mechanism dalunga.
* Test ka dependency (DB, API mock, network calls) stable hai ya nahi check karunga.
* **Test logs + screenshots** analyze karunga.
* Agar env-specific issue hai to test environment stable karunga (mock/stub external services).

---

### **11. CI/CD pipeline me secrets securely kaise manage karoge?**

👉 **Answer:**

* Jenkins **Credentials Manager** use karunga (API keys, passwords encrypted).
* Secrets environment variables ke through inject karunga, code me hardcode nahi karunga.
* Advanced setup me **HashiCorp Vault / AWS Secrets Manager** use karunga.
* Role-based access control enable karunga Jenkins me.

---

### **12. Microservice deploy kiya aur container crash loop ho raha hai – debug kaise karoge?**

👉 **Answer:**

* `kubectl logs <pod>` ya `docker logs <container>` check karunga.
* Container ka exit code / startup error analyze karunga.
* **Healthcheck misconfig** ya port mismatch check karunga.
* Environment variables / secrets sahi pass huye ya nahi validate karunga.
* Agar DB/Dependency service down hai to woh bhi verify karunga.

---

### **13. Jenkins job automatically trigger nahi ho raha webhook ke baad – troubleshoot kaise karoge?**

👉 **Answer:**

* Repo side pe webhook config check karunga (URL, permissions, events).
* Jenkins logs me webhook request aayi ya nahi dekhunga.
* Jenkins firewall/proxy issue check karunga.
* SCM Polling ya webhook plugin misconfigured to fix karunga.

---

### **14. CI pipeline me test coverage 40% hai aur lead bolta hai 80% chahiye – kya approach loge?**

👉 **Answer:**

* Sabse pehle **unit tests** expand karunga (critical functions).
* External dependencies ko mock/stub karunga taaki coverage easy ho.
* Incrementally coverage improve karunga → 40 → 50 → 60 → 80%.
* Code review me coverage threshold enforce karunga (Istanbul/nyc + Jest).

---

### **15. Deployment production me fail ho gaya – rollback strategy kya hogi?**

👉 **Answer:**

* **Blue-Green deployment:** rollback easily by switching traffic to old version.
* **Canary deployment:** agar new release fail hota hai to quickly rollback.
* Agar docker images use kar raha hoon to **previous stable image** redeploy karunga.
* Always maintain **backup DB snapshots** before migration.

---


---

## 🟠 **Docker / Podman / Containers**

**16. Container size 1.5GB → Optimize kaise karoge?**

* Multi-stage builds use karna (compile aur runtime alag).
* Base image slim lena (`node:alpine` instead of `node:latest`).
* Unnecessary dependencies remove karna (`npm prune --production`).
* `.dockerignore` me `node_modules`, logs, test files hatao.
  👉 Isse container size easily 200-300MB aa jayega.

---

**17. Container crash aur logs bahar nahi aa rahe → Debugging?**

* `docker logs <container_id>` run karke dekhna.
* Agar logs file me likh raha hai toh **bind mount** karo (`-v /logs:/app/logs`).
* `docker exec -it <container_id> sh` karke andar jakar check karo.
* Agar app stdout/stderr pe log nahi kar raha toh code me logging config change karo.

---

**18. High CPU usage → Diagnose kaise karoge?**

* `docker stats` dekhna → konsa container CPU kha raha hai.
* `docker top <container_id>` → process list check karo.
* Agar Node.js hai toh profiler (clinic.js, 0x) use karo.
* Agar infinite loop / memory leak hai toh code fix karo, warna **resource limits** lagao (`--cpus="1.0"`).

---

**19. Secret keys commit ho gayi → Kya karoge?**

* Repo history se hatao (use `git filter-repo` or `git filter-branch`).
* Keys **revoke** karo (new API keys generate).
* Next time secrets `.env` file + `docker secrets` ya Vault me rakho.

---

**20. 100+ instances scale karne hain → Kya karoge?**

* Simple Docker se nahi hoga → Kubernetes / Docker Swarm use karo.
* Load balancer (NGINX/HAProxy) lagao.
* Horizontal Pod Autoscaler (HPA) set karo (CPU/Memory usage ke basis pe scale).

---

## 🟣 **Linux / Scripting**

**21. Port pe app run nahi ho raha → Debugging commands**

```bash
netstat -tulnp | grep <port>   # port free hai ya busy
lsof -i:<port>                # kis process ne occupy kiya hai
systemctl status app.service  # service running hai kya
curl http://localhost:<port>  # app accessible hai kya
```

---

**22. Disk space suddenly full → Check & Clean**

```bash
df -h                        # disk usage check
du -sh * | sort -h           # folder wise usage
find /var/log -type f -delete  # old logs delete
journalctl --vacuum-time=7d   # old system logs clean
```

---

**23. Process high memory use → Find & Kill**

```bash
top -o %MEM        # memory heavy process check
ps aux --sort=-%mem | head   # top processes
kill -9 <pid>      # kill process
```

---

**24. Bash script → Delete logs older than 7 days**

```bash
#!/bin/bash
find /var/log/myapp/ -type f -mtime +7 -exec rm {} \;
```

(Cron job me daily schedule kar dena.)

---

**25. Python script → REST API call + save data**

* `requests` library use karna.
* API call → JSON parse karo → file/db me save karo.
  Example:

```python
import requests, json

url = "https://api.example.com/data"
resp = requests.get(url)
data = resp.json()

with open("data.json", "w") as f:
    json.dump(data, f)
```

---

### **26. Agar ek DB query bahut slow chal rahi hai to aap performance kaise improve karoge?**

👉 Steps:

1. **Query ka EXPLAIN plan dekhna** → kis index use ho raha hai, full table scan ho raha kya.
2. **Indexes add karna** → jo column `WHERE`, `JOIN`, `ORDER BY` ya `GROUP BY` me hai us pe index.
3. **Jo columns chahiye wahi select karo** → `SELECT *` avoid karo.
4. **Joins optimize karo** → unnecessary joins mat karo, small tables ke liye subquery use kar sakte ho.
5. **Caching** → Agar same query bar-bar chal rahi hai toh Redis/Memcached me cache karo.
6. **Sharding/Partitioning** → Bahut heavy table hai toh partition karo (date/month wise).

💡 Example:
`SELECT * FROM Orders WHERE YEAR(orderDate) = 2023;` ❌ (slow, index use nahi hoga)
Better:
`SELECT * FROM Orders WHERE orderDate BETWEEN '2023-01-01' AND '2023-12-31';` ✅

---

### **27. System me read-heavy traffic hai (90% reads) – database design kaise karoge?**

👉 Strategies:

1. **Read Replica** → Primary DB sirf writes handle kare, aur multiple replicas reads handle kare.
2. **Caching Layer** → Redis, CDN use karo frequently accessed data ke liye.
3. **Denormalization** → Complex joins avoid karke pre-computed tables ya materialized views banao.
4. **Index tuning** → Read queries fast karne ke liye proper indexes.
5. **Sharding (if global system)** → Geo-based sharding jisse users apne nearest DB se read kare.

💡 Example: YouTube video views → Redis + replicas, direct DB hit avoid.

---

### **28. Agar ek DB table me deadlocks frequently aa rahe hain to kya karoge?**

👉 Deadlock = Jab do transactions ek dusre ka lock chhodne ka wait karte hain.

**Fix karne ke steps:**

1. **Queries ka order same rakho** → hamesha table access order consistent ho.
2. **Transactions short rakho** → unnecessary long transaction avoid karo.
3. **Proper indexing** → taaki table lock ki jagah row lock lage.
4. **Deadlock retries** → App level pe retry mechanism rakho agar deadlock aaye.
5. **Isolation level adjust karo** → e.g. READ COMMITTED use karo instead of SERIALIZABLE.

---

### **29. Large JSON store karna hai DB me – relational DB use karoge ya NoSQL? Kyu?**

👉 Depends on use case:

* **Relational DB (MySQL/Postgres)** → Agar JSON ke andar ka structure fixed hai aur query karna hai (Postgres ka `jsonb` type useful hai).
* **NoSQL (MongoDB, CouchDB)** → Agar JSON ka structure dynamic hai, bar-bar change hota hai, aur nested objects query karne hai.

💡 Rule of Thumb:

* **Fixed schema + strong relationships** → RDBMS
* **Flexible schema + nested data** → NoSQL

---

### **30. Ek collaborative system hai jisme 10 billion minutes per month traffic aa raha hai – aap scalability aur fault tolerance kaise ensure karoge?**

👉 Large scale system ke liye:

1. **Microservices architecture** → Chat, Video, File-Sharing alag services me.
2. **Load Balancer** → NGINX/HAProxy/Cloud LB distribute kare requests.
3. **Database Sharding + Replication** → User-data ko region wise shard karo, aur read replicas lagao.
4. **Caching** → Redis/Memcached for hot data.
5. **Message Queue (Kafka / RabbitMQ)** → Heavy async tasks ke liye.
6. **CDN** → Static files aur media content distribute karne ke liye.
7. **Auto-scaling (Kubernetes)** → Load ke according containers increase/decrease.
8. **Fault tolerance** → Multi-region deployment, agar ek datacenter down ho toh doosra serve kare.
9. **Monitoring + Alerting** → Prometheus + Grafana, ELK stack logs ke liye.


---

## 🟠 **HTML5 Questions with Answers**

### **1. HTML aur HTML5 me kya difference hai?**

* **HTML** = purana version, limited multimedia support, koi semantic clarity nahi.
* **HTML5** = semantic tags, multimedia (`<audio>`, `<video>`), offline storage (local/session), canvas, geolocation, form enhancements.

👉 Example:

```html
<header>HTML5 semantic tag</header>
```

---

### **2. HTML5 ke new semantic tags kaunse hain?**

* `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<main>`, `<figure>`, `<figcaption>`.
  👉 Ye tags SEO aur readability improve karte hain.

---

### **3. <canvas> aur <svg> me difference kya hai?**

* **Canvas** → Pixel-based, dynamic drawing (game, animations).
* **SVG** → Vector-based, scalable, DOM elements (icons, charts).

👉 Canvas = painting board 🎨, SVG = shapes with properties.

---

### **4. HTML5 me <audio> aur <video> tag kaise use karte ho?**

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

---

### **5. Local Storage, Session Storage aur Cookies me kya difference hai?**

* **LocalStorage** → Data permanent (browser clear hone tak).
* **SessionStorage** → Data tab close hone tak.
* **Cookies** → Server ke sath bheje jaate hain, size limit hoti hai.

---

### **6. HTML5 me geolocation API kya hai?**

User ka current location (latitude/longitude) fetch karne ke liye.

👉 Example:

```js
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
```

---

### **7. <datalist> tag ka use kyu hota hai?**

Input me **auto-suggestions** dene ke liye.

```html
<input list="browsers">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
</datalist>
```

---

### **8. <progress> aur <meter> tag me kya difference hai?**

* **Progress** → task progress dikhane ke liye (download, upload).
* **Meter** → measurement range dikhane ke liye (score, fuel level).

---

### **9. doctype ka role kya hota hai?**

Browser ko batata hai ki **HTML5 rendering mode** use karo.
👉 `<!DOCTYPE html>`

---

### **10. <iframe> ka use kya hota hai aur security concerns kya hain?**

* Use → ek page ke andar doosra webpage embed karna.
* Risk → XSS, clickjacking.
  👉 Secure karne ke liye → `sandbox`, `CSP headers`.

---

### **11. HTML5 forms me naye input types kaunse aaye hain?**

* `email`, `url`, `tel`, `number`, `range`, `color`, `date`, `time`, `month`, `week`, `datetime-local`.

---

### **12. placeholder aur value attribute me kya difference hai?**

* **placeholder** → Hint text, form fill hone par gayab.
* **value** → Actual default value, submit hone me aati hai.

---

### **13. defer aur async attribute script tag me kya kaam karte hain?**

* **async** → Script load hote hi execute ho jaata hai (parallel).
* **defer** → Page load hone ke baad execute hota hai.

👉 `defer` better for dependency order.

---

### **14. <link> aur <a> tag me difference kya hai?**

* `<link>` → Resource attach karna (CSS, favicon).
* `<a>` → Hyperlink banana navigation ke liye.

---

### **15. SEO ke liye semantic HTML kyu important hai?**

* Google crawler ko page structure samajhne me help karta hai.
* Ranking improve hoti hai.
  👉 Example:

```html
<article><h1>Blog Title</h1><p>Content...</p></article>
```


---

### **1. CI/CD kya hai? Dono me difference samjhao.**

* **CI (Continuous Integration):** Developers apna code frequently (daily/weekly) merge karte hain main branch me. Har merge ke baad automatically build, lint, aur tests run hote hain. Isse code conflicts aur bugs early mil jaate hain.
* **CD (Continuous Delivery/Deployment):** Code jo successfully build aur test ho gaya hai, use automatically package karke staging/production pe deploy kar dete hain.

👉 Difference:

* **CI = Code integrate + test automate**
* **CD = Deployment automate**

---

### **2. CI/CD ke benefits kya hote hain?**

* Bugs early detect hote hain
* Manual kaam kam ho jata hai (automation ke wajah se)
* Faster delivery (feature jaldi production me)
* Confidence in code (kyunki har stage pe test ho raha hai)
* Rollback aur versioning easy

---

### **3. CI/CD pipeline ke major stages kaunse hote hain?**

1. **Source Stage** → Code push/PR se trigger hota hai
2. **Build Stage** → Code compile, dependencies install, artifacts banaye
3. **Test Stage** → Unit test, integration test run hote hain
4. **Deploy Stage** → Staging/Production environment me deploy
5. **Monitor Stage** → Logs, metrics aur alerts se check karna

---

### **4. Build aur Deployment pipeline me kya difference hai?**

* **Build pipeline** = Code ko package banana (e.g., .jar, .war, Docker image).
* **Deployment pipeline** = Ready package ko target environment me push karna.

---

### **5. Continuous Deployment aur Continuous Delivery me kya difference hai?**

* **Continuous Delivery** → Deploy tak sab automate hota hai, but last approval manually hota hai (staging → prod).
* **Continuous Deployment** → Bilkul full automation, bina manual approval ke production me chala jata hai.

---

### **6. CI/CD me rollback kaise handle karte ho?**

* Versioned artifacts rakho (purana build rollback karne ke liye)
* Git revert ya tagged release deploy karo
* Blue-Green/Canary strategy use karke rollback instant possible hai

---

### **7. Infrastructure as Code (IaC) kya hai aur CI/CD me kyu important hai?**

* IaC = Infra ko code ki tarah treat karna (Terraform, Ansible, CloudFormation)
* Important kyunki:

  * Reproducible setup (same infra har environment me)
  * Version control (infra ka bhi git history hota hai)
  * Automation (manual server setup ki zarurat nahi)

---

### **8. Git hooks ka CI/CD me kya role hota hai?**

* Git hooks = Automated scripts jo git events pe chalte hain (commit, push, merge).
* CI/CD me use → Code linting, unit test run, commit message validation, pre-push checks.

---

### **9. Canary deployment aur Blue-Green deployment me kya difference hai?**

* **Blue-Green:** Do environments (Blue = current, Green = new). Traffic ek hi time me sirf ek pe jata hai. Switch karna easy aur rollback fast.
* **Canary:** Naye version ko thoda % traffic dete ho. Agar stable hai to dheere-dheere 100% kar dete ho.

---

### **10. CI/CD pipelines me secrets ko securely kaise manage karte ho?**

* Environment variables (never hardcode)
* Secret managers (HashiCorp Vault, AWS Secrets Manager, Azure KeyVault)
* Encrypted credentials in Jenkins/GitHub Actions
* RBAC (role-based access control)

---



---

### **11. Jenkins kya hai aur kyu use karte hain?**

* Jenkins ek **open-source automation server** hai.
* Mainly **CI/CD pipelines banane** ke liye use hota hai.
* Ye automatically **code build, test, deploy** karne me help karta hai.
  ✅ Example: Tum GitHub pe code push karte ho → Jenkins automatically build & test run karega → agar pass ho gaya to deploy ho jayega.

---

### **12. Jenkins pipeline ke types kya hote hain?**

1. **Declarative Pipeline**

   * Easy aur readable DSL (domain specific language).
   * YAML jaise lagta hai.
   * Error handling simple.
     ✅ Example:

   ```groovy
   pipeline {
       agent any
       stages {
           stage('Build') {
               steps { echo 'Building...' }
           }
       }
   }
   ```

2. **Scripted Pipeline**

   * Pure Groovy code me likha jata hai.
   * Zyada flexible, complex logic handle kar sakta hai.
     ✅ Example:

   ```groovy
   node {
       stage('Build') {
           echo 'Building...'
       }
   }
   ```

---

### **13. Jenkinsfile kya hota hai?**

* Jenkinsfile ek **file hoti hai jisme pipeline ka pura code likha hota hai**.
* Ye project ke **repo me version control ke sath store hota hai**.
* Isse "Pipeline as Code" ka concept follow hota hai.

✅ Example Jenkinsfile:

```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps { echo 'Building app...' }
        }
        stage('Test') {
            steps { echo 'Running tests...' }
        }
        stage('Deploy') {
            steps { echo 'Deploying app...' }
        }
    }
}
```

---

### **14. Jenkins me agent (slave node) ka role kya hota hai?**

* Jenkins **master-slave architecture** use karta hai.
* **Master Node** → Jenkins UI run karta hai, job schedule karta hai.
* **Agent/Slave Node** → Jobs execute karte hain (build, test, deploy).
* Fayda: Multiple agents par parallel builds run ho sakti hain.

---

### **15. Jenkins me plugins ka kya role hai?**

* Jenkins ki **power plugins me hai**.
* Har tool/service integrate karne ke liye plugin chahiye hota hai.
  ✅ Examples:

  * Git plugin → Git repo connect karne ke liye
  * Maven plugin → Java builds ke liye
  * Docker plugin → Docker build & deploy ke liye
  * Slack plugin → Notifications bhejne ke liye

---

### **16. Jenkins me pipeline trigger karne ke different ways kya hain?**

1. **SCM (Source Code Management)** → Jaise Git push hook ke through.
2. **Webhook** → GitHub/GitLab se event aane par trigger.
3. **Schedule (CRON jobs)** → Fix time pe (daily, nightly builds).
4. **Manual** → Developer ne Jenkins UI me button daba kar run kiya.
5. **API trigger** → REST API ke through pipeline trigger kar sakte ho.

---

### **17. Jenkins me master-slave architecture kaise kaam karta hai?**

* **Master Node** → Job scheduling, plugin management, UI.
* **Slave Nodes (Agents)** → Actual execution environment.
* Master job assign karega → Slave build run karega aur result wapas bhejega.
  ✅ Fayda: Load distribution, multi-environment builds, scalability.

---

### **18. Jenkins me artifacts kaise store aur share karte ho?**

* **Artifact** = build ke output files (jar, war, zip, reports).
* Jenkins me `archiveArtifacts` step hota hai.
* Artifacts Jenkins server me store hote hain aur UI se download kar sakte ho.
  ✅ Example:

```groovy
stage('Archive') {
    steps {
        archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
    }
}
```

---

### **19. Jenkins me post block ka kya use hai pipeline me?**

* `post` block ka use hota hai **pipeline ke end me actions run karne ke liye** (success, failure, always).

✅ Example:

```groovy
pipeline {
    agent any
    stages {
        stage('Build') { steps { echo 'Building...' } }
    }
    post {
        success { echo 'Build successful!' }
        failure { echo 'Build failed!' }
        always { echo 'Cleanup actions...' }
    }
}
```

---

### **20. Jenkins pipeline me parallel execution kaise karte ho?**

* Jenkins `parallel` block deta hai jisme ek sath multiple tasks run kar sakte ho.

✅ Example:

```groovy
stage('Tests') {
    parallel {
        stage('Unit Tests') {
            steps { echo 'Running unit tests...' }
        }
        stage('Integration Tests') {
            steps { echo 'Running integration tests...' }
        }
    }
}
```

👉 Isse build fast hoti hai kyunki kaam ek sath execute hote hain.

---

---

## 🟢 Docker Interview Q\&A

### **21. Docker kya hai aur kaise kaam karta hai?**

Docker ek **containerization platform** hai. Matlab aap apna code + dependencies (libraries, config, environment) sab ek box (container) me pack karke kahin bhi chala sakte ho – chaahe aapka system ho ya cloud.

* Docker OS ke upar ek **lightweight runtime** banata hai jo **containers** run karta hai.
* Container = chhota sa isolated environment jo fast boot hota hai (seconds me).

---

### **22. Docker aur Virtual Machine (VM) me kya difference hai?**

| Feature     | Docker (Container)              | Virtual Machine            |
| ----------- | ------------------------------- | -------------------------- |
| Size        | Lightweight (MBs)               | Heavy (GBs)                |
| Boot Time   | Seconds                         | Minutes                    |
| OS          | Host OS ke kernel use karta hai | Full Guest OS run hota hai |
| Performance | Fast                            | Thoda slow                 |
| Use Case    | Microservices, DevOps, CI/CD    | Legacy apps, OS isolation  |

👉 Matlab VM full ghar banata hai, Docker bas ek room banata hai jisme apna kaam kar sakte ho 😅

---

### **23. Dockerfile kya hai? Common instructions kaunse hain?**

Dockerfile = ek script jisme step-by-step likhte ho ki image kaise banegi.

Common instructions:

* `FROM` → Base image set karta hai (e.g. `FROM node:18`)
* `RUN` → Commands execute karta hai (e.g. install karna)
* `COPY` → Local files ko container me copy karna
* `CMD` → Default command jab container start hoga (`CMD ["node", "app.js"]`)
* `ENTRYPOINT` → Fix entry command jo override nahi hoti

---

### **24. Docker image aur Docker container me kya difference hai?**

* **Image** = Blueprint (read-only template)
* **Container** = Running instance of an image

👉 Example: Image = Maggie ka packet, Container = Maggie ban ke tyaar 😋

---

### **25. Docker volume kya hota hai? Persistent data kaise manage karte ho?**

Docker volume = ek **storage mechanism** jisme container ka data safe hota hai.

* Normal container delete karoge → data gayab.
* Volume use karoge → data persist karega.

Example:

```bash
docker run -v mydata:/app/data myimage
```

---

### **26. Docker networking ke modes kaunse hote hain?**

1. **bridge (default)** → Containers ek dusre se IP se baat karte hain.
2. **host** → Container directly host ke network use karega.
3. **overlay** → Multi-host networking (Swarm, Kubernetes me use hota hai).
4. **none** → No networking.

---

### **27. Docker Compose kya hai aur kyu use karte ho?**

Docker Compose = ek YAML config file (`docker-compose.yml`) jisme **multiple containers** define karke ek saath chalate ho.

👉 Example: Ek app hai jisme Node.js + MongoDB + Redis chahiye → sabko ek hi command me start kar sakte ho:

```bash
docker-compose up
```

---

### **28. Docker registry aur DockerHub me kya difference hai?**

* **Docker Registry** = Storage system jaha Docker images rakhi jaati hain. (Self-hosted bhi kar sakte ho)
* **DockerHub** = Public cloud registry by Docker (like GitHub for code).

---

### **29. Multi-stage Docker build kya hota hai?**

* Large image banane ke bajaye **build process aur final image alag rakhte ho**.
* Final image lightweight hoti hai.

Example:

```dockerfile
# Stage 1 (Build)
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2 (Production)
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]
```

---

### **30. Docker me security best practices kya follow karte ho?**

1. Minimal base images use karo (e.g. `alpine`).
2. Non-root user se container run karo.
3. Secrets ko ENV variable me mat rakho → secret manager use karo.
4. Regular image scanning (e.g. `trivy`).
5. Keep images updated (patching).

---

---

### 🔹 **1. Podman Docker se kaise different hai?**

1. **Daemon-less Architecture**

   * Docker ek **daemon (dockerd)** chalaata hai jo sab containers ko manage karta hai.
   * Podman **daemon-less** hai, iska matlab har container ek **child process** hota hai jo directly system ke under chalta hai.

   👉 Isse Podman zyada lightweight aur secure ho jaata hai.

2. **Rootless Support (by default)**

   * Docker me rootless mode aaya hai lekin default nahi hai.
   * Podman rootless mode ko **first-class citizen** banata hai, matlab bina `sudo` ke container run kar sakte ho.

3. **Compatibility with Docker CLI**

   * Podman ka CLI **Docker compatible** hai. Matlab `docker run ...` ki jagah agar `podman run ...` likhoge toh bhi chal jayega.

4. **Systemd Integration**

   * Podman systemd ke sath achha integrate hota hai, toh containers ko system services ki tarah run karna easy hota hai.

5. **No Central Daemon → Better Security**

   * Docker daemon root privilege ke sath chalta hai. Agar wo compromise ho jaye toh poore system ka control leak ho sakta hai.
   * Podman me har container alag process hai, isliye ek ka compromise hone par system safer rehta hai.

---

### 🔹 **2. Podman me Rootless Container ka kya benefit hai?**

Rootless container ka matlab hai ki aapko **root user** nahi banna padta container run karne ke liye.
Benefits:

1. **Security** – Agar container compromise ho gaya, toh attacker ke paas root access nahi hoga → system safe rahega.
2. **Ease of Use** – Normal user apne account se container bana sakta hai, `sudo` ki zarurat nahi.
3. **Multi-user System Friendly** – Agar ek machine par multiple developers kaam kar rahe hain, toh har banda apna container chala sakta hai bina root access diye.
4. **Better Isolation** – Rootless containers namespaces ka use karke aur bhi secure hote hain.

---

👉 Short me:

* **Docker**: Powerful but daemon aur root dependency ke wajah se thoda risky.
* **Podman**: Daemon-less, secure by default, aur rootless containers ke wajah se enterprise security ke liye best.

---

---

### **1. Array me second largest element find karo**

```js
let arr = [10, 20, 4, 45, 99];
let first = -Infinity, second = -Infinity;

for (let num of arr) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num < first) {
    second = num;
  }
}
console.log(second); // 45
```

---

### **2. Array ko reverse karo (without built-in reverse)**

```js
let arr = [1,2,3,4,5];
for (let i = 0, j = arr.length-1; i < j; i++, j--) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr); // [5,4,3,2,1]
```

---

### **3. Array me duplicate elements remove karo**

```js
let arr = [1,2,2,3,4,4,5];
let unique = [...new Set(arr)];
console.log(unique); // [1,2,3,4,5]
```

---

### **4. Array me pair of elements jinka sum X hai find karo**

```js
let arr = [1,4,7,2,5,3], X = 6;
for (let i=0; i<arr.length; i++) {
  for (let j=i+1; j<arr.length; j++) {
    if (arr[i] + arr[j] === X) {
      console.log(arr[i], arr[j]); 
    }
  }
}
// Output: 1 5, 4 2, 7 -1 (agar hoga)
```

---

### **5. Kadane’s Algorithm – Maximum Subarray Sum**

```js
let arr = [-2,1,-3,4,-1,2,1,-5,4];
let maxSum = arr[0], currSum = arr[0];

for (let i=1; i<arr.length; i++) {
  currSum = Math.max(arr[i], currSum + arr[i]);
  maxSum = Math.max(maxSum, currSum);
}
console.log(maxSum); // 6 (subarray: [4,-1,2,1])
```

---

### **6. Array Rotate (Right Rotation by k)**

```js
let arr = [1,2,3,4,5], k = 2;
k = k % arr.length;
arr = arr.slice(-k).concat(arr.slice(0, -k));
console.log(arr); // [4,5,1,2,3]
```

---

### **7. Majority Element (> n/2 times)**

```js
let arr = [3,3,4,2,3,3,5,3];
let count = 0, candidate = null;

for (let num of arr) {
  if (count === 0) candidate = num;
  count += (num === candidate) ? 1 : -1;
}
console.log(candidate); // 3
```

---

### **8. Merge Two Sorted Arrays Without Extra Space**

```js
let a = [1,5,9,10,15,20];
let b = [2,3,8,13];

for (let i=0; i<a.length; i++) {
  if (a[i] > b[0]) {
    [a[i], b[0]] = [b[0], a[i]];
    b.sort((x,y)=>x-y);
  }
}
console.log(a, b);
// a = [1,2,5,8,9,10]
// b = [3,13,15,20]
```

---

### **9. Move All Zeros to End (Maintain Order)**

```js
let arr = [0,1,0,3,12];
let idx = 0;

for (let num of arr) {
  if (num !== 0) arr[idx++] = num;
}
while (idx < arr.length) arr[idx++] = 0;
console.log(arr); // [1,3,12,0,0]
```

---

### **10. Find Missing Number (1…n series)**

```js
let arr = [1,2,4,5], n = 5;
let total = (n * (n+1)) / 2;
let sum = arr.reduce((a,b)=>a+b, 0);
console.log(total - sum); // 3
```

---

---

### **11. Palindrome check**

```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam")); // true
```

---

### **12. Reverse words in string**

```js
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("Hello World")); // "World Hello"
```

---

### **13. First non-repeating character**

```js
function firstUnique(str) {
  for (let ch of str) if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  return null;
}
console.log(firstUnique("aabbcde")); // c
```

---

### **14. Character frequency count**

```js
function charCount(str) {
  return [...str].reduce((m, c) => (m[c] = (m[c] || 0) + 1, m), {});
}
console.log(charCount("hello")); // { h:1, e:1, l:2, o:1 }
```

---

### **15. Anagram check**

```js
function isAnagram(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(isAnagram("listen", "silent")); // true
```

---

### **16. Longest substring without repeating**

```js
function longestUnique(str) {
  let set = new Set(), l = 0, res = 0;
  for (let r = 0; r < str.length; r++) {
    while (set.has(str[r])) set.delete(str[l++]);
    set.add(str[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
}
console.log(longestUnique("abcabcbb")); // 3 ("abc")
```

---

### **17. Valid parentheses**

```js
function isValid(s) {
  let st = [], map = {")":"(", "}":"{", "]":"["};
  for (let c of s) {
    if (map[c]) { if (st.pop() !== map[c]) return false; }
    else st.push(c);
  }
  return !st.length;
}
console.log(isValid("{[()]}")); // true
```

---

### **18. Vowels & consonants count**

```js
function countVC(str) {
  let v = "aeiouAEIOU", vowels = 0, cons = 0;
  for (let c of str) /[a-z]/i.test(c) && (v.includes(c) ? vowels++ : cons++);
  return {vowels, cons};
}
console.log(countVC("Hello World")); // {vowels:3, cons:7}
```

---

### **19. String → Integer (without parseInt)**

```js
function toInt(str) {
  let num = 0, sign = str[0] === "-" ? -1 : 1, i = sign === -1 ? 1 : 0;
  for (; i < str.length; i++) num = num * 10 + (str[i] - '0');
  return num * sign;
}
console.log(toInt("-123")); // -123
```

---

### **20. Longest Palindromic Substring**

```js
function longestPalindrome(s) {
  let res = "";
  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > res.length) res = s.slice(l, r + 1);
      l--, r++;
    }
  };
  for (let i = 0; i < s.length; i++) expand(i, i), expand(i, i + 1);
  return res;
}
console.log(longestPalindrome("babad")); // "bab" or "aba"
```

---

---

### **21. Reverse a Linked List**

```js
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
```

👉 Ek-ek node ka `next` ulta karte jaate hain.

---

### **22. Detect Cycle in Linked List (Floyd’s Algorithm)**

```js
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
```

👉 Slow 1 step aur fast 2 step move karega. Agar cycle hoga toh dono ek point par milenge.

---

### **23. Merge Two Sorted Linked Lists**

```js
function merge(l1, l2) {
    let dummy = {next: null}, curr = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1; l1 = l1.next;
        } else {
            curr.next = l2; l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}
```

👉 Do sorted lists ko ek sorted bana diya pointer adjust karke.

---

### **24. Stack using Array**

```js
class Stack {
    constructor() { this.items = []; }
    push(x) { this.items.push(x); }
    pop() { return this.items.pop(); }
    top() { return this.items[this.items.length-1]; }
    isEmpty() { return this.items.length === 0; }
}
```

👉 Simple array ka `push/pop`.

---

### **25. Queue using Two Stacks**

```js
class Queue {
    constructor() {
        this.s1 = [], this.s2 = [];
    }
    enqueue(x) { this.s1.push(x); }
    dequeue() {
        if (!this.s2.length) {
            while (this.s1.length) this.s2.push(this.s1.pop());
        }
        return this.s2.pop();
    }
}
```

👉 Pehle `s1` me dalte hain, jab chahiye toh `s2` me reverse karke nikalte hain.

---

### **26. Min Stack (getMin in O(1))**

```js
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(x) {
        this.stack.push(x);
        if (!this.minStack.length || x <= this.minStack[this.minStack.length-1])
            this.minStack.push(x);
    }
    pop() {
        let x = this.stack.pop();
        if (x === this.minStack[this.minStack.length-1]) this.minStack.pop();
    }
    getMin() { return this.minStack[this.minStack.length-1]; }
}
```

👉 Ek extra stack rakhte hain jo hamesha min track kare.

---

### **27. Next Greater Element (using stack)**

```js
function nextGreater(arr) {
    let res = new Array(arr.length).fill(-1);
    let stack = [];
    for (let i=0; i<arr.length; i++) {
        while (stack.length && arr[stack[stack.length-1]] < arr[i]) {
            res[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return res;
}
console.log(nextGreater([2,1,3])); // [3,3,-1]
```

👉 Stack me index rakhte hain aur agla bada element milte hi fill kar dete hain.

---

### **28. Circular Queue**

```js
class CircularQueue {
    constructor(k) {
        this.q = new Array(k);
        this.size = k;
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }
    enQueue(x) {
        if (this.isFull()) return false;
        this.rear = (this.rear+1) % this.size;
        this.q[this.rear] = x;
        this.count++;
        return true;
    }
    deQueue() {
        if (this.isEmpty()) return false;
        this.front = (this.front+1) % this.size;
        this.count--;
        return true;
    }
    Front() { return this.isEmpty()? -1 : this.q[this.front]; }
    isEmpty() { return this.count===0; }
    isFull() { return this.count===this.size; }
}
```

👉 Index ko `% size` se circular banate hain.

---

### **29. LRU Cache (LinkedList + Map)**

```js
class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }
    get(key) {
        if (!this.map.has(key)) return -1;
        let val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }
    put(key, value) {
        if (this.map.has(key)) this.map.delete(key);
        else if (this.map.size === this.capacity) {
            let firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        this.map.set(key, value);
    }
}
```

👉 JS Map insertion order maintain karta hai → LRU cache easily.

---

### **30. Balanced Parentheses (Stack)**

```js
function isValid(s) {
    let stack = [], map = {')':'(', '}':'{', ']':'['};
    for (let ch of s) {
        if ("({[".includes(ch)) stack.push(ch);
        else if (!stack.length || stack.pop() !== map[ch]) return false;
    }
    return stack.length === 0;
}
console.log(isValid("(){}[]")); // true
```

👉 Har closing bracket ke liye matching opening hona chahiye.

---


---

## 🔵 **OOPs Basics**

**1. OOPs kya hai?**
➡ Programming style jisme hum real-world cheezon ko **Objects** ke form me represent karte hain.

* Object = Data + Behavior.
  👉 Example: `Car` object → properties (color, model), methods (start, stop).

---

**2. OOPs ke 4 pillars**

* **Encapsulation** → Data aur methods ko ek class me pack karna.
* **Abstraction** → Sirf zaruri cheez dikhana, andar ka detail chhupana.
* **Inheritance** → Parent ki properties child class me reuse karna.
* **Polymorphism** → Ek cheez multiple forms me behave kare.

---

**3. Class vs Object**

* **Class** → Blueprint/template.
* **Object** → Us class ka real instance.

---

**4. Constructor**
➡ Special method jo object create hote hi automatically call hota hai aur properties initialize karta hai.

---

**5. Destructor / Finalizer**
➡ Jab object destroy hota hai tab cleanup ke liye use hota hai (C++ me destructor, Java/C# me `finalize`).
👉 JS me garbage collector hai, explicit destructor nahi hota.

---

**6. Static vs Instance Method**

* **Static** → Class se belong karta hai (object banane ki zarurat nahi).
* **Instance** → Sirf object se call hota hai.

---

**7. Overloading vs Overriding**

* **Overloading** → Same method name but parameters different (Compile-time).
* **Overriding** → Child class method parent ke method ko replace karta hai (Runtime).

---

**8. `this` keyword**
➡ Current object ko represent karta hai.
👉 JS me `this` ka behavior context pe depend karta hai (normal fn, arrow fn, class).

---

**9. Object cloning**
➡ Ek object ka copy banana.
👉 JS me shallow clone = `{...obj}`, deep clone = `JSON.parse(JSON.stringify(obj))`.

---

**10. Access Modifiers**

* **public** → Sab jagah accessible.
* **private** → Sirf class ke andar.
* **protected** → Class + subclasses.
  👉 JS me `#field` likhne se private field banti hai.

---

## 🔵 Encapsulation / Abstraction

**11. Encapsulation**
➡ Data ko directly access na karne dena, getters/setters se control karna.
👉 Example: Bank account balance private hai, deposit/withdraw method se hi change hoga.

---

**12. Abstraction**
➡ Sirf zaruri info dikhana, details hide karna.
👉 Example: Car → sirf steering/gear dikhte hain, andar engine kaise kaam karta hai hide hai.

---

**13. Difference**

* **Encapsulation** = Data hide + bundle karna.
* **Abstraction** = Implementation hide karna.

---

**14. Getters & Setters**
➡ Private data ko read/write karne ka controlled way dete hain.

---

**15. Interface vs Abstract Class**

* **Interface** = Sirf contract (method signatures).
* **Abstract class** = Contract + kuch implementation bhi de sakta hai.

---

## 🟠 Inheritance / Polymorphism

**16. Inheritance**
➡ Parent-child relation jisme child parent ki properties/methods use kar sakta hai.

---

**17. JS me Inheritance**

* **Prototype-based** (`Object.create()`)
* **Class extends** (ES6+ → `class Child extends Parent {}`)

---

**18. Multiple Inheritance**
➡ Ek child ka ek se zyada parent.
👉 JS me **direct multiple inheritance support nahi hai**, lekin **Mixins** se achieve kar sakte hain.

---

**19. Polymorphism**
➡ Same method alag-alag behavior dikhaye.
👉 Example: `area()` method → circle ke liye formula alag, rectangle ke liye alag.

---

**20. Compile-time vs Runtime Polymorphism**

* **Compile-time** = Overloading (C++/Java me).
* **Runtime** = Overriding (JS/Java me).

---

**21. Method overriding use case**
➡ Parent me `makeSound()`, Dog subclass me override karke `bark()`.

---

**22. Method overloading JS me?**
➡ Directly nahi hota (kyunki JS dynamic hai), par default params aur arguments object se simulate kar sakte ho.

---

## 🟣 Advanced OOPs

**23. Composition vs Inheritance**

* **Inheritance** = "is-a" relation (Car is a Vehicle).
* **Composition** = "has-a" relation (Car has an Engine).

---

**24. SOLID Principles**

* **S**ingle Responsibility
* **O**pen/Closed
* **L**iskov Substitution
* **I**nterface Segregation
* **D**ependency Inversion

---

**25. Design Patterns**
➡ Reusable solutions to common problems.

* Example: **Factory** (object create karna), **Singleton** (only one instance).

---

**26. Singleton**
➡ Ek class ka sirf ek object create hoga.
👉 Node.js me `module.exports` se singleton implement hota hai.

---

**27. Factory Pattern**
➡ Object creation ko ek centralized method se control karna.

---

**28. Dependency Injection**
➡ Class ke dependencies bahar se inject karna, taaki class loosely coupled ho.

---

**29. Duck Typing (JS)**
➡ "If it looks like a duck and quacks like a duck, it’s a duck."
👉 JS me agar object ke paas required methods/properties hain to usko accept kar lenge, type check strict nahi hota.

---

**30. Advantages & Disadvantages**
✅ Code reusable, maintainable, scalable.
❌ Complexity badhta hai, small apps ke liye overkill ho sakta hai.

---


---

### **1. Cloud me Scaling ke tareeke**

**Scaling = system ki capacity badhana taaki zyada load handle ho sake.**

* **Horizontal Scaling (Scale Out/In)**

  * Naye servers/additional instances add karte hain.
  * Example: 2 EC2 instances → 4 EC2 instances.
  * Pros: High availability, fault-tolerant.
  * Cons: Network coordination + load balancer ki zarurat.

* **Vertical Scaling (Scale Up/Down)**

  * Ek existing server ki CPU, RAM, storage increase karte hain.
  * Example: 4GB RAM → 16GB RAM.
  * Pros: Simple, no app change.
  * Cons: Limit hai hardware ka, downtime ho sakta hai.

✅ Short me: **Horizontal = add more machines, Vertical = make existing machine stronger.**

---

### **2. Kubernetes vs Docker Swarm**

| Feature         | Kubernetes                    | Docker Swarm             |
| --------------- | ----------------------------- | ------------------------ |
| Complexity      | High, feature-rich            | Simple, easy setup       |
| Scaling         | Auto-scaling supported        | Manual scaling           |
| Load balancing  | Built-in + Ingress controller | Simple LB                |
| Deployment      | YAML based, declarative       | CLI based, simpler       |
| Rolling updates | Supported                     | Supported, less advanced |
| Ecosystem       | Large, many tools             | Smaller, Docker native   |

💡 Interview tip: Kubernetes → large-scale production, Swarm → smaller Docker clusters.

---

### **3. Secrets Management in Cloud**

Secrets = passwords, API keys, tokens.

**Best practices:**

1. **Cloud provider secret manager**: AWS Secrets Manager, Azure Key Vault, GCP Secret Manager.
2. **Environment variables**: Container/VM me inject kare.
3. **Encrypted config files**: Vault (HashiCorp), SOPS, etc.
4. **Access control**: RBAC / IAM policies ensure sirf authorized access ho.

✅ Point: Never hardcode secrets in code or Docker images.

---

### **4. Canary vs Blue-Green Deployment**

* **Blue-Green Deployment**

  * Two identical environments: Blue = current prod, Green = new version.
  * Traffic switch karte hi new version live ho jata hai.
  * Pros: Zero downtime, easy rollback.

* **Canary Deployment**

  * Naye version ko initially thode users pe release karte hain.
  * Gradually traffic increase karte hain.
  * Pros: Risk low, monitor karke release.

💡 Short tip:

* Blue-Green → 100% traffic switch
* Canary → Gradual release

---

---

### **11. Node.js me common testing frameworks**

* **Mocha** → Lightweight, flexible test runner.
* **Jest** → All-in-one, Facebook supported, built-in assertion & mocking.
* **Jasmine** → BDD style, assertion + test framework.

---

### **12. Jest vs Mocha**

| Feature          | Jest                       | Mocha                     |
| ---------------- | -------------------------- | ------------------------- |
| Setup            | Easy, zero config          | Needs Chai for assertions |
| Mocking          | Built-in mocking           | Needs Sinon.js            |
| Snapshot Testing | Supported                  | Not native                |
| Speed            | Faster (parallel test run) | Slower                    |
| Popularity       | Modern projects, React     | Node.js backend           |

---

### **13. Supertest ka use**

➡ HTTP assertions ke liye, Express / REST API ko programmatically test karte hain.

```js
const request = require('supertest');
const app = require('../app');
request(app).get('/api/users').expect(200);
```

---

### **14. Sinon.js ka role**

* **Mocks** → Fake objects with expectations.
* **Stubs** → Functions ka behavior replace karna.
* **Spies** → Function call record karna.
  💡 Testing me DB/API calls isolate karne ke liye useful.

---

### **15. Chai assertion library**

➡ Mocha ke saath use hota hai; assertions likhne ka readable syntax deta hai.

```js
const { expect } = require('chai');
expect(5).to.equal(5);
```

---

### **16. Express.js API test cases**

1. Supertest ke saath request/response test.
2. Status code, response body, headers validate.
3. Async handling ka dhyan.

```js
it('should return users', async () => {
  const res = await request(app).get('/users');
  expect(res.status).to.equal(200);
  expect(res.body).to.be.an('array');
});
```

---

### **17. Async code test (Promises / async-await)**

```js
it('async test', async () => {
  const data = await fetchData();
  expect(data).to.equal('hello');
});
```

* Promises: `return fetchData().then(res => expect(res).to.equal('hello'));`

---

### **18. Database mocking in tests**

* **MongoDB** → `mongodb-memory-server` use karke in-memory DB.
* **MySQL/Postgres** → `Sinon + Knex` ya transaction rollback.
* Goal: Real DB hit na ho, tests isolated rahe.

---

### **19. Environment variables in tests**

* `dotenv` package use karo aur `.env.test` file load karo.

```js
require('dotenv').config({ path: '.env.test' });
```

* CI/CD me bhi same `.env` ya secrets inject karke test run karo.

---

### **20. CI/CD me unit tests integrate**

1. Pipeline me **install dependencies** → `npm install`.
2. **Run tests** → `npm test` / `jest` / `mocha`.
3. **Fail pipeline** agar tests fail ho jaye.
4. Optional: **Coverage report generate** → `jest --coverage`

---















































Interview Tips ( 🚀)
•	Intro me bol:
“I am a Node.js developer with experience in building APIs, working on containerized environments like Docker, and I follow Agile methodologies with focus on CI/CD and problem solving.”
•	If kuch nahi aata toh boldo:
“I have basic exposure but I am a fast learner, and I can quickly pick up this skill.”
•	Practice ek do chhote Node.js API banane ka code revise kar lena.
•	Docker 4-5 commands revise kar le.
•	Event Loop & Promises revise kar le – Node interview ka favourite hai.
________________________________________
🟢 Node.js / JavaScript
1.	Aapki Node.js API sudden high traffic (10x) load handle nahi kar pa rahi – aap performance improve karne ke liye kya karoge?
2.	Agar ek Node.js process memory leak kar raha hai to aap kaise debug karoge?
3.	Aap ek API bana rahe ho jo 3rd party service call karti hai – agar wo service slow / down ho jaye to aap kaise handle karoge?
4.	Aapke REST API ke response time 2s hai, client ne bola 500ms chahiye – aap optimization kaise karoge?
5.	Node.js me agar ek async function me exception aa jaye aur crash ho jaye, to aap usko kaise prevent karoge?
6.	Aapke paas ek system hai jisme multiple users ek saath data update karte hain – race condition avoid karne ke liye kya karoge?
7.	Ek API me large JSON (50MB) response return karna hai – isko efficiently kaise bhejoge?
8.	Agar ek microservice ki dependency service down ho jaye to aap fallback mechanism kaise implement karoge?
Error Handling & Performance
1.	Agar aapke Node.js API me ek external API call bahut slow ho raha hai, toh aap kaise handle karoge taki pura server block na ho?
2.	Agar ek request continuously crash kar rahi hai aur logs me clear error nahi dikh raha, aap debugging kaise karoge?
3.	Aapko ek API ka response time reduce karna hai (500ms → 100ms). Aap Node.js me kaunse techniques use karoge?
________________________________________

Asynchronous Programming
4.	Aapko ek file read karni hai aur uske data ke basis pe dusra API call karna hai. Ye kaam aap callback, promises aur async/await teenon se kaise karoge?
5.	Agar ek DB query aur ek external API call parallel me chalani ho, toh aap kaunsa Node.js pattern use karoge?
________________________________________
API Design & REST
6.	Aapke paas ek API hai jo heavy JSON object return karta hai. Frontend slow ho raha hai. Aap Node.js me performance optimize kaise karoge?
7.	Agar ek API endpoint par DDOS attack ho raha hai, toh aap Node.js me kaise protect karoge?
________________________________________


Database Scenarios
8.	Agar Node.js service me ek query frequently slow chal rahi hai, toh aap kaise identify karoge ki issue Node.js code me hai ya DB me?
9.	Node.js app me agar ek query bahut heavy hai, toh aap usko optimize karne ke liye kya karoge? (Indexes, caching, pagination)
________________________________________
Authentication & Security
10.	JWT authentication implement karte waqt agar token expire ho jaye to aap kaise handle karoge?
11.	Aap Node.js app ko SQL Injection aur XSS se kaise secure karoge?
________________________________________
Scaling & Load Handling
12.	Aapke Node.js server ko ek hi time me 1 lakh concurrent users handle karne hain. Aap scaling kaise karoge?
13.	Agar ek microservice 100 requests/sec handle kar raha hai, aur aapko 1000 requests/sec handle karna hai, toh Node.js side se kya changes karoge?
________________________________________
File Handling & Streams
14.	Ek bada CSV file (1GB+) read karke process karna hai bina server crash kiye. Aap Node.js me kaise karoge?
15.	Agar ek image upload API slow ho rahi hai kyunki bada file hai, aap kaise optimize karoge (streaming / chunk upload)?
________________________________________
Testing & Debugging
16.	Aap ek Node.js API ke liye unit tests likh rahe ho. Agar API DB pe depend karti hai, toh aap kaise isolate karke test likhoge?
17.	Aapke test cases CI/CD pipeline me fail ho rahe hain lekin local pe pass ho rahe hain. Aap troubleshooting kaise karoge?
________________________________________
Real-World Scenarios
18.	Aapke Node.js service ka memory usage badh raha hai continuously (memory leak). Aap kaise detect aur fix karoge?
19.	Agar ek background job (cron job) Node.js me fail ho jaye bina error ke, toh aap monitoring aur alerting kaise implement karoge?
20.	Ek user report karta hai ki usko 500 error mil raha hai but aapke logs me koi error nahi hai. Aap root cause kaise find karoge?
________________________________________
🔵 DevOps / CI-CD / Jenkins
9.	Jenkins pipeline slow chal rahi hai – aap usko kaise optimize karoge?
10.	Jenkins me ek build frequently fail ho raha hai due to flaky tests – aap usko kaise diagnose karoge?
11.	Aapke CI/CD pipeline me secrets (API keys, passwords) kaise securely manage karoge?
12.	Aap ek microservice deploy karte ho aur production me container crash loop ho raha hai – kaise debug karoge?
13.	Jenkins me agar ek job automatically trigger nahi ho rahi webhook ke baad – aap kaise troubleshoot karoge?
14.	CI pipeline me test coverage 40% hai aur lead ne bola 80% chahiye – aap kya approach loge?
15.	Agar ek deployment production me fail ho gaya to rollback strategy kya hogi?
________________________________________
🟠 Docker / Podman / Containers
16.	Aapke Docker container ka size bahut bada hai (1.5GB) – aap usko optimize kaise karoge?
17.	Container ke andar ek app crash kar raha hai, logs bahar nahi aa rahe – debugging kaise karoge?
18.	Agar ek container continuously high CPU use kar raha hai to kaise diagnose karoge?
19.	Agar Docker image me secret keys galti se commit ho gayi to aap kya karoge?
20.	Agar ek container service ko scale karna ho 100+ instances tak – aap kya karoge?
________________________________________
🟣 Linux / Scripting
21.	Production server me ek port pe app run nahi ho raha – Linux commands use karke kaise debug karoge?
22.	Server me disk space suddenly full ho gaya – kaise check karoge aur clean karoge?
23.	Agar ek process continuously high memory use kar raha hai – Linux me kaise find aur kill karoge?
24.	Aapko ek bash script likhni hai jo logs ko 7 din purane delete kare – kaise likhoge?
25.	Aapko Python script likhni hai jo REST API call karke data save kare – approach kya hogi?
________________________________________
🟤 Database / System Design
26.	Agar ek DB query bahut slow chal rahi hai to aap performance kaise improve karoge?
27.	System me read-heavy traffic hai (90% reads) – database design kaise karoge?
28.	Agar ek DB table me deadlocks frequently aa rahe hain to kya karoge?
29.	Large JSON store karna hai DB me – relational DB use karoge ya NoSQL? Kyu?
30.	Ek collaborative system hai jisme 10 billion minutes per month traffic aa raha hai – aap scalability aur fault tolerance kaise ensure karoge?
________________________________________
🟢 JavaScript Core Questions
1.	JavaScript me var, let, aur const me kya difference hai?
2.	JavaScript me hoisting kya hota hai? Example do.
3.	JavaScript me closure kya hai? Real life use-case batao.
4.	Event Loop Node.js/JavaScript me kaise kaam karta hai? (Call stack, queue, microtask queue explain karo).
5.	Synchronous vs Asynchronous JavaScript me kya difference hai?
6.	JavaScript me Promises aur async/await kaise kaam karte hain?
7.	Callback Hell kya hota hai? Isko kaise avoid karte ho?
8.	JavaScript me this keyword kaise kaam karta hai alag-alag situations me? (function, arrow function, object, class).
9.	JavaScript me prototype inheritance kaise kaam karti hai? Example do.
10.	Shallow copy aur Deep copy me kya difference hai? Example ke sath.
11.	JavaScript me debounce aur throttle kya hote hain? Real-life example do.
12.	JavaScript me memory leak kaise hota hai? Usko kaise fix karte ho?
13.	Map vs Set vs Object me difference kya hai?
14.	JavaScript me == aur === operator me difference kya hai?
15.	ES6+ features (arrow functions, template literals, spread/rest, destructuring, default params) me se sabse useful kaunsa hai aur kyu?



🔵 Node.js Core Questions
16.	Node.js ka single-threaded hone ka matlab kya hai?
17.	Node.js me non-blocking I/O kaise kaam karta hai?
18.	Node.js me EventEmitter kya hota hai? Example ke sath.
19.	CommonJS vs ES Modules Node.js me difference kya hai?
20.	Node.js me process.nextTick() vs setImmediate() me kya difference hai?
21.	Node.js me cluster module ka use kyu hota hai?
22.	Node.js me streams kya hote hain? Types samjhao (Readable, Writable, Duplex, Transform).
23.	Node.js me buffer kya hota hai? Kyu use karte hain?
24.	Node.js me middleware kya hota hai (Express example ke sath).
25.	Node.js me error handling kaise karte ho (sync vs async)?
26.	Node.js me global objects kaunse hote hain (setTimeout, process, __dirname, etc.)?
27.	Node.js me package.json file me kya hota hai? Important fields explain karo.
28.	npm vs npx me difference kya hai?
29.	Node.js me child_process module kyu use hota hai?
30.	Node.js me security best practices kya hote hain? (e.g. input validation, helmet.js, rate limiting).
🟢 HTML5 Questions
1.	HTML aur HTML5 me kya difference hai?
2.	HTML5 ke new semantic tags kaunse hain? (e.g. <header>, <article>, <section>, etc.)
3.	<canvas> aur <svg> me difference kya hai?
4.	HTML5 me <audio> aur <video> tag kaise use karte ho? Example do.
5.	Local Storage, Session Storage aur Cookies me kya difference hai?
6.	HTML5 me geolocation API kya hai?
7.	<datalist> tag ka use kyu hota hai?
8.	<progress> aur <meter> tag me kya difference hai?
9.	doctype ka role kya hota hai?
10.	<iframe> ka use kya hota hai aur security concerns kya hain?
11.	HTML5 forms me naye input types kaunse aaye hain? (e.g. email, date, range, color, etc.)
12.	placeholder aur value attribute me kya difference hai?
13.	defer aur async attribute script tag me kya kaam karte hain?
14.	<link> aur <a> tag me difference kya hai?
15.	SEO ke liye semantic HTML kyu important hai?
🔵 CSS3 Questions
16.	CSS aur CSS3 me kya difference hai?
17.	Inline, Internal aur External CSS me difference kya hai?
18.	CSS selectors ke types kya hain? (e.g. class, id, attribute, pseudo-class)
19.	Pseudo-classes aur Pseudo-elements me kya difference hai? Example do.
20.	CSS specificity kaise calculate hoti hai?
21.	Flexbox aur Grid me kya difference hai?
22.	CSS transitions aur animations me kya difference hai?
23.	position: relative, absolute, fixed, sticky me kya difference hai?
24.	Z-index kaise kaam karta hai?
25.	CSS media queries kya hain? Responsive design me kaise use karte ho?
26.	CSS me em, rem, % aur px units me kya difference hai?
27.	CSS variables (custom properties) kaise declare aur use karte ho?
28.	Inline-block aur block element me kya difference hai?
29.	overflow: hidden, scroll, auto kaise kaam karte hain?
30.	CSS me opacity aur visibility: hidden me kya difference hai?
🟢 CI/CD Concepts
1.	CI/CD kya hai? Dono me difference samjhao.
2.	CI/CD ke benefits kya hote hain?
3.	CI/CD pipeline ke major stages kaunse hote hain?
4.	Build aur Deployment pipeline me kya difference hai?
5.	Continuous Deployment aur Continuous Delivery me kya difference hai?
6.	CI/CD me rollback kaise handle karte ho?
7.	Infrastructure as Code (IaC) kya hai aur CI/CD me kyu important hai?
8.	Git hooks ka CI/CD me kya role hota hai?
9.	Canary deployment aur Blue-Green deployment me kya difference hai?
10.	CI/CD pipelines me secrets ko securely kaise manage karte ho?
________________________________________
🔵 Jenkins
11.	Jenkins kya hai aur kyu use karte hain?
12.	Jenkins pipeline ke types kya hote hain? (Declarative vs Scripted)
13.	Jenkinsfile kya hota hai? Example explain karo.
14.	Jenkins me agent (slave node) ka role kya hota hai?
15.	Jenkins me plugins ka kya role hai?
16.	Jenkins me pipeline trigger karne ke different ways kya hain? (SCM, webhook, schedule, manual)
17.	Jenkins me master-slave architecture kaise kaam karta hai?
18.	Jenkins me artifacts kaise store aur share karte ho?
19.	Jenkins me post block ka kya use hai pipeline me?
20.	Jenkins pipeline me parallel execution kaise karte ho?
________________________________________
🟠 Docker
21.	Docker kya hai aur kaise kaam karta hai?
22.	Docker aur Virtual Machine (VM) me kya difference hai?
23.	Dockerfile kya hai? Common instructions kaunse hain (FROM, RUN, COPY, CMD, ENTRYPOINT)?
24.	Docker image aur Docker container me kya difference hai?
25.	Docker volume kya hota hai? Persistent data kaise manage karte ho?
26.	Docker networking ke modes kaunse hote hain? (bridge, host, overlay, none)
27.	Docker Compose kya hai aur kyu use karte ho?
28.	Docker registry aur DockerHub me kya difference hai?
29.	Multi-stage Docker build kya hota hai?
30.	Docker me security best practices kya follow karte ho?
________________________________________
🟣 Podman (Extra if interviewer asks)
•	Podman Docker se kaise different hai?
•	Podman me rootless container ka kya benefit hai?






🔵 Shell / Bash Scripting (Core Concepts)
11.	Shell aur Bash me kya difference hai?
12.	Bash me variable declare aur use kaise karte ho?
13.	Bash me positional parameters ($0, $1, $2…) ka use kya hai?
14.	Bash me conditional statements kaise likhte ho? (if-else, case)
15.	Bash me loops kaise likhte ho? (for, while, until)
16.	Bash me functions kaise define aur call karte ho?
17.	Bash me string manipulation kaise karte ho?
18.	Bash me arrays kaise declare aur use karte ho?
19.	Bash me exit codes ka kya role hai?
20.	Bash script me arguments kaise pass karte ho?
🟠 Shell / Bash Advanced
21.	Bash me grep, awk, sed kaise use karte ho? (Text processing ke liye)
22.	Bash me cut, sort, uniq, wc commands kaise kaam karte hain?
23.	Bash scripting me logging kaise implement karte ho?
24.	Bash me cron job kaise schedule karte ho?
25.	Bash me signals (e.g. SIGINT, SIGKILL) ko kaise handle karte ho?
26.	Bash script me error handling kaise karte ho? (set -e, trap)
27.	Bash me pipes (|) aur redirection (>, >>, <) kaise kaam karte hain?
28.	Bash me process management ke liye ps, kill, jobs, fg, bg commands kaise kaam karte hain?
29.	Bash me environment variables (PATH, HOME, USER) kaise set aur use karte ho?
30.	Bash script me automation ka real example do (e.g. backup script, log cleanup, server health check).
🟢 Array Based
1.	Array me second largest element find karo.
2.	Array ko reverse karo (without built-in reverse).
3.	Array me duplicate elements remove karo.
4.	Array me pair of elements jinka sum X hai find karo.
5.	Array me kadane’s algorithm use karke maximum subarray sum find karo.
6.	Array ko rotate karo (left/right rotation).
7.	Array me majority element find karo (element > n/2 times repeat).
8.	Merge two sorted arrays without extra space.
9.	Move all zeros to end of array (maintain order).
10.	Find missing number from 1…n series.
________________________________________
🔵 String Based
11.	String palindrome check karo.
12.	Reverse words in a string (e.g. "Hello World" → "World Hello").
13.	String me first non-repeating character find karo.
14.	String me character frequency count karo.
15.	String me anagram check karo (two strings same letters ke saath bane hain ya nahi).
16.	Longest substring without repeating characters find karo.
17.	Valid parentheses/brackets check karo ("(){}[]").
18.	String me vowels aur consonants count karo.
19.	String ko integer me convert karo (without parseInt).
20.	String me longest palindromic substring find karo.
________________________________________

🟠 Linked List / Stack / Queue
21.	Reverse a linked list.
22.	Detect cycle in a linked list (Floyd’s cycle detection).
23.	Merge two sorted linked lists.
24.	Implement stack using array.
25.	Implement queue using two stacks.
26.	Implement min stack (stack with getMin in O(1)).
27.	Next Greater Element in array (using stack).
28.	Implement circular queue.
29.	LRU Cache implement karo (LinkedList + HashMap).
30.	Balanced parentheses problem using stack.
🟢 OOPs Basics
1.	OOPs (Object Oriented Programming) kya hai?
2.	OOPs ke 4 pillars (Encapsulation, Abstraction, Inheritance, Polymorphism) samjhao.
3.	Class aur Object me kya difference hai?
4.	Constructor kya hota hai?
5.	Destructor / Finalizer ka role kya hota hai?
6.	Static method aur Instance method me kya difference hai?
7.	Overloading aur Overriding me kya difference hai?
8.	"this" keyword OOPs me kaise kaam karta hai?
9.	Object cloning kya hota hai?
10.	Access modifiers (public, private, protected) kya hote hain?
________________________________________
🔵 Encapsulation / Abstraction
11.	Encapsulation kya hai? Example do.
12.	Abstraction kya hai? Example do.
13.	Abstraction aur Encapsulation me kya difference hai?
14.	Getter aur Setter methods ka use kyu hota hai?
15.	Interface aur Abstract class me kya difference hai?
________________________________________
🟠 Inheritance / Polymorphism
16.	Inheritance kya hai aur kaise kaam karta hai?
17.	JavaScript me inheritance kaise achieve hota hai? (prototype / class extends)
18.	Multiple inheritance kya hai? JS me support hota hai ya nahi?
19.	Polymorphism kya hai? Example do.
20.	Compile-time vs Runtime polymorphism me difference kya hai?
21.	Method overriding ka real use case batao.
22.	Method overloading JS me directly hota hai ya nahi?
________________________________________
🟣 Advanced OOPs Concepts
23.	Composition vs Inheritance me kya difference hai?
24.	SOLID principles kya hote hain OOPs me?
25.	Design Patterns kya hote hain? Example do (Factory, Singleton).
26.	Singleton pattern kya hota hai? Node.js me kaise implement karte ho?
27.	Factory pattern kya hota hai?
28.	Dependency Injection kya hota hai?
29.	Duck typing kya hota hai (JavaScript specific)?
30.	OOPs ke advantages aur disadvantages kya hote hain?

1. Cloud me scaling ke kitne tareeke hote hain? (Horizontal vs Vertical)
2. Kubernetes aur Docker Swarm me difference kya hai?
3. Secrets management kaise karte ho cloud me?
4. CI/CD me Canary Deployment aur Blue-Green Deployment ka kya difference hai?

🟢 Unit Testing Basics
1.	Unit testing kya hota hai?
2.	Unit test aur Integration test me kya difference hai?
3.	Unit testing ke benefits kya hote hain?
4.	Test Pyramid kya hai? (Unit, Integration, E2E tests)
5.	TDD (Test Driven Development) aur BDD (Behavior Driven Development) me kya difference hai?
6.	Mocking, Stubbing aur Spying me kya difference hai?
7.	Code coverage kya hai aur kaise measure karte ho?
8.	Unit testing me edge cases kaise identify karte ho?
9.	Positive aur Negative test cases kya hote hain?
10.	Regression testing kya hota hai?
________________________________________
🔵 Node.js Unit Testing (Frameworks & Tools)
11.	Node.js me kaunse testing frameworks commonly use hote hain? (Mocha, Jest, Jasmine)
12.	Jest aur Mocha me kya difference hai?
13.	Supertest ka use kyu hota hai Node.js testing me?
14.	Sinon.js ka role kya hai? (Mocks, Stubs, Spies)
15.	Chai assertion library ka kya role hai?
16.	Express.js API ke liye test cases kaise likhte ho?
17.	Node.js me async code (Promises, async/await) ka test kaise likhte ho?
18.	Database ko mock karke test cases kaise likhte ho? (MongoDB / MySQL)
19.	Unit test me environment variables kaise handle karte ho?
20.	CI/CD pipeline me unit tests kaise integrate karte ho?
________________________________________
🟠 Automation & Best Practices
21.	Automation testing kya hota hai?
22.	Selenium aur Cypress me kya difference hai? (Web automation)
23.	API testing automation kaise karte ho? (Postman, Newman, Supertest)
24.	Load testing aur Performance testing Node.js app me kaise karte ho? (e.g. k6, Artillery)
25.	Automated test execution kaise schedule karte ho? (Jenkins, GitHub Actions)
26.	Git pre-commit hooks me unit tests kaise run karte ho?
27.	Test data management automation kaise karte ho?
28.	Node.js testing me mocking external API calls kaise karte ho? (nock library)
29.	Unit testing me flaky tests ko kaise handle karte ho?
30.	Node.js automation me best practices kya follow karte ho?


