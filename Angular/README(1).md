
---

# Angular Interview Questions and Answers

## 1. What is Angular?
Angular is an open-source framework that is used for building dynamic, single-page web applications. It uses TypeScript and offers tools like two-way data binding, dependency injection, and component-based architecture to build scalable and efficient apps.

---

## 2. What are the main features of Angular?
The features of the Angular are mentioned below:
- **Two-way data binding**: Synchronizes data between the model and the view automatically.
- **Dependency injection**: Manages and injects dependencies efficiently to enhance modularity.
- **Modularization**: Break down the application into smaller, reusable modules.
- **Templating**: Uses templates to define the view, providing dynamic and efficient UI updates.
- **RESTful API handling**: Simplifies interaction with RESTful services and APIs.

---

## 3. What is the latest version of Angular?
The latest version of Angular is 19.0.0, which was released on November 19, 2024. The features included in the Angular 19 are like standalone components, directives, and pipes by default, reducing reliance on NgModules.

---

## 4. What are the major updates in Angular 19?
The major updates done in the Angular 19 are:
- **Standalone Components**: In Angular 19, components, directives, and pipes are standalone by default, making development easier and reducing reliance on NgModules. The `ng update` command helps migrate older projects.
- **Improved Rendering**: Angular now supports incremental hydration (still in preview), offering better control over when and how parts of the application are rendered, enhancing performance.
- **Route-Level Render Mode**: Developers can customize rendering strategies for different routes to improve performance and SEO.
- **State Management & Async Enhancements**: New features like linked signals and the resource API improve state management and make handling asynchronous operations smoother.
- **Code and Performance Improvements**: Updates like automatic detection of unused imports, Hot Module Replacement (HMR), zoneless change detection (in development), automatic CSP generation, and Angular Material enhancements help streamline development and improve performance.

---

## 5. What is Difference between Angular 18 and Angular 19?
Angular 19 offers better performance, easier component management, and improved features for developers.

| Feature                | Angular 18                          | Angular 19 (Latest)                          |
|------------------------|-------------------------------------|---------------------------------------------|
| Standalone Components  | Supported but optional              | Default approach (NgModules optional)       |
| SSR Improvements       | Basic SSR improvements              | Incremental Hydration (partial hydration)   |
| Signals                | Signals stable                      | Linked Signals for complex state            |
| Zone.js Optimization   | Zone.js optimization                | Fine-grained reactivity (less Zone.js)      |
| Route-Level Metadata   | Basic route-level metadata          | Enhanced route-level rendering control      |
| Unused Import Checks   | Manual unused import checks         | Automatic unused import detection           |
| Async State Management | Promises/Observables                | New Resource API for async state            |
| Hydration              | Full app hydration                  | Component-level hydration                   |
| Build System           | esbuild-based builder               | Improved incremental builds                 |

---

## 6. Why Angular was introduced?
Angular was introduced to simplify the development of dynamic, single-page applications (SPAs). It offers features like two-way data binding, component-based architecture, and dependency injection, making it easier to manage large applications. Angular also supports cross-platform development, improving code maintainability, performance, and reducing development time for web, mobile, and desktop apps.

---

## 7. How many types of compilation Angular provides?
Angular provides two types of compilation:

### JIT (Just-in-Time) Compilation:
- Happens at runtime in the browser.
- Compiles the Angular application in the browser as it loads.
- Faster development builds but slower performance in production.

### AOT (Ahead-of-Time) Compilation:
- Happens during the build phase before the application is run.
- Compiles the application into efficient JavaScript code ahead of time, which leads to faster loading and better performance.
- Recommended for production builds.

In JIT compilation, the application compiles inside the browser during runtime.  
In AOT compilation, the application compiles during the build time.

---

## 8. What is a component in Angular?
A component is a fundamental building block of Angular applications. It controls a part of the user interface and manages the data and logic for that section. Components are used to create reusable UI elements and define the structure and behavior of the app.

```typescript
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() title: string;
    @Input() links: { name: string, url: string }[];

    constructor() { }
}
```

---

## 9. Explain the purpose of @Component decorator in Angular.
- **Defining the Component**: It designates a class as an Angular component and provides metadata about the component.
- **Template Association**: Links the component with its HTML template, defining the view.
- **Style Binding**: Associates the component with its CSS styles to encapsulate and manage styling.
- **Selector Definition**: Defines a custom HTML tag (selector) that represents the component in the application.
- **Dependency Injection Configuration**: Specifies the providers for the component, providing dependency injection.

---

## 10. What is a module in Angular?
A module is a logical unit of the application that groups related components, directives, pipes, and services. It helps organize and manage the application by encapsulating functionality into cohesive blocks.

```typescript
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## 11. What is Angular CLI?
Angular CLI (Command Line Interface) is a powerful tool that helps automate and streamline the development process for Angular applications. It provides a set of commands for creating, managing, and building Angular projects.

**Common Angular CLI commands include:**
- `ng new`: Creates a new Angular project.
- `ng serve`: Serves the application locally.
- `ng generate`: Generates components, services, and more.
- `ng build`: Builds the application for production.

---

## 12. What is a directive in Angular?
Directives are special markers on a DOM element that tell Angular to do something to that DOM element or its children. Directives are used to extend HTML functionality by adding behavior to elements, such as manipulating their attributes or styling.

```typescript
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {
    @Input('appHoverBackground') hoverColor: string;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.changeBackgroundColor(this.hoverColor || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.changeBackgroundColor(null);
    }

    private changeBackgroundColor(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
```

---

## 13. What is a service in Angular?
A service is a class that encapsulates reusable logic, which can be shared across different components of an Angular application. Services are typically used for data fetching, business logic, and other operations that need to be shared.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private dataSubject = new BehaviorSubject<any>(null);
    data$ = this.dataSubject.asObservable();

    constructor(private http: HttpClient) { }

    fetchData(): Observable<any> {
        return this.http.get('https://api.example.com/data').pipe(
            tap((data) => this.dataSubject.next(data))
        );
    }

    getData(): Observable<any> {
        return this.data$;
    }
}
```

---

## 14. Explain two-way data binding in Angular.
Two-way data binding in Angular is a mechanism that allows synchronization of data between the model (component class) and the view (template). It ensures that changes in the model are reflected in the view and vice versa, automatically updating both when either one is modified.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
    userInput: string = '';

    updateInput(value: string) {
        this.userInput = value;
    }
}
```

---

## 15. What are Angular Lifecycle Hooks?
Angular lifecycle hooks are methods that allow developers to tap into key moments in a component’s lifecycle. Key hooks include:
- `ngOnInit`: Called once when the component is initialized.
- `ngOnChanges`: Called when input properties change.
- `ngOnDestroy`: Called before Angular destroys the component.

---

## 16. What is the difference between Angular and AngularJS?

| Feature                | Angular                            | AngularJS                          |
|------------------------|-----------------------------------|-----------------------------------|
| Architecture           | Component-based                   | MVC (Model-View-Controller)       |
| Language               | TypeScript                        | JavaScript                        |
| Mobile Support         | Designed with mobile support      | Limited mobile support            |
| Performance           | Higher performance with AOT       | Relatively slower due to dynamic  |
| Data Binding           | Two-way with reactive forms       | Two-way with scopes and watchers  |

---

## 17. What is Data Binding in AngularJS?
Data Binding in Angular provides a function Data Binding which helps us to have an almost real-time reflection of the input given by the user i.e. it creates a connection between Model and View.

---

## 18. Differences between one-way binding and two-way binding
In Angular, both one-way and two-way data binding are supported. Angular provides mechanisms for both types of binding based on the use case.

| Feature               | One-Way Binding                     | Two-Way Binding                     |
|-----------------------|------------------------------------|------------------------------------|
| Data Flow             | One direction (component ↔ view)   | Both directions (component ↔ view) |
| Complexity            | Simpler                            | More complex                       |
| Use Case             | Display data or one-way updates    | Synchronize model and view         |
| Syntax               | `{{ message }}` or `[property]`    | `[(ngModel)]`                     |

---

## 19. What is string interpolation in AngularJS?
String interpolation is a technique used to bind data from the model (JavaScript) to the view (HTML) by embedding expressions within double curly braces `{{ }}`. It allows you to insert dynamic values or variables into the HTML content, making the view update automatically when the model changes.

```html
<div>{{ message }}</div>
```

---

## 20. How many types of Directives are available in AngularJS?
There are four kinds of directives in AngularJS:
1. Element directives
2. Attribute directives
3. CSS class directives
4. Comment directives

---

## 21. What is factory method in AngularJS?
AngularJS Factory Method makes the development process of AngularJS application more robust. A factory is a simple function that allows us to add some logic to a created object and return the created object.

- The factory is also used to create/return a function in the form of reusable code which can be used anywhere within the application.
- Whenever we create an object using a factory it always returns a new instance for that object.
- The object returned by the factory can be integrated(injectible) with different components of the Angularjs framework such as controller, service, filter or directive.

---

## 22. What is the digest cycle in AngularJS?
The digest cycle in AngularJS is a process where Angular compares the current and previous values of the scope model to check for changes. If changes are detected, Angular updates the view. This cycle is triggered automatically after an event like a user action, HTTP request, or model change, and it ensures that the view stays in sync with the model. It can also be manually triggered using `$apply()`.

---

## 23. What is dependency injection in Angular?
Dependency Injection (DI) in Angular is a design pattern where services or objects are provided to components or other services rather than being created within them. It allows for better modularity, testability, and management of dependencies. Angular's DI framework automatically injects required services into components, making it easier to manage and maintain the application.

---

## 24. How do you create a service in Angular?
A service can be created using Angular CLI or manually by creating a class decorated with `@Injectable()`.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataFetchingService {
    private apiUrl = 'https://api.example.com/data'; 

    constructor(private http: HttpClient) { }

    fetchData(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}
```

---

## 25. What is an Angular router?
The Angular router is a library that enables navigation between different views or pages in a single-page application (SPA). It allows developers to define routes, handle URL changes, and load components dynamically based on the route, providing a smooth and efficient user experience without page reloads.

---

## 26. What is scope in Angular?
In Angular, scope refers to the environment or context in which variables, expressions, and functions are evaluated. It determines the visibility and accessibility of these variables within different parts of the application, particularly in relation to the component's template and controller.

**Note:** In Angular 2+ (modern Angular), the term scope is no longer used. It is replaced by component state and data binding.

---

## 27. What type of DOM is used in Angular?
Angular uses the **Real DOM (Document Object Model)**. The Change Detection mechanism is used to update only the affected parts of the DOM when data changes, improving performance. In addition, Angular uses a **Shadow DOM** for encapsulation, which helps isolate styles and behavior of components.

- **Real DOM**: Updates the entire DOM when changes occur.
- **Change Detection**: Optimizes updates to only parts of the DOM that need re-rendering.
- **Shadow DOM**: Provides component style and behavior encapsulation.

--- 


## 28. In How many ways Bootstrap is embedded in Angular?
In Angular, Bootstrap can be implemented in two ways:

### 1. Using npm (Recommended)
Install Bootstrap via npm and import it into the angular.json file under the "styles" and "scripts" arrays.
```bash
npm install bootstrap
```

### 2. Using CDN (Content Delivery Network)
Instead of installing Bootstrap locally, you can link to Bootstrap's CSS and JS files directly from a CDN in your index.html file:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
```

---

## 29. How can you pass data between components in Angular?
Data can be passed between components using:
- Input and Output decorators
- Services
- Router state

**Example:** Passing data from a parent component to a child component using @Input decorator.

```typescript
// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() childData: string; // Declare the input property
}

// parent.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    parentData: string = 'Hello from Parent Component!';
}
```

```html
<!-- parent.component.html -->
<div>
    <app-child [childData]="parentData"></app-child>
</div>

<!-- child.component.html -->
<div>
    <p>Data from parent: {{ childData }}</p>
</div>
```

---

## 30. Explain lazy loading in Angular.
Lazy loading in Angular is a technique used to improve the performance of an application by loading feature modules only when they are needed, rather than loading all modules upfront. This reduces the initial load time of the application and speeds up the startup process.

**Implementation:**
```typescript
// app-routing.module.ts
const routes: Routes = [
  { 
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) 
  }
];
```

---

## 31. What is MVVM architecture in Angular?
MVVM (Model-View-ViewModel) is a software architectural pattern that provides a clean separation of concerns:

| Component      | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Model**     | Represents the application's data and business logic                        |
| **View**      | The UI elements that the user interacts with (HTML templates)               |
| **ViewModel** | Acts as a bridge between Model and View (Angular components with data binding) |

---

## 32. What are Angular lifecycle hooks?
Angular lifecycle hooks are methods that allow you to tap into key moments in a component's lifecycle:

| Hook                     | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `ngOnInit()`             | Called once after component initialization                                  |
| `ngOnChanges(changes)`   | Called when input properties change                                         |
| `ngDoCheck()`            | Custom change detection                                                    |
| `ngAfterContentInit()`   | Called after content projection                                             |
| `ngAfterViewInit()`      | Called after component's view initializes                                   |
| `ngOnDestroy()`          | Cleanup before component destruction                                        |

---

## 33. What is a pipe in Angular?
A pipe is a way to transform data in templates. Angular provides built-in pipes and allows custom pipe creation.

**Example:**
```html
<!-- Using built-in date pipe -->
<p>{{ today | date:'fullDate' }}</p>

<!-- Custom pipe -->
<p>{{ text | truncate:20 }}</p>
```

---

## 34. What is Angular Universal?
Angular Universal enables server-side rendering (SSR) for Angular applications, providing:
- Faster initial page loads
- Better SEO
- Improved performance on low-power devices

---

## 35. How do you optimize Angular applications?
Optimization techniques include:
1. **AOT Compilation** - Pre-compile for production
2. **Lazy Loading** - Load modules on-demand
3. **OnPush Change Detection** - Reduce unnecessary checks
4. **Tree Shaking** - Remove unused code
5. **Minification** - Reduce file sizes
6. **TrackBy with ngFor** - Optimize list rendering
7. **Service Workers** - Enable caching

---

## 36. What are Angular interceptors?
Interceptors are services that intercept and modify HTTP requests/responses globally.

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

## 37. Explain the purpose of NgZone in Angular.
NgZone helps Angular track asynchronous operations and trigger change detection when:
- setTimeout/setInterval completes
- HTTP requests finish
- User events occur

---

## 38. Difference between @Input() and @Output()

| Feature     | @Input()                          | @Output()                         |
|------------|-----------------------------------|-----------------------------------|
| Direction  | Parent → Child                    | Child → Parent                    |
| Usage      | Pass data                         | Emit events                       |
| Example    | `<child [data]="value">`          | `<child (event)="handler()">`     |

---

## 39. How to implement authentication in Angular?
Authentication implementation involves:
1. JWT tokens
2. Auth guards
3. HTTP interceptors

**AuthGuard Example:**
```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
```

---

## 40. What are Standalone Components in Angular 19?
Standalone Components:
- Don't require NgModules
- Simplify application architecture
- Enable better tree-shaking
- Reduce boilerplate code

**Example:**
```typescript
@Component({
  standalone: true,
  template: `...`
})
export class StandaloneComponent {}
```

---

## 41. How to use Typed Forms?
Typed Forms provide strict type checking for reactive forms:

```typescript
const form = new FormGroup({
  name: new FormControl<string>(''), // Explicit string type
  age: new FormControl<number|null>(null) // Number or null
});
```

---

## 42. What is the purpose of the Signal API?
Signal API:
- Simplifies state management
- Provides fine-grained reactivity
- Reduces change detection overhead
- Improves performance

**Example:**
```typescript
const count = signal(0);
count.set(5); // Update value
count.update(v => v + 1); // Increment
```

---

## 43. How does the inject() function work?
The `inject()` function simplifies dependency injection:

```typescript
@Component({...})
export class MyComponent {
  private service = inject(MyService);
  
  constructor() {
    // service available without constructor params
  }
}
```

---

## 44. Improvements to standalone testing
Standalone testing improvements:
- Reduced boilerplate
- Direct component testing
- Better integration with Jest/Karma
- Faster test execution

---

## 45. Explain Functional Components
Functional Components:
- Focus on rendering
- No class structure
- Better performance
- Easier testing

**Example:**
```typescript
export function FunctionalComponent(props: Props) {
  return <div>{props.text}</div>;
}
```

---

## 46. What is AOT compilation?
AOT (Ahead-of-Time) compilation:
- Compiles during build
- Smaller bundle size
- Faster rendering
- Early template error detection

---

## 47. What is Ivy in Angular?
Ivy is Angular's rendering engine that:
- Reduces bundle sizes
- Improves debugging
- Enhances performance
- Offers better backwards compatibility

---

## 48. Purpose of Angular Elements
Angular Elements allow:
- Packaging components as web components
- Use in non-Angular apps
- Framework interoperability
- Encapsulated reusable components

---

## 49. What is a Resolver?
A Resolver prefetches data before route activation:

```typescript
@Injectable()
export class DataResolver implements Resolve<Data> {
  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getData();
  }
}
```

---

## 50. Difference between Angular and React

| Feature        | Angular                      | React                     |
|---------------|-----------------------------|---------------------------|
| Type          | Framework                   | Library                   |
| Language      | TypeScript                  | JavaScript (JSX)          |
| Architecture  | MVC/MVVM                    | Component-based           |
| Data Binding  | Two-way                     | One-way                   |
| Learning Curve| Steeper                     | Easier                    |

---


### 1. **What is Angular and how is it different from AngularJS?**
- **Angular**: A modern TypeScript-based framework (v2+) for building SPAs with components, dependency injection, and a modular architecture.
- **Key Differences**:
  | Feature          | Angular                     | AngularJS                  |
  |------------------|----------------------------|----------------------------|
  | Architecture     | Component-based             | MVC-based                  |
  | Language         | TypeScript                 | JavaScript                |
  | Data Binding     | Unidirectional (with optional two-way) | Two-way by default |
  | Performance      | Faster (Ivy engine)         | Slower (Dirty checking)    |
  | Mobile Support  | Designed for mobile         | Limited mobile support    |

---

### 2. **What is two-way data binding in Angular?**
- **Definition**: Synchronization between model (component) and view (template) where changes in one automatically update the other.
- **Syntax**: `[(ngModel)]="property"`
- **Example**:
  ```html
  <input [(ngModel)]="username">
  <p>Hello {{ username }}!</p>
  ```
  Changing the input updates `username` in the component and vice versa.

---

### 3. **What are Angular components and how do they work?**
- **Definition**: Reusable UI building blocks with:
  - HTML template (`templateUrl`)
  - TypeScript logic (`@Component` class)
  - Styles (`styleUrls`)
- **Key Parts**:
  ```typescript
  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent {
    // Logic and data here
  }
  ```
- **Lifecycle**: Managed by Angular (creation, rendering, destruction).

---

### 4. **What is Dependency Injection (DI) in Angular?**
- **Purpose**: Provides dependencies (services) to components without hard-coding them.
- **How it works**:
  1. Service is marked as `@Injectable()`
  2. Registered in a module/provider
  3. Injected via constructor:
     ```typescript
     constructor(private service: DataService) {}
     ```
- **Benefits**: Testability, modularity, and loose coupling.

---

### 5. **Explain the Angular lifecycle hooks.**
Key hooks in order of execution:
1. **ngOnChanges()**: When input properties change.
2. **ngOnInit()**: After first ngOnChanges (initialization logic).
3. **ngDoCheck()**: Custom change detection.
4. **ngAfterViewInit()**: After view renders.
5. **ngOnDestroy()**: Cleanup before component destruction.

---

### 6. **What is RxJS and how is it used in Angular?**
- **RxJS**: Library for reactive programming using Observables.
- **Common Uses**:
  - HTTP requests (`HttpClient` returns Observables)
  - State management (e.g., `BehaviorSubject`)
  - Event handling (e.g., `fromEvent`)
- **Example**:
  ```typescript
  this.http.get('/api/data').pipe(
    map(response => response.data),
    catchError(error => of([]))
  ).subscribe(data => this.data = data);
  ```

---

### 7. **What are directives in Angular?**
- **Purpose**: Extend HTML behavior.
- **Types**:
  1. **Component Directives**: UI elements with templates.
  2. **Attribute Directives**: Change element appearance/behavior (e.g., `ngClass`, `ngStyle`).
  3. **Structural Directives**: Modify DOM layout (e.g., `*ngIf`, `*ngFor`).

---

### 8. **What is Angular Routing and how does it work?**
- **Purpose**: Navigate between views without page reloads.
- **Setup**:
  ```typescript
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent }
  ];
  ```
- **Navigation**:
  ```html
  <router-outlet></router-outlet>  <!-- Rendered component goes here -->
  <a routerLink="/home">Home</a>
  ```

---

### 9. **Services vs Components**
| Feature        | Services                     | Components                  |
|---------------|-----------------------------|----------------------------|
| Purpose       | Reusable business logic     | UI presentation            |
| State         | Singleton (shared state)    | Instance-specific state    |
| Decorator     | `@Injectable()`             | `@Component()`             |
| Example Use   | HTTP calls, authentication | Forms, buttons, views      |

---

### 10. **What is an Angular module?**
- **Definition**: Container for organizing related components, directives, pipes, and services.
- **Key Properties**:
  ```typescript
  @NgModule({
    declarations: [Components, Directives],  // Things that belong to this module
    imports: [OtherModules],                // Dependencies
    exports: [SharedComponents],            // Public API
    providers: [Services]                   // Dependency injection
  })
  ```
- **Types**: Root (`AppModule`), Feature (e.g., `UserModule`), Shared.

---
