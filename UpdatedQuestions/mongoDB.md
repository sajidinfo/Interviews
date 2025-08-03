
---

### MongoDB Interview Questions: Answers

#### Conceptual Questions (1-20)

1. **What is MongoDB, and how does it differ from SQL databases?**
   - MongoDB is a NoSQL, document-based database storing data in JSON-like (BSON) documents.
   - **Differences from SQL**:
     - **Schema**: MongoDB is schema-less; SQL uses rigid schemas.
     - **Data Structure**: Documents vs. tables.
     - **Scalability**: Horizontal (sharding) vs. vertical.
     - **Querying**: MongoDB uses queries like `find()`; SQL uses structured queries.

2. **Explain the structure of a MongoDB document and collection.**
   - **Document**: A JSON-like object (BSON) with key-value pairs, e.g., `{ "_id": 1, "name": "John" }`.
   - **Collection**: A group of documents, analogous to a table in SQL, but schema-less.
     ```javascript
     db.users.insertOne({ name: "John", age: 30 });
     ```

3. **What are the advantages of using MongoDB for a full-stack app?**
   - Flexible schema for dynamic data (e.g., user profiles).
   - Scalability with sharding and replication.
   - JSON-like documents integrate well with JavaScript/Node.js.
   - Fast for read-heavy apps with proper indexing.
   - Supports geospatial queries and full-text search.

4. **Describe the concept of sharding in MongoDB.**
   - Sharding distributes data across multiple servers (shards) based on a shard key to improve scalability.
   - **How it works**: Each shard holds a subset of data; queries are routed to relevant shards.
   - **Use case**: High-traffic apps with large datasets.
     ```javascript
     sh.shardCollection("mydb.users", { user_id: "hashed" });
     ```

5. **What is indexing in MongoDB, and how does it improve performance?**
   - Indexes store a subset of data in a structure (e.g., B-tree) for faster queries.
   - **Improvement**: Reduces query time from O(n) to O(log n) for lookups.
     ```javascript
     db.users.createIndex({ email: 1 });
     ```

6. **Explain the difference between embedded and referenced documents.**
   - **Embedded**: Data is nested within a document (denormalized, faster reads).
     ```javascript
     { _id: 1, name: "John", address: { city: "NY", zip: 10001 } }
     ```
   - **Referenced**: Data is stored in separate collections, linked by IDs (normalized, better for updates).
     ```javascript
     { _id: 1, name: "John", address_id: 2 }
     ```

7. **What is the MongoDB Aggregation Framework, and when is it used?**
   - The Aggregation Framework processes data through a pipeline of stages (e.g., `$match`, `$group`).
   - **Use cases**: Data analysis, reporting, transforming data.
     ```javascript
     db.orders.aggregate([{ $group: { _id: "$customer_id", total: { $sum: "$amount" } } }]);
     ```

8. **Describe how MongoDB handles transactions.**
   - MongoDB supports multi-document ACID transactions (since v4.0) across replica sets or sharded clusters.
     ```javascript
     const session = db.getMongo().startSession();
     session.startTransaction();
     db.accounts.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
     db.accounts.updateOne({ _id: 2 }, { $inc: { balance: 100 } }, { session });
     session.commitTransaction();
     ```

9. **What is the purpose of the `_id` field in MongoDB?**
   - `_id` is a unique identifier for each document, automatically generated as an ObjectId if not specified.
   - Ensures document uniqueness and is indexed by default.
     ```javascript
     { _id: ObjectId("507f1f77bcf86cd799439011"), name: "John" }
     ```

10. **Explain the difference between `find` and `findOne` in MongoDB.**
    - `find`: Returns a cursor to all matching documents.
      ```javascript
      db.users.find({ city: "NY" });
      ```
    - `findOne`: Returns the first matching document or null.
      ```javascript
      db.users.findOne({ city: "NY" });
      ```

11. **What are replica sets in MongoDB, and why are they important?**
    - Replica sets are groups of MongoDB servers maintaining identical data for redundancy and high availability.
    - **Importance**: Automatic failover, data redundancy, read scaling.
    - Primary node handles writes; secondary nodes replicate data.

12. **Describe how to implement schema validation in MongoDB.**
    - Use JSON Schema to enforce document structure.
      ```javascript
      db.createCollection("users", {
        validator: {
          $jsonSchema: {
            required: ["name", "email"],
            properties: { name: { type: "string" }, email: { type: "string" } }
          }
        }
      });
      ```

13. **What is the difference between `$push` and `$addToSet` operators?**
    - `$push`: Adds an element to an array, allowing duplicates.
      ```javascript
      db.users.updateOne({ _id: 1 }, { $push: { hobbies: "reading" } });
      ```
    - `$addToSet`: Adds an element only if it doesn’t exist.
      ```javascript
      db.users.updateOne({ _id: 1 }, { $addToSet: { hobbies: "reading" } });
      ```

14. **Explain how MongoDB handles high availability.**
    - Uses replica sets with primary-secondary architecture.
    - Automatic failover if the primary fails.
    - Read operations can be distributed to secondaries.
    - Configure with `replSetInitiate`.

15. **What is the purpose of the `$lookup` operator in MongoDB?**
    - `$lookup` performs a left join to combine documents from two collections.
      ```javascript
      db.orders.aggregate([
        { $lookup: {
          from: "customers",
          localField: "customer_id",
          foreignField: "_id",
          as: "customer"
        } }
      ]);
      ```

16. **Describe how to implement TTL (Time-To-Live) indexes in MongoDB.**
    - TTL indexes automatically delete documents after a specified time.
      ```javascript
      db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
      ```
    - **Use case**: Temporary data like session logs.

17. **What are capped collections in MongoDB, and when would you use them?**
    - Capped collections have a fixed size, automatically overwriting old data when full.
      ```javascript
      db.createCollection("logs", { capped: true, size: 5242880, max: 1000 });
      ```
    - **Use case**: Logging or caching with size limits.

18. **Explain the difference between `update` and `updateMany` in MongoDB.**
    - `update`: Updates the first matching document (deprecated in favor of `updateOne`).
    - `updateMany`: Updates all matching documents.
      ```javascript
      db.users.updateMany({ city: "NY" }, { $set: { status: "active" } });
      ```

19. **What is the role of the MongoDB Compass tool?**
    - MongoDB Compass is a GUI for exploring, querying, and managing MongoDB databases.
    - **Features**: Visualize schemas, run queries, create indexes, and manage collections.

20. **Describe how MongoDB integrates with Node.js.**
    - Use the MongoDB Node.js driver or ORMs like Mongoose.
      ```javascript
      const { MongoClient } = require('mongodb');
      async function connect() {
        const client = new MongoClient('mongodb://localhost:27017');
        await client.connect();
        const db = client.db('mydb');
        console.log(await db.collection('users').find().toArray());
        await client.close();
      }
      ```

#### Coding Questions (21-40)

21. **Write a MongoDB query to find all users in a specific city.**
    ```javascript
    db.users.find({ city: "New York" }).toArray();
    ```

22. **Create an aggregation query to group orders by month and calculate total sales.**
    ```javascript
    db.orders.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$order_date" } },
          total_sales: { $sum: "$amount" }
        }
      }
    ]);
    ```

23. **Write a query to update a user’s email address based on their `_id`.**
    ```javascript
    db.users.updateOne(
      { _id: ObjectId("507f1f77bcf86cd799439011") },
      { $set: { email: "new@example.com" } }
    );
    ```

24. **Create a query to find documents with a specific array value.**
    ```javascript
    db.users.find({ hobbies: "reading" }).toArray();
    ```

25. **Write a query to delete documents older than 30 days.**
    ```javascript
    db.logs.deleteMany({
      createdAt: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });
    ```

26. **Create an aggregation query to find the top 5 products by sales.**
    ```javascript
    db.order_details.aggregate([
      { $group: { _id: "$product_id", total_sales: { $sum: "$amount" } } },
      { $sort: { total_sales: -1 } },
      { $limit: 5 }
    ]);
    ```

27. **Write a query to implement pagination in MongoDB.**
    ```javascript
    db.users.find().skip(20).limit(10).toArray(); // Page 3, 10 per page
    ```

28. **Create a query to find documents with null or missing fields.**
    ```javascript
    db.users.find({ email: { $exists: false } }).toArray();
    ```

29. **Write a query to sort documents by a date field in descending order.**
    ```javascript
    db.orders.find().sort({ order_date: -1 }).toArray();
    ```

30. **Create an aggregation query to join two collections using `$lookup`.**
    ```javascript
    db.orders.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "product_details"
        }
      }
    ]);
    ```

31. **Write a query to increment a counter field in a document.**
    ```javascript
    db.counters.updateOne(
      { _id: "page_views" },
      { $inc: { count: 1 } },
      { upsert: true }
    );
    ```

32. **Create a query to find duplicates in a collection based on a field.**
    ```javascript
    db.users.aggregate([
      { $group: { _id: "$email", count: { $sum: 1 } } },
      { $match: { count: { $gt: 1 } } }
    ]);
    ```

33. **Write a query to implement full-text search in MongoDB.**
    ```javascript
    db.products.createIndex({ name: "text", description: "text" });
    db.products.find({ $text: { $search: "laptop" } }).toArray();
    ```

34. **Create an aggregation query to calculate the average rating of products.**
    ```javascript
    db.products.aggregate([
      { $group: { _id: "$product_id", avg_rating: { $avg: "$rating" } } }
    ]);
    ```

35. **Write a query to bulk insert multiple documents into a collection.**
    ```javascript
    db.users.insertMany([
      { name: "John", city: "NY" },
      { name: "Jane", city: "LA" }
    ]);
    ```

36. **Create a query to update nested fields in a document.**
    ```javascript
    db.users.updateOne(
      { _id: ObjectId("507f1f77bcf86cd799439011") },
      { $set: { "address.city": "Boston" } }
    );
    ```

37. **Write a query to find documents within a date range.**
    ```javascript
    db.orders.find({
      order_date: {
        $gte: new Date("2023-01-01"),
        $lte: new Date("2023-12-31")
      }
    }).toArray();
    ```

38. **Create an aggregation query to group users by age range.**
    ```javascript
    db.users.aggregate([
      {
        $bucket: {
          groupBy: "$age",
          boundaries: [0, 18, 30, 50, 100],
          default: "Other",
          output: { count: { $sum: 1 } }
        }
      }
    ]);
    ```

39. **Write a query to implement a case-insensitive search in MongoDB.**
    ```javascript
    db.users.find({ name: { $regex: "^john$", $options: "i" } }).toArray();
    ```

40. **Create a query to drop an index from a collection.**
    ```javascript
    db.users.dropIndex("email_1");
    ```

#### Scenario-Based Questions (41-50)

41. **How would you optimize a MongoDB query for a large dataset?**
    - Use indexes on frequently queried fields.
    - Limit fields with projection (`{ name: 1, _id: 0 }`).
    - Implement pagination (`skip`, `limit`).
    - Analyze query performance with `explain("executionStats")`.
    - Use aggregation sparingly for complex operations.

42. **Explain how you’d design a MongoDB schema for a social media app.**
    - **Collections**:
      - `users`: `{ _id, name, email, followers: [ObjectId] }`
      - `posts`: `{ _id, user_id, content, created_at }`
      - `comments`: `{ _id, post_id, user_id, content }`
    - **Design Choices**:
      - Embed `likes` in `posts` for read performance.
      - Reference `followers` for scalability.
      - Index `user_id`, `created_at` for fast queries.

43. **How would you handle a MongoDB database with high write throughput?**
    - Use sharding to distribute writes.
    - Optimize indexes to minimize write overhead.
    - Batch writes with `insertMany` or bulk operations.
    - Use write concern `{ w: 1 }` for faster writes (less durability).
    - Monitor with MongoDB Atlas or `mongostat`.

44. **Describe how you’d implement backup and restore in MongoDB.**
    - **Backup**: Use `mongodump` to export data.
      ```bash
      mongodump --db mydb --out /backup
      ```
    - **Restore**: Use `mongorestore` to import.
      ```bash
      mongorestore --db mydb /backup/mydb
      ```
    - Store backups in cloud storage (e.g., AWS S3).

45. **How would you debug a slow MongoDB aggregation query?**
    - Use `explain("executionStats")` to analyze stages.
    - Ensure indexes support `$match` and `$sort` stages.
    - Move `$match` early in the pipeline to reduce data.
    - Avoid large `$group` operations; pre-aggregate if possible.
    - Profile with MongoDB’s database profiler.

46. **Explain how you’d secure a MongoDB database in production.**
    - Enable authentication (`--auth`) and use strong credentials.
    - Configure role-based access control (RBAC).
    - Use TLS/SSL for encrypted connections.
    - Restrict network access with firewalls or VPCs.
    - Regularly update MongoDB to patch vulnerabilities.

47. **How would you scale a MongoDB database for a global app?**
    - Use sharding with a hashed shard key for even distribution.
    - Deploy replica sets across regions for low-latency reads.
    - Use MongoDB Atlas for managed scaling.
    - Implement caching (e.g., Redis) for frequent queries.
    - Optimize queries with proper indexing.

48. **Describe how you’d handle data migrations in MongoDB.**
    - Write migration scripts in Node.js using the MongoDB driver.
    - Test migrations in a staging environment.
    - Use `$rename` or `$set` for schema changes.
    - Backup data before migrating.
    - Apply changes incrementally to avoid downtime.

49. **How would you implement a soft delete in MongoDB?**
    - Add a `deleted_at` field to documents.
    - Filter out soft-deleted records in queries.
      ```javascript
      db.users.updateOne({ _id: 1 }, { $set: { deleted_at: new Date() } });
      db.users.find({ deleted_at: { $exists: false } }).toArray();
      ```

50. **Explain how you’d monitor MongoDB performance in production.**
    - Use MongoDB Atlas or `mongostat`/`mongotop` for real-time metrics.
    - Monitor slow queries with the database profiler.
    - Track CPU, memory, and disk I/O with tools like CloudWatch.
    - Set up alerts for high latency or connection spikes.
    - Analyze `explain` results for query optimization.

---

### Notes
- **Experience Context**: With 4 years of full-stack experience, you likely have hands-on knowledge of MongoDB in Node.js applications. These answers focus on practical integrations (e.g., Node.js driver, Mongoose), performance optimization, and production concerns like scaling and security, relevant to full-stack development.
- **Memory Instructions**: To manage or forget this conversation, use the "Data Controls" section in settings or the book icon to select specific chats to forget.
- **Further Clarification**: If you need deeper explanations (e.g., advanced aggregation pipelines, sharding strategies, or integration with Angular/Node.js), more examples, or specific use cases, let me know!
