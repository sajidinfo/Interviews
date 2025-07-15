
# **2. Jenkins (CI/CD) Interview Q&A**  

### **Basic Questions**  
1. **What is Jenkins?**  
   - Jenkins is an open-source automation server used for CI/CD (Continuous Integration/Continuous Delivery).  

2. **What is CI/CD?**  
   - **CI (Continuous Integration)** merges code changes frequently. **CD (Continuous Delivery/Deployment)** automates release processes.  

3. **How do you install Jenkins?**  
   - Download from [jenkins.io](https://www.jenkins.io/) or use Docker:  
     ```bash
     docker run -p 8080:8080 jenkins/jenkins:lts
     ```  

4. **What is a Jenkins pipeline?**  
   - A scripted or declarative workflow defining stages for building, testing, and deploying code.  

5. **What is a Jenkinsfile?**  
   - A text file defining a pipeline using Groovy syntax.  

6. **What are Jenkins agents (nodes)?**  
   - Machines that execute pipeline jobs (master-slave architecture).  

7. **How do you create a Jenkins job?**  
   - Go to **Dashboard > New Item > Freestyle/Pipeline Project**.  

8. **What is a Jenkins plugin?**  
   - Extensions that add functionality (e.g., Git, Docker, Slack integration).  

9. **How do you trigger a Jenkins job automatically?**  
   - Use **Poll SCM**, **Webhooks**, or **cron-based triggers**.  

10. **What is Blue Ocean in Jenkins?**  
    - A modern UI for visualizing pipelines.  

### **Intermediate Questions**  
11. **What are Jenkins stages and steps?**  
    - **Stages** are logical divisions (e.g., Build, Test, Deploy). **Steps** are individual tasks.  

12. **How do you secure Jenkins?**  
    - Use **Role-Based Access Control (RBAC)**, HTTPS, and credentials management.  

13. **What is a Jenkins shared library?**  
    - Reusable Groovy code shared across pipelines.  

14. **How do you integrate Jenkins with Git?**  
    - Use the **Git plugin** and configure SCM in the job.  

15. **What is a Multibranch Pipeline?**  
    - Automatically creates jobs for each Git branch.  

16. **How do you handle secrets in Jenkins?**  
    - Use **Credentials Binding Plugin** or **HashiCorp Vault**.  

17. **What is Jenkins Distributed Builds?**  
    - Running jobs on multiple agents for scalability.  

18. **How do you backup Jenkins?**  
    - Backup the `JENKINS_HOME` directory or use plugins like **ThinBackup**.  

19. **How do you schedule a Jenkins job?**  
    - Use cron syntax in **Build Triggers > Build periodically**.  

20. **What is Jenkins Declarative vs Scripted Pipeline?**  
    - **Declarative:** Structured syntax. **Scripted:** Flexible Groovy scripting.  

### **Advanced Questions**  
21. **How do you debug a Jenkins pipeline?**  
    - Use **Replay**, **Pipeline Syntax Generator**, or **Console Output**.  

22. **What is Jenkinsfile parallel execution?**  
    - Running stages concurrently using `parallel` directive.  

23. **How do you integrate Jenkins with Docker?**  
    - Use **Docker Pipeline Plugin** or **Kubernetes Plugin**.  

24. **What is Jenkins Parameterized Build?**  
    - Allows passing dynamic inputs (e.g., branch name, version).  

25. **How do you monitor Jenkins?**  
    - Use **Prometheus**, **Grafana**, or **Jenkins Monitoring Plugin**.  

26. **What is Jenkins Groovy Sandbox?**  
    - A security feature restricting Groovy script execution.  

27. **How do you upgrade Jenkins?**  
    - Use **Jenkins WAR file** or package managers like `apt`.  

28. **What is Jenkins Job DSL?**  
    - Defining jobs programmatically using Groovy.  

29. **How do you integrate Jenkins with SonarQube?**  
    - Use the **SonarQube Scanner Plugin**.  

30. **What is Jenkinsfile "when" directive?**  
    - Conditionally execute stages based on logic (e.g., branch name).  
