
## **React.js Interview Questions**  

### **1. Core Concepts**  
#### **Q1: What is React.js?**  
**A:** React is a **JavaScript library** for building user interfaces (UIs) using a **component-based architecture**. It uses a **virtual DOM** for efficient updates and is maintained by Facebook.  

#### **Q2: What are the key features of React?**  
**A:**  
- **Component-Based:** Reusable UI components.  
- **Virtual DOM:** Efficient rendering.  
- **Unidirectional Data Flow:** Props (parent → child).  
- **JSX:** JavaScript + HTML-like syntax.  
- **Hooks (since v16.8):** `useState`, `useEffect`, etc.  

#### **Q3: What is JSX?**  
**A:** JSX is a syntax extension for JavaScript that allows writing HTML-like code in React. It gets transpiled into `React.createElement()` calls.  
```jsx
const element = <h1>Hello, World!</h1>;
```

#### **Q4: What is the difference between Real DOM and Virtual DOM?**  
**A:**  
| **Real DOM** | **Virtual DOM** |  
|--------------|----------------|  
| Slow updates (direct manipulation) | Lightweight in-memory copy |  
| Re-renders entire tree on changes | Only updates changed parts (diffing algorithm) |  

---

### **2. Components & Props**  
#### **Q5: What is the difference between Functional and Class Components?**  
**A:**  
| **Functional Components** | **Class Components** |  
|--------------------------|---------------------|  
| Use hooks (`useState`, `useEffect`) | Use `this.state` and lifecycle methods |  
| Simpler syntax | More boilerplate |  
| Preferred in modern React | Legacy (still works) |  

#### **Q6: What are Props?**  
**A:** Props (short for "properties") are **read-only** data passed from parent to child components.  
```jsx
<ChildComponent name="John" age={25} />
```

#### **Q7: What is State in React?**  
**A:** State is **mutable data** managed within a component (using `useState` in functional components or `this.state` in class components).  

---

### **3. Hooks**  
#### **Q8: What are React Hooks?**  
**A:** Hooks let functional components use state and lifecycle features (introduced in React 16.8).  
- `useState`: Manage local state.  
- `useEffect`: Side effects (API calls, subscriptions).  
- `useContext`: Access context without nesting.  

#### **Q9: Explain `useEffect` with dependencies.**  
**A:**  
```jsx
useEffect(() => {
  // Runs on mount and when `dependency` changes
}, [dependency]);
```
- **No dependency array (`[]`):** Runs once (like `componentDidMount`).  
- **With dependencies:** Runs when dependencies change.  

#### **Q10: What is the difference between `useMemo` and `useCallback`?**  
**A:**  
- **`useMemo`:** Memoizes a **value** (computed result).  
- **`useCallback`:** Memoizes a **function** (to prevent re-creation).  

---

### **4. Advanced React**  
#### **Q11: What is React Context?**  
**A:** A way to share data globally without prop drilling.  
```jsx
const ThemeContext = React.createContext('light');
<ThemeContext.Provider value="dark">...</ThemeContext.Provider>
```

#### **Q12: What are keys in React?**  
**A:** Keys help React identify which items in a list have changed (e.g., `map()` loops).  
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

#### **Q13: What is React Router?**  
**A:** A library for handling navigation in single-page applications (SPAs).  
```jsx
<Route path="/about" component={About} />
```

---
