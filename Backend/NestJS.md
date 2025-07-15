
## **NestJS Interview Questions**  

### **1. Core Concepts**  
#### **Q1: What is NestJS?**  
**A:** NestJS is a **Node.js framework** for building scalable server-side applications using TypeScript. It leverages:  
- **Modular architecture** (inspired by Angular).  
- **Dependency Injection (DI)**.  
- Supports REST APIs, GraphQL, WebSockets, and microservices.  

#### **Q2: Why use NestJS over Express.js?**  
**A:**  
| **NestJS** | **Express.js** |  
|------------|---------------|  
| Opinionated (structure enforced) | Unopinionated (flexible) |  
| Built-in DI, modules, and testing utilities | Minimalist, requires manual setup |  
| TypeScript-first | Primarily JavaScript |  

#### **Q3: Explain the role of `@Module()` in NestJS.**  
**A:**  
- `@Module()` decorator defines a module (like `AppModule`).  
- Properties:  
  - `imports`: Other modules to use (e.g., `TypeOrmModule`).  
  - `controllers`: Handle HTTP requests.  
  - `providers`: Services, repositories, etc.  
  - `exports`: Share providers across modules.  

---

### **2. Controllers & Services**  
#### **Q4: What’s the difference between a Controller and a Service?**  
**A:**  
- **Controller:** Handles HTTP requests (routes, params, body).  
  ```typescript
  @Controller('users')
  export class UsersController {
    @Get() findAll() { return this.usersService.findAll(); }
  }
  ```  
- **Service:** Contains business logic (reusable across controllers).  
  ```typescript
  @Injectable()
  export class UsersService { findAll() { return db.users; } }
  ```  

#### **Q5: How do you handle route parameters in NestJS?**  
**A:** Use decorators like `@Param()`:  
```typescript
@Get(':id')
findOne(@Param('id') id: string) { return this.usersService.findOne(id); }
```

---

### **3. Middleware & Pipes**  
#### **Q6: What is middleware in NestJS?**  
**A:** Functions that run before routes (e.g., logging, auth checks).  
```typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.url);
    next();
  }
}
```  
Register in `AppModule`:  
```typescript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

#### **Q7: What are Pipes in NestJS?**  
**A:** Transform or validate input data (e.g., route params, body).  
- Built-in pipes: `ParseIntPipe`, `ValidationPipe`.  
- Custom pipe:  
  ```typescript
  @Injectable()
  export class CustomPipe implements PipeTransform {
    transform(value: any) { return value.trim(); }
  }
  ```  
  Usage:  
  ```typescript
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { ... }
  ```

---

### **4. Database Integration**  
#### **Q8: How do you connect NestJS to a database?**  
**A:** Use `TypeORM` or `Prisma`:  
1. Install `@nestjs/typeorm` and `typeorm`.  
2. Configure in `AppModule`:  
   ```typescript
   @Module({
     imports: [TypeOrmModule.forRoot({ type: 'postgres', ... })],
   })
   ```  
3. Define entities:  
   ```typescript
   @Entity()
   export class User { @PrimaryGeneratedColumn() id: number; }
   ```  
