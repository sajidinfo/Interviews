
## **Laravel Interview Questions**  

### **1. Core Concepts**  
#### **Q9: What is Laravel?**  
**A:** Laravel is a **PHP framework** for web apps with:  
- **Eloquent ORM** (database interactions).  
- **Blade templating engine**.  
- **Artisan CLI** (code generation, migrations).  

#### **Q10: Explain Laravel’s MVC architecture.**  
**A:**  
- **Model (Eloquent):** Database interactions (`User::find(1)`).  
- **View (Blade):** Frontend templates (`@foreach($users as $user)`).  
- **Controller:** Handles logic between models and views.  

---

### **2. Routing & Controllers**  
#### **Q11: How do you define a route in Laravel?**  
**A:** In `routes/web.php` or `routes/api.php`:  
```php
Route::get('/users', [UserController::class, 'index']);
```  

#### **Q12: What’s the difference between `get()` and `post()` routes?**  
**A:**  
- `get()`: Fetch data (e.g., load a page).  
- `post()`: Submit data (e.g., form submissions).  

---

### **3. Eloquent ORM**  
#### **Q13: How do you fetch all users with Eloquent?**  
**A:**  
```php
$users = User::all(); // Fetch all
$user = User::find(1); // Fetch by ID
```  

#### **Q14: What are Laravel migrations?**  
**A:** Version-controlled database schemas (e.g., create tables):  
```bash
php artisan make:migration create_users_table
```  
Then define in `database/migrations`:  
```php
Schema::create('users', function (Blueprint $table) {
  $table->id();
  $table->string('name');
});
```  
Run with:  
```bash
php artisan migrate
```  

---

### **4. Middleware & Authentication**  
#### **Q15: How do you create middleware in Laravel?**  
**A:**  
1. Generate:  
   ```bash
   php artisan make:middleware AdminCheck
   ```  
2. Implement logic in `app/Http/Middleware/AdminCheck.php`:  
   ```php
   public function handle($request, Closure $next) {
     if (!auth()->user()->is_admin) abort(403);
     return $next($request);
   }
   ```  
3. Register in `app/Http/Kernel.php`.  

#### **Q16: How does Laravel handle authentication?**  
**A:**  
- Built-in `auth` scaffolding:  
  ```bash
  php artisan make:auth
  ```  
- Uses `Auth` facade:  
  ```php
  if (Auth::attempt(['email' => $email, 'password' => $password])) {
    // Logged in
  }
  ```  