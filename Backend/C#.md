
## **C# Basics**

### **1. What is C#?**
**A:**  
C# is a **modern, object-oriented** programming language developed by **Microsoft** (part of the **.NET ecosystem**).  
- Used for **Windows apps, web (ASP.NET), games (Unity), and backend services**.

### **2. What is the difference between `==` and `.Equals()` in C#?**
**A:**  
| **`==`** | **`.Equals()`** |  
|----------|----------------|  
| **Compares references** (for objects) | **Compares values** (overridable) |  
| Works for primitives (`int`, `string`) | Can be customized (override `Equals()`) |  
- **Example:**  
  ```csharp
  string a = "hello";
  string b = "hello";
  Console.WriteLine(a == b); // True (value comparison for strings)
  Console.WriteLine(a.Equals(b)); // True
  ```

### **3. What are the access modifiers in C#?**
**A:**  
| Modifier | Description |  
|----------|-------------|  
| `public` | Accessible everywhere |  
| `private` | Only within the same class |  
| `protected` | Same class + derived classes |  
| `internal` | Same assembly (project) |  
| `protected internal` | Same assembly OR derived classes |  

### **4. What is the difference between `List` and `Array` in C#?**
**A:**  
| **`List<T>`** | **`Array`** |  
|--------------|------------|  
| Dynamic size (can grow/shrink) | Fixed size |  
| Supports `Add()`, `Remove()` | No built-in resizing |  
| Part of `System.Collections.Generic` | Native C# feature |  
- **Example:**  
  ```csharp
  List<int> numbers = new List<int>() { 1, 2, 3 };
  numbers.Add(4); // Works
  int[] arr = new int[3] { 1, 2, 3 };
  // arr[3] = 4; // Error (fixed size)
  ```

### **5. What is `async`/`await` in C#?**
**A:**  
- **`async`:** Marks a method as asynchronous.  
- **`await`:** Pauses execution until a task completes.  
- **Example:**  
  ```csharp
  async Task<string> FetchDataAsync() {
    HttpClient client = new HttpClient();
    string result = await client.GetStringAsync("https://api.example.com");
    return result;
  }
  ```