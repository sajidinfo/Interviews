
# **1. Nginx Security Configuration Interview Q&A**  

### **Basic Questions**  
1. **What is Nginx?**  
   - Nginx is a high-performance web server, reverse proxy, and load balancer known for its scalability and efficiency.  

2. **How do you check the Nginx version?**  
   ```bash
   nginx -v
   ```  

3. **What is the default Nginx configuration file location?**  
   - `/etc/nginx/nginx.conf`  

4. **How do you restart Nginx?**  
   ```bash
   sudo systemctl restart nginx
   ```  

5. **How do you test Nginx configuration before applying?**  
   ```bash
   sudo nginx -t
   ```  

6. **What is the purpose of `server_name` in Nginx?**  
   - Specifies which domain names should be served by a particular `server` block.  

7. **How do you disable server tokens in Nginx?**  
   - Add `server_tokens off;` in `nginx.conf`.  

8. **What is the difference between `listen 80` and `listen 443`?**  
   - `80` is for HTTP, `443` is for HTTPS (SSL/TLS).  

9. **How do you enable HTTPS in Nginx?**  
   - Use SSL certificates and configure:  
     ```nginx
     listen 443 ssl;
     ssl_certificate /path/to/cert.pem;
     ssl_certificate_key /path/to/key.pem;
     ```  

10. **What is the purpose of `location` blocks in Nginx?**  
    - Defines how Nginx processes requests for specific URLs.  

### **Intermediate Questions**  
11. **How do you prevent directory listing in Nginx?**  
    - Add `autoindex off;` in the `location` block.  

12. **What is HTTP Strict Transport Security (HSTS) in Nginx?**  
    - Forces browsers to use HTTPS only:  
      ```nginx
      add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
      ```  

13. **How do you block IP addresses in Nginx?**  
    - Use `deny` in a `location` or `server` block:  
      ```nginx
      deny 192.168.1.1;
      ```  

14. **What is rate limiting in Nginx?**  
    - Limits request frequency to prevent abuse:  
      ```nginx
      limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
      ```  

15. **How do you secure Nginx against SQL injection?**  
    - Use WAF (Web Application Firewall) like ModSecurity.  

16. **How do you disable unnecessary HTTP methods (e.g., DELETE, TRACE)?**  
    ```nginx
    if ($request_method !~ ^(GET|HEAD|POST)$ ) {
        return 405;
    }
    ```  

17. **What is `X-Content-Type-Options` in Nginx?**  
    - Prevents MIME type sniffing:  
      ```nginx
      add_header X-Content-Type-Options "nosniff";
      ```  

18. **How do you configure Nginx as a reverse proxy?**  
    ```nginx
    location / {
        proxy_pass http://backend_server;
    }
    ```  

19. **What is `X-Frame-Options` in Nginx?**  
    - Prevents clickjacking:  
      ```nginx
      add_header X-Frame-Options "SAMEORIGIN";
      ```  

20. **How do you enable gzip compression in Nginx?**  
    ```nginx
    gzip on;
    gzip_types text/css application/javascript;
    ```  

### **Advanced Questions**  
21. **How do you implement OCSP stapling in Nginx?**  
    ```nginx
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8;
    ```  

22. **What is TLS 1.3, and how do you enable it in Nginx?**  
    - Latest TLS version for better security:  
      ```nginx
      ssl_protocols TLSv1.2 TLSv1.3;
      ```  

23. **How do you mitigate DDoS attacks in Nginx?**  
    - Use rate limiting, fail2ban, and Cloudflare.  

24. **How do you secure Nginx with Let’s Encrypt?**  
    - Use Certbot:  
      ```bash
      sudo certbot --nginx -d example.com
      ```  

25. **What is ModSecurity, and how do you integrate it with Nginx?**  
    - A WAF (Web Application Firewall) that blocks attacks.  

26. **How do you enable HTTP/2 in Nginx?**  
    ```nginx
    listen 443 ssl http2;
    ```  

27. **How do you log and monitor Nginx attacks?**  
    - Use `access.log`, `error.log`, and tools like Fail2ban.  

28. **What is CSP (Content Security Policy) in Nginx?**  
    - Prevents XSS attacks:  
      ```nginx
      add_header Content-Security-Policy "default-src 'self';";
      ```  

29. **How do you prevent brute-force attacks in Nginx?**  
    - Use rate limiting and fail2ban.  

30. **How do you harden Nginx SSL/TLS configuration?**  
    - Disable weak ciphers:  
      ```nginx
      ssl_ciphers 'TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256';
      ```  
