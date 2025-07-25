
# **Angular Interview Questions and Answers for Beginners**  
Learn the most frequent Angular interview questions and answers that freshers are expected to know.  

---

---

## **6. What are Decorators in Angular?**  
**Decorators** are special markers (functions) that add **metadata** to classes, methods, properties, and parameters.  

### **Common Angular Decorators:**  
- `@Component()` – Marks a class as an Angular component.  
- `@Injectable()` – Marks a class as a service (Dependency Injection).  
- `@NgModule()` – Defines an Angular module.  

---

## **7. What are the popular advantages of Angular?**  
- **MVC Architecture** – Provides a structured approach.  
- **Modules** – Helps organize code efficiently.  
- **Dependency Injection** – Simplifies component dependencies.  
- **Two-Way Data Binding** – Syncs UI and data automatically.  

---


## **9. What are Annotations in Angular?**  
Annotations (similar to decorators) provide **metadata** to classes.  

### **Example:**  
```typescript
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
```
- `@Component` marks `HeaderComponent` as an Angular component.  

---

## **10. What are Directives in Angular?**  
**Directives** are markers in HTML that modify **appearance, behavior, or layout**.  

### **Types of Directives:**  
1. **Structural Directives** – Change DOM layout (e.g., `*ngIf`, `*ngFor`).  
2. **Attribute Directives** – Modify element behavior (e.g., `ngStyle`, `ngClass`).  
3. **Component Directives** – Define custom elements.  

### **Example:**  
```typescript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```
This directive highlights an element in yellow.  

---

## **11. What is an AOT Compiler?**  
The **Ahead-Of-Time (AOT) compiler** converts Angular HTML & TypeScript into **JavaScript during the build phase** (before the browser runs it).  

### **Advantages of AOT:**  
- **Faster rendering** (no client-side compilation).  
- **Better security** (reduces injection risks).  
- **Smaller bundle size** (removes unused code).  

---
Here’s the well-structured and organized version of your Angular interview questions and answers:

---

# **Angular Interview Questions and Answers (Continued)**  

---

## **12. What are Components in Angular?**  
**Components** are the **basic building blocks** of an Angular application. Each component controls a part of the UI and consists of:  

1. **Template (HTML)** – Defines the structure.  
2. **Class (TypeScript)** – Handles logic and data.  
3. **Styles (CSS/SCSS)** – Manages appearance.  

### **Component Hierarchy**  
- Angular apps are structured as a **tree of components** (parent-child relationships).  
- Example:  
  ```typescript
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent { }
  ```

---

## **13. What are Pipes in Angular?**  
**Pipes** transform data in templates **without altering the original data**.  

### **Common Built-in Pipes**  
| Pipe          | Usage                          | Example Output |
|--------------|-------------------------------|---------------|
| `uppercase`  | Converts text to uppercase.    | `{{ 'hello' \| uppercase }}` → **HELLO** |
| `date`       | Formats dates.                 | `{{ today \| date:'longDate' }}` → **July 16, 2025** |
| `currency`   | Formats numbers as currency.   | `{{ 100 \| currency:'USD' }}` → **$100.00** |
| `json`       | Displays objects as JSON.      | `{{ user \| json }}` → `{ "name": "John" }` |
| `slice`      | Extracts part of a string/array. | `{{ 'Angular' \| slice:0:3 }}` → **Ang** |

---

## **14. What is the PipeTransform Interface?**  
The **`PipeTransform`** interface allows creating **custom pipes**. It requires implementing a `transform()` method.  

### **Example: Custom Greet Pipe**  
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'greet' })
export class GreetPipe implements PipeTransform {
  transform(name: string): string {
    return `Hello, ${name}`;
  }
}
```
**Usage in Template:**  
```html
<p>{{ 'Alice' | greet }}</p>  <!-- Output: "Hello, Alice" -->
```

---

## **15. What is an NgModule?**  
**`NgModule`** is a **container** for organizing related components, directives, pipes, and services.  

### **Key Properties in `@NgModule`:**  
- `declarations`: Components, directives, pipes.  
- `imports`: Other modules (e.g., `BrowserModule`, `FormsModule`).  
- `exports`: Makes features available to other modules.  
- `providers`: Services for dependency injection.  

### **Example:**  
```typescript
@NgModule({
  declarations: [AppComponent, GreetPipe],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## **16. What is Change Detection?**  
Angular’s **change detection** mechanism **synchronizes the UI** with the application state.  

### **How It Works:**  
1. Tracks changes in **component properties**.  
2. Updates the **DOM** when data changes.  
3. Uses a **tree of change detectors** for efficiency.  

**Optimization Tip:** Use `OnPush` strategy to limit checks.  

---

## **17. What is a Parameterized Pipe?**  
A **parameterized pipe** accepts **arguments** to customize data transformation.  

### **Example:**  
```html
<!-- Date with format parameter -->
<p>{{ today | date:'shortTime' }}</p>  <!-- Output: "2:30 PM" -->

<!-- Currency with currency code -->
<p>{{ 100 | currency:'EUR' }}</p>      <!-- Output: "€100.00" -->
```

---

## **18. What are Class Decorators?**  
**Class decorators** modify or enhance a class.  

### **Common Angular Class Decorators:**  
- `@Component()` – Marks a class as a component.  
- `@Injectable()` – Marks a class as a service.  
- `@Directive()` – Defines a directive.  

### **Example:**  
```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService { }
```

---

## **19. What are Method Decorators?**  
**Method decorators** modify class methods.  

### **Example: `@HostListener`**  
```typescript
@HostListener('click', ['$event'])
onClick(event: Event) {
  console.log('Button clicked!', event);
}
```
**Use Case:**  
- Logging method calls.  
- Adding event listeners.  

---

## **20. What are Property Decorators?**  
**Property decorators** modify class properties.  

### **Common Examples:**  
- `@Input()` – Accepts data from parent components.  
- `@Output()` – Emits events to parent components.  
- `@ViewChild()` – Accesses child components/DOM elements.  

### **Example:**  
```typescript
@Input() title: string;
@Output() clicked = new EventEmitter<void>();
```

---

# **Angular Interview Questions for Experienced (5+ Years)**  
For advanced topics like:  
- **Lazy Loading**  
- **RxJS & Observables**  
- **State Management (NgRx)**  
- **Performance Optimization**  
- **Server-Side Rendering (SSR)**  

*(Let me know if you'd like these covered in detail!)*  

---

### **Final Notes**  
- **Decorators** (`@Component`, `@Directive`, etc.) are **compile-time features**.  
- **Pipes** are **pure** (stateless) by default but can be **impure** for dynamic changes.  
- **Change Detection** can be optimized via `ChangeDetectionStrategy.OnPush`.  


Here's the well-structured and organized version of the remaining Angular interview questions:

---

# **Advanced Angular Interview Questions and Answers**  

---

## **21. What is RxJS in Angular?**  
**RxJS (Reactive Extensions for JavaScript)** is a library for **reactive programming** in Angular, handling **asynchronous data streams** using **Observables**.  

### **Key Features:**  
- **Observables**: Represent data streams that can be subscribed to.  
- **Operators**: Transform, filter, or combine streams (e.g., `map`, `filter`, `merge`).  
- **Subjects**: Multicast values to multiple subscribers.  

**Example:**  
```typescript
import { Observable } from 'rxjs';

const data$ = new Observable(observer => {
  observer.next('Data stream');
});
data$.subscribe(value => console.log(value)); // Output: "Data stream"
```

---

## **22. What are Router Links?**  
**Router links** enable navigation between views/components using the `routerLink` directive.  

### **Usage:**  
```html
<a routerLink="/home">Home</a>  
<button [routerLink]="['/user', userId]">Profile</button>
```
**Key Points:**  
- Supports **absolute paths** (`/home`) and **dynamic segments** (`/user/:id`).  
- Can be used with `routerLinkActive` to highlight active routes.  

---

## **23. What is the Router State?**  
The **router state** represents the current route’s details:  
- **URL**  
- **Route parameters** (e.g., `/:id`)  
- **Query parameters** (e.g., `?page=1`)  

### **Accessing Router State:**  
```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {
  console.log(this.router.routerState.snapshot.url);
}
```

---

## **24. What is Angular Material?**  
**Angular Material** is a UI component library following **Google’s Material Design**.  

### **Popular Components:**  
- `MatButton`, `MatCard`, `MatDialog`  
- `MatTable`, `MatPaginator`  
- `MatSnackBar` (for notifications)  

**Setup:**  
```bash
ng add @angular/material
```

---

## **25. What is Transpiling in Angular?**  
**Transpiling** converts **TypeScript** to **JavaScript** (since browsers only understand JS).  

### **Tools Used:**  
- **TypeScript Compiler (tsc)**  
- **Angular CLI** (uses `tsc` internally).  

**Example:**  
```typescript
// TypeScript
class App { }  
↓ (Transpiled to)  
// JavaScript
var App = /** @class */ (function () { });
```

---

## **26. What are HTTP Interceptors?**  
**Interceptors** globally modify **HTTP requests/responses**.  

### **Use Cases:**  
- Add **authentication headers**.  
- Log requests.  
- Handle errors globally.  

**Example:**  
```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token')
    });
    return next.handle(authReq);
  }
}
```

---

## **27. What is a Bootstrapping Module?**  
The **bootstrapping module** (`AppModule`) is the **entry point** of an Angular app.  

### **Responsibilities:**  
- Loads the **root component** (`AppComponent`).  
- Imports required modules (e.g., `BrowserModule`).  
- Defined in `main.ts`:  
  ```typescript
  platformBrowserDynamic().bootstrapModule(AppModule);
  ```

---

## **28. What is MVVM Architecture?**  
**MVVM (Model-View-ViewModel)** separates:  
- **Model**: Data logic.  
- **View**: UI (templates).  
- **ViewModel**: Mediates between Model and View (Angular **components** act as ViewModel).  

**VS MVC**:  
- **MVC** uses a **Controller**.  
- **MVVM** uses **data binding** (automatic UI updates).  

---

## **29. What is Dependency Injection (DI)?**  
**DI** decouples components by **injecting dependencies** (services) instead of hardcoding them.  

### **How Angular Uses DI:**  
1. **Register** a service (`@Injectable`).  
2. **Inject** it into components:  
   ```typescript
   constructor(private service: DataService) { }
   ```

---

## **30. What Type of DOM Does Angular Use?**  
Angular uses **Real DOM with Change Detection**:  
- **View DOM**: Angular’s optimized version of Real DOM.  
- **Change Detection**: Updates **only changed parts** of the UI.  
- **Shadow DOM**: Optional (used for encapsulation).  

---

## **31. AOT vs JIT Compilation**  

| Feature          | AOT (Ahead-of-Time)                          | JIT (Just-in-Time)                     |
|-----------------|---------------------------------------------|----------------------------------------|
| **When**        | During build (before browser loads).         | At runtime (in the browser).           |
| **Performance** | Faster (pre-compiled).                      | Slower (compiles in browser).          |
| **Usage**       | Production (`ng build --prod`).             | Development (`ng serve`).              |

---

## **32. @Component Decorator**  
The `@Component` decorator defines an Angular component:  

```typescript
@Component({
  selector: 'app-example',          // HTML tag name
  templateUrl: './example.html',    // Template path
  styleUrls: ['./example.css']      // Styles
})
export class ExampleComponent { }
```
**Key Metadata:**  
- `selector`: Custom HTML tag.  
- `template/templateUrl`: UI structure.  
- `styles/styleUrls`: Component-specific CSS.  

---

## **33. Services in Angular**  
**Services** are reusable classes for:  
- Data fetching (HTTP calls).  
- State management.  
- Shared logic across components.  

### **Example:**  
```typescript
@Injectable({ providedIn: 'root' })
export class DataService {
  fetchData() { return this.http.get('/api/data'); }
}
```

---

## **34. Promises vs Observables**  

| Feature         | Promises                          | Observables (RxJS)                  |
|----------------|----------------------------------|-------------------------------------|
| **Emits**      | Single value.                    | Multiple values over time (stream). |
| **Cancellation** | No native support.               | Yes (`unsubscribe()`).              |
| **Operators**  | Limited (`.then`, `.catch`).     | Powerful (`map`, `filter`, `merge`).|

**Promise Example:**  
```typescript
fetchData().then(data => console.log(data));
```

**Observable Example:**  
```typescript
data$.subscribe(data => console.log(data));
```

---

## **35. ngOnInit Lifecycle Hook**  
`ngOnInit` runs after the component is **initialized** (but before the view renders).  

### **Common Uses:**  
- Fetch initial data.  
- Initialize properties.  

```typescript
ngOnInit(): void {
  this.loadUserData();
}
```

---

# **Summary Table: Key Angular Concepts**  

| Concept          | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **RxJS**        | Reactive programming with Observables.                                      |
| **Router**      | Navigation using `routerLink` and `RouterModule`.                           |
| **DI**          | Injecting services instead of hardcoding dependencies.                      |
| **AOT**         | Faster builds by compiling templates early.                                 |
| **Change Detection** | Syncs UI with data changes efficiently.                                |

---

### **Final Notes**  
- **Master Angular CLI** for efficient development (`ng generate`, `ng build`).  
- **Learn RxJS** for advanced state management.  
- **Optimize performance** with `OnPush` change detection.  

Here's the well-structured and organized version of the remaining Angular interview questions:

---

# **Advanced Angular Interview Questions (Continued)**

---

## **36. How to Use *ngFor in a Tag?**
The `*ngFor` directive iterates over arrays/objects to create dynamic HTML elements.

### **Syntax & Example:**
```html
<ul>
  <li *ngFor="let item of items"> 
    {{ item.name }} 
  </li>
</ul>
```

### **Key Points:**
- `let item`: Creates a local template variable.
- `of items`: Iterates over the `items` array.
- `*`: Converts the directive into a parent template.

---

## **37. Template-Driven vs Reactive Forms**

| Feature                | Template-Driven Forms                          | Reactive Forms                          |
|-----------------------|-----------------------------------------------|----------------------------------------|
| **Setup**             | Declarative (HTML-centric).                   | Programmatic (TypeScript-centric).      |
| **Validation**        | Uses HTML5 attributes (`required`, `pattern`).| Uses validator functions.               |
| **Data Flow**         | Two-way binding (`[(ngModel)]`).              | Immutable data flow (`FormControl`).    |
| **Use Case**          | Simple forms.                                 | Complex, dynamic forms.                |

### **Template-Driven Example:**
```html
<form #form="ngForm" (ngSubmit)="submit(form)">
  <input name="email" ngModel required email>
  <button [disabled]="form.invalid">Submit</button>
</form>
```

### **Reactive Form Example:**
```typescript
form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
});
```
```html
<form [formGroup]="form" (ngSubmit)="submit()">
  <input formControlName="email">
  <button [disabled]="form.invalid">Submit</button>
</form>
```

---

## **38. Eager vs Lazy Loading**

| Feature           | Eager Loading                          | Lazy Loading                          |
|------------------|---------------------------------------|---------------------------------------|
| **When Loaded**  | At app startup.                       | On-demand (when route is accessed).   |
| **Performance**  | Slower initial load.                  | Faster initial load.                  |
| **Usage**        | Small apps.                           | Large apps with feature modules.      |

### **Lazy Loading Setup:**
```typescript
const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }
];
```

---

## **39. DOM in Angular**
Angular uses **Real DOM with Change Detection**:
- **Regular DOM**: Updates the entire tree.
- **Optimization**: Change Detection tracks only modified parts.
- **Shadow DOM**: Optional for encapsulation (e.g., Web Components).

---

## **40. Angular vs JavaScript Expressions**

| Feature               | Angular Expressions                  | JavaScript Expressions                |
|----------------------|--------------------------------------|---------------------------------------|
| **Context**          | Templates only.                      | Anywhere in JS code.                  |
| **Updates**          | Automatic (change detection).        | Manual (no binding).                  |
| **Syntax**           | `{{ expression }}`                   | Standard JS syntax.                   |
| **Complex Logic**    | Limited (no loops/conditionals).     | Full JS capabilities.                 |

**Example:**
```html
<!-- Angular -->
<p>{{ price * quantity }}</p>

<!-- JavaScript -->
<script>
  let total = price * quantity;
</script>
```

---

# **Scenario-Based Angular Questions**

---

## **41. Creating a Dynamic Component**
### **Steps:**
1. **Define Dynamic Component:**
   ```typescript
   @Component({
     selector: 'app-dynamic',
     template: `<h3>{{ title }}</h3>`
   })
   export class DynamicComponent {
     @Input() title: string;
   }
   ```

2. **Host Component:**
   ```typescript
   @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

   loadComponent(title: string) {
     const factory = this.resolver.resolveComponentFactory(DynamicComponent);
     const componentRef = this.container.createComponent(factory);
     componentRef.instance.title = title;
   }
   ```
   ```html
   <ng-template #container></ng-template>
   <button (click)="loadComponent('Hi!')">Load</button>
   ```

3. **Register in `NgModule`:**
   ```typescript
   entryComponents: [DynamicComponent]
   ```

---

## **42. Debugging Angular Apps**
### **Methods:**
1. **Angular DevTools** (Browser Extension):
   - Inspect component hierarchy.
   - Profile change detection.

2. **Browser Tools**:
   - `console.log()` for tracing.
   - **Network Tab** for API calls.
   - **Sources Tab** for breakpoints.

3. **Augury** (Deprecated) → Use Angular DevTools.

---

## **43. Optimizing Slow Apps**
### **Solutions:**
1. **Lazy Loading**:
   ```typescript
   loadChildren: () => import('./module').then(m => m.Module)
   ```

2. **Bundle Analysis**:
   ```bash
   npx source-map-explorer dist/main.js
   ```

3. **Optimize Images**:
   ```html
   <img src="image.jpg" loading="lazy">
   ```

4. **AOT Compilation**:
   ```bash
   ng build --prod
   ```

---

## **44. Version Control Best Practices**
1. **Git Workflow**:
   - Atomic commits (`git commit -m "Add login component"`).
   - Feature branches.

2. **.gitignore**:
   ```plaintext
   /node_modules
   /.angular
   *.log
   ```

3. **Commit Messages**:
   - Use [Conventional Commits](https://www.conventionalcommits.org/).

---

## **45. Custom Attribute Directive**
### **Steps:**
1. **Create Directive**:
   ```typescript
   @Directive({ selector: '[appHighlight]' })
   export class HighlightDirective {
     @Input() appHighlight: string;
     
     constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
     }
   }
   ```

2. **Use in Template**:
   ```html
   <p appHighlight>Highlighted text!</p>
   ```

3. **Register in `NgModule`**:
   ```typescript
   declarations: [HighlightDirective]
   ```

---

# **Summary Cheat Sheet**

| Topic                | Key Points                                                                 |
|----------------------|---------------------------------------------------------------------------|
| **Dynamic Components** | Use `ComponentFactoryResolver` + `ViewContainerRef`.                     |
| **Debugging**        | Angular DevTools + Browser Console.                                       |
| **Performance**      | Lazy Loading + AOT + Bundle Analysis.                                    |
| **Directives**       | Manipulate DOM via `ElementRef`.                                         |
| **Version Control**  | Git + Atomic Commits + `.gitignore`.                                     |

---

### **Final Tips**
- **Master RxJS** for state management.
- **Use `OnPush`** for optimized change detection.
- **Profile Apps** with Chrome DevTools.
