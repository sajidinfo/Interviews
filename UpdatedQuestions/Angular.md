
---

### Angular Interview Questions: Answers

#### Conceptual Questions (1-20)

1. **Explain Angular’s architecture and its core components.**
   - Angular is a platform for building single-page applications (SPAs) using TypeScript. Its architecture is component-based, leveraging dependency injection and reactive programming (RxJS).
   - **Core components**:
     - **Modules (NgModule)**: Organize the app into cohesive blocks.
     - **Components**: Define UI and logic for views.
     - **Services**: Handle business logic and data access.
     - **Directives**: Extend DOM behavior.
     - **Pipes**: Transform data for display.
     - **Routing**: Manage navigation.
     - **Dependency Injection**: Provide services to components.

2. **What are Angular modules, and why are they important?**
   - Angular modules (`NgModule`) are containers for grouping related components, services, directives, and pipes.
   - **Importance**:
     - Organize code for modularity and reusability.
     - Enable lazy loading for performance.
     - Define dependency injection scope.
     - Example: `AppModule` bootstraps the app, while feature modules encapsulate specific functionality.

3. **Describe Angular’s component lifecycle hooks with their use cases.**
   - Lifecycle hooks allow you to tap into a component’s lifecycle stages:
     - `ngOnChanges`: Respond to input property changes (e.g., update UI).
     - `ngOnInit`: Initialize component after inputs are set (e.g., fetch data).
     - `ngDoCheck`: Custom change detection (rarely used).
     - `ngAfterContentInit`: After content projection (e.g., initialize projected content).
     - `ngAfterContentChecked`: After content projection updates.
     - `ngAfterViewInit`: After view and child views are initialized (e.g., DOM manipulation).
     - `ngAfterViewChecked`: After view updates.
     - `ngOnDestroy`: Cleanup before destruction (e.g., unsubscribe Observables).
     ```typescript
     ngOnInit() { this.loadData(); }
     ngOnDestroy() { this.subscription.unsubscribe(); }
     ```

4. **What is the difference between `@Component` and `@Directive`?**
   - `@Component`: Defines a UI component with a template and view.
     ```typescript
     @Component({ selector: 'app-example', template: '<p>Hello</p>' })
     ```
   - `@Directive`: Adds behavior to existing DOM elements without a template.
     ```typescript
     @Directive({ selector: '[appHighlight]' })
     ```
   - **Difference**: Components have templates; directives enhance elements.

5. **Explain dependency injection in Angular with an example.**
   - Dependency Injection (DI) provides dependencies (e.g., services) to components via constructor injection.
     ```typescript
     @Injectable({ providedIn: 'root' })
     export class DataService {
       getData() { return 'Data'; }
     }
     @Component({...})
     export class MyComponent {
       constructor(private dataService: DataService) {
         console.log(dataService.getData()); // Data
       }
     }
     ```
   - **Benefit**: Promotes modularity and testability.

6. **What are Angular services, and how do they differ from components?**
   - **Services**: Classes for business logic, data access, or shared functionality (e.g., API calls).
   - **Components**: UI-focused, managing templates and user interactions.
   - **Difference**: Services are stateless and reusable; components are tied to views.
     ```typescript
     @Injectable({ providedIn: 'root' })
     export class UserService { fetchUsers() { /* API call */ } }
     ```

7. **Describe the difference between `ngOnInit` and `ngAfterViewInit`.**
   - `ngOnInit`: Called once after inputs are set, used for initialization (e.g., API calls).
   - `ngAfterViewInit`: Called after the component’s view and child views are initialized, used for DOM-related tasks.
     ```typescript
     ngOnInit() { this.fetchData(); }
     ngAfterViewInit() { this.elementRef.nativeElement.focus(); }
     ```

8. **What is lazy loading in Angular, and how do you implement it?**
   - Lazy loading loads feature modules only when needed, improving initial load time.
   - **Implementation**:
     - Define a feature module.
     - Configure routes with `loadChildren`.
     ```typescript
     const routes: Routes = [
       { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
     ];
     ```

9. **Explain RxJS Observables and how they’re used in Angular.**
   - Observables (RxJS) handle asynchronous data streams (e.g., HTTP requests, events).
   - **Usage in Angular**:
     - HttpClient returns Observables for API calls.
     - Event handling (e.g., `fromEvent`).
     ```typescript
     this.http.get('api/users').subscribe(users => this.users = users);
     ```

10. **What is the difference between `Subject`, `BehaviorSubject`, and `ReplaySubject`?**
    - `Subject`: Basic multicast Observable; no initial value.
    - `BehaviorSubject`: Holds the latest value, emits it to new subscribers.
    - `ReplaySubject`: Replays multiple past values to new subscribers.
      ```typescript
      const subject = new BehaviorSubject('Initial');
      subject.subscribe(val => console.log(val)); // Initial
      subject.next('New'); // New
      ```

11. **How does Angular’s change detection work, and how can you optimize it?**
    - Change detection checks for changes in component bindings and updates the DOM.
    - **Default Strategy**: Checks all components on events (e.g., clicks).
    - **OnPush Strategy**: Only checks when inputs or Observables change.
      ```typescript
      @Component({ changeDetection: ChangeDetectionStrategy.OnPush })
      ```
    - **Optimizations**:
      - Use `OnPush` for immutable data.
      - Avoid complex getters in templates.
      - Use `ChangeDetectorRef.detach()` for manual control.

12. **What are Angular pipes? Explain pure vs. impure pipes.**
    - Pipes transform data for display (e.g., `date`, `uppercase`).
    - **Pure pipes**: Run only on input changes (default, efficient).
      ```typescript
      {{ value | myPipe }}
      ```
    - **Impure pipes**: Run on every change detection cycle (e.g., for arrays).
      ```typescript
      @Pipe({ name: 'myPipe', pure: false })
      ```

13. **How do you implement route guards in Angular for authentication?**
    - Route guards control access to routes (e.g., `CanActivate`).
      ```typescript
      @Injectable({ providedIn: 'root' })
      export class AuthGuard implements CanActivate {
        constructor(private authService: AuthService, private router: Router) {}
        canActivate(): boolean {
          if (this.authService.isLoggedIn()) return true;
          this.router.navigate(['/login']);
          return false;
        }
      }
      const routes: Routes = [{ path: 'admin', canActivate: [AuthGuard], component: AdminComponent }];
      ```

14. **Explain the difference between `providedIn: 'root'` and module-level providers.**
    - `providedIn: 'root'`: Service is singleton, available app-wide.
      ```typescript
      @Injectable({ providedIn: 'root' })
      ```
    - **Module-level providers**: Service is scoped to a specific module.
      ```typescript
      @NgModule({ providers: [MyService] })
      ```
    - **Difference**: `providedIn: 'root'` enables tree-shaking; module-level is scoped.

15. **What is Angular Universal, and how does it improve SEO?**
    - Angular Universal enables server-side rendering (SSR) for Angular apps.
    - **SEO Benefits**: Pre-renders HTML for crawlers, improving indexability.
    - **Implementation**: Use `@nguniversal/express-engine` to render on the server.

16. **How do you handle form validation in Angular (reactive vs. template-driven)?**
    - **Reactive Forms**: Programmatic, explicit control, better for complex forms.
      ```typescript
      form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
      });
      ```
    - **Template-Driven**: Declarative, simpler for basic forms.
      ```html
      <form #f="ngForm">
        <input name="email" ngModel required email>
      </form>
      ```

17. **What are Angular directives? Explain structural vs. attribute directives.**
    - **Directives**: Extend DOM behavior.
    - **Structural**: Modify DOM structure (e.g., `*ngIf`, `*ngFor`).
      ```html
      <div *ngIf="condition">Show</div>
      ```
    - **Attribute**: Change element behavior/appearance (e.g., `ngClass`).
      ```html
      <div [ngClass]="{'active': isActive}">Content</div>
      ```

18. **How does Angular handle cross-component communication?**
    - **Parent to Child**: Via `@Input`.
    - **Child to Parent**: Via `@Output` and `EventEmitter`.
    - **Unrelated Components**: Use a shared service with Observables.
      ```typescript
      @Injectable({ providedIn: 'root' })
      export class SharedService {
        private subject = new Subject<string>();
        sendMessage(message: string) { this.subject.next(message); }
        getMessage(): Observable<string> { return this.subject.asObservable(); }
      }
      ```

19. **What is the purpose of `NgZone` in Angular?**
    - `NgZone` manages change detection for events outside Angular’s control (e.g., third-party libraries).
    - Use `run()` to trigger change detection, `runOutsideAngular()` to avoid it.
      ```typescript
      constructor(private ngZone: NgZone) {
        this.ngZone.runOutsideAngular(() => {
          setTimeout(() => this.ngZone.run(() => this.updateUI()), 1000);
        });
      }
      ```

20. **Explain how Angular’s Ahead-of-Time (AOT) compilation works.**
    - AOT compiles templates during build time, producing efficient JavaScript.
    - **Benefits**: Faster rendering, smaller bundles, better error detection.
    - **How it works**: Converts templates to JavaScript classes at build time.
      ```bash
      ng build --aot
      ```

#### Coding Questions (21-40)

21. **Write a custom pipe to format a date in DD-MM-YYYY format.**
    ```typescript
    @Pipe({ name: 'customDate' })
    export class CustomDatePipe implements PipeTransform {
      transform(value: Date | string): string {
        const date = new Date(value);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }
    }
    // Usage: {{ date | customDate }}
    ```

22. **Create an Angular service to fetch data from a REST API using HttpClient.**
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class ApiService {
      constructor(private http: HttpClient) {}
      getUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://api.example.com/users');
      }
    }
    ```

23. **Implement a reactive form with validation for a user registration page.**
    ```typescript
    @Component({...})
    export class RegisterComponent {
      form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
      onSubmit() {
        if (this.form.valid) {
          console.log(this.form.value);
        }
      }
    }
    ```

24. **Write a custom directive to highlight an element on hover.**
    ```typescript
    @Directive({ selector: '[appHighlight]' })
    export class HighlightDirective {
      constructor(private el: ElementRef) {}
      @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
      }
      @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = '';
      }
    }
    // Usage: <div appHighlight>Hover me</div>
    ```

25. **Create a component to display a paginated list of users from an API.**
    ```typescript
    @Component({...})
    export class UserListComponent {
      users: User[] = [];
      page = 1;
      pageSize = 10;
      constructor(private apiService: ApiService) {}
      ngOnInit() {
        this.loadUsers();
      }
      loadUsers() {
        this.apiService.getUsers().subscribe(users => {
          this.users = users.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
        });
      }
    }
    ```

26. **Implement a route guard to restrict access to admin routes.**
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class AdminGuard implements CanActivate {
      constructor(private authService: AuthService, private router: Router) {}
      canActivate(): boolean {
        if (this.authService.isAdmin()) return true;
        this.router.navigate(['/login']);
        return false;
      }
    }
    ```

27. **Write code to lazily load a module in Angular.**
    ```typescript
    const routes: Routes = [
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
    ];
    @NgModule({ imports: [RouterModule.forRoot(routes)] })
    export class AppModule {}
    ```

28. **Create a custom validator for a reactive form to check password strength.**
    ```typescript
    function passwordStrength(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) return null;
        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        return hasUpper && hasLower && hasNumber ? null : { weakPassword: true };
      };
    }
    form = new FormGroup({
      password: new FormControl('', [Validators.required, passwordStrength()])
    });
    ```

29. **Implement a component to handle file uploads with progress tracking.**
    ```typescript
    @Component({...})
    export class FileUploadComponent {
      progress = 0;
      constructor(private http: HttpClient) {}
      uploadFile(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        const formData = new FormData();
        formData.append('file', file);
        this.http.post('api/upload', formData, { reportProgress: true, observe: 'events' })
          .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            }
          });
      }
    }
    ```

30. **Write code to share data between two components using a service.**
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class SharedService {
      private dataSubject = new BehaviorSubject<string>('');
      setData(data: string) { this.dataSubject.next(data); }
      getData(): Observable<string> { return this.dataSubject.asObservable(); }
    }
    @Component({...})
    export class SenderComponent {
      constructor(private sharedService: SharedService) {}
      send() { this.sharedService.setData('Hello'); }
    }
    @Component({...})
    export class ReceiverComponent {
      data: string;
      constructor(private sharedService: SharedService) {
        this.sharedService.getData().subscribe(d => this.data = d);
      }
    }
    ```

31. **Create a pipe to truncate text after a specified length.**
    ```typescript
    @Pipe({ name: 'truncate' })
    export class TruncatePipe implements PipeTransform {
      transform(value: string, length: number): string {
        return value.length > length ? value.substring(0, length) + '...' : value;
      }
    }
    // Usage: {{ text | truncate:10 }}
    ```

32. **Implement an Angular interceptor to add JWT tokens to HTTP requests.**
    ```typescript
    @Injectable()
    export class AuthInterceptor implements HttpInterceptor {
      constructor(private authService: AuthService) {}
      intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getToken();
        const authReq = token
          ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
          : req;
        return next.handle(authReq);
      }
    }
    @NgModule({ providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }] })
    ```

33. **Write a component to display real-time data using WebSocket.**
    ```typescript
    @Component({...})
    export class RealTimeComponent {
      messages: string[] = [];
      constructor() {
        const ws = new WebSocket('ws://example.com/socket');
        ws.onmessage = (event) => this.messages.push(event.data);
      }
    }
    ```

34. **Create a dynamic form in Angular based on a JSON configuration.**
    ```typescript
    @Component({...})
    export class DynamicFormComponent {
      form = new FormGroup({});
      @Input() config: { name: string, type: string, required?: boolean }[];
      ngOnInit() {
        this.config.forEach(field => {
          this.form.addControl(field.name, new FormControl('', field.required ? Validators.required : []));
        });
      }
    }
    ```

35. **Implement a custom structural directive to conditionally render elements.**
    ```typescript
    @Directive({ selector: '[appIfRole]' })
    export class IfRoleDirective {
      constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
      @Input() set appIfRole(role: string) {
        if (role === 'admin') {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    }
    // Usage: <div *appIfRole="'admin'">Admin content</div>
    ```

36. **Write code to handle query parameters in an Angular route.**
    ```typescript
    @Component({...})
    export class QueryComponent {
      constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
          console.log(params['id']); // e.g., ?id=123
        });
      }
    }
    ```

37. **Create a service to cache API responses in Angular.**
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class CacheService {
      private cache = new Map<string, any>();
      constructor(private http: HttpClient) {}
      getData(url: string): Observable<any> {
        if (this.cache.has(url)) return of(this.cache.get(url));
        return this.http.get(url).pipe(
          tap(data => this.cache.set(url, data))
        );
      }
    }
    ```

38. **Implement a component to support drag-and-drop functionality.**
    ```typescript
    @Component({...})
    export class DragDropComponent {
      @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
        event.preventDefault();
      }
      @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
        event.preventDefault();
        const data = event.dataTransfer.files[0];
        console.log(data);
      }
    }
    // Usage: <div appDragDrop>Drop files here</div>
    ```

39. **Write code to integrate a third-party library (e.g., Chart.js) in Angular.**
    ```typescript
    import { Chart } from 'chart.js';
    @Component({...})
    export class ChartComponent implements AfterViewInit {
      @ViewChild('canvas') canvas: ElementRef;
      ngAfterViewInit() {
        new Chart(this.canvas.nativeElement, {
          type: 'bar',
          data: {
            labels: ['A', 'B', 'C'],
            datasets: [{ data: [10, 20, 30], backgroundColor: '#42A5F5' }]
          }
        });
      }
    }
    ```

40. **Create a resolver to pre-fetch data before navigating to a route.**
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class UserResolver implements Resolve<User> {
      constructor(private apiService: ApiService) {}
      resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.apiService.getUser(route.params['id']);
      }
    }
    const routes: Routes = [
      { path: 'user/:id', component: UserComponent, resolve: { user: UserResolver } }
    ];
    ```

#### Scenario-Based Questions (41-50)

41. **How would you optimize an Angular app for large datasets in a table?**
    - Use `trackBy` with `*ngFor` to minimize DOM updates.
    - Implement virtual scrolling with `@angular/cdk`.
    - Paginate or lazy-load data.
    - Use `OnPush` change detection.
      ```typescript
      trackByFn(index, item) { return item.id; }
      ```

42. **Explain how you’d handle SEO in an Angular SPA.**
    - Use Angular Universal for server-side rendering.
    - Add meta tags dynamically with `Meta` and `Title` services.
    - Generate sitemaps and submit to search engines.
    - Ensure proper URL routing with Angular Router.

43. **How would you debug a slow Angular application?**
    - Use Chrome DevTools to profile performance.
    - Check change detection cycles with `ng.profiler.timeChangeDetection()`.
    - Optimize heavy computations with Web Workers.
    - Minimize Observables and unsubscribe properly.
    - Use `OnPush` for components with static data.

44. **Describe how you’d implement server-side rendering in Angular.**
    - Set up Angular Universal with `@nguniversal/express-engine`.
    - Update `AppModule` with `ServerModule`.
    - Configure server (e.g., Express) to render routes.
    - Build with `ng build --prod` and `ng run my-app:server`.
    - Serve with `node dist/server/main.js`.

45. **How would you secure an Angular app against CSRF attacks?**
    - Use Angular’s `HttpClient` (automatically includes CSRF tokens for same-origin requests).
    - Configure backend to include CSRF tokens in responses.
    - Validate tokens on the server for POST/PUT requests.
    - Avoid storing sensitive data in local storage.

46. **Explain how you’d handle state management in a large Angular app.**
    - Use NgRx or Akita for centralized state management.
    - Store state in a single source of truth.
    - Use selectors for efficient state access.
    - Handle side effects with effects or services.
      ```typescript
      @Injectable()
      export class UserStore extends Store<UserState> {
        constructor() { super({ users: [] }); }
      }
      ```

47. **How would you implement internationalization (i18n) in Angular?**
    - Use Angular’s `i18n` attribute for translatable text.
    - Extract translations with `ng xi18n`.
    - Create translation files (e.g., `messages.fr.xlf`).
    - Build for each locale: `ng build --configuration=fr`.
      ```html
      <h1 i18n>Hello, {{ name }}!</h1>
      ```

48. **Describe how you’d test an Angular component using Jasmine/Karma.**
    - Write unit tests with `TestBed` to create component instances.
    - Mock dependencies with `providers`.
      ```typescript
      describe('MyComponent', () => {
        let component: MyComponent;
        let fixture: ComponentFixture<MyComponent>;
        beforeEach(() => {
          TestBed.configureTestingModule({ declarations: [MyComponent] });
          fixture = TestBed.createComponent(MyComponent);
          component = fixture.componentInstance;
        });
        it('should create', () => {
          expect(component).toBeTruthy();
        });
      });
      ```

49. **How would you handle a memory leak in an Angular app with subscriptions?**
    - Unsubscribe Observables in `ngOnDestroy`.
    - Use the `async` pipe to manage subscriptions in templates.
    - Use `takeUntil` for automatic cleanup.
      ```typescript
      private destroy$ = new Subject<void>();
      ngOnInit() {
        this.apiService.getData().pipe(takeUntil(this.destroy$)).subscribe();
      }
      ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
      }
      ```

50. **Explain how you’d migrate an AngularJS app to Angular 16.**
    - Use the hybrid mode with `@angular/upgrade` to run AngularJS and Angular together.
    - Rewrite components incrementally (start with small modules).
    - Replace AngularJS services with Angular services.
    - Refactor `$scope` to use component inputs/outputs.
    - Update routing to Angular Router.
    - Test thoroughly during migration.

---

### Notes
- **Experience Context**: With 4 years of full-stack experience, you likely have practical knowledge of Angular in real-world projects. These answers emphasize modern Angular practices (e.g., reactive forms, lazy loading, NgRx) and align with full-stack concerns like API integration and performance optimization.
- **Memory Instructions**: If you wish to manage or forget this conversation, use the "Data Controls" section in settings or the book icon to select specific chats to forget.
- **Further Clarification**: If you need deeper dives into specific topics (e.g., NgRx setup, advanced SSR), more code examples, or integration with backend technologies, let me know!
