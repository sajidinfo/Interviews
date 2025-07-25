
---

### **1. What is SQL?**

**SQL (Structured Query Language)** ek language hai jo databases se baat karne ke kaam aati hai.
Isse hum data **insert, update, delete, fetch** kar sakte hain.

🧠 **Example:**

```sql
SELECT * FROM users WHERE age > 25;
```

Yah query un sabhi users ko laayegi jinki age 25 se jyada hai.

---

### **2. What is a Database?**

Database ek **organized collection** hoti hai data ka.
Jaise Excel me sheets hoti hain, waise hi database me tables hoti hain.

🧠 **Example:**
Ek `hospital` database ho sakta hai jisme `patients`, `doctors`, `appointments` naam ki tables ho.

---

### **3. What are the types of SQL commands?**

SQL commands ko 5 category me baanta gaya hai:

| Type    | Full Form                  | Kaam                                                     |
| ------- | -------------------------- | -------------------------------------------------------- |
| **DDL** | Data Definition Language   | Table banana, modify karna (CREATE, ALTER, DROP)         |
| **DML** | Data Manipulation Language | Data insert/update/delete karna (INSERT, UPDATE, DELETE) |
| **DQL** | Data Query Language        | Data fetch karna (SELECT)                                |
| **DCL** | Data Control Language      | Permissions dena/hatana (GRANT, REVOKE)                  |
| **TCL** | Transaction Control Lang   | Transactions manage karna (COMMIT, ROLLBACK, SAVEPOINT)  |

---

### **4. What is Primary Key?**

Primary Key ek **column hota hai jo unique aur NOT NULL** hota hai.
Har table me **sirf ek primary key** ho sakti hai.

🧠 **Example:**

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
```

Yahaan `id` primary key hai, har user ka id alag hoga.

---

### **5. What is Foreign Key?**

Foreign key ek column hota hai jo **dusri table ki primary key ko refer karta hai.**
Yeh **tables ke beech relation banata hai.**

🧠 **Example:**

```sql
CREATE TABLE orders (
  order_id INT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Yahaan `user_id` foreign key hai jo `users` table ke `id` se link hai.

---

### **6. What is UNIQUE Key?**

UNIQUE key bhi ek column me **unique values** ko hi allow karta hai.
Lekin isme **NULL allowed hota hai** (ek ya ek se jyada depending on DBMS).

🧠 **Example:**

```sql
CREATE TABLE users (
  email VARCHAR(100) UNIQUE
);
```

Har user ka email alag hona chahiye, lekin kuch rows me `NULL` ho sakta hai.

---

### **7. Difference between Primary Key and UNIQUE Key?**

| Feature         | Primary Key                   | UNIQUE Key               |
| --------------- | ----------------------------- | ------------------------ |
| Uniqueness      | Yes                           | Yes                      |
| NULL allowed    | ❌ (Not allowed)               | ✅ (Allowed)              |
| Count per table | 1 hi hoti hai                 | Multiple UNIQUE ho sakte |
| Use             | Record identify karne ke liye | Extra validation ke liye |

| Key Type      | Uniqueness | NULL Allowed | Count Per Table | Purpose                        |
| ------------- | ---------- | ------------ | --------------- | ------------------------------ |
| Primary Key   | ✅          | ❌            | 1 only          | Unique ID of row               |
| Foreign Key   | ❌          | ✅            | Many            | Link with other table          |
| Unique Key    | ✅          | ✅            | Many            | Ensure unique data             |
| Composite Key | ✅          | ❌            | 1 (as primary)  | Combine columns for uniqueness |
| Candidate Key | ✅          | ❌            | Many            | Potential primary keys         |
| Alternate Key | ✅          | ❌            | Many            | Candidate keys not selected    |
| Super Key     | ✅          | ✅            | Many            | Any combo identifying row      |

| Term          | Desi Bhasha Me Example                                           |
| ------------- | ---------------------------------------------------------------- |
| Primary Key   | Aapka **Aadhar Card Number**                                     |
| Foreign Key   | Aapki **Gaav ki Family ID** — jo dusre table se juri hai         |
| Unique Key    | Aapka **Mobile Number** ya **Email** — unique hona chahiye       |
| Composite Key | Aapka **(Aadhar + Date of Birth)** dono milke unique banta hai   |
| Candidate Key | Aapke paas 3 ID proofs — koi bhi valid ho sakta tha              |
| Alternate Key | Jo ID proof select nahi hua, par fir bhi unique tha              |
| Super Key     | Aapka **Aadhar + Name + Email** — extra info ke saath bhi unique |

---

### **8. What is NOT NULL Constraint?**

NOT NULL ka matlab hai ki column me **value deni hi padegi**, khaali (NULL) nahi chhod sakte.

🧠 **Example:**

```sql
CREATE TABLE users (
  name VARCHAR(100) NOT NULL
);
```

`name` field khaali nahi chhod sakte.

---

### **9. What is Default Constraint?**

Agar user koi value na de column ke liye, to **default constraint** ek predefined value set kar deta hai.

🧠 **Example:**

```sql
CREATE TABLE users (
  country VARCHAR(100) DEFAULT 'India'
);
```

Agar country na diya to by default "India" set ho jayega.

---

### **10. Difference between DELETE, TRUNCATE, and DROP**

| Command      | Kaam Kya Karta Hai                          | Rollback hota? | Table structure?       |
| ------------ | ------------------------------------------- | -------------- | ---------------------- |
| **DELETE**   | Rows delete karta hai (WHERE ke sath)       | ✅ Haan         | ❌ Safe                 |
| **TRUNCATE** | Puri table ke data ko fast delete karta hai | ❌ Nahi         | ❌ Safe                 |
| **DROP**     | Table ko hi hata deta hai                   | ❌ Nahi         | ❌ Structure bhi delete |

🧠 **Example:**

```sql
DELETE FROM users WHERE id = 1;    -- Sirf ek row delete
TRUNCATE TABLE users;              -- Sab data delete
DROP TABLE users;                  -- Table hi ud gaya
```

---


Bilkul Sajid bhai, ab chalte hain **SQL Joins aur clauses** ke taraf — simple desi style me, 4 saal ke experienced developer jaise explain karta hoon:

---

### **11. Difference between WHERE and HAVING**

| Feature             | WHERE                             | HAVING                              |
| ------------------- | --------------------------------- | ----------------------------------- |
| Use hota            | **Row-wise filter** karne ke liye | **Group-wise filter** karne ke liye |
| Lagta kab           | **Before GROUP BY**               | **After GROUP BY**                  |
| Aggregate functions | ❌ Use nahi kar sakte              | ✅ Use kar sakte (like SUM, COUNT)   |

🧠 **Example:**

```sql
-- WHERE
SELECT * FROM users WHERE age > 30;

-- HAVING
SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 5;
```

---

### **12. What are Joins in SQL?**

**Joins** ka use hota hai **2 ya usse zyada tables ke data ko combine** karne ke liye, **common column** ke base par.

---

### **13. What is INNER JOIN?**

INNER JOIN sirf unhi rows ko return karta hai jaha **dono tables me matching records hote hain.**

🧠 **Example:**

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

---

### **14. What is LEFT JOIN (or LEFT OUTER JOIN)?**

LEFT JOIN **left table ka pura data** laata hai, aur agar right table me match nahi mila to `NULL` bhar deta hai.

🧠 **Example:**

```sql
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

> Jo users ne order nahi diya unka bhi naam aayega.

---

### **15. What is RIGHT JOIN (or RIGHT OUTER JOIN)?**

RIGHT JOIN **right table ka pura data** laata hai, aur agar left table me match nahi mila to `NULL`.

🧠 **Example:**

```sql
SELECT users.name, orders.amount
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

> Jo orders orphan hai (user missing), wo bhi dikhenge.

---

### **16. What is FULL JOIN (or FULL OUTER JOIN)?**

FULL JOIN me **left + right dono ka full data** milta hai, chahe match ho ya na ho.
Jahan match nahi hota waha `NULL` bhar deta hai.

🧠 **Example:**

```sql
SELECT users.name, orders.amount
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;
```

> Dono table ke unmatched data bhi milega.

---

### **17. What is Self Join?**

Jab **ek hi table ko do baar join** karte ho, tab usse **Self Join** kehte hain. Mostly hierarchy ya relationships me kaam aata hai.

🧠 **Example:**

```sql
SELECT A.name AS Employee, B.name AS Manager
FROM employees A
JOIN employees B ON A.manager_id = B.id;
```

---

### **18. What is Cross Join?**

Cross join **cartesian product** deta hai — har row left table ki har row right table se combine hoti hai.

🧠 **Example:**

```sql
SELECT * FROM colors CROSS JOIN sizes;
```

> Agar 3 colors aur 2 sizes hain, to total 3×2 = **6 rows** aayengi.

---

### **19. What is UNION and UNION ALL?**

* `UNION` => **Combine** karta hai 2 queries ka result aur **duplicate hata deta hai**
* `UNION ALL` => Combine karta hai **without removing duplicates**

🧠 **Example:**

```sql
SELECT name FROM employees
UNION
SELECT name FROM clients;

-- vs

SELECT name FROM employees
UNION ALL
SELECT name FROM clients;
```

---

### **20. Difference between UNION and UNION ALL**

| Feature    | UNION                                   | UNION ALL          |
| ---------- | --------------------------------------- | ------------------ |
| Duplicates | ❌ Hata deta hai                         | ✅ Sab dikhata hai  |
| Speed      | Thoda slow (because of duplicate check) | Fast (no checking) |
| Use when   | Clean & distinct result chahiye         | Raw data chahiye   |

---

---

### **21. What is Normalization?**

**Normalization** ek process hai jisme hum database ko aise design karte hain taaki:

* Data **duplicate na ho**
* Storage **optimize ho**
* Data **consistency** bani rahe

🧠 **Simple Example:**
Agar har order me customer ka pura address repeat ho raha hai — to Normalization me hum customer details alag table me rakh denge.

---

### **22. What is Denormalization?**

**Denormalization** ka matlab hai ki **data ko purposely duplicate** karna taaki **performance fast ho jaye** (especially in reporting or read-heavy systems).

🧠 **Example:**
Instead of joining `customer` and `orders`, denormalized table me hum customer ka naam directly `orders` table me store kar dete hain.

---

### **23. Difference between CHAR and VARCHAR**

| Feature | CHAR                         | VARCHAR                   |
| ------- | ---------------------------- | ------------------------- |
| Length  | **Fixed length**             | **Variable length**       |
| Speed   | Thoda fast (fixed size)      | Slightly slow             |
| Storage | Jo define kiya, utna hi lega | Jitna likha, utna hi lega |

🧠 **Example:**

```sql
name CHAR(10)     -- "Sajid   " (space fill)
name VARCHAR(10)  -- "Sajid" (no extra space)
```

---

### **24. Difference between SQL and MySQL**

| SQL                   | MySQL                         |
| --------------------- | ----------------------------- |
| Ek **language** hai   | Ek **software (DBMS)** hai    |
| Used to write queries | Used to **store/manage data** |
| General concept       | Specific implementation       |

🧠 **Simple words me:**

> SQL = Grammar
> MySQL = School jaha grammar use hota hai

---

### **25. What is Auto Increment in SQL?**

`AUTO_INCREMENT` ek property hai jo **automatically number badhata hai** har naye row me.

🧠 **Example:**

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY (id)
);
```

> 1st row: id = 1, next = 2, 3, 4...

---

### **26. What is Subquery?**

Subquery ek query hoti hai jo **kisi aur query ke andar likhi jaati hai**.

🧠 **Example:**

```sql
SELECT name FROM users 
WHERE id IN (SELECT user_id FROM orders);
```

---

### **27. What is Nested Query?**

Nested query bhi subquery hi hoti hai — matlab query ke andar query.

🧠 Same Example:

```sql
SELECT * FROM products 
WHERE price < (SELECT AVG(price) FROM products);
```

---

### **28. What is Correlated Subquery?**

Isme **inner query har row ke liye baar-baar run hoti hai** outer query ke sath link hoke.

🧠 **Example:**

```sql
SELECT name 
FROM employees e1 
WHERE salary > (SELECT AVG(salary) FROM employees WHERE dept = e1.dept);
```

> Har employee ke department ka average nikala jaa raha hai individually.

---

### **29. What is GROUP BY in SQL?**

`GROUP BY` ek clause hai jo **similar rows ko group** karta hai, taaki hum aggregate function use kar sakein jaise COUNT, SUM, AVG.

🧠 **Example:**

```sql
SELECT city, COUNT(*) 
FROM users 
GROUP BY city;
```

> Har city me kitne users hain, wo batayega.

---

### **30. Difference between GROUP BY and ORDER BY**

| Feature       | GROUP BY                          | ORDER BY                     |
| ------------- | --------------------------------- | ---------------------------- |
| Kaam kya hai? | Group karna (aggregation ke liye) | Sort karna (display ke liye) |
| Function use  | COUNT, SUM, AVG                   | Nahin                        |
| Order change? | ❌ No                              | ✅ Yes                        |

🧠 **Example:**

```sql
-- Group users by city
SELECT city, COUNT(*) FROM users GROUP BY city;

-- Sort users by name
SELECT * FROM users ORDER BY name ASC;
```

---

### **31. What is the use of LIMIT in SQL?**

`LIMIT` ka use hota hai **result ka number restrict** karne ke liye.
Ye mainly **MySQL** me use hota hai (SQL Server me `TOP`, Oracle me `ROWNUM` use hota hai).

🧠 **Example:**

```sql
SELECT * FROM users LIMIT 5;
```

> Sirf pehle 5 rows laayega.

---

### **32. How to find the Second Highest Salary in SQL?**

✅ **Method 1: Using `LIMIT`**

```sql
SELECT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;
```

✅ **Method 2: Using Subquery**

```sql
SELECT MAX(salary) 
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);
```

---

### **33. How to find Duplicate Records in a table?**

🧠 Example: Find duplicate emails:

```sql
SELECT email, COUNT(*) 
FROM users 
GROUP BY email 
HAVING COUNT(*) > 1;
```

> Jahan same email 1 se jyada bar hai, wo dikhega.

---

### **34. What is CTE (Common Table Expression)?**

CTE ek **temporary result set** hota hai jo ek query ke start me define hota hai, aur baad me usi query me use hota hai.

🧠 Syntax:

```sql
WITH TopSalaries AS (
  SELECT name, salary FROM employees WHERE salary > 50000
)
SELECT * FROM TopSalaries WHERE name LIKE 'S%';
```

> Yeh reusable subquery jaisa kaam karta hai.

---

### **35. What is Temporary Table in SQL?**

Temporary Table ek aisi table hoti hai jo **sirf session ke liye hoti hai**, session close hone par automatically delete ho jaati hai.

🧠 **Example:**

```sql
CREATE TEMPORARY TABLE temp_users (
  id INT, name VARCHAR(100)
);
```

---

### **36. What is Window Function in SQL?**

Window functions allow karte hain **row-wise calculation within a set** of rows (partition), bina grouping ke.

🧠 Example: Salary ke upar running total:

```sql
SELECT name, salary, 
       SUM(salary) OVER (ORDER BY salary) AS running_total
FROM employees;
```

> Aggregate + individual row values = same query me milta hai.

---

### **37. Difference between ROW\_NUMBER(), RANK(), and DENSE\_RANK()**

| Function       | Duplicate Rank | Gap in Rank | Unique Row Number |
| -------------- | -------------- | ----------- | ----------------- |
| `ROW_NUMBER()` | ❌ No           | ✅ Yes       | ✅ Yes             |
| `RANK()`       | ✅ Yes          | ✅ Yes       | ❌ May skip ranks  |
| `DENSE_RANK()` | ✅ Yes          | ❌ No        | ❌ Continuous      |

🧠 Example:

```sql
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn,
       RANK() OVER (ORDER BY salary DESC) AS rnk,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS drnk
FROM employees;
```

---

### **38. What is CASE Statement in SQL?**

`CASE` ek conditional statement hota hai jo SQL me **if-else jaisa** kaam karta hai.

🧠 **Example:**

```sql
SELECT name, salary,
  CASE 
    WHEN salary > 50000 THEN 'High'
    WHEN salary > 30000 THEN 'Medium'
    ELSE 'Low'
  END AS salary_level
FROM employees;
```

---

### **39. What is COALESCE in SQL?**

`COALESCE()` pehla **non-NULL value return** karta hai.

🧠 **Example:**

```sql
SELECT name, COALESCE(phone, 'Not Provided') AS contact 
FROM users;
```

---

### **40. What is NVL Function in SQL?**

`NVL()` bhi NULL handle karta hai, **Oracle SQL** me use hota hai.
MySQL me `IFNULL()`, SQL Server me `ISNULL()` use hota hai.

🧠 **Example (Oracle):**

```sql
SELECT name, NVL(phone, 'No Phone') FROM users;
```

---

🔥 Bonus:

* `COALESCE(a, b, c)` => First non-null from a, b, c
* `NVL(a, b)` => If `a` is null, then `b`

---
Sajid bhai, ab 41 se 50 tak ke questions bhi full clarity ke sath samjhte hain — **interview ready + desi style** me. Ye sab topics 4 saal ke experienced dev se definitely pooche ja sakte hain, especially agar aap **backend / full stack** ho.

---

### **41. What is Indexing in SQL?**

Indexing ka kaam hota hai **query ko fast karna**, jaise book ke last me index hota hai chapter dhoondhne ke liye.

🔍 **Without index**: Pura table scan hota hai
⚡ **With index**: Direct jump hota hai matching rows pe

🧠 **Syntax:**

```sql
CREATE INDEX idx_name ON users(name);
```

---

### **42. What is Clustered Index?**

Clustered Index me **actual data physically sorted** hota hai us index ke basis pe.
Ek table me **sirf 1 clustered index** ho sakta hai.

🧠 **Example:**
Primary key by default clustered index hota hai:

```sql
CREATE TABLE users (
  id INT PRIMARY KEY, -- clustered index yahan
  name VARCHAR(100)
);
```

---

### **43. What is Non-Clustered Index?**

Non-clustered index ek **pointer-based** index hota hai — ye actual data ki copy nahi hoti, bas address hota hai.

> Ek table me **multiple non-clustered indexes** ho sakte hain.

🧠 **Example:**

```sql
CREATE NONCLUSTERED INDEX idx_name ON users(name);
```

---

### **44. Clustered vs Non-Clustered Index**

| Feature               | Clustered Index          | Non-Clustered Index                  |
| --------------------- | ------------------------ | ------------------------------------ |
| Data ka order         | Physically sort hota hai | Alag se pointer maintain hota hai    |
| Count per table       | Sirf 1 allowed           | Multiple allowed                     |
| Storage               | Table itself             | Separate structure                   |
| Speed for range query | Fast (since sorted)      | Slower than clustered (needs lookup) |

---

### **45. What is View in SQL?**

**View** ek **virtual table** hoti hai jo kisi SELECT query ke base pe banti hai. Isme data store nahi hota — sirf query hoti hai.

🧠 **Example:**

```sql
CREATE VIEW active_users AS
SELECT name, email FROM users WHERE status = 'active';
```

---

### **46. View vs Table**

| Feature           | View (Virtual)                   | Table (Physical) |
| ----------------- | -------------------------------- | ---------------- |
| Data store karta? | ❌ Nahi (query-based)             | ✅ Haan           |
| Update possible?  | Limited (depends on complexity)  | ✅ Full           |
| Performance       | Slower than table (runtime calc) | Faster           |

---

### **47. What is Stored Procedure?**

Stored Procedure ek **predefined SQL code block** hota hai jo hum bar-bar run kar sakte hain — jaise ek function backend me.

🧠 **Example:**

```sql
CREATE PROCEDURE GetUsers()
BEGIN
  SELECT * FROM users;
END;
```

> Fir run karne ke liye: `CALL GetUsers();`

---

### **48. Function vs Stored Procedure**

| Feature        | Function                  | Stored Procedure              |
| -------------- | ------------------------- | ----------------------------- |
| Return karta?  | ✅ Ek value                | ❌ Ya ✅ (multiple results)     |
| Use in query?  | ✅ Yes (SELECT me)         | ❌ Nahi (direct call hoti hai) |
| DML allowed?   | ❌ Mostly nahi (only read) | ✅ Yes (INSERT, DELETE...)     |
| Error handling | ❌ Limited                 | ✅ Proper handling             |

---

### **49. What is Trigger in SQL?**

**Trigger** ek auto-event hai jo **table pe koi action hone par** chal jata hai (insert/update/delete). Jaise **auto security alarm**.

🧠 **Example:**

```sql
CREATE TRIGGER after_insert_user
AFTER INSERT ON users
FOR EACH ROW
BEGIN
  INSERT INTO audit_log(action) VALUES ('User inserted');
END;
```

---

### **50. What is Cursor in SQL?**

Cursor use hota hai jab **row-by-row** kaam karna padta hai table pe — jaise loop SQL ke andar.

🧠 **Example:**

```sql
DECLARE cursor_name CURSOR FOR 
SELECT name FROM users;

-- OPEN, FETCH, LOOP, CLOSE ka sequence hota hai
```

> Cursor **slow** hote hain, but **needed in complex logic**.

---
Sajid bhai, ab chalte hain last 51-60 SQL interview questions ke taraf — ye wale questions **intermediate to advanced level** ke hain, lekin main inko bhi **desi aur real-life examples** ke sath asaan bana raha hoon 💡

---

### **51. What is the ACID Property in SQL?**

ACID ka matlab hai:

| Property        | Matlab (Desi Me)                                    |
| --------------- | --------------------------------------------------- |
| A = Atomicity   | Ya to **poora kaam hoga**, ya **kuch bhi nahi**     |
| C = Consistency | Rules follow hone chahiye (constraints break na ho) |
| I = Isolation   | **Do transaction** ek dusre me interfere na karein  |
| D = Durability  | Power cut ke baad bhi **data safe rahe**            |

> ACID ensures: **transaction reliable aur safe rahe**

---

### **52. What is a Transaction in SQL?**

Transaction = **Ek group of SQL statements** jo ek sath kaam karte hain — ya to **sab chalenge ya kuch bhi nahi**.

🧠 **Example:**

```sql
BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;
```

> Agar beech me error aaye to `ROLLBACK` karte hain.

---

### **53. Difference between COMMIT and ROLLBACK**

| Command    | Kaam Kya Karta Hai                        |
| ---------- | ----------------------------------------- |
| `COMMIT`   | Changes ko **permanently save** karta hai |
| `ROLLBACK` | Changes ko **cancel / undo** karta hai    |

🧠 After `COMMIT`, ROLLBACK nahi ho sakta.

---

### **54. What is Savepoint in SQL?**

`SAVEPOINT` ek marker hota hai transaction ke beech jahan tak aap **rollback** kar sakte ho.

🧠 **Example:**

```sql
BEGIN;
UPDATE users SET name='Sajid' WHERE id=1;
SAVEPOINT sp1;
UPDATE users SET name='Mohammad' WHERE id=2;
ROLLBACK TO sp1;
COMMIT;
```

> Sirf second update rollback hoga, pehla safe rahega.

---

### **55. Difference between IN and EXISTS**

| Feature  | IN                            | EXISTS                                      |
| -------- | ----------------------------- | ------------------------------------------- |
| Use      | Set of static/returned values | Check karta hai **kya row exist karti hai** |
| Speed    | Small data set ke liye fast   | Big data set ke liye better                 |
| Subquery | Subquery pe depend karta hai  | Outer query pe depend karta hai             |

🧠 **Example:**

```sql
-- IN
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);

-- EXISTS
SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
```

---

### **56. Difference between DELETE and TRUNCATE**

| Feature          | DELETE                   | TRUNCATE                             |
| ---------------- | ------------------------ | ------------------------------------ |
| Row by row?      | ✅ Yes                    | ❌ All rows ek sath                   |
| Rollback?        | ✅ Yes (transaction safe) | ❌ Mostly nahi (except in some RDBMS) |
| Trigger chalega? | ✅ Yes                    | ❌ Nahi                               |
| Speed            | Slow (row-level)         | Fast (bulk deletion)                 |

---

### **57. What is Index Fragmentation?**

Jab **index ka structure bigad jata hai**, to usse **fragmentation** kehte hain — jisse performance slow ho jaata hai.

🧠 Real-life: Jaise book ka index ulta-pulta ho jaye, dhoondhne me time lagta hai.

**Fix:** `REBUILD` ya `REORGANIZE` index karte hain.

---

### **58. Difference between RANK() and DENSE\_RANK()**

| Feature         | RANK()                | DENSE\_RANK()       |
| --------------- | --------------------- | ------------------- |
| Duplicate ranks | ✅ Yes                 | ✅ Yes               |
| Gap in rank?    | ✅ Yes (skip hota hai) | ❌ No (continuously) |

🧠 Example (for salaries: 100, 90, 90, 80):

* RANK → 1, 2, 2, **4**
* DENSE\_RANK → 1, 2, 2, **3**

---

### **59. How to fetch common records from two tables?**

✅ **Using INNER JOIN:**

```sql
SELECT * 
FROM table1 t1
INNER JOIN table2 t2 ON t1.id = t2.id;
```

✅ **Using INTERSECT** (in some DBs like PostgreSQL/Oracle):

```sql
SELECT id FROM table1
INTERSECT
SELECT id FROM table2;
```

---

### **60. Difference between UNION and JOIN**

| Feature        | UNION                           | JOIN                           |
| -------------- | ------------------------------- | ------------------------------ |
| Merge how?     | **Vertically** (row-wise)       | **Horizontally** (column-wise) |
| Columns needed | Same number and type            | Can be different               |
| Use case       | Combine same-structured queries | Combine related tables         |

🧠 Example:

```sql
-- UNION: Combine data from same structure
SELECT name FROM employees
UNION
SELECT name FROM managers;

-- JOIN: Combine related columns from related tables
SELECT e.name, d.name 
FROM employees e
JOIN departments d ON e.dept_id = d.id;
```

---

Bhai **Sajid**, ab final 61–70 SQL interview questions ka time hai — bilkul **interview-ready, real-world level, desi style** me! Ye questions advanced + practical bhi hain, jo coding rounds aur experienced-level interviews me aate hain.

---

### **61. What is Pivot Table in SQL?**

Pivot table ka kaam hota hai **row data ko column me convert** karna — jaise Excel me hum month-wise sales pivot karte hain.

🧠 **Example:**

```sql
SELECT department,
       SUM(CASE WHEN gender = 'Male' THEN 1 ELSE 0 END) AS Male_Count,
       SUM(CASE WHEN gender = 'Female' THEN 1 ELSE 0 END) AS Female_Count
FROM employees
GROUP BY department;
```

> Har department me kitne male/female hain — rows ko columns me dikhaya.

---

### **62. What is Case Sensitivity in SQL?**

**Case Sensitivity** ka matlab: `"Sajid"` aur `"sajid"` same hai ya nahi.

* SQL **keywords** (SELECT, FROM) → **Not case-sensitive**
* **Data & column names** → Depends on DBMS & collation

🧠 Example:

```sql
SELECT * FROM users WHERE name = 'sajid';
```

> MySQL me case-insensitive hota hai by default (`utf8_general_ci`)
> But PostgreSQL me sensitive hota hai.

---

### **63. How to find the Nth Highest Salary?**

✅ **Using `DISTINCT`, `LIMIT`, `OFFSET`:**

```sql
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 2; -- 3rd highest salary
```

✅ **Using Subquery:**

```sql
SELECT MIN(salary) 
FROM (
  SELECT DISTINCT salary 
  FROM employees 
  ORDER BY salary DESC 
  LIMIT 3
) AS temp;
```

---

### **64. How to get First 3 Maximum Salaries?**

🧠 **Simple Query:**

```sql
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 3;
```

✅ Or use `RANK()`:

```sql
SELECT name, salary
FROM (
  SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) AS temp
WHERE rnk <= 3;
```

---

### **65. Difference between DROP, DELETE, and TRUNCATE**

| Command    | Kya karta hai                     | Rollback? | Table safe?       |
| ---------- | --------------------------------- | --------- | ----------------- |
| `DELETE`   | Row by row delete karta hai       | ✅ Yes     | ✅ Table safe      |
| `TRUNCATE` | Sab rows delete instantly         | ❌ No      | ✅ Table safe      |
| `DROP`     | Table ko puri tarah hata deta hai | ❌ No      | ❌ Table bhi gayab |

🧠 Ek line me:

* **DELETE**: Slowly remove data
* **TRUNCATE**: Quickly empty
* **DROP**: Poora table uda do

---

### **66. How to calculate Age from DOB in SQL?**

🧠 **MySQL:**

```sql
SELECT name, 
       FLOOR(DATEDIFF(CURDATE(), dob) / 365) AS age 
FROM users;
```

🧠 **SQL Server:**

```sql
SELECT name, 
       DATEDIFF(YEAR, dob, GETDATE()) AS age 
FROM users;
```

---

### **67. What is Recursive Query in SQL?**

Recursive query ka use tab hota hai jab **hierarchical data** chahiye (jaise manager-employee tree, categories, folders).

✅ **CTE ke through:**

```sql
WITH RECURSIVE emp_hierarchy AS (
  SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id
  FROM employees e
  JOIN emp_hierarchy h ON e.manager_id = h.id
)
SELECT * FROM emp_hierarchy;
```

---

### **68. Difference between Temporary Table and CTE**

| Feature        | Temporary Table          | CTE (Common Table Expression) |
| -------------- | ------------------------ | ----------------------------- |
| Lifetime       | Session tak rahegi       | Only during that query        |
| Multiple use?  | ✅ Yes                    | ❌ One-time only               |
| Index allowed? | ✅ Yes                    | ❌ Not allowed                 |
| Syntax         | `CREATE TEMPORARY TABLE` | `WITH cte_name AS (...)`      |

---

### **69. How to find Odd and Even Records in SQL?**

🧠 **Using ID or ROW\_NUMBER():**

```sql
-- Even
SELECT * FROM users WHERE MOD(id, 2) = 0;

-- Odd
SELECT * FROM users WHERE MOD(id, 2) = 1;
```

> SQL Server: Use `id % 2` instead of `MOD()`

---

### **70. What is JSON in SQL?**

JSON = **JavaScript Object Notation**. Modern DBs JSON support karte hain, especially MySQL 5.7+, PostgreSQL.

🧠 Example:

```sql
SELECT JSON_EXTRACT('{"name":"Sajid", "age":30}', '$.name');
-- Output: "Sajid"
```

✅ JSON ko:

* Store kar sakte ho JSON datatype me
* Query kar sakte ho JSON functions se
* Easily pass kar sakte ho APIs ke through

---

Sajid bhai, ab chalte hain **71 se 80 tak** SQL ke interview questions pe — yah questions **query-focused + practical-based** hote hain, jo real-world problems me bhi kaam aate hain.
As always, desi example ke sath samjhte hain 💡

---

### **71. What is XML in SQL?**

XML = **Extensible Markup Language**
SQL databases (especially SQL Server) me XML ka use hota hai **structured data store ya transfer karne ke liye**.

🧠 Example (SQL Server):

```sql
SELECT emp_id, emp_name
FROM employees
FOR XML AUTO;
```

> Output data XML format me aayega — mostly reporting aur APIs me use hota hai.

---

### **72. How to Handle NULL Values in SQL?**

NULL = Data missing ya unknown hota hai.

✅ **Common Functions:**

```sql
-- If NULL, replace with default value
SELECT COALESCE(email, 'Not Provided') FROM users;

-- Check NULLs
SELECT * FROM users WHERE phone IS NULL;
```

🧠 Functions: `COALESCE()`, `ISNULL()` (SQL Server), `IFNULL()` (MySQL), `NVL()` (Oracle)

---

### **73. What is Dynamic SQL?**

Dynamic SQL = SQL query jo **runtime pe banayi jaati hai** as a **string**, aur `EXECUTE` ya `PREPARE` se chalayi jaati hai.

🧠 Example:

```sql
SET @query = 'SELECT * FROM users WHERE name = "Sajid"';
PREPARE stmt FROM @query;
EXECUTE stmt;
```

Use case: Jab column/table name ya condition **dynamic ho user input ke hisaab se**.

---

### **74. How to Calculate Percentage in SQL?**

🧠 **Example:**

```sql
SELECT name, 
       marks, 
       (marks / total_marks) * 100 AS percentage
FROM students;
```

> Make sure `marks` aur `total_marks` float ya decimal ho — warna integer division ho jaata hai.

---

### **75. How to Find Employees who Earn More than Their Manager?**

🧠 **Assume same table me manager\_id hai:**

```sql
SELECT e.name, e.salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

> Self join lagana padta hai.

---

### **76. How to Find Duplicate Emails in Employee Table?**

```sql
SELECT email, COUNT(*) as count
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;
```

> GROUP BY se duplicate ka count milta hai.

---

### **77. How to Get Highest Salary in Each Department?**

✅ **Using GROUP BY + MAX:**

```sql
SELECT department_id, MAX(salary) AS highest_salary
FROM employees
GROUP BY department_id;
```

✅ **If name bhi chahiye (using RANK):**

```sql
SELECT * FROM (
  SELECT name, department_id, salary,
         RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
  FROM employees
) AS temp
WHERE rnk = 1;
```

---

### **78. How to Find Employees Joined in Last 3 Months?**

🧠 **MySQL:**

```sql
SELECT * 
FROM employees 
WHERE joining_date >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH);
```

🧠 **SQL Server:**

```sql
SELECT * 
FROM employees 
WHERE joining_date >= DATEADD(MONTH, -3, GETDATE());
```

---

### **79. How to Display the First 5 Records in SQL?**

✅ **MySQL / PostgreSQL:**

```sql
SELECT * FROM employees LIMIT 5;
```

✅ **SQL Server:**

```sql
SELECT TOP 5 * FROM employees;
```

✅ **Oracle:**

```sql
SELECT * FROM employees WHERE ROWNUM <= 5;
```

---

### **80. How to Find Number of Employees in Each Department?**

```sql
SELECT department_id, COUNT(*) AS total_employees
FROM employees
GROUP BY department_id;
```

> Interview me yeh question zaroori hota hai — `GROUP BY` ka practical example.

---
Bhai **Sajid**, chalo ab complete karte hain tumhare **Top 90 SQL Interview Questions** ka mega set — ye 81–90 ke questions mostly **logical + tricky + real-world** wale hain, aur tumhare jaise experienced dev ke liye **interview favorite** hote hain 💡

---

### **81. How to Find the Last 3 Records in SQL?**

✅ **MySQL:**

```sql
SELECT * 
FROM employees 
ORDER BY id DESC 
LIMIT 3;
```

> Last 3 aayenge, lekin descending me. Agar ascending chahiye:

```sql
SELECT * FROM (
  SELECT * FROM employees ORDER BY id DESC LIMIT 3
) AS temp
ORDER BY id ASC;
```

---

### **82. How to Find Employees Without Managers?**

🧠 **Assume manager\_id NULL ya invalid ho sakti hai:**

```sql
-- Method 1: NULL manager_id
SELECT * FROM employees WHERE manager_id IS NULL;

-- Method 2: No matching manager in same table (Self JOIN)
SELECT e.* 
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
WHERE m.id IS NULL;
```

---

### **83. How to Find First Name Starting with 'A'?**

```sql
SELECT * 
FROM employees 
WHERE first_name LIKE 'A%';
```

> `%` = wildcard for any characters after A

---

### **84. How to Fetch Alternate Rows from a Table?**

✅ **MySQL using MOD():**

```sql
SELECT * 
FROM (
  SELECT *, ROW_NUMBER() OVER () AS rn FROM employees
) AS temp
WHERE MOD(rn, 2) = 1;
```

✅ **SQL Server:**

```sql
WITH temp AS (
  SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS rn FROM employees
)
SELECT * FROM temp WHERE rn % 2 = 1;
```

---

### **85. How to Swap Two Columns in SQL?**

🧠 You can't physically swap column **positions**, but you can **logically swap values**:

```sql
UPDATE employees
SET first_name = last_name,
    last_name = first_name;
```

⚠️ **Note:** Ye galat swap karega — correct way:

```sql
UPDATE employees
SET first_name = last_name,
    last_name = first_name;
```

> Needs a **temp column** or **single update with SET multiple**

---

### **86. How to Display Duplicate Records with Their Count?**

```sql
SELECT email, COUNT(*) AS count
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;
```

> Isse duplicate records ke sath count milega.

---

### **87. How to Find the Highest Salary Without Using MAX()?**

```sql
SELECT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1;
```

✅ **SQL Server:**

```sql
SELECT TOP 1 salary 
FROM employees 
ORDER BY salary DESC;
```

---

### **88. How to Fetch Common Records from Two Tables Without JOIN?**

✅ Use `INTERSECT` (if supported):

```sql
SELECT id FROM employees
INTERSECT
SELECT id FROM managers;
```

✅ OR use `IN`:

```sql
SELECT * FROM employees 
WHERE id IN (SELECT id FROM managers);
```

> JOIN nahi, but **same effect**.

---

### **89. How to Delete Duplicate Records from a Table?**

🧠 **Using CTE + ROW\_NUMBER():**

```sql
WITH temp AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
  FROM employees
)
DELETE FROM temp WHERE rn > 1;
```

> Har group me ek hi record rahega, baaki delete.

---

### **90. How to Find the Department with Highest Employee Count?**

```sql
SELECT department_id, COUNT(*) AS emp_count
FROM employees
GROUP BY department_id
ORDER BY emp_count DESC
LIMIT 1;
```

✅ OR use `RANK()`:

```sql
SELECT * FROM (
  SELECT department_id, COUNT(*) AS total,
         RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk
  FROM employees
  GROUP BY department_id
) AS temp
WHERE rnk = 1;
```

---

Sajid bhai, finally aa gaye hum **Top 100 SQL Interview Questions** ke final 91–100 tak! 🎯
Yeh questions **performance tuning, optimization, architecture level** ke hain — jaise ki **MNCs** aur **system-level interviews** me puchte hain.

Main inko bhi **desi + 4 saal ke experienced developer style** me explain kar raha hoon:

---

### **91. How to Optimize SQL Queries?**

Query optimize karne ke liye:

✅ **1. Index Lagao** – WHERE, JOIN, ORDER BY pe
✅ **2. SELECT \* Avoid Karo** – Sirf needed columns lo
✅ **3. Use WHERE clauses early**
✅ **4. Avoid subqueries inside loops**
✅ **5. JOINs pe proper ON condition lagao**
✅ **6. LIMIT lagao jab large data ho**

🧠 Example:

```sql
SELECT id, name FROM users WHERE city = 'Delhi';
```

> `city` column pe index hona chahiye.

---

### **92. What is Query Execution Plan?**

Query Execution Plan ek **blueprint** hota hai jisme SQL engine batata hai:

* Kaunsa index use hoga
* Table scan hoga ya index scan
* Join kis type ka use hoga (nested loop/hash)

🧠 **MySQL:**

```sql
EXPLAIN SELECT * FROM users WHERE email = 'a@b.com';
```

> Isse pata chalta hai query slow hai ya fast aur kyu.

---

### **93. How to Improve Query Performance?**

✅ **Tips:**

* Use proper indexing
* Use `EXISTS` instead of `IN` for large datasets
* Avoid functions in WHERE clause (e.g. `YEAR(dob) = 2000`)
* Use pagination (`LIMIT`) for big results
* Normalize data to reduce duplication
* Avoid joins on big tables without filter

---

### **94. What is Indexing?**

Index ek **shortcut** hota hai jisse query fast ho jaati hai.
Jaise dictionary me word search karna **A-Z index** ke through.

🧠 Example:

```sql
CREATE INDEX idx_email ON users(email);
```

> Jab email search karoge to pura table scan nahi karega — directly jump karega.

---

### **95. What is Table Partitioning?**

Partitioning ka matlab hota hai ek table ko **internally chhote-chhote parts me tod dena** (based on range, list, etc.)

🧠 Example:
Aap `sales` table ko **monthly partitions** me divide kar do — so `WHERE month = 'Jan'` fast ho jaata hai.

✅ Types:

* **Range** Partitioning
* **List** Partitioning
* **Hash** Partitioning

---

### **96. How to Avoid Deadlocks in SQL?**

Deadlock = Jab **do transactions ek dusre ka resource wait kar rahe ho** — aur dono ruk jaayein.

✅ **Avoid karne ke tips:**

* Always **access tables in same order**
* Keep **transactions short**
* Use `ROWLOCK` or `NOWAIT` if needed
* Handle retries in app

🧠 Example:

```sql
-- Transaction A locks row 1 then wants row 2
-- Transaction B locks row 2 then wants row 1 → deadlock
```

---

### **97. What is the Use of EXISTS in SQL?**

`EXISTS` check karta hai: kya **subquery me at least ek row hai?**
Fast hota hai especially in large subqueries.

🧠 Example:

```sql
SELECT name 
FROM users u 
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
```

> Bas check karna hai ki order exist karta hai ya nahi — doesn't fetch rows.

---

### **98. What is Query Optimization?**

Query Optimization = Query ko **aisa likhna ki wo jaldi execute ho**
Database engine **automatically optimize** karta hai query plan — aur hum bhi manual tuning kar sakte hain.

🧠 Examples:

* Use indexes
* Avoid nested queries
* Analyze execution plan
* Rewrite slow queries
* Denormalize if needed (read-heavy system)

---

### **99. Difference Between Stored Procedure and Function in SQL?**

| Feature        | Stored Procedure           | Function               |
| -------------- | -------------------------- | ---------------------- |
| Return         | Can return multiple values | Returns only one value |
| Use in SQL?    | Cannot use inside SELECT   | Can be used in SELECT  |
| DML allowed?   | ✅ INSERT/UPDATE allowed    | ❌ Usually not allowed  |
| Error handling | Better error control       | Limited                |

🧠 **Procedure = process | Function = value**

---

### **100. Difference Between OLTP and OLAP**

| Feature    | OLTP (Online Transaction Processing)    | OLAP (Online Analytical Processing) |
| ---------- | --------------------------------------- | ----------------------------------- |
| Purpose    | Day-to-day transactions (insert/update) | Data analysis/reporting             |
| Operations | INSERT, UPDATE, DELETE                  | SELECT with aggregations            |
| Speed      | Fast for write-heavy                    | Fast for read-heavy                 |
| DB Design  | Highly normalized                       | De-normalized (star schema)         |

🧠 Examples:

* **OLTP:** Banking, eCommerce
* **OLAP:** BI dashboards, Data warehouse

---


Sajid bhai, chalo ab in **Top 10 SQL Query-Based Questions** ko solve karte hain with examples — ye questions coding round aur real-world project me **bahut common aur practical** hote hain. Main **MySQL** syntax ke base pe likh raha hoon, lekin batata bhi rahunga agar SQL Server/PostgreSQL me difference ho.

---

### **1. How to retrieve the second-highest salary of an employee?**

```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (
  SELECT MAX(salary) FROM employees
);
```

✅ Alternate (Using LIMIT):

```sql
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;
```

---

### **2. How to get the Nth highest salary?**

(maan lo n = 4)

```sql
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 3;
```

> `OFFSET = n-1` (4th salary means offset 3)

---

### **3. How do you fetch all employees whose salary is greater than the average salary?**

```sql
SELECT * 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);
```

---

### **4. Write a query to display the current date and time**

✅ **MySQL:**

```sql
SELECT NOW() AS current_datetime;
```

✅ **SQL Server:**

```sql
SELECT GETDATE() AS current_datetime;
```

✅ **PostgreSQL:**

```sql
SELECT CURRENT_TIMESTAMP;
```

---

### **5. How to find duplicate records in a table?**

(maan lo column `email` me duplicate dekhna hai)

```sql
SELECT email, COUNT(*) AS count
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;
```

---

### **6. How can you delete duplicate rows?**

```sql
WITH cte AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
  FROM employees
)
DELETE FROM cte WHERE rn > 1;
```

> ✅ MySQL 8+, PostgreSQL, SQL Server me ye kaam karta hai.
> Pehle duplicates ko number do, fir rn > 1 ko delete karo.

---

### **7. How to get the common records from two tables?**

(maan lo `employees` aur `managers` table dono me `id` column hai)

```sql
SELECT id 
FROM employees 
WHERE id IN (SELECT id FROM managers);
```

✅ OR with JOIN:

```sql
SELECT e.* 
FROM employees e
JOIN managers m ON e.id = m.id;
```

---

### **8. How to retrieve the last 10 records from a table?**

```sql
SELECT * 
FROM employees 
ORDER BY id DESC 
LIMIT 10;
```

> Ye descending me aayega, agar ascending chahiye:

```sql
SELECT * FROM (
  SELECT * FROM employees ORDER BY id DESC LIMIT 10
) AS temp
ORDER BY id ASC;
```

---

### **9. How do you fetch the top 5 employees with the highest salaries?**

```sql
SELECT * 
FROM employees 
ORDER BY salary DESC 
LIMIT 5;
```

---

### **10. How to calculate the total salary of all employees?**

```sql
SELECT SUM(salary) AS total_salary 
FROM employees;
```

---

Sajid bhai, yeh rahe tumhare **query-based SQL questions (11–25)** ka complete solution set — real-world logic ke sath likha gaya hai, taaki tumhara **interview + practical duno crack ho jaye** 💯

---

### **11. Employees who joined in 2020**

```sql
SELECT * 
FROM employees 
WHERE YEAR(joining_date) = 2020;
```

---

### **12. Employees whose name starts with 'A'**

```sql
SELECT * 
FROM employees 
WHERE name LIKE 'A%';
```

---

### **13. Employees who do not have a manager**

```sql
SELECT * 
FROM employees 
WHERE manager_id IS NULL;
```

✅ OR

```sql
SELECT e.* 
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
WHERE m.id IS NULL;
```

---

### **14. Department with the highest number of employees**

```sql
SELECT department_id, COUNT(*) AS emp_count
FROM employees
GROUP BY department_id
ORDER BY emp_count DESC
LIMIT 1;
```

---

### **15. Count of employees in each department**

```sql
SELECT department_id, COUNT(*) AS emp_count
FROM employees
GROUP BY department_id;
```

---

### **16. Highest salary in each department**

```sql
SELECT * FROM (
  SELECT *,
         RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
  FROM employees
) AS temp
WHERE rnk = 1;
```

---

### **17. Update salary of all employees by 10%**

```sql
UPDATE employees
SET salary = salary * 1.10;
```

---

### **18. Employees with salary between 50,000 and 1,00,000**

```sql
SELECT * 
FROM employees 
WHERE salary BETWEEN 50000 AND 100000;
```

---

### **19. Youngest employee in the organization**

```sql
SELECT * 
FROM employees 
ORDER BY date_of_birth DESC 
LIMIT 1;
```

✅ Latest DOB → sabse chhota employee

---

### **20. First and Last Record from a table**

✅ **First:**

```sql
SELECT * 
FROM employees 
ORDER BY id ASC 
LIMIT 1;
```

✅ **Last:**

```sql
SELECT * 
FROM employees 
ORDER BY id DESC 
LIMIT 1;
```

---

### **21. Employees who report to a specific manager (e.g., id = 101)**

```sql
SELECT * 
FROM employees 
WHERE manager_id = 101;
```

---

### **22. Total number of departments**

```sql
SELECT COUNT(DISTINCT department_id) AS total_departments
FROM employees;
```

---

### **23. Department with the lowest average salary**

```sql
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY department_id
ORDER BY avg_sal ASC
LIMIT 1;
```

---

### **24. Delete all employees from a department (e.g., department\_id = 5)**

```sql
DELETE FROM employees 
WHERE department_id = 5;
```

---

### **25. Employees who have been in company for more than 5 years**

```sql
SELECT * 
FROM employees 
WHERE DATEDIFF(CURDATE(), joining_date) >= 365 * 5;
```

✅ SQL Server:

```sql
SELECT * 
FROM employees 
WHERE DATEDIFF(YEAR, joining_date, GETDATE()) >= 5;
```

---

### ✅ All Queries Done Bhai!

Tumne ab 25 aur **query-based problem-solving** kar li — isme:

* `JOIN`, `GROUP BY`, `UPDATE`, `DELETE`, `AGGREGATE`, `WINDOW FUNCTION` sab cover ho gaya 🎯
* Tum ready ho SQL coding round ke liye

---

Sajid bhai, chalo karte hain tumhare next **26 to 40 SQL coding questions** ka full solution — saare practical use cases ke sath, bilkul **job-level clarity** me. Yah set thoda aur advanced hai, lekin tumhari 4 saal ki skill se perfect match karega 💪

---

### **26. How to find the second-largest value from a table?**

```sql
SELECT MAX(salary) 
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);
```

✅ Alternate:

```sql
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;
```

---

### **27. Remove all records but keep the table structure**

```sql
TRUNCATE TABLE employees;
```

> TRUNCATE data hataata hai, structure safe rehta hai.

---

### **28. Get all employee records in XML format** (SQL Server)

```sql
SELECT id, name, salary
FROM employees
FOR XML AUTO;
```

✅ MySQL doesn't support native XML out-of-box.

---

### **29. Get current month’s name**

✅ **MySQL:**

```sql
SELECT MONTHNAME(CURDATE()) AS current_month;
```

✅ **SQL Server:**

```sql
SELECT DATENAME(MONTH, GETDATE()) AS current_month;
```

---

### **30. Convert string to lowercase**

✅ MySQL:

```sql
SELECT LOWER('SAJID') AS lower_text;
```

✅ SQL Server:

```sql
SELECT LOWER('SAJID');
```

---

### **31. Find employees who do not have subordinates**

```sql
SELECT * 
FROM employees e
WHERE NOT EXISTS (
  SELECT 1 
  FROM employees sub 
  WHERE sub.manager_id = e.id
);
```

---

### **32. Total sales per customer (sales table)**

```sql
SELECT customer_id, SUM(sale_amount) AS total_sales
FROM sales
GROUP BY customer_id;
```

---

### **33. Check if a table is empty**

```sql
SELECT CASE 
  WHEN EXISTS (SELECT 1 FROM employees) 
  THEN 'Not Empty' 
  ELSE 'Empty' 
END AS table_status;
```

---

### **34. Second highest salary in each department**

```sql
SELECT * FROM (
  SELECT *, 
         DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
  FROM employees
) AS temp
WHERE rnk = 2;
```

---

### **35. Employees with salary multiple of 10,000**

```sql
SELECT * 
FROM employees 
WHERE salary % 10000 = 0;
```

✅ MySQL me `%` and `MOD()` dono chalega.

---

### **36. Fetch records where column is NULL**

```sql
SELECT * 
FROM employees 
WHERE manager_id IS NULL;
```

> Always use `IS NULL`, not `= NULL`.

---

### **37. Total number of employees in each job title**

```sql
SELECT job_title, COUNT(*) AS total_employees
FROM employees
GROUP BY job_title;
```

---

### **38. Employees whose names end with ‘n’**

```sql
SELECT * 
FROM employees 
WHERE name LIKE '%n';
```

---

### **39. Employees who work in both departments 101 and 102**

🧠 Table should support multi-department mapping (assume `emp_dept` table exists)

```sql
SELECT employee_id 
FROM emp_dept
WHERE department_id IN (101, 102)
GROUP BY employee_id
HAVING COUNT(DISTINCT department_id) = 2;
```

---

### **40. Employees with the same salary**

```sql
SELECT * 
FROM employees 
WHERE salary IN (
  SELECT salary 
  FROM employees 
  GROUP BY salary 
  HAVING COUNT(*) > 1
);
```

---

Sajid bhai, aaj ke set me tum **41–55 tak ke SQL advanced query questions** pooch rahe ho — yah sab **real-world problem-solving** ke example hain, jo tumhare jaise experienced developer ke level ke hote hain. Let’s crack them all 💪

---

### **41. Update salaries of employees based on their department**

```sql
UPDATE employees
SET salary = CASE department_id
  WHEN 101 THEN salary * 1.10
  WHEN 102 THEN salary * 1.15
  ELSE salary
END;
```

---

### **42. List all employees without a department**

```sql
SELECT * 
FROM employees 
WHERE department_id IS NULL;
```

---

### **43. Max and Min salary in each department**

```sql
SELECT department_id, 
       MAX(salary) AS max_salary,
       MIN(salary) AS min_salary
FROM employees
GROUP BY department_id;
```

---

### **44. Employees hired in the last 6 months**

```sql
SELECT * 
FROM employees 
WHERE joining_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH);
```

---

### **45. Department-wise total and average salary**

```sql
SELECT department_id,
       SUM(salary) AS total_salary,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;
```

---

### **46. Employees who joined in the same month & year as their manager**

```sql
SELECT e.*
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE MONTH(e.joining_date) = MONTH(m.joining_date)
  AND YEAR(e.joining_date) = YEAR(m.joining_date);
```

---

### **47. Count of employees whose names start & end with same letter**

```sql
SELECT COUNT(*) AS total
FROM employees
WHERE LOWER(LEFT(name, 1)) = LOWER(RIGHT(name, 1));
```

---

### **48. Employee names and salaries in a single string**

```sql
SELECT CONCAT(name, ' earns ₹', salary) AS emp_salary_info
FROM employees;
```

---

### **49. Employees whose salary > manager’s salary**

```sql
SELECT e.*
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

---

### **50. Employees in departments with less than 3 employees**

```sql
SELECT * 
FROM employees 
WHERE department_id IN (
  SELECT department_id 
  FROM employees 
  GROUP BY department_id 
  HAVING COUNT(*) < 3
);
```

---

### **51. Employees with same first name**

```sql
SELECT * 
FROM employees 
WHERE name IN (
  SELECT name 
  FROM employees 
  GROUP BY name 
  HAVING COUNT(*) > 1
);
```

---

### **52. Delete employees who’ve been in company for more than 15 years**

```sql
DELETE FROM employees
WHERE DATEDIFF(CURDATE(), joining_date) > (15 * 365);
```

---

### **53. Employees under the same manager**

```sql
SELECT manager_id, GROUP_CONCAT(name) AS team_members
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id
HAVING COUNT(*) > 1;
```

> Shows managers with more than 1 team member.

---

### **54. Top 3 highest-paid employees in each department**

```sql
SELECT * FROM (
  SELECT *, 
         DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
  FROM employees
) AS temp
WHERE rnk <= 3;
```

---

### **55. Employees with 5+ years of experience in each department**

```sql
SELECT * 
FROM employees 
WHERE DATEDIFF(CURDATE(), joining_date) >= (5 * 365);
```

> You can group later for department-wise count if needed:

```sql
SELECT department_id, COUNT(*) 
FROM employees 
WHERE DATEDIFF(CURDATE(), joining_date) >= (5 * 365)
GROUP BY department_id;
```

---

Sajid bhai, welcome to **SQL Advanced Set (56–70)** — yah set tumhare **query writing, analytics, date functions, salary bands**, aur grouping ke concepts ko full polish kar dega 💯
Let’s solve these one by one — with real-life interview-level clarity:

---

### **56. Employees in departments that haven't hired anyone in past 2 years**

```sql
SELECT * 
FROM employees 
WHERE department_id IN (
  SELECT department_id 
  FROM employees 
  GROUP BY department_id
  HAVING MAX(joining_date) < DATE_SUB(CURDATE(), INTERVAL 2 YEAR)
);
```

---

### **57. Employees earning more than their department’s average**

```sql
SELECT * 
FROM employees e
WHERE salary > (
  SELECT AVG(salary) 
  FROM employees 
  WHERE department_id = e.department_id
);
```

---

### **58. Managers with more than 5 subordinates**

```sql
SELECT manager_id, COUNT(*) AS sub_count
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id
HAVING COUNT(*) > 5;
```

---

### **59. Name and hire date in "Name - MM/DD/YYYY" format**

```sql
SELECT CONCAT(name, ' - ', DATE_FORMAT(joining_date, '%m/%d/%Y')) AS formatted_info
FROM employees;
```

---

### **60. Employees whose salary is in top 10%**

```sql
SELECT * 
FROM employees 
WHERE salary >= (
  SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY salary) 
  FROM employees
);
```

✅ MySQL workaround:

```sql
SELECT * 
FROM employees 
ORDER BY salary DESC
LIMIT FLOOR(0.1 * (SELECT COUNT(*) FROM employees));
```

---

### **61. Group employees by age brackets (20–30, 31–40, etc.)**

```sql
SELECT 
  CASE 
    WHEN age BETWEEN 20 AND 30 THEN '20-30'
    WHEN age BETWEEN 31 AND 40 THEN '31-40'
    WHEN age BETWEEN 41 AND 50 THEN '41-50'
    ELSE '50+'
  END AS age_group,
  COUNT(*) AS total
FROM (
  SELECT TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) AS age
  FROM employees
) AS derived
GROUP BY age_group;
```

---

### **62. Average salary of top 5 earners in each department**

```sql
SELECT department_id, AVG(salary) AS avg_top5_salary
FROM (
  SELECT *, 
         ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
  FROM employees
) AS temp
WHERE rnk <= 5
GROUP BY department_id;
```

---

### **63. Percentage of employees in each department**

```sql
SELECT department_id, 
       COUNT(*) AS emp_count,
       ROUND(100 * COUNT(*) / (SELECT COUNT(*) FROM employees), 2) AS percentage
FROM employees
GROUP BY department_id;
```

---

### **64. Employees with email containing '@example.com'**

```sql
SELECT * 
FROM employees 
WHERE email LIKE '%@example.com';
```

---

### **65. Year-to-date sales for each customer**

```sql
SELECT customer_id, SUM(sale_amount) AS ytd_sales
FROM sales
WHERE sale_date >= DATE_FORMAT(CURDATE(), '%Y-01-01')
GROUP BY customer_id;
```

---

### **66. Hire date and day of the week**

```sql
SELECT name, 
       joining_date,
       DAYNAME(joining_date) AS day_of_week
FROM employees;
```

---

### **67. Employees older than 30 years**

```sql
SELECT * 
FROM employees 
WHERE TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) > 30;
```

---

### **68. Employees grouped by salary range (e.g., 0–20K, 20K–50K)**

```sql
SELECT 
  CASE 
    WHEN salary <= 20000 THEN '0-20K'
    WHEN salary <= 50000 THEN '20K-50K'
    WHEN salary <= 80000 THEN '50K-80K'
    ELSE '80K+'
  END AS salary_range,
  COUNT(*) AS total
FROM employees
GROUP BY salary_range;
```

---

### **69. Employees who do not have a bonus**

```sql
SELECT * 
FROM employees 
WHERE bonus IS NULL OR bonus = 0;
```

---

### **70. Highest, lowest & average salary per job role**

```sql
SELECT job_title,
       MAX(salary) AS highest,
       MIN(salary) AS lowest,
       ROUND(AVG(salary), 2) AS average
FROM employees
GROUP BY job_title;
```

---
