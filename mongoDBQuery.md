### Basic MongoDB Interview Questions for Beginners

Based on common interview practices for entry-level or beginner candidates (0-1 year experience), these questions focus on fundamental concepts like setup, data modeling, basic CRUD operations, and simple queries. They draw from real-world scenarios and standard MongoDB shell syntax. I've selected 15 representative questions, inspired by frequently asked topics from sources like InterviewBit, Guru99, and MindMajix.

For each, I've included a brief explanation or sample answer/explanation.

1. **What is MongoDB?**  
   MongoDB is an open-source, document-oriented NoSQL database that stores data in flexible, JSON-like BSON (Binary JSON) documents. It provides high performance, scalability, and availability for handling unstructured or semi-structured data.  
   *Explanation: Emphasize its difference from relational databases—no tables, rows, or fixed schemas.*

2. **What are the key features of MongoDB?**  
   Key features include schema flexibility, horizontal scaling via sharding, replication for high availability, indexing for fast queries, and support for ad-hoc queries.  
   *Explanation: Highlight how it supports large-scale data without rigid structures.*

3. **What is a Namespace in MongoDB?**  
   A Namespace is the concatenation of the database name and collection name (e.g., "mydb.mycollection"), used to uniquely identify collections.  
   *Explanation: It's essential for MongoDB's internal storage and reference system.*

4. **How do you insert a document into a MongoDB collection?**  
   Use `db.collection.insertOne({key: value})` for a single document or `db.collection.insertMany([{...}, {...}])` for multiple.  
   *Explanation: Example: `db.employees.insertOne({name: "John", salary: 50000});` This adds a new document to the employees collection.*

5. **What is the difference between MongoDB and SQL databases?**  
   MongoDB is NoSQL (document-based, schema-less), while SQL is relational (table-based, fixed schema). MongoDB scales horizontally; SQL vertically.  
   *Explanation: MongoDB handles unstructured data better for modern apps; SQL for ACID transactions in structured data.*

6. **What is a Collection in MongoDB?**  
   A Collection is a group of MongoDB documents, analogous to a table in SQL but without a fixed schema.  
   *Explanation: Documents in a collection can have varying structures.*

7. **How do you find a document in MongoDB?**  
   Use `db.collection.find({key: value})`. For all documents: `db.collection.find()`.  
   *Explanation: Example: `db.employees.find({department: "IT"});` Returns all employees in IT.*

8. **What is BSON in MongoDB?**  
   BSON (Binary JSON) is a binary-encoded serialization of JSON-like documents, allowing efficient storage and querying of data types like dates and binaries.  
   *Explanation: It's the underlying format for MongoDB documents, extending JSON.*

9. **How do you update a document in MongoDB?**  
   Use `db.collection.updateOne({filter}, {$set: {key: newValue}})` or `updateMany` for multiple.  
   *Explanation: Example: `db.employees.updateOne({name: "John"}, {$set: {salary: 60000}});` Updates John's salary.*

10. **What is an Index in MongoDB?**  
    An Index improves query performance by creating a data structure for quick lookups on fields.  
    *Explanation: Create with `db.collection.createIndex({key: 1})` for ascending order. Default is on _id.*

11. **How do you delete a document from a collection?**  
    Use `db.collection.deleteOne({filter})` or `deleteMany` for multiple.  
    *Explanation: Example: `db.employees.deleteOne({name: "John"});` Removes the matching document.*

12. **What is Sharding in MongoDB?**  
    Sharding distributes data across multiple machines (shards) for horizontal scaling and load balancing.  
    *Explanation: It partitions data based on a shard key to handle large datasets.*

13. **What is Replication in MongoDB?**  
    Replication creates copies (replicas) of data across multiple servers for redundancy and high availability via replica sets.  
    *Explanation: One primary handles writes; secondaries replicate for failover.*

14. **Does MongoDB support transactions?**  
    Yes, MongoDB supports multi-document ACID transactions since version 4.0, using sessions.  
    *Explanation: Use `session.startSession()` for operations requiring consistency.*

15. **What is GridFS in MongoDB?**  
    GridFS is a specification for storing large files (e.g., videos) by splitting them into chunks and metadata.  
    *Explanation: Uses fs.files and fs.chunks collections; ideal for files >16MB.*

These questions cover foundational knowledge expected for beginners. Practice with MongoDB Compass or the shell on sample data. For deeper prep, refer to official docs or platforms like LeetCode.


1. **Write a query to find the employee with the second-highest salary.**  
   ```javascript
   db.employees.find().sort({salary: -1}).limit(1).skip(1);
   ```  
   *Explanation: Sort salaries in descending order (-1), skip the first (highest), and limit to one result. For handling ties, consider aggregation with $group.*

2. **Write a query to find employees who earn more than the average salary in their department.**  
   ```javascript
   db.employees.aggregate([
     {$group: {_id: "$department_id", avgSalary: {$avg: "$salary"}}},
     {$lookup: {from: "employees", localField: "_id", foreignField: "department_id", as: "emps"}},
     {$unwind: "$emps"},
     {$match: {"emps.salary": {$gt: "$avgSalary"}}},
     {$project: {name: "$emps.name", salary: "$emps.salary", department_id: "$_id"}}
   ]);
   ```  
   *Explanation: Use aggregation to group by department and compute average, then lookup and match employees exceeding it.*



   ### Basic MongoDB Query Interview Questions

Based on common interview practices for beginners (0-1 year experience), these questions focus on fundamental MongoDB queries using `find()`, basic operators, and simple aggregations. They draw from real-world scenarios like querying employee or product data in a collection (e.g., `employees` collection with documents like `{name: "John", salary: 50000, department: "IT"}`).

I've selected 15 representative query-writing questions from standard sources. For each, I've included the expected query (MongoDB shell syntax) and a brief explanation.

1. **Write a query to find all documents in the employees collection.**  
   ```javascript
   db.employees.find();
   ```  
   *Explanation: The basic `find()` without filters returns all documents. Use `pretty()` for formatted output.*

2. **Write a query to find employees with salary greater than 40000.**  
   ```javascript
   db.employees.find({salary: {$gt: 40000}});
   ```  
   *Explanation: Use the `$gt` (greater than) operator in the filter to match documents where salary > 40000.*

3. **Write a query to find employees in the "IT" department.**  
   ```javascript
   db.employees.find({department: "IT"});
   ```  
   *Explanation: Exact match using string equality; MongoDB queries are case-sensitive by default.*

4. **Write a query to find employees with salary between 30000 and 60000.**  
   ```javascript
   db.employees.find({salary: {$gte: 30000, $lte: 60000}});
   ```  
   *Explanation: Combine `$gte` (greater than or equal) and `$lte` (less than or equal) in the range filter.*

5. **Write a query to find employees whose name starts with "J".**  
   ```javascript
   db.employees.find({name: /^J/});
   ```  
   *Explanation: Use regex (`/^J/`) for pattern matching on the name field.*

6. **Write a query to find employees in "IT" or "HR" departments.**  
   ```javascript
   db.employees.find({department: {$in: ["IT", "HR"]}});
   ```  
   *Explanation: The `$in` operator matches any value in the specified array.*

7. **Write a query to find employees hired after January 1, 2023 (assuming hire_date field).**  
   ```javascript
   db.employees.find({hire_date: {$gt: new Date("2023-01-01")}});
   ```  
   *Explanation: Compare dates using `$gt` with a `Date` object for ISODate fields.*

8. **Write a query to project only the name and salary fields.**  
   ```javascript
   db.employees.find({}, {name: 1, salary: 1, _id: 0});
   ```  
   *Explanation: The second argument is the projection; `1` includes fields, `0` excludes (use `_id: 0` to hide default ID).*

9. **Write a query to sort employees by salary in descending order.**  
   ```javascript
   db.employees.find().sort({salary: -1});
   ```  
   *Explanation: `sort()` takes a document with field and direction (`1` ascending, `-1` descending).*

10. **Write a query to limit results to the first 5 employees.**  
    ```javascript
    db.employees.find().limit(5);
    ```  
    *Explanation: `limit(n)` restricts the number of documents returned; combine with `sort()` for pagination.*

11. **Write a query to skip the first 10 employees and return the next 5.**  
    ```javascript
    db.employees.find().skip(10).limit(5);
    ```  
    *Explanation: `skip(n)` offsets results; useful for pagination (e.g., page 2 with 5 items).*

12. **Write a query to find employees with salary not equal to 50000.**  
    ```javascript
    db.employees.find({salary: {$ne: 50000}});
    ```  
    *Explanation: `$ne` (not equal) operator excludes matching documents.*

13. **Write a query to count the number of employees in the "IT" department.**  
    ```javascript
    db.employees.countDocuments({department: "IT"});
    ```  
    *Explanation: `countDocuments(filter)` returns the count of matching documents (use `count()` in older versions).*

14. **Write a simple aggregation to find the average salary in the employees collection.**  
    ```javascript
    db.employees.aggregate([{$group: {_id: null, avgSalary: {$avg: "$salary"}}}]);
    ```  
    *Explanation: Basic pipeline with `$group` stage using `$avg` accumulator on the salary field.*

15. **Write a query to find distinct departments.**  
    ```javascript
    db.employees.distinct("department");
    ```  
    *Explanation: `distinct(field)` returns an array of unique values for the specified field.*

These questions test core querying skills like filtering, projection, sorting, and limits, expected for beginners. Practice in MongoDB Compass or the shell with sample data.
