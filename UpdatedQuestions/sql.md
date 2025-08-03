
---

### SQL Interview Questions: Answers

#### Conceptual Questions (1-20)

1. **What is the difference between SQL and NoSQL databases?**
   - **SQL**: Relational databases (e.g., MySQL, PostgreSQL) use structured schemas, tables, and SQL for querying. Ideal for structured data and complex relationships.
   - **NoSQL**: Non-relational databases (e.g., MongoDB, Redis) use flexible schemas (e.g., documents, key-value). Ideal for unstructured data and scalability.
   - **Difference**: SQL enforces schemas; NoSQL is schema-less, better for big data and horizontal scaling.

2. **Explain the different types of JOINs in SQL with examples.**
   - **INNER JOIN**: Returns matching records from both tables.
     ```sql
     SELECT e.name, d.department_name
     FROM employees e
     INNER JOIN departments d ON e.department_id = d.id;
     ```
   - **LEFT JOIN**: Returns all records from the left table, with matching records from the right (NULL if no match).
     ```sql
     SELECT e.name, d.department_name
     FROM employees e
     LEFT JOIN departments d ON e.department_id = d.id;
     ```
   - **RIGHT JOIN**: Returns all records from the right table, with matching records from the left.
   - **FULL JOIN**: Returns all records when there’s a match in either table.
   - **CROSS JOIN**: Returns the Cartesian product of both tables.

3. **What are indexes, and how do they improve query performance?**
   - Indexes are data structures that improve query speed by allowing faster lookups.
   - **How they work**: Store column values in a sorted structure (e.g., B-tree), reducing search time.
   - **Trade-off**: Slows down writes (INSERT/UPDATE) due to index maintenance.
     ```sql
     CREATE INDEX idx_employee_name ON employees(name);
     ```

4. **Describe the ACID properties of a database transaction.**
   - **Atomicity**: Ensures all operations in a transaction complete, or none do.
   - **Consistency**: Maintains database integrity (e.g., constraints, referential integrity).
   - **Isolation**: Transactions are isolated, preventing partial changes from being visible.
   - **Durability**: Committed transactions are permanently saved, even in crashes.

5. **What is normalization, and what are the different normal forms?**
   - Normalization organizes data to eliminate redundancy and ensure integrity.
   - **Normal Forms**:
     - **1NF**: No repeating groups; all columns atomic.
     - **2NF**: 1NF + no partial dependencies (non-key attributes depend on entire primary key).
     - **3NF**: 2NF + no transitive dependencies (non-key attributes depend only on the primary key).
     - **BCNF**: 3NF + all determinants are candidate keys.

6. **Explain denormalization and when you would use it.**
   - Denormalization introduces redundancy to improve read performance at the cost of write efficiency.
   - **Use cases**: Read-heavy applications (e.g., reporting, analytics) where query speed is critical.
   - Example: Storing aggregated data in a table to avoid frequent JOINs.

7. **What is a primary key, and how does it differ from a foreign key?**
   - **Primary Key**: Uniquely identifies each record in a table; cannot be NULL.
     ```sql
     CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50));
     ```
   - **Foreign Key**: References a primary key in another table to enforce referential integrity.
     ```sql
     CREATE TABLE orders (id INT, employee_id INT, FOREIGN KEY (employee_id) REFERENCES employees(id));
     ```

8. **Describe the difference between HAVING and WHERE clauses.**
   - **WHERE**: Filters rows before grouping.
     ```sql
     SELECT department_id, COUNT(*)
     FROM employees
     WHERE salary > 50000
     GROUP BY department_id;
     ```
   - **HAVING**: Filters groups after aggregation.
     ```sql
     SELECT department_id, COUNT(*)
     FROM employees
     GROUP BY department_id
     HAVING COUNT(*) > 10;
     ```

9. **What are SQL triggers, and when would you use them?**
   - Triggers are stored procedures executed automatically on events (e.g., INSERT, UPDATE).
   - **Use cases**: Audit logging, enforcing business rules, updating related tables.
     ```sql
     CREATE TRIGGER log_update
     AFTER UPDATE ON employees
     FOR EACH ROW
     INSERT INTO audit_log (action, employee_id)
     VALUES ('UPDATE', OLD.id);
     ```

10. **Explain the concept of database transactions with an example.**
    - Transactions group SQL operations as a single unit, ensuring ACID properties.
      ```sql
      BEGIN TRANSACTION;
      UPDATE accounts SET balance = balance - 100 WHERE id = 1;
      UPDATE accounts SET balance = balance + 100 WHERE id = 2;
      COMMIT;
      ```

11. **What is a clustered vs. non-clustered index?**
    - **Clustered**: Determines physical order of data in a table (one per table, usually primary key).
    - **Non-clustered**: Separate structure with pointers to data (multiple allowed).
      ```sql
      CREATE CLUSTERED INDEX idx_clustered ON employees(id);
      CREATE NONCLUSTERED INDEX idx_nonclustered ON employees(name);
      ```

12. **How does a composite key work in SQL?**
    - A composite key uses multiple columns to uniquely identify records.
      ```sql
      CREATE TABLE order_details (
        order_id INT,
        product_id INT,
        PRIMARY KEY (order_id, product_id)
      );
      ```

13. **What are subqueries, and how do they differ from CTEs?**
    - **Subqueries**: Queries nested within another query.
      ```sql
      SELECT name
      FROM employees
      WHERE department_id = (SELECT id FROM departments WHERE name = 'HR');
      ```
    - **CTEs** (Common Table Expressions): Temporary result sets, more readable for complex queries.
      ```sql
      WITH hr_dept AS (SELECT id FROM departments WHERE name = 'HR')
      SELECT name FROM employees WHERE department_id = (SELECT id FROM hr_dept);
      ```
    - **Difference**: CTEs improve readability and can be reused in a query.

14. **Explain the purpose of the GROUP BY clause in SQL.**
    - Groups rows with the same values in specified columns for aggregate functions (e.g., COUNT, SUM).
      ```sql
      SELECT department_id, COUNT(*)
      FROM employees
      GROUP BY department_id;
      ```

15. **What is a self-join, and when would you use it?**
    - A self-join joins a table with itself to query hierarchical or related data.
      ```sql
      SELECT e1.name, e2.name AS manager
      FROM employees e1
      JOIN employees e2 ON e1.manager_id = e2.id;
      ```
    - **Use case**: Finding employee-manager relationships.

16. **Describe how to optimize a SQL query for better performance.**
    - Use indexes on frequently queried columns.
    - Avoid SELECT *; specify needed columns.
    - Use JOINs instead of subqueries where possible.
    - Analyze query plans with EXPLAIN.
    - Limit result sets with pagination.

17. **What are database views, and what are their benefits?**
    - Views are virtual tables created from a query, simplifying complex queries or restricting access.
      ```sql
      CREATE VIEW active_employees AS
      SELECT name, department_id
      FROM employees
      WHERE active = 1;
      ```
    - **Benefits**: Security, abstraction, and reusability.

18. **Explain the difference between UNION and UNION ALL.**
    - **UNION**: Combines results from two queries, removing duplicates.
    - **UNION ALL**: Combines results without removing duplicates (faster).
      ```sql
      SELECT name FROM employees
      UNION ALL
      SELECT name FROM contractors;
      ```

19. **What is a stored procedure, and how does it differ from a function?**
    - **Stored Procedure**: Precompiled SQL for reusable logic, can return multiple values.
      ```sql
      CREATE PROCEDURE raise_salary(dept_id INT)
      BEGIN
        UPDATE employees SET salary = salary * 1.1 WHERE department_id = dept_id;
      END;
      ```
    - **Function**: Returns a single value, used in expressions.
      ```sql
      CREATE FUNCTION get_full_name(id INT) RETURNS VARCHAR(100)
      RETURN (SELECT CONCAT(first_name, ' ', last_name) FROM employees WHERE id = id);
      ```

20. **Describe how to handle NULL values in SQL queries.**
    - Use `IS NULL` or `IS NOT NULL` to check for NULL.
    - Use `COALESCE` or `NULLIF` for default values.
      ```sql
      SELECT COALESCE(salary, 0) AS salary
      FROM employees
      WHERE bonus IS NULL;
      ```

#### Coding Questions (21-40)

21. **Write a query to find the second-highest salary in an employee table.**
    ```sql
    SELECT MAX(salary)
    FROM employees
    WHERE salary < (SELECT MAX(salary) FROM employees);
    ```

22. **Create a query to find duplicate records in a table.**
    ```sql
    SELECT email, COUNT(*)
    FROM employees
    GROUP BY email
    HAVING COUNT(*) > 1;
    ```

23. **Write a query to delete duplicate records from a table.**
    ```sql
    DELETE e1 FROM employees e1
    INNER JOIN employees e2
    WHERE e1.email = e2.email AND e1.id > e2.id;
    ```

24. **Create a query to calculate the total sales per month from an orders table.**
    ```sql
    SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, SUM(total) AS total_sales
    FROM orders
    GROUP BY DATE_FORMAT(order_date, '%Y-%m');
    ```

25. **Write a query to find employees who joined in the last 6 months.**
    ```sql
    SELECT name
    FROM employees
    WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH);
    ```

26. **Create a query to fetch the top 5 customers by order value.**
    ```sql
    SELECT c.customer_id, c.name, SUM(o.total) AS total_value
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.name
    ORDER BY total_value DESC
    LIMIT 5;
    ```

27. **Write a query to implement a many-to-many relationship between tables.**
    ```sql
    CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));
    CREATE TABLE courses (id INT PRIMARY KEY, course_name VARCHAR(50));
    CREATE TABLE student_courses (
      student_id INT,
      course_id INT,
      PRIMARY KEY (student_id, course_id),
      FOREIGN KEY (student_id) REFERENCES students(id),
      FOREIGN KEY (course_id) REFERENCES courses(id)
    );
    ```

28. **Create a query to find the average salary per department.**
    ```sql
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id;
    ```

29. **Write a query to find records with missing values in a column.**
    ```sql
    SELECT * FROM employees WHERE email IS NULL;
    ```

30. **Create a query to pivot data from rows to columns.**
    ```sql
    SELECT 
      product_id,
      MAX(CASE WHEN year = 2023 THEN sales END) AS sales_2023,
      MAX(CASE WHEN year = 2024 THEN sales END) AS sales_2024
    FROM sales
    GROUP BY product_id;
    ```

31. **Write a query to find the longest-serving employee in each department.**
    ```sql
    SELECT e.department_id, e.name, e.hire_date
    FROM employees e
    JOIN (
      SELECT department_id, MIN(hire_date) AS earliest
      FROM employees
      GROUP BY department_id
    ) sub ON e.department_id = sub.department_id AND e.hire_date = sub.earliest;
    ```

32. **Create a query to update multiple rows based on a condition.**
    ```sql
    UPDATE employees
    SET salary = salary * 1.1
    WHERE department_id = 3;
    ```

33. **Write a query to calculate the running total of sales by date.**
    ```sql
    SELECT order_date, total,
           SUM(total) OVER (ORDER BY order_date) AS running_total
    FROM orders;
    ```

34. **Create a query to find overlapping date ranges in a table.**
    ```sql
    SELECT a.id, a.start_date, a.end_date
    FROM bookings a
    JOIN bookings b
    ON a.id != b.id
    AND a.start_date <= b.end_date
    AND a.end_date >= b.start_date;
    ```

35. **Write a query to rank employees by salary within each department.**
    ```sql
    SELECT 
      name, 
      department_id, 
      salary,
      RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
    FROM employees;
    ```

36. **Create a CTE to find the top 3 products by sales in each category.**
    ```sql
    WITH RankedProducts AS (
      SELECT 
        p.category_id, 
        p.product_name, 
        SUM(o.total) AS total_sales,
        ROW_NUMBER() OVER (PARTITION BY p.category_id ORDER BY SUM(o.total) DESC) AS rn
      FROM products p
      JOIN order_details o ON p.product_id = o.product_id
      GROUP BY p.category_id, p.product_name
    )
    SELECT category_id, product_name, total_sales
    FROM RankedProducts
    WHERE rn <= 3;
    ```

37. **Write a query to find the most recent order for each customer.**
    ```sql
    SELECT c.customer_id, c.name, o.order_date
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    WHERE o.order_date = (
      SELECT MAX(order_date)
      FROM orders
      WHERE customer_id = c.customer_id
    );
    ```

38. **Create a query to implement pagination in SQL.**
    ```sql
    SELECT * 
    FROM employees
    ORDER BY id
    LIMIT 10 OFFSET 20; -- Page 3, 10 records per page
    ```

39. **Write a query to find employees with salaries above the department average.**
    ```sql
    WITH DeptAvg AS (
      SELECT department_id, AVG(salary) AS avg_salary
      FROM employees
      GROUP BY department_id
    )
    SELECT e.name, e.salary, d.avg_salary
    FROM employees e
    JOIN DeptAvg d ON e.department_id = d.department_id
    WHERE e.salary > d.avg_salary;
    ```

40. **Create a stored procedure to insert a new employee record.**
    ```sql
    CREATE PROCEDURE add_employee(
      IN p_name VARCHAR(50),
      IN p_salary INT,
      IN p_department_id INT
    )
    BEGIN
      INSERT INTO employees (name, salary, department_id)
      VALUES (p_name, p_salary, p_department_id);
    END;
    CALL add_employee('John Doe', 60000, 1);
    ```

#### Scenario-Based Questions (41-50)

41. **How would you optimize a slow SQL query for a large dataset?**
    - Analyze with `EXPLAIN` to identify bottlenecks.
    - Add indexes on frequently filtered/joined columns.
    - Use pagination or limit results.
    - Replace subqueries with JOINs or CTEs.
    - Partition large tables for better performance.

42. **Explain how you’d handle database migrations in a production environment.**
    - Use tools like Flyway or Liquibase for versioned migrations.
    - Test migrations in a staging environment.
    - Apply migrations during low-traffic periods.
    - Use transactions for atomic migrations.
    - Backup the database before applying changes.

43. **How would you secure a SQL database against injection attacks?**
    - Use parameterized queries or prepared statements.
      ```sql
      SELECT * FROM users WHERE id = ?;
      ```
    - Avoid dynamic SQL with string concatenation.
    - Use an ORM (e.g., Sequelize) for safe queries.
    - Restrict database user permissions.

44. **Describe how you’d design a database schema for an e-commerce app.**
    - **Tables**:
      - `customers`: id, name, email
      - `products`: id, name, price, category_id
      - `orders`: id, customer_id, order_date, total
      - `order_details`: order_id, product_id, quantity
      - `categories`: id, name
    - Use foreign keys for relationships (e.g., `order_details.order_id` references `orders.id`).
    - Index `email` in `customers` and `product_id` in `order_details`.

45. **How would you debug a query that’s returning incorrect results?**
    - Break down the query into smaller parts.
    - Check JOIN conditions and WHERE clauses.
    - Verify data integrity (e.g., NULLs, duplicates).
    - Use `EXPLAIN` to ensure correct execution plan.
    - Test with sample data to isolate issues.

46. **Explain how you’d implement full-text search in a SQL database.**
    - Use database-specific full-text search (e.g., MySQL’s `MATCH...AGAINST`, PostgreSQL’s `tsvector`).
      ```sql
      SELECT * FROM products
      WHERE MATCH(name, description) AGAINST('laptop');
      ```
    - For advanced search, integrate Elasticsearch for better performance.

47. **How would you handle a database with millions of records?**
    - Partition tables by range or hash (e.g., by date or region).
    - Use indexes strategically on queried columns.
    - Implement caching (e.g., Redis) for frequent queries.
    - Archive old data to separate tables.
    - Use connection pooling for efficient access.

48. **Describe how you’d back up and restore a SQL database.**
    - **Backup**:
      - Use tools like `mysqldump` or `pg_dump`.
      - Schedule regular backups with cron jobs.
      ```bash
      mysqldump -u user -p mydb > backup.sql
      ```
    - **Restore**:
      ```bash
      mysql -u user -p mydb < backup.sql
      ```
    - Store backups securely (e.g., AWS S3).

49. **How would you implement soft deletes in a SQL database?**
    - Add a `deleted_at` column (TIMESTAMP NULL).
    - Update queries to filter out soft-deleted records.
      ```sql
      UPDATE users SET deleted_at = NOW() WHERE id = 1;
      SELECT * FROM users WHERE deleted_at IS NULL;
      ```

50. **Explain how you’d monitor and tune database performance in production.**
    - Monitor with tools like MySQL’s `SHOW STATUS` or PostgreSQL’s `pg_stat_activity`.
    - Analyze slow queries with `EXPLAIN` or query logs.
    - Tune indexes, partition tables, and optimize queries.
    - Use connection pooling (e.g., `pgBouncer`).
    - Monitor resource usage with tools like AWS CloudWatch.

---

### Notes
- **Experience Context**: With 4 years of full-stack experience, you likely have practical knowledge of SQL in backend development (e.g., with Node.js, Express). These answers focus on production-ready SQL practices, such as optimization, security, and schema design, relevant to full-stack projects.
- **Memory Instructions**: To manage or forget this conversation, use the "Data Controls" section in settings or the book icon to select specific chats to forget.
- **Further Clarification**: If you need deeper explanations (e.g., advanced indexing, NoSQL integration, or specific database systems like PostgreSQL), more examples, or integration with Node.js/Angular, let me know!
