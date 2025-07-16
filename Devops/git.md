
---

# **Git Interview Questions**

## **Basic Git Interview Questions for Freshers**

### **1. What is Git?**
Git is a distributed version control system (DVCS) used to track changes in source code during software development. It allows multiple developers to work on a project simultaneously without interfering with each other's changes.

### **2. What is a repository in Git?**
A Git repository (or repo) is a file structure that stores all project files and tracks changes over time. It can be:
- **Local repository** (on your machine).
- **Remote repository** (hosted on platforms like GitHub, GitLab, or Bitbucket).

### **3. What is the difference between Git and GitHub?**
| **Git** | **GitHub** |
|---------|------------|
| Version control system | Platform for hosting Git repositories |
| Runs locally | Cloud-based service |
| Works offline | Requires internet connection |

### **4. What is "origin" in Git?**
"Origin" is the default name given to the remote repository from which the local repository was cloned. It is used for fetching, pulling, and pushing changes.

### **5. What is the purpose of the `.gitignore` file?**
The `.gitignore` file specifies which files/folders Git should ignore (e.g., logs, temporary files, compiled code).

### **6. What is a version control system (VCS)?**
A VCS records changes to files over time, allowing developers to:
- Track history.
- Revert to previous versions.
- Collaborate efficiently.

### **7. What is the `git push` command?**
`git push` uploads local repository changes to a remote repository.

### **8. What is the `git pull` command?**
`git pull` fetches changes from a remote repository and merges them into the local branch.

### **9. What does `git clone` do?**
`git clone` creates a local copy of a remote repository, including all files, branches, and commit history.

### **10. What are the advantages of using Git?**
- Enables teamwork.
- Offline work capability.
- Free and widely supported.
- Efficient branching/merging.
- Single `.git` directory per repository.

### **11. What is the difference between `git init` and `git clone`?**
- `git init`: Creates a new, empty Git repository.
- `git clone`: Copies an existing remote repository.

### **12. What is `git add`?**
`git add` stages changes for the next commit.

### **13. What is `git status`?**
`git status` shows:
- Modified files.
- Staged changes.
- Untracked files.

### **14. What is a commit in Git?**
A commit is a snapshot of changes with a unique message describing the modifications.

### **15. What is the purpose of `git clean`?**
`git clean` removes untracked files from the working directory.

### **16. What is a 'conflict' in Git?**
A conflict occurs when two branches modify the same line or when one branch deletes a file that another modifies.

### **17. What is the 'Index' in Git?**
The **Index** (or **Staging Area**) is where changes are temporarily stored before committing.

### **18. How do you change the last commit in Git?**
Use:  
```bash
git commit --amend
```

### **19. What is `git checkout`?**
`git checkout` switches branches or restores files.  
*(Modern Git prefers `git switch` for branches and `git restore` for files.)*

### **20. How do you switch branches in Git?**
```bash
git checkout <branch_name>  
# OR (newer Git versions)  
git switch <branch_name>
```

### **21. Name some popular Git hosting services.**
- GitHub  
- GitLab  
- Bitbucket  
- SourceForge  
- Azure DevOps  

### **22. What are the types of Git repositories?**
- **Bare Repository**: No working directory (used for sharing).  
- **Non-Bare Repository**: Includes a working directory.  

### **23. How does Git handle file deletion?**
```bash
git rm <file>          # Deletes file from both disk and Git  
git rm --cached <file> # Removes file from Git but keeps it on disk
```

### **24. How can you create a Git alias?**
```bash
git config --global alias.<shortcut> "<command>"
```
Example:  
```bash
git config --global alias.st "status"
```

### **25. How do you rename a branch?**
```bash
git branch -m <new_name>          # Rename current branch  
git branch -m <old_name> <new_name> # Rename another branch
```

---

## **Intermediate Git Interview Questions**

### **26. Difference between `git fetch` and `git pull`?**
| **`git fetch`** | **`git pull`** |
|----------------|---------------|
| Downloads changes but doesn’t merge | Fetches + merges changes |
| Safe for review | Automatically updates local branch |

### **27. What is Git rebase?**
Rebase reapplies commits from one branch onto another, creating a linear history.  
**Use Case**: Clean up commit history before merging.

### **28. How to create a Git repository?**
```bash
mkdir project  
cd project  
git init
```

### **29. Difference between `git remote` and `git clone`?**
| **`git remote`** | **`git clone`** |
|-----------------|----------------|
| Manages remote connections | Copies a remote repository locally |

### **30. Benefits of pull requests?**
- Code reviews.  
- Collaboration.  
- Stable main branch.  

### **31. What is a Git bundle?**
A single file containing repository data (commits, branches) for offline sharing.

### **32. Advantages of Git over SVN?**
- Distributed (no central server).  
- Faster (local operations).  
- Better branching/merging.  

### **33. What is `git stash`?**
Temporarily saves uncommitted changes.  
```bash
git stash        # Save changes  
git stash pop   # Restore changes
```

### **34. How to revert a public commit?**
```bash
git revert <commit_hash>
```

### **35. Difference between `revert` and `reset`?**
| **`git revert`** | **`git reset`** |
|----------------|---------------|
| Undoes changes via new commit | Erases commit history |

### **36. Difference between `git reflog` and `git log`?**
| **`git reflog`** | **`git log`** |
|----------------|-------------|
| Tracks all HEAD movements | Shows commit history |

### **37. What is `HEAD` in Git?**
A pointer to the latest commit on the current branch.

### **38. Purpose of `git tag -a`?**
Creates an annotated tag (with metadata).  
```bash
git tag -a v1.0 -m "Release version 1.0"
```

### **39. Difference between `HEAD`, `working tree`, and `index`?**
| **`HEAD`** | **`Working Tree`** | **`Index`** |
|-----------|-------------------|------------|
| Current commit | Actual files | Staged changes |

### **40. How to resolve a Git conflict?**
1. Edit conflicted files.  
2. `git add` resolved files.  
3. `git commit`.  

---

## **Advanced Git Interview Questions**

### **41. Git object model components:**
- **Blobs**: File data.  
- **Trees**: Directory structure.  
- **Commits**: Snapshots.  
- **Tags**: Commit references.  

### **42. When to use `git rebase`?**
- For linear history.  
- Before merging feature branches.  

### **43. What is a Git hook?**
Scripts that run automatically (e.g., pre-commit checks).  

### **44. Difference between `reset`, `revert`, and `checkout`?**
| **Command** | **Effect** |
|------------|-----------|
| `git reset` | Moves HEAD (can alter history) |
| `git revert` | Safely undoes changes |
| `git checkout` | Switches branches/files |

### **45. How to handle large files?**
Use **Git LFS**:  
```bash
git lfs install  
git lfs track "*.psd"
```

### **46. What is a bare repository?**
A repo without a working directory (used for sharing).  

### **47. What is branching?**
Creating separate lines of development.  

### **48. What is a Git submodule?**
A repository inside another repository (for external dependencies).  

### **49. How to undo an unpushed commit?**
```bash
git reset --soft HEAD~1   # Keep changes  
git reset --hard HEAD~1   # Discard changes
```

### **50. How to squash commits?**
```bash
git rebase -i HEAD~3  # Combine last 3 commits
```

---