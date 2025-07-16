
## **1. RxJS (Reactive Extensions for JavaScript)**  
### **Q1: What is RxJS, and why is it used in Angular?**  
**A:** RxJS is a library for reactive programming using Observables. It helps manage asynchronous operations (HTTP calls, events, etc.) in a declarative way. Angular uses RxJS for:  
- HTTP requests (`HttpClient` returns Observables).  
- State management (e.g., `NgRx`, `NGXS`).  
- Event handling (e.g., `fromEvent`, `Subject`).  

### **Q2: What is an Observable, Observer, and Subscription?**  
**A:**  
- **Observable:** A stream of data that can emit multiple values over time.  
- **Observer:** An object with `next()`, `error()`, and `complete()` methods to react to Observable emissions.  
- **Subscription:** Represents the execution of an Observable (can be unsubscribed to avoid memory leaks).  

### **Q3: What’s the difference between `Subject`, `BehaviorSubject`, and `ReplaySubject`?**  
**A:**  
- **Subject:** No initial value, emits only new values to subscribers.  
- **BehaviorSubject:** Requires an initial value and emits the latest value to new subscribers.  
- **ReplaySubject:** Replays a specified number of previous values to new subscribers.  

### **Q4: How do you handle errors in Observables?**  
**A:** Using `catchError` (or `catch` in RxJS 6):  
```ts
this.http.get('/api/data').pipe(
  catchError((err) => {
    console.error('Error:', err);
    return of([]); // Fallback value
  })
);
```

---

## **2. Angular Material & UI Libraries (Bootstrap 5, NG Bootstrap, jQuery)**  
### **Q5: What is Angular Material, and how do you use it?**  
**A:** Angular Material is a UI component library following Material Design.  
- Install: `ng add @angular/material`  
- Use components like:  
  ```html
  <mat-button>Click Me</mat-button>
  <mat-table [dataSource]="data"></mat-table>
  ```

### **Q6: What’s the difference between Bootstrap 5 and NG Bootstrap?**  
**A:**  
- **Bootstrap 5:** Vanilla CSS/JS framework (no Angular-specific code).  
- **NG Bootstrap:** Angular-native components that replicate Bootstrap behavior (no jQuery dependency).  

### **Q7: When would you use jQuery with Angular?**  
**A:** Avoid jQuery in Angular (Angular uses direct DOM manipulation via `Renderer2`). If needed (legacy code), wrap jQuery in a service.  

---

## **3. Charting Libraries (Chart.js, Highcharts)**  
### **Q8: How do you integrate Chart.js in Angular?**  
**A:**  
1. Install: `npm install chart.js`  
2. Use in a component:  
   ```ts
   import Chart from 'chart.js/auto';
   const ctx = document.getElementById('myChart') as HTMLCanvasElement;
   new Chart(ctx, { type: 'bar', data: { ... } });
   ```

### **Q9: What’s the difference between Chart.js and Highcharts?**  
**A:**  
| **Chart.js** | **Highcharts** |  
|-------------|--------------|  
| Free & Open-source | Free for non-commercial use |  
| Simpler API | More feature-rich (maps, stock charts) |  
| No dependencies | Requires `highcharts-angular` wrapper |  

---

## **4. WebSockets**  
### **Q10: How do you implement WebSockets in Angular?**  
**A:** Using `WebSocket` API or libraries like `socket.io`:  
```ts
const socket = new WebSocket('ws://example.com');
socket.onmessage = (event) => console.log(event.data);
```

### **Q11: How do you handle real-time updates in Angular?**  
**A:**  
- Use WebSockets for bidirectional communication.  
- Combine with RxJS (`Subject` or `WebSocketSubject`).  

---

## **5. State Management (Redux, NGXS, NgRx)**  
### **Q12: What is Redux, and how does it work?**  
**A:** Redux is a predictable state container with:  
- **Store:** Single source of truth.  
- **Actions:** Plain objects describing changes.  
- **Reducers:** Pure functions that update state.  

### **Q13: Compare NgRx vs NGXS vs Redux**  
**A:**  
| **NgRx** | **NGXS** | **Redux** |  
|---------|--------|---------|  
| RxJS-based | Less boilerplate | Generic JS (not Angular-specific) |  
| More boilerplate | Decorator-driven | Requires middleware (e.g., Redux-Thunk) |  

### **Q14: How do you dispatch an action in NgRx?**  
**A:**  
```ts
this.store.dispatch(new LoadUsers()); // NgRx < 8
this.store.dispatch(loadUsers()); // NgRx 8+ (Action Creators)
```

---

## **Summary Table of Key Differences**  
| Topic | Key Points |  
|-------|-----------|  
| **RxJS** | Observables, Subjects, `pipe()`, `map()`, `switchMap()` |  
| **Angular Material** | Pre-built Material Design components |  
| **Bootstrap 5** | Utility-first CSS framework |  
| **NG Bootstrap** | Angular-native Bootstrap components |  
| **Chart.js** | Simple, free, Canvas-based charts |  
| **Highcharts** | Advanced charts (commercial license) |  
| **WebSockets** | Real-time bidirectional communication |  
| **NgRx** | RxJS-powered state management |  
| **NGXS** | Less boilerplate, decorator-based |  

---