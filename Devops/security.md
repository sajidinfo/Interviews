# **Full Stack Developer Interview Questions: Security & Best Practices**

## **1. OWASP Top 10 Standards in REST APIs**
### **Question:**  
What are the OWASP Top 10 security risks for REST APIs, and how can you mitigate them?  

### **Answer:**  
The OWASP Top 10 for APIs includes:  
1. **Broken Object Level Authorization (BOLA)** → Implement proper access controls (RBAC/ABAC).  
2. **Broken Authentication** → Use JWT with strong algorithms, enforce session expiry, and rate-limiting.  
3. **Excessive Data Exposure** → Only return necessary data (avoid `SELECT *`).  
4. **Lack of Resources & Rate Limiting** → Implement API throttling (e.g., Redis-based rate limiting).  
5. **Broken Function Level Authorization (BFLA)** → Validate user roles before allowing actions.  
6. **Mass Assignment** → Use allowlists for input fields (e.g., DTOs in Spring/Sequelize).  
7. **Security Misconfiguration** → Disable debug mode, use Helmet.js, and enforce HTTPS.  
8. **Injection (SQL, NoSQL, Command)** → Use parameterized queries (e.g., `PreparedStatement` in SQL).  
9. **Improper Assets Management** → Version APIs and deprecate old endpoints.  
10. **Insufficient Logging & Monitoring** → Log security events (e.g., failed logins) and use SIEM tools.  

---

## **2. SQL Injection Protection**
### **Question:**  
How do you prevent SQL injection in a Node.js/Express or Spring Boot backend?  

### **Answer:**  
- **Use Parameterized Queries**:  
  ```javascript
  // Node.js (with Sequelize/TypeORM)
  User.findOne({ where: { username: req.body.username } });
  
  // Java (Spring JPA)
  @Query("SELECT u FROM User u WHERE u.username = :username")
  User findByUsername(@Param("username") String username);
  ```
- **ORM/Query Builders**: Avoid raw SQL; use Sequelize, TypeORM, Hibernate, or JPA.  
- **Input Validation**: Sanitize inputs with libraries like `validator.js` or `express-validator`.  
- **Least Privilege DB Users**: Restrict DB user permissions (e.g., no `DROP TABLE` access).  

---

## **3. JWT Authentication (Expiry/Refresh Tokens)**
### **Question:**  
How do you implement secure JWT authentication with refresh tokens?  

### **Answer:**  
- **Short-Lived Access Token (e.g., 15 mins)**  
  ```javascript
  jwt.sign({ userId: 123 }, secret, { expiresIn: '15m' });
  ```
- **Long-Lived Refresh Token (e.g., 7 days, stored in HTTP-only cookie)**  
  ```javascript
  res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });
  ```
- **Flow**:  
  1. User logs in → gets `accessToken` + `refreshToken`.  
  2. When `accessToken` expires → client sends `refreshToken` to `/refresh` endpoint.  
  3. Server verifies `refreshToken` → issues new `accessToken`.  
- **Security**:  
  - Use `httpOnly` + `Secure` cookies.  
  - Store refresh tokens in Redis/DB for revocation.  

---

## **4. OAuth2 vs. OpenID Connect (OIDC)**
### **Question:**  
What’s the difference between OAuth2 and OpenID Connect?  

### **Answer:**  
| **OAuth2** | **OpenID Connect (OIDC)** |  
|------------|--------------------------|  
| Authorization framework (grants access). | Identity layer on top of OAuth2 (authentication). |  
| Used for delegated access (e.g., "Let App X post on my behalf"). | Used for SSO (e.g., "Login with Google"). |  
| Returns an `access_token`. | Returns an `id_token` (JWT) + `access_token`. |  
| Scopes: `read:users`. | Claims: `email`, `profile`. |  

---

## **5. HTTPS, CORS, CSP, and Helmet.js**
### **Question:**  
How do you enforce HTTPS, CORS, and Content Security Policy (CSP) in a Node.js app?  

### **Answer:**  
- **HTTPS**:  
  ```javascript
  const https = require('https');
  const fs = require('fs');
  const options = { key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') };
  https.createServer(options, app).listen(443);
  ```
- **CORS**:  
  ```javascript
  app.use(cors({ origin: ['https://trusted.com'], methods: ['GET', 'POST'] }));
  ```
- **CSP**:  
  ```javascript
  app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"] } }));
  ```
- **Helmet.js**:  
  ```javascript
  app.use(helmet()); // Sets XSS, HSTS, no-sniff headers.
  ```

---

## **6. XSS and CSRF Protection**
### **Question:**  
How do you prevent XSS and CSRF attacks in a React + Node.js app?  

### **Answer:**  
- **XSS Prevention**:  
  - Escape user input: Use `DOMPurify` or `react-dom`’s `dangerouslySetInnerHTML` cautiously.  
  - CSP headers to block inline scripts.  
- **CSRF Prevention**:  
  - Use `csurf` middleware + `SameSite` cookies.  
  - Send CSRF token via headers:  
    ```javascript
    // Backend
    app.use(csurf({ cookie: true }));
    // Frontend (Axios)
    axios.defaults.headers.common['X-CSRF-Token'] = getCookie('csrfToken');
    ```

---

## **7. Rate Limiting**
### **Question:**  
How do you implement rate limiting in an API?  

### **Answer:**  
- **Node.js (express-rate-limit)**:  
  ```javascript
  const rateLimit = require('express-rate-limit');
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  ```
- **Redis-Based (for distributed systems)**:  
  ```javascript
  const redis = require('redis');
  const { RateLimiterRedis } = require('rate-limiter-flexible');
  const limiter = new RateLimiterRedis({ storeClient: redisClient, points: 10, duration: 1 });
  app.use((req, res, next) => limiter.consume(req.ip).then(next).catch(() => res.status(429).send()));
  ```

---

## **8. SSRF Protection**
### **Question:**  
How do you prevent Server-Side Request Forgery (SSRF)?  

### **Answer:**  
- **Allowlist Internal IPs**:  
  ```javascript
  if (req.body.url.includes('192.168.')) throw new Error('Blocked internal IP');
  ```
- **Use DNS Rebinding Protection**:  
  - Validate `Host` header matches expected domains.  
- **Restrict Outbound Requests**:  
  - Use a proxy service (e.g., AWS PrivateLink) to limit external calls.  

---

## **9. Role-Based Access Control (RBAC)**
### **Question:**  
How do you implement RBAC in a Node.js/Spring Boot app?  

### **Answer:**  
- **Define Roles (e.g., `ADMIN`, `USER`)**  
- **Middleware/Interceptor Checks**:  
  ```javascript
  // Node.js
  function checkRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) return res.status(403).send('Forbidden');
      next();
    };
  }
  app.get('/admin', checkRole('ADMIN'), adminController);
  ```
  ```java
  // Spring Boot
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/admin")
  public ResponseEntity<?> adminEndpoint() { ... }
  ```

---

## **10. Security Headers**
### **Question:**  
What security headers should you always enable?  

### **Answer:**  
- **Strict-Transport-Security (HSTS)**:  
  ```nginx
  add_header Strict-Transport-Security "max-age=63072000; includeSubDomains";
  ```
- **X-Frame-Options**: `DENY` (prevent clickjacking).  
- **X-Content-Type-Options**: `nosniff` (disable MIME sniffing).  
- **Referrer-Policy**: `strict-origin-when-cross-origin`.  

---
