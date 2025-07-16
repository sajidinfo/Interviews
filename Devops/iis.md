
# **2. IIS Security Configuration Interview Q&A**  

### **Basic Questions**  
1. **What is IIS?**  
   - Internet Information Services (IIS) is a web server developed by Microsoft for Windows.  

2. **How do you install IIS?**  
   - Via PowerShell:  
     ```powershell
     Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole
     ```  

3. **What is the default IIS configuration file?**  
   - `%SystemRoot%\System32\inetsrv\config\applicationHost.config`  

4. **How do you restart IIS?**  
   ```powershell
   iisreset
   ```  

5. **How do you enable HTTPS in IIS?**  
   - Bind a certificate in **Site Bindings** (Port `443`).  

6. **What is Application Pool in IIS?**  
   - Isolates web applications for security and stability.  

7. **How do you disable directory browsing in IIS?**  
   - Uncheck **Directory Browsing** in **Feature View**.  

8. **How do you disable Server Header in IIS?**  
   - Use `URL Rewrite` to remove the `Server` header.  

9. **What is Request Filtering in IIS?**  
   - Blocks malicious requests (e.g., SQL injection).  

10. **How do you enable logging in IIS?**  
    - Configure in **Logging** under **Site Features**.  

### **Intermediate Questions**  
11. **How do you block an IP address in IIS?**  
    - Use **IP Address and Domain Restrictions**.  

12. **What is Dynamic IP Restrictions in IIS?**  
    - Blocks IPs with too many requests (anti-DDoS).  

13. **How do you enable HSTS in IIS?**  
    - Add in `web.config`:  
      ```xml
      <customHeaders>
          <add name="Strict-Transport-Security" value="max-age=31536000" />
      </customHeaders>
      ```  

14. **How do you disable weak TLS versions in IIS?**  
    - Via **Registry Editor** or **IISCrypto**.  

15. **How do you prevent Clickjacking in IIS?**  
    - Add `X-Frame-Options`:  
      ```xml
      <customHeaders>
          <add name="X-Frame-Options" value="DENY" />
      </customHeaders>
      ```  

16. **How do you enable HTTP/2 in IIS?**  
    - Requires Windows 10/2016+ and HTTPS.  

17. **What is ARR (Application Request Routing) in IIS?**  
    - A reverse proxy and load balancer.  

18. **How do you secure IIS against SQL injection?**  
    - Use **Request Filtering** and **WAF**.  

19. **How do you enable gzip compression in IIS?**  
    - Enable in **Compression** under **Server Features**.  

20. **How do you disable TRACE and TRACK methods in IIS?**  
    - Via **Request Filtering**.  

### **Advanced Questions**  
21. **How do you implement OCSP Stapling in IIS?**  
    - Requires Windows Server 2016+ and PowerShell configuration.  

22. **What is Client Certificate Authentication in IIS?**  
    - Requires clients to present a certificate for access.  

23. **How do you mitigate Slowloris attacks in IIS?**  
    - Adjust `connectionTimeout` and `headerWaitTimeout`.  

24. **How do you enable CSP (Content Security Policy) in IIS?**  
    - Add in `web.config`:  
      ```xml
      <add name="Content-Security-Policy" value="default-src 'self'" />
      ```  

25. **How do you audit IIS logs for security threats?**  
    - Use **Log Parser** or **Azure Sentinel**.  

26. **How do you disable unnecessary IIS modules?**  
    - Remove them via **Server Manager**.  

27. **What is URL Rewrite in IIS?**  
    - Redirects or blocks URLs based on rules.  

28. **How do you secure IIS with Let’s Encrypt?**  
    - Use **Win-ACME** or **Certify The Web**.  

29. **How do you configure IIS for PCI DSS compliance?**  
    - Disable weak ciphers, enable logging, and enforce HTTPS.  

30. **How do you harden IIS for high-security environments?**  
    - Disable unused features, enable logging, and use WAF.  
