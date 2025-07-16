# **Electron.js & C# Interview Questions and Answers**

## **Electron.js Basics**

### **1. What is Electron.js?**
**A:**  
Electron.js is an **open-source framework** for building **cross-platform desktop applications** using **HTML, CSS, and JavaScript**. It combines **Chromium (for rendering)** and **Node.js (for backend access)**.  
- Used in apps like **VS Code, Slack, and Discord**.

### **2. How does Electron work?**
**A:**  
- **Main Process:** Runs Node.js and manages app lifecycle (windows, menus, IPC).  
- **Renderer Process:** Each window runs a Chromium instance (frontend).  
- **Inter-Process Communication (IPC):** Allows communication between main and renderer processes.

### **3. What are the advantages of Electron?**
**A:**  
✔ **Cross-platform** (Windows, macOS, Linux).  
✔ **Single codebase** (web technologies).  
✔ **Access to Node.js APIs** (file system, OS-level features).  
❌ **Large app size** (bundles Chromium).  
❌ **Performance overhead** (compared to native apps).

### **4. How do you create a basic Electron app?**
**A:**  
1. Initialize a Node.js project:
   ```bash
   npm init -y
   npm install electron
   ```
2. Create `main.js` (Main Process):
   ```js
   const { app, BrowserWindow } = require('electron');
   let win;
   app.on('ready', () => {
     win = new BrowserWindow({ width: 800, height: 600 });
     win.loadFile('index.html');
   });
   ```
3. Create `index.html` (Renderer Process):
   ```html
   <h1>Hello Electron!</h1>
   ```
4. Run:
   ```bash
   electron .
   ```

### **5. What is IPC in Electron?**
**A:**  
**Inter-Process Communication (IPC)** allows communication between the **Main** and **Renderer** processes.  
- **Main → Renderer:** `webContents.send()`  
- **Renderer → Main:** `ipcRenderer.send()`  
- **Example:**  
  ```js
  // Main Process
  const { ipcMain } = require('electron');
  ipcMain.on('message', (event, arg) => {
    console.log(arg); // "Hello from Renderer!"
  });

  // Renderer Process
  const { ipcRenderer } = require('electron');
  ipcRenderer.send('message', 'Hello from Renderer!');
  ```
