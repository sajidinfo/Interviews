
---

# **1. SVN (Subversion) Interview Q&A**  

### **Basic Questions**  
1. **What is SVN?**  
   - SVN (Subversion) is a centralized version control system that tracks changes to files and directories over time.  

2. **What is a repository in SVN?**  
   - A repository is a central storage location where SVN keeps all versioned files and their history.  

3. **What is the difference between SVN and Git?**  
   - SVN is centralized, while Git is distributed. Git allows offline commits, whereas SVN requires a connection to the central repository.  

4. **What is a working copy in SVN?**  
   - A working copy is a local copy of files from the repository where developers make changes before committing them.  

5. **How do you create a new SVN repository?**  
   - Use the command:  
     ```bash
     svnadmin create /path/to/repository
     ```  

6. **How do you check out a repository in SVN?**  
   - Use:  
     ```bash
     svn checkout <repository_url> <local_directory>
     ```  

7. **What is the purpose of `svn update`?**  
   - It synchronizes the working copy with the latest changes from the repository.  

8. **What is `svn commit` used for?**  
   - It sends changes from the working copy to the repository.  

9. **How do you revert a file to a previous version in SVN?**  
   - Use:  
     ```bash
     svn revert <filename>
     ```  

10. **What is branching in SVN?**  
    - Branching creates a separate line of development, allowing parallel work without affecting the main codebase.  

### **Intermediate Questions**  
11. **How do you create a branch in SVN?**  
    - Use:  
      ```bash
      svn copy <source_url> <branch_url> -m "Creating a branch"
      ```  

12. **What is merging in SVN?**  
    - Merging integrates changes from one branch into another.  

13. **How do you merge changes from a branch to trunk?**  
    - Use:  
      ```bash
      svn merge <branch_url> <trunk_directory>
      ```  

14. **What is a conflict in SVN?**  
    - A conflict occurs when two users modify the same file, and SVN cannot auto-merge the changes.  

15. **How do you resolve conflicts in SVN?**  
    - Use `svn resolve` after manually editing the conflicted file.  

16. **What is `svn switch` used for?**  
    - It changes the working copy to point to a different branch.  

17. **How do you delete a file in SVN?**  
    - Use:  
      ```bash
      svn delete <filename>
      ```  

18. **What is `svn log` used for?**  
    - It displays the commit history of a file or repository.  

19. **How do you ignore files in SVN?**  
    - Use `svn:ignore` property:  
      ```bash
      svn propset svn:ignore "*.log" .
      ```  

20. **What is `svn blame` (or `svn annotate`)?**  
    - It shows who last modified each line of a file.  

### **Advanced Questions**  
21. **How do you lock a file in SVN?**  
    - Use:  
      ```bash
      svn lock <filename>
      ```  

22. **What is a pre-commit hook in SVN?**  
    - A script that runs before a commit to enforce policies (e.g., code review).  

23. **How do you migrate from SVN to Git?**  
    - Use `git svn clone` or tools like `svn2git`.  

24. **What is `svnadmin dump` and `svnadmin load`?**  
    - `dump` creates a backup of a repository, and `load` restores it.  

25. **How do you set up access control in SVN?**  
    - Configure `authz` and `passwd` files in the repository’s `conf` directory.  

26. **What is `svn externals`?**  
    - It allows referencing external repositories within an SVN project.  

27. **How do you rename a file in SVN?**  
    - Use:  
      ```bash
      svn move oldname newname
      ```  

28. **What is the difference between `svn add` and `svn import`?**  
    - `svn add` stages files for commit, while `svn import` adds files directly to the repository.  

29. **How do you revert a commit in SVN?**  
    - Use:  
      ```bash
      svn merge -r HEAD:PREV .
      ```  

30. **What is atomic commit in SVN?**  
    - Ensures that either all changes in a commit are applied or none, preventing partial updates.  

---