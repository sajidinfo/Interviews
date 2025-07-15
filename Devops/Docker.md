

# **3. Docker Interview Q&A**  

### **Basic Questions**  
1. **What is Docker?**  
   - A platform for containerizing applications, ensuring consistency across environments.  

2. **What is a Docker container?**  
   - A lightweight, executable package containing an application and its dependencies.  

3. **What is a Docker image?**  
   - A read-only template used to create containers.  

4. **How do you run a Docker container?**  
   - ```bash
     docker run -it <image_name>
     ```  

5. **What is Docker Hub?**  
   - A public registry for Docker images.  

6. **How do you build a Docker image?**  
   - ```bash
     docker build -t <image_name> .
     ```  

7. **What is a Dockerfile?**  
   - A script with instructions to build a Docker image.  

8. **What is `docker ps` used for?**  
   - Lists running containers (`docker ps -a` shows all).  

9. **How do you stop a Docker container?**  
   - ```bash
     docker stop <container_id>
     ```  

10. **What is Docker Compose?**  
    - A tool for defining and running multi-container applications.  

### **Intermediate Questions**  
11. **What are Docker volumes?**  
    - Persistent storage for containers.  

12. **How do you remove unused Docker images?**  
    - ```bash
      docker image prune
      ```  

13. **What is Docker Swarm?**  
    - Docker’s native clustering/orchestration tool.  

14. **What is `docker exec` used for?**  
    - Running commands inside a running container.  

15. **How do you expose a Docker container port?**  
    - ```bash
      docker run -p 8080:80 <image>
      ```  

16. **What is `ENTRYPOINT` vs `CMD` in Dockerfile?**  
    - `ENTRYPOINT` defines the main command, while `CMD` provides default arguments.  

17. **How do you push an image to Docker Hub?**  
    - ```bash
      docker push <username>/<image>
      ```  

18. **What is a multi-stage Docker build?**  
    - Optimizing image size by using multiple `FROM` statements.  

19. **How do you inspect a Docker container?**  
    - ```bash
      docker inspect <container_id>
      ```  

20. **What is `.dockerignore`?**  
    - Excludes files from the Docker build context.  

### **Advanced Questions**  
21. **What is Docker networking?**  
    - Allows communication between containers via bridge, host, or overlay networks.  

22. **How do you secure Docker containers?**  
    - Use **read-only containers**, **non-root users**, and **seccomp profiles**.  

23. **What is Docker overlay network?**  
    - Enables multi-host communication in Docker Swarm.  

24. **How do you optimize Docker images?**  
    - Use **alpine-based images**, **multi-stage builds**, and **minimize layers**.  

25. **What is Docker in Kubernetes?**  
    - Kubernetes can orchestrate Docker containers.  

26. **What is `docker save` and `docker load`?**  
    - `save` exports an image to a tarball, `load` imports it.  

27. **How do you debug a Docker container?**  
    - Use `docker logs` or exec into the container.  

28. **What is Docker Content Trust?**  
    - Ensures image authenticity using digital signatures.  

29. **How do you update a running Docker container?**  
    - Rebuild the image and redeploy.  

30. **What is Docker BuildKit?**  
    - Improved build performance with parallelization and caching.  

---