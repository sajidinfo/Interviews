# MongoDB Interview Questions ( v4.4 )

*Click <img src="assets/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

## Table of Contents

* *[MongoDB Commands](mongodb-commands.md)*
* *[MongoDB Coding Practice](mongodb-code.md)*

<br/>

## Q. ***What are NoSQL databases? What are the different types of NoSQL databases?***

NoSQL is a non-relational DBMS, that does not require a fixed schema, avoids joins, and is easy to scale. The purpose of using a NoSQL database is for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps.

**Types of NoSQL Databases**

* Document databases
* Key-value stores
* Column-oriented databases
* Graph databases

**1. Document databases**

A document database stores data in JSON, BSON , or XML documents. In a document database, documents can be nested. Particular elements can be indexed for faster querying.

Documents can be stored and retrieved in a form that is much closer to the data objects used in applications, which means less translation is required to use the data in an application. SQL data must often be assembled and disassembled when moving back and forth between applications and storage.

**Example:**  Amazon SimpleDB, CouchDB, MongoDB, Riak, Lotus Notes are popular Document originated DBMS systems.

<p align="center">
  <img src="assets/document-database.png" alt="Document Databases" width="400px" />
</p>

**2. Key-value Stores**

Data is stored in key/value pairs. It is designed in such a way to handle lots of data and heavy load. Key-value pair storage databases store data as a hash table where each key is unique, and the value can be a JSON, BLOB(Binary Large Objects), string, etc.

**Example:** of key-value stores are Redis, Voldemort, Riak, and Amazon\'s DynamoDB.

<p align="center">
  <img src="assets/key-value-database.png" alt="Key-value Stores" width="300px" />
</p>

**3. Column-Oriented Databases**

Column-oriented databases work on columns and are based on BigTable paper by Google. Every column is treated separately. The values of single column databases are stored contiguously.

They deliver high performance on aggregation queries like SUM, COUNT, AVG, MIN, etc. as the data is readily available in a column.

**Example:** Column-based NoSQL databases are widely used to manage data warehouses, business intelligence, CRM, Library card catalogs, HBase, Cassandra, HBase, Hypertable are examples of a column-based database.

<p align="center">
  <img src="assets/column-database.png" alt="Column-Oriented Databases" width="300px" />
</p>

**4. Graph Databases**

A graph type database stores entities as well the relations amongst those entities. The entity is stored as a node with the relationship as edges. An edge gives a relationship between nodes. Every node and edge has a unique identifier.

Compared to a relational database where tables are loosely connected, a Graph database is a multi-relational in nature. Traversing relationships as fast as they are already captured into the DB, and there is no need to calculate them.

Graph base databases mostly used for social networks, logistics, spatial data.

**Example:** Neo4J, Infinite Graph, OrientDB, FlockDB are some popular graph-based databases.

<p align="center">
  <img src="assets/graph-database.png" alt="Graph Databases" width="300px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is MongoDB?***

**MongoDB** is a type of NoSQL database that is used to store a large amount of data. Unlike traditional databases that use tables and rows, MongoDB stores data in key-value pairs in the form of collections and documents.

**Key Features**

* Document Oriented and NoSQL database.
* Supports Aggregation
* Uses BSON format
* Sharding (Helps in Horizontal Scalability)
* Supports Ad Hoc Queries
* Schema Less
* Capped Collection
* Indexing (Any field in MongoDB can be indexed)
* MongoDB Replica Set (Provides high availability)
* Supports Multiple Storage Engines

**Key Components**

**1. _id**: The `_id` field represents a unique value in the MongoDB document. The `_id` field is like the document\'s primary key. If you create a new document without an `_id` field, MongoDB will automatically create the field.

**2. Collection**:  This is a grouping of MongoDB documents. A collection is the equivalent of a table which is created in any other RDMS such as Oracle.

**3. Cursor**: This is a pointer to the result set of a query. Clients can iterate through a cursor to retrieve results.

**4. Database**: This is a container for collections like in RDMS wherein it is a container for tables. Each database gets its own set of files on the file system. A MongoDB server can store multiple databases.

**5. Document**: A record in a MongoDB collection is basically called a document. The document, in turn, will consist of field name and values.

**6. Field**: A name-value pair in a document. A document has zero or more fields. Fields are analogous to columns in relational databases.

**Example:**

Connecting MongoDB Cloud using MongoDB Compass

<p align="center">
   <img src="assets/mongodb-compass.png" alt="MongoDB Compass" width="800px" title="MongoDB Compass" />
</p>

**[[Read More](https://docs.mongodb.com/guides/)]**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are Indexes in MongoDB?***

Indexes in MongoDB are like shortcuts that help the database find data faster.

Just like in a book, if you want to find a topic quickly, you check the index page — same way, MongoDB uses indexes to quickly search and retrieve data from a large collection.

Without indexes, MongoDB has to check every document one by one, which is slow. With indexes, it goes directly to the right data, saving time.

**Example**

### 🔧 **How to Create an Index in MongoDB**

To create an index, you use the `createIndex()` method on a collection.

### ✅ Example:

Suppose you have a collection called `users`, and you want to create an index on the `name` field:

```javascript
db.users.createIndex({ name: 1 });
```

### 👉 Explanation:

* `users` is your collection name.
* `{ name: 1 }` means you're creating an **ascending index** on the `name` field.
  (Use `-1` for descending like `{ name: -1 }`)

### 🧠 Tip:

You can also create **compound indexes** (on multiple fields) like this:

```javascript
db.users.createIndex({ name: 1, age: -1 });
```

Bilkul Sajid bhai! Niche sabhi questions ke base par **MongoDB indexes** ko simple Indian English + thoda desi style me samjha raha hoon:

---

### 💡 **What are Indexes in MongoDB?**

Indexes are like **book ke index page** — jahan se aap directly topic ka page number dekh ke pohch jate ho.
Waise hi, MongoDB me indexes help karte hain data ko **fast** search karne me.

Agar index na ho to MongoDB ko **har document check** karna padega (called **collection scan**) — jo slow hota hai.

But index hone se wo directly sahi jagah pohch jata hai — fast query result.

---

### 🔧 **Explain Index Properties in MongoDB?**

MongoDB me index banate waqt aap kuch **properties** define kar sakte ho:

1. ✅ **Ascending (1) / Descending (-1):**

   * `db.users.createIndex({ name: 1 })` → Ascending index.
   * `db.users.createIndex({ age: -1 })` → Descending index.

2. ✅ **Unique Index:**

   * Prevents duplicate values in a field.
   * Example: `db.users.createIndex({ email: 1 }, { unique: true })`

3. ✅ **Compound Index:**

   * Index on multiple fields.
   * Example: `db.users.createIndex({ name: 1, age: -1 })`

4. ✅ **Sparse Index:**

   * Only indexes documents that have the indexed field.
   * Example: `db.users.createIndex({ nickname: 1 }, { sparse: true })`

5. ✅ **TTL Index (Time To Live):**

   * Automatically deletes documents after a set time.
   * Used for temporary data like OTP.
   * Example:

     ```js
     db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
     ```

---

### ❓ **How many indexes does MongoDB create by default for a new collection?**

👉 MongoDB automatically creates **1 index by default** on the **`_id` field** of every new collection.

This `_id` index is:

* **Unique**
* **Mandatory**
* Helps MongoDB quickly find documents by `_id`.

---

### ❓ **Can you create an index in an array field in MongoDB?**

✅ Yes! You can create **index on an array field**, and it is called a **Multikey Index**.

MongoDB automatically makes a multikey index when you create an index on a field that holds an array.

**Example:**

```js
db.products.createIndex({ tags: 1 })
```

Agar `tags` field ek array hai (like `["fashion", "summer", "sale"]`), MongoDB automatically handles it as multikey.

---

### 📌 Summary:

| Feature            | Description                  |
| ------------------ | ---------------------------- |
| **Index**          | Shortcut to find data faster |
| **Default Index**  | On `_id` field automatically |
| **Multikey Index** | For array fields             |
| **Compound Index** | On more than one field       |
| **Unique Index**   | No duplicate allowed         |
| **TTL Index**      | Auto delete after time       |
| **Sparse Index**   | Only index if field exists   |

---


## Q. ***Why does Profiler use in MongoDB?***

The database profiler captures data information about read and write operations, cursor operations, and database commands. The database profiler writes data in the `system.profile` collection, which is a capped collection.

The database profiler collects detailed information about Database Commands executed against a running mongod instance. This includes CRUD operations as well as configuration and administration commands.

Profiler has 3 profiling levels.

* **Level 0** - Profiler will not log any data
* **Level 1** - Profiler will log only slow operations above some threshold
* **Level 2** - Profiler will log all the operations

**1. To get current profiling level.**

```bash
db.getProfilingLevel()  

// Output
0
```

**2. To check current profiling status**

```bash
db.getProfilingStatus()


// Output
{ "was" : 0, "slowms" : 100 }
```

**3. To set profiling level**

```bash
db.setProfilingLevel(1, 40)

// Output
{ "was" : 0, "slowms" : 100, "ok" : 1 }
```

### ✅ **Why is Profiler used in MongoDB?** (Simple Indian English)

**MongoDB Profiler** is used to check:

> *"Konsi query slow chal rahi hai, ya konsi query jyada resource use kar rahi hai."*

It helps **developers** and **DB admins** to:

* 👀 Track slow queries
* ⚠️ Find performance problems
* 📊 Understand how queries are running in the background

---

### 🔧 **What does Profiler do?**

MongoDB Profiler records:

* Query execution time (kitna time laga)
* Which collection/query was slow
* How many documents were scanned
* Index use hua ya nahi

---

### 🛠️ **Example**: Enable profiler at slow query level

```js
db.setProfilingLevel(1, { slowms: 100 })
```

> This will **record all queries taking more than 100ms**.

---

### 🎯 Profiler ke Levels:

| Level | Description                                             |
| ----- | ------------------------------------------------------- |
| 0     | Off (default) – no profiling                            |
| 1     | Only slow queries                                       |
| 2     | All queries (use only for debugging, not in production) |

---

### 📂 Where is profiling data stored?

In the **`system.profile`** collection of the database.

You can check the data like this:

```js
db.system.profile.find().pretty()
```

---

### 📌 In Short:

> **Profiler = Doctor for MongoDB queries**
> Wo batata hai kaha problem hai, konsa query slow hai, kya optimize karna chahiye.

---


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to remove attribute from MongoDB Object?***

**$unset**
To remove (delete) a field from a document in MongoDB, you use the `$unset` operator.

syntax:

```js
{ $unset: { <field1>: "", ... } }
```

## Q. ***What is "Namespace" in MongoDB?***
### ✅ **What is "Namespace" in MongoDB?** (Simple Indian English)

In MongoDB, **Namespace** means:

> **"Database name + Collection name" combined together."**

---

### 📌 **Format:**

```
<database>.<collection>
```

**Example:**

```text
mydb.users
```

* `mydb` = database name
* `users` = collection name
* So, `mydb.users` is the **namespace**

---

### 🔍 **Why is Namespace Important?**

* MongoDB uses namespace to **uniquely identify** where data is stored.
* Indexes and documents are also linked with a namespace.
* Useful for profiling, monitoring, and error logs.

---

### 🧠 Real-Life Example:

Think of **MongoDB** like a **school**:

* `mydb` = School name
* `users` = Class name
* So `mydb.users` = That class in that school
  (Just like `School.Class` → uniquely identifies)

---


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Replication in Mongodb?***
### ✅ **What is Replication in MongoDB?** (Simple Indian English)

**Replication** in MongoDB means:

> **Copying your data from one server (primary) to other servers (secondaries)** — so that if one server fails, your data is still safe and available.

---

### 📦 **Why is Replication Important?**

* ✅ **High Availability** – System keeps running even if one server goes down.
* ✅ **Data Backup** – Your data is copied and safe.
* ✅ **Read Scaling** – You can read from secondary servers also (optional).

---

### 🔁 **How Replication Works in MongoDB:**

MongoDB uses a group of servers called a **Replica Set**.

#### 📌 Replica Set Includes:

1. 🟢 **Primary** – Main server where all writes and updates happen.
2. 🟡 **Secondary** – One or more backup servers that copy data from primary.
3. 🔄 **Automatic Failover** – If primary goes down, one of the secondaries becomes the new primary automatically.

---

### 🧠 Example:

Let’s say you have a 3-server setup:

```
Replica Set:
  - Server A (Primary)
  - Server B (Secondary)
  - Server C (Secondary)
```

Now:

* You insert data into Server A.
* MongoDB **automatically replicates** that data to B and C.
* If A goes down, MongoDB promotes B or C to **become new Primary**.

---

### 🔧 To create a Replica Set (basic idea):

```js
rs.initiate()
```

More detailed configuration needs multiple instances.

---

### 🎯 In Short:

> **Replication = MongoDB ka data backup + auto failover system.**
> It helps in keeping your application **always running**, even during server crash.


## Q. ***How does MongoDB ensure high availability?***
MongoDB ensures high availability using a feature called Replication with Replica Sets.

🧠 What is High Availability?
High Availability (HA) means your application/database should always be available, even if a server crashes or goes down.


## Q. ***What is an Embedded MongoDB Document?***

An **Embedded Document** in MongoDB means:

> **Ek document ke andar doosra document** (nested structure) store karna.

---

### 📦 **Example:**

Suppose you have a `users` collection:

```js
{
  name: "Sajid",
  age: 28,
  address: {
    city: "Udaipur",
    state: "Rajasthan",
    pincode: 313001
  }
}
```

Here, the `address` field is not just plain text — it is a **document inside another document**.

This is called an **Embedded Document**.

---

### 🧠 Why Use Embedded Documents?

1. ✅ **Related data together** – easy to access
2. ✅ **Faster reads** – no need to join
3. ✅ **Follows MongoDB's flexible structure (schema-less)**

---

### 📌 When Should You Use It?

Use Embedded Documents when:

* The nested data is **closely related** to the main document
* You don’t need to access nested data separately too often

---

### ❌ When **Not** to Use:

* If nested data grows too large (MongoDB document limit is **16MB**)
* If you need to update nested data **frequently or independently**

---

### ✅ In Short:

> **Embedded Document = Ek object ke andar doosra object.**
> Useful for storing related data in one place.

---


## Q. ***How can you achieve primary key - foreign key relationships in MongoDB?***

MongoDB is a **NoSQL** database, so it **doesn't use strict primary key–foreign key rules** like in SQL (MySQL, MSSQL). But still, we can **create similar relationships manually**.

---

### 🔑 **Primary Key in MongoDB:**

* Every document in MongoDB automatically has a unique `_id` field.
* This `_id` acts like a **Primary Key**.

---

### 🔗 **Foreign Key Relationship in MongoDB (Manually):**

You can create a reference (foreign key) by **storing one document's `_id` inside another document**.

---

### 📦 **Example: One-to-Many (User → Orders)**

#### 👤 users collection:

```js
{
  _id: ObjectId("64a123..."),
  name: "Sajid"
}
```

#### 📦 orders collection:

```js
{
  _id: ObjectId("64b456..."),
  userId: ObjectId("64a123..."),  // This is the foreign key reference
  product: "Laptop",
  amount: 50000
}
```

> Here, `userId` in orders is **foreign key**, and it points to `_id` in users (primary key).

---

### 🔍 How to Fetch Related Data (Manual Join):

Use **`$lookup`** (like SQL join) in aggregation:

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userInfo"
    }
  }
])
```

> This will give you order data + user data in one result.

---

### 🧠 Types of Relationships in MongoDB:

| Type | Example           | Structure                   |
| ---- | ----------------- | --------------------------- |
| 1:1  | User → Profile    | Embed or Reference          |
| 1\:N | User → Orders     | Reference (`_id`)           |
| N\:N | Student → Courses | Reference with array of IDs |

---

### 📝 In Short:

> **MongoDB me primary key – foreign key relationship manually banate hain**, by referencing one document’s `_id` in another document, and using `$lookup` to join when needed.

---

Sure Sajid bhai!
Here’s a complete guide on **MongoDB Aggregation** with **all important stages**, explained in **simple Indian English** with **examples**.

---

## 🔍 **What is Aggregation in MongoDB?**

> Aggregation means **data ko process karke report banana**, like filtering, grouping, sorting, counting, etc.

MongoDB uses the **`aggregate()`** function with **pipeline stages** (like steps).

---

## 📦 Example Collection: `orders`

```js
{
  _id: 1,
  customer: "Sajid",
  product: "Laptop",
  price: 50000,
  quantity: 2,
  status: "delivered"
}
```

---

## 📚 **Aggregation Stages with Examples**

---

### 1️⃣ **\$match** – *Filter data (like WHERE in SQL)*

```js
db.orders.aggregate([
  { $match: { status: "delivered" } }
])
```

✅ Returns only orders where status is `delivered`.

---

### 2️⃣ **\$project** – *Show/hide fields or create new ones*

```js
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      totalAmount: { $multiply: ["$price", "$quantity"] }
    }
  }
])
```

✅ Shows customer name and calculates `totalAmount` (price × quantity).

---

### 3️⃣ **\$group** – *Group by field (like GROUP BY in SQL)*

```js
db.orders.aggregate([
  {
    $group: {
      _id: "$customer",
      totalSpent: { $sum: { $multiply: ["$price", "$quantity"] } }
    }
  }
])
```

✅ Group orders by customer and calculate total amount spent.

---

### 4️⃣ **\$sort** – *Sort result (like ORDER BY)*

```js
db.orders.aggregate([
  { $sort: { price: -1 } }  // Descending
])
```

✅ Sort orders by price (highest first).

---

### 5️⃣ **\$limit** – *Limit number of results*

```js
db.orders.aggregate([
  { $limit: 5 }
])
```

✅ Show only first 5 documents.

---

### 6️⃣ **\$skip** – *Skip records (useful in pagination)*

```js
db.orders.aggregate([
  { $skip: 5 }
])
```

✅ Skip first 5 records (for page 2).

---

### 7️⃣ **\$count** – *Count number of documents*

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $count: "totalDelivered" }
])
```

✅ Count number of delivered orders.

---

### 8️⃣ **\$unwind** – *Break array field into separate documents*

#### 📦 Sample:

```js
{
  _id: 1,
  customer: "Sajid",
  items: ["laptop", "mouse", "keyboard"]
}
```

#### Query:

```js
db.orders.aggregate([
  { $unwind: "$items" }
])
```

✅ Output:
Creates 3 documents – one for each item.

---

### 9️⃣ **\$lookup** – *Join with another collection (like SQL JOIN)*

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
])
```

✅ Joins orders with customers and gives extra details.

---

### 🔟 **\$addFields** – *Add new field (like in project)*

```js
db.orders.aggregate([
  {
    $addFields: {
      totalAmount: { $multiply: ["$price", "$quantity"] }
    }
  }
])
```

✅ Adds a new field to each document.

---

### 🔁 **\$merge** – *Save aggregation output to another collection*

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $merge: "delivered_orders" }
])
```

✅ Saves the result to a new collection called `delivered_orders`.

---

### ⚙️ **\$bucket** – *Group data by range (like salary slabs)*

```js
db.orders.aggregate([
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 10000, 30000, 60000],
      default: "Other",
      output: {
        count: { $sum: 1 }
      }
    }
  }
])
```

✅ Groups orders by price range.

---

### ⛓️ **Chaining Multiple Stages Example:**

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  {
    $group: {
      _id: "$customer",
      total: { $sum: { $multiply: ["$price", "$quantity"] } }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 3 }
])
```

✅ Top 3 customers by total spent on delivered orders.

---

## 🎯 Summary Table of Aggregation Stages:

| Stage        | Purpose                           |
| ------------ | --------------------------------- |
| `$match`     | Filter documents                  |
| `$project`   | Show/hide fields, create new ones |
| `$group`     | Group data and apply functions    |
| `$sort`      | Sort data                         |
| `$limit`     | Limit number of results           |
| `$skip`      | Skip documents (pagination)       |
| `$count`     | Count documents                   |
| `$unwind`    | Flatten array into documents      |
| `$lookup`    | Join with another collection      |
| `$addFields` | Add computed fields               |
| `$merge`     | Store result in new collection    |
| `$bucket`    | Group by range                    |

---


## Q. ***How is data stored in MongoDB?***

MongoDB stores data as flexible JSON-like documents inside collections, which are grouped under databases. Internally, it uses BSON and binary files.

🧾 1. MongoDB stores data as Documents
Documents are stored in JSON-like format (called BSON – Binary JSON).

Each document is a set of key-value pairs.

## Q. ***What are the differences between MongoDB and SQL-SERVER?***

* The MongoDB store the data in documents with JSON format but SQL store the data in Table format.
* The MongoDB provides high performance, high availability, easy scalability etc.  rather than SQL Server.
* In the MongoDB, we can change the structure simply by adding, removing column from the existing documents.

**MongoDB and SQL Server Comparision Table**

|Base of Comparison  | MS SQL Server      | MongoDB             |
|--------------------|--------------------|---------------------|
|Storage Model       |RDBMS               |Document-Oriented    |
|Joins               |Yes                 |No                   |
|Transaction         |ACID                |Multi-document ACID Transactions with snapshot isolation |
|Agile practices     |No                  |Yes                  |
|Data Schema         |Fixed               |Dynamic              |
|Scalability         |Vertical            |Horizontal           |
|Map Reduce          |No                  |Yes                  |
|Language            |SQL query language  |JSON Query Language  |
|Secondary index     |Yes                 |Yes                  |
|Triggers            |Yes                 |Yes                  |
|Foreign Keys        |Yes                 |No                   |
|Concurrency         |Yes                 |yes                  |
|XML Support         |Yes                 |No                   |

---

## ✅ **MongoDB vs SQL Server – Key Differences**

| Feature               | 🟢 **MongoDB**                       | 🔵 **SQL Server (MSSQL)**             |
| --------------------- | ------------------------------------ | ------------------------------------- |
| **Type**              | NoSQL (Document DB)                  | Relational Database (RDBMS)           |
| **Data Format**       | JSON-like documents (BSON)           | Tables with rows and columns          |
| **Schema**            | Dynamic (Schema-less)                | Fixed schema (strict)                 |
| **Data Storage Unit** | Collection → Document                | Table → Row                           |
| **Joins**             | Not native, done via `$lookup`       | Native SQL joins (INNER, LEFT, etc.)  |
| **Query Language**    | MongoDB Query Language (MQL)         | SQL (Structured Query Language)       |
| **Relationships**     | Manual (Embedding or Referencing)    | Well-supported (PK-FK)                |
| **Scalability**       | Horizontally scalable (via sharding) | Mostly vertically scalable (scale-up) |
| **Best Use Cases**    | Big Data, Real-time apps, Flex data  | Banking, ERP, Structured transactions |
| **Transactions**      | Limited but supported (multi-doc)    | Strong ACID transaction support       |
| **Performance**       | Faster for unstructured data         | Faster for complex structured queries |
| **Indexing**          | Supports indexing                    | Supports indexing                     |
| **Data Integrity**    | Weak (due to schema-less)            | Strong (via constraints)              |
| **Learning Curve**    | Easy for developers                  | May be harder for beginners           |

---

## 🧠 **Desi Style Example:**

### 🏢 SQL Server = Government Office

* Sab kuch **rules ke hisaab se** hota hai
* Har form me same fields hone chahiye
* Strong checking (constraints, relations)

### 🧳 MongoDB = Open Bazar Shop

* Aap apne hisaab se saman rakh sakte ho
* Har item ka size ya type alag ho sakta hai
* Fast and flexible — but aapko manage karna padta hai

---

## 🔍 Use MongoDB When:

* You need **flexibility** in data structure
* You work with **real-time, big data**, or fast development
* You don’t need complex joins or strict constraints

## 🔍 Use SQL Server When:

* You need **strong data integrity and relationships**
* Data is **well structured**
* You need complex joins, transactions, and reports

---

## 🎯 Final Words:

| MongoDB              | SQL Server              |
| -------------------- | ----------------------- |
| Fast, flexible, JSON | Strong, strict, tabular |
| Good for startups    | Good for enterprise     |

Both are powerful — use based on project needs!

---


Let’s understand **Vertical vs Horizontal Scalability**:

---

### 🔸 **1. Vertical Scalability (Scale-Up)**

**Matlab:**
Ek hi server me jyada power (CPU, RAM, Storage) add karna.

**Example:**
Apke paas ek laptop hai, aur usme RAM 4GB se 16GB kar dete ho. Matlab wahi system powerful bana diya.

**MongoDB me kab use karein:**
Jab data ya traffic kam ho, aur ek hi server sab handle kar raha ho.

**Limitations:**

* Har server ki ek limit hoti hai (jitna upgrade ho sake).
* Mehenga hota hai.

---

### 🔸 **2. Horizontal Scalability (Scale-Out)**

**Matlab:**
Ek se jyada servers add karna aur load sabme baat dena.

**Example:**
Aapke paas ek kirana dukaan hai, aur aap teen alag-alag dukaane aur khol lete ho, taki sab jagah saman mile aur rush kam ho.

**MongoDB me kab use karein:**

* Jab data bahut jyada ho.
* Jab high availability aur performance chahiye.

**MongoDB Feature:**
MongoDB horizontal scaling ko support karta hai **sharding** ke through.

---

### 🔄 Summary Table:

| Feature            | Vertical (Scale-Up)               | Horizontal (Scale-Out)         |
| ------------------ | --------------------------------- | ------------------------------ |
| Power badhate hain | Same server me                    | Alag-alag servers me           |
| Cost               | High                              | Moderate                       |
| MongoDB support    | Limited                           | Strong (via sharding)          |
| Failure Risk       | High (ek server fail to sab band) | Low (load distribute hota hai) |
| Real Example       | Laptop me RAM badhana             | Multiple systems use karna     |

---


## Q. ***How can you achieve transaction and locking in MongoDB?***

In MongoDB (4.2), an operation on a single document is atomic. For situations that require atomicity of reads and writes to multiple documents (in a single or multiple collections), MongoDB supports multi-document transactions. With distributed transactions, transactions can be used across multiple operations, collections, databases, documents, and shards.

MongoDB allows multiple clients to read and write the same data. In order to ensure consistency, it uses locking and other concurrency control measures to prevent multiple clients from modifying the same piece of data simultaneously.

MongoDB uses **multi-granularity locking** that allows operations to lock at the global, database or collection level, and allows for individual storage engines to implement their own concurrency control below the collection level (e.g., at the document-level in WiredTiger). MongoDB uses reader-writer locks that allow concurrent readers shared access to a resource, such as a database or collection.

The lock modes are represented as follows:

|Lock Mode   |Description                 |
|------------|----------------------------|
|R           |Represents Shared (S) lock. |
|W           |Represents Exclusive (X) lock.|
|r           |Represents Intent Shared (IS) lock.|
|w           |Represents Intent Exclusive (IX) lock.|

**Example:**

The following example highlights the key components of the transactions API

```js
const client = new MongoClient(uri);
await client.connect();

// Prereq: Create collections.

await client.db('mydb1').collection('foo').insertOne({ abc: 0 }, { w: 'majority' });

await client.db('mydb2').collection('bar').insertOne({ xyz: 0 }, { w: 'majority' });

// Step 1: Start a Client Session
const session = client.startSession();

// Step 2: Optional. Define options to use for the transaction
const transactionOptions = {
  readPreference: 'primary',
  readConcern: { level: 'local' },
  writeConcern: { w: 'majority' }
};

// Step 3: Use withTransaction to start a transaction, execute the callback, and commit (or abort on error)
// Note: The callback for withTransaction MUST be async and/or return a Promise.
try {
  await session.withTransaction(async () => {
    const coll1 = client.db('mydb1').collection('foo');
    const coll2 = client.db('mydb2').collection('bar');

    // Important:: You must pass the session to the operations

    await coll1.insertOne({ abc: 1 }, { session });
    await coll2.insertOne({ xyz: 999 }, { session });
  }, transactionOptions);
} finally {
   await session.endSession();
   await client.close();
}
```
In MongoDB, you can achieve **transactions** and **locking**—but in a **different way** than traditional SQL databases like SQL Server.


---

## 🔹 1. **Transactions in MongoDB**

### ✅ Since MongoDB 4.0+, **multi-document ACID transactions** are supported.

### 🔸 What is a transaction?

A transaction means:

> Ya to sab operations sath me ho (commit), ya ek bhi na ho (rollback).
> Example: Paisa transfer — A ka paisa ghatna aur B ka badhna — dono ek sath hona chahiye.

### 🔸 How to use in MongoDB?

#### 🔧 Syntax (Node.js example):

```js
const session = await mongoose.startSession();

session.startTransaction();

try {
  await Account.updateOne({ _id: 'A' }, { $inc: { balance: -100 } }).session(session);
  await Account.updateOne({ _id: 'B' }, { $inc: { balance: 100 } }).session(session);

  await session.commitTransaction();
  session.endSession();
} catch (err) {
  await session.abortTransaction();
  session.endSession();
}
```

> Note: Transactions need **replica set** (even on localhost for dev).

---

## 🔹 2. **Locking in MongoDB**

### 🔸 Does MongoDB support locking like SQL?

✅ Yes, but **internally**. MongoDB uses:

* **Document-level locking** (not row, table, or collection level like SQL Server).
* This means only **one write** can happen to a document at a time, others wait.

### 🔸 You don’t manually lock/unlock — MongoDB handles it.

But for **manual concurrency control**, you can use **`$isolated`**, **`findAndModify`**, or even create a **"lock" field** in your document.

---

## 🔸 Example of Soft Locking (Custom Lock Flag):

```js
// Step 1: Lock document
await db.tasks.updateOne(
  { _id: taskId, locked: false },
  { $set: { locked: true } }
);

// Step 2: Process task...

// Step 3: Unlock after done
await db.tasks.updateOne(
  { _id: taskId },
  { $set: { locked: false } }
);
```

---

## 🆚 Comparison: MongoDB vs SQL Server

| Feature        | MongoDB                     | SQL Server                     |
| -------------- | --------------------------- | ------------------------------ |
| Transactions   | Supported (since v4.0)      | Fully supported                |
| Locking        | Document-level              | Row/Table-level                |
| Performance    | Faster writes, less locking | May slow down with heavy locks |
| Custom locking | Manual via field (optional) | Built-in                       |

---


## Q. ***When to Use MongoDB Rather than MySQL?***

### **When to Use MongoDB Rather than MySQL**

You should use **MongoDB** instead of **MySQL** in the following situations:

---

### ✅ 1. **If your data structure is not fixed (Flexible schema):**

* In MongoDB, you can store different types of data in the same collection.
* Example: If your user data keeps changing (sometimes phone number, sometimes multiple addresses), MongoDB handles it easily.

> 🧠 Use MongoDB when your project needs flexibility and structure is not fixed.

---

### ✅ 2. **If you are dealing with large volumes of unstructured or semi-structured data:**

* MongoDB handles images, videos, logs, JSON data, etc., very well.

> 🧠 Ideal for apps like social media, logs, analytics, IoT, etc.

---

### ✅ 3. **Faster development with changing requirements:**

* MongoDB lets you change the data model easily during development.
* No need to write complex ALTER TABLE commands like in MySQL.

> 🧠 Great for startups or fast-moving projects.

---

### ✅ 4. **When you need high performance with large datasets:**

* MongoDB reads/writes fast when properly indexed.

> 🧠 Use in real-time applications like chat apps, e-commerce, or stock trading platforms.

---

### ✅ 5. **When you want Horizontal Scalability (scale with more servers):**

* MongoDB supports sharding, which means it can split data across many servers.
* MySQL mostly supports vertical scaling (increase CPU, RAM).

> 🧠 MongoDB is better when data is growing very large and needs distribution.

---

### ✅ 6. **Geolocation or hierarchical data:**

* MongoDB supports complex data types like arrays, embedded documents.
* You can store nested data directly without joins.

> 🧠 Example: Store all addresses of a user inside the user document itself.

---

### ❌ **Don’t use MongoDB when:**

* You need strong ACID transactions (like banking systems).
* You need complex JOIN operations (like relational reports).

---

### 🔄 Simple Comparison:

| Feature             | MongoDB                       | MySQL                        |
| ------------------- | ----------------------------- | ---------------------------- |
| Schema              | Flexible                      | Fixed                        |
| Data Type           | JSON-like documents (BSON)    | Tables & Rows                |
| Speed with Big Data | Faster                        | Slower                       |
| Joins               | Limited                       | Strong                       |
| Scalability         | Horizontal (easy)             | Vertical (harder)            |
| Best For            | Real-time, fast-changing apps | Traditional, structured apps |

---

## Q. ***How MongoDB supports ACID transactions and locking functionalities?***
Here's a simple explanation of how **MongoDB supports ACID transactions and locking functionalities**, especially for someone coming from an SQL background:

---

### ✅ **ACID Transactions in MongoDB (Since v4.0)**

**ACID** means:

* **A**tomicity → All operations complete or none.
* **C**onsistency → DB stays valid before & after transaction.
* **I**solation → Other operations don’t see partial changes.
* **D**urability → Once done, data stays saved—even after crash.

MongoDB **didn’t support full ACID** at the start, but now it supports **multi-document ACID transactions**, like SQL.

---

### 🔐 How Transactions Work in MongoDB?

* Start a session:

  ```js
  const session = db.getMongo().startSession();
  session.startTransaction();
  ```

* Perform operations:

  ```js
  db.collection1.insertOne({ name: "Sajid" }, { session });
  db.collection2.updateOne({ _id: 1 }, { $set: { age: 30 } }, { session });
  ```

* Commit or abort:

  ```js
  session.commitTransaction(); // save changes
  session.abortTransaction();  // rollback changes
  ```

✅ Useful when multiple collections/documents need to update together.

---

### 🔐 Locking in MongoDB

MongoDB uses:

* **Document-level locking** (not full table like SQL)
* Means **other documents are not blocked** when one is being updated

This gives:

* Better **concurrency**
* Faster **write/read performance**

---

### 📌 Summary:

| Feature             | MongoDB Support                        |
| ------------------- | -------------------------------------- |
| Atomic operations   | Yes, on a single document              |
| Multi-document ACID | Yes, from version 4.0                  |
| Locking mechanism   | Document-level locking                 |
| Rollback (abort)    | Supported in transactions              |
| Performance         | Faster because of fine-grained locking |

---

---

### 🔍 Pehle samjho: Transaction hota kya hai?

**Transaction** ka matlab hota hai **ek ya zyada operations ka group** jo ek saath complete hona chahiye.

#### 💡 Real-Life Example:

Sochiye aapne kisi dost ko ₹100 bhejna hai:

1. Aapke account se ₹100 **katna** (debit)
2. Uske account me ₹100 **add hona** (credit)

Yeh dono kaam **ek saath sahi hone chahiye**. Agar pehla ho gaya aur doosra nahi, to paisa gayab ho jayega. Isliye in dono operations ko **ek transaction me rakha jata hai**.

---

### 🤔 MongoDB me pehle ye possible nahi tha?

Haan, MongoDB NoSQL database hai. Pehle sirf **ek single document** level par atomicity (ek saath update hone ki guarantee) milti thi. Lekin ab MongoDB ne **multi-document transactions** introduce kiye hain (from version 4.0 onward).

---

### ✅ MongoDB Transaction ke Features:

1. **ACID-compliant** (Atomicity, Consistency, Isolation, Durability)
2. **Multi-document support** (ek se zyada documents ko ek transaction me update kar sakte ho)
3. Support for **Replica Set** aur **Sharded Cluster**

---

### 🧠 ACID ka matlab kya hota hai MongoDB me?

| 🔠 ACID Principle | Matlab (Desi Style)                                                |
| ----------------- | ------------------------------------------------------------------ |
| **Atomicity**     | Sabhi operations ek saath ho ya ek bhi na ho                       |
| **Consistency**   | Data hamesha valid state me rahe                                   |
| **Isolation**     | Ek transaction doosre me interfere na kare                         |
| **Durability**    | Transaction commit hone ke baad data safe hai, chahe crash ho jaye |

---

### 🧪 Example: Transaction in MongoDB (Node.js Shell Syntax)

```javascript
const session = await mongoose.startSession();
session.startTransaction();

try {
  await Account.updateOne(
    { name: 'Sajid' },
    { $inc: { balance: -100 } },
    { session }
  );

  await Account.updateOne(
    { name: 'Gulista' },
    { $inc: { balance: 100 } },
    { session }
  );

  await session.commitTransaction();
  console.log('Transaction Successful');
} catch (error) {
  await session.abortTransaction();
  console.error('Transaction Failed', error);
} finally {
  session.endSession();
}
```

---

### ⚙️ Kaise kaam karta hai:

1. `startSession()` se ek session start hota hai.
2. `startTransaction()` se transaction shuru hota hai.
3. Sabhi queries ke andar `{ session }` dena padta hai.
4. `commitTransaction()` se sab operation apply hote hain.
5. Agar koi error aaye to `abortTransaction()` se rollback ho jata hai.

---

### 🎯 MongoDB Transactions Use Kab Karein?

* Jab aapko **banking type** ya **order management** system banana ho.
* Jab aapko ek saath **multiple documents update karne ho**.
* Jab data **critical ho**, jaise: inventory count, money transfer, etc.

---

### 🚫 Caution: Transactions are heavy

* Transactions thode **performance costly** hote hain.
* Agar sirf ek hi document update karna hai to **transactions ki jarurat nahi**.

---

### 📌 Best Practices:

1. Transactions ko **short and fast** rakho.
2. Error handle karo — **abortTransaction()** lagao.
3. Use **Replica Set** (required for transactions).
4. Agar possible ho to **single document design** rakho (embedded documents).

---


## Q. ***Explain limitations of MongoDB Transactions?***

MongoDB transactions can exist only for relatively short time periods.  By default, a transaction must span no more than one minute of clock time.  This limitation results from the underlying MongoDB implementation. MongoDB uses MVCC, but unlike databases such as Oracle, the “older” versions of data are kept only in memory.

1. You cannot create or drop a collection inside a transaction.
2. Transactions cannot make writes to a capped collection
3. Transactions take plenty of time to execute and somehow they can slow the performance of the database.
4. Transaction size is limited to 16MB requiring one to split any that tends to exceed this size into smaller transactions.
5. Subjecting a large number of documents to a transaction may exert excessive pressure on the WiredTiger engine and since it relies on the snapshot capability, there will be a retention of large unflushed operations in memory. This renders some performance cost on the database.


## Q. ***Should I normalize my data before storing it in MongoDB?***

Data used by multiple documents can either be embedded (denormalized) or referenced (normalized). Normalization, which is increasing the complexity of the schema by splitting tables into multiple smaller ones to reduce the data redundancy( 1NF, 2NF, 3NF).

But Mongo follows the exact opposite way of what we do with SQL. In MongoDB, data normalization is not requried. Indeed we need to de-normalize and fit it into a collection of multiple documents.

**Example:** Let\'s say we have three tables

* Table - 1 : ColumnA, ColumnB (primary key)
* Table - 2 : ColumnC (Foreign key), ColumnD (primary key)
* Table - 3 : ColumnE (foreign key), ColumnF

In this case, mongoDB document structure should be as follows.

```js
{
    ColumnA : ValueA,
    ColumnB : ValueB,
    Subset1 : [{
       ColumnC : ValueC,
       ColumnD : ValueD,
       Subset2 : [{
           ColumnE : ValueE,
           ColumnF : ValueF
       }]
    }]
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is upsert operation in MongoDB?***
### 🔁 What is an **Upsert** Operation in MongoDB?

**Upsert** = **Update + Insert**

The `upsert` option in MongoDB is used with `updateOne()`, `updateMany()`, or `replaceOne()` operations.

It tells MongoDB:

* If the document **exists**, update it.
* If the document **doesn’t exist**, create a new document with the specified fields.

---

### ✅ Syntax:

```js
db.collection.updateOne(
  { filter_criteria },
  { $set: { field1: value1, field2: value2 } },
  { upsert: true }
);
```

---

### 🔎 Example:

Suppose you have a collection `users`.

```js
db.users.updateOne(
  { name: "Sajid" }, // Filter: find user with name = Sajid
  { $set: { age: 30, city: "Udaipur" } }, // What to update
  { upsert: true } // If not found, insert
);
```

### 💡 What happens:

* If a user named "Sajid" exists → update his age and city.
* If not → insert a **new document** like:

  ```js
  { name: "Sajid", age: 30, city: "Udaipur" }
  ```

---

### 📌 Use Cases:

* Syncing user data from another source.
* When you’re unsure if a document exists.
* Logging the first access of a user/device/event.

---

### ⚠️ Important Notes:

* `upsert: false` (default): will **not** insert if no match found.
* MongoDB will only insert what’s inside the update operators (`$set`, `$inc`, etc.).

---

Sure Sajid bhai!
Here are simple **MongoDB examples** of `updateOne()`, `updateMany()`, and `replaceOne()` – each with and without **`upsert`**.

---

## 🧪 Sample Collection: `users`

```js
[
  { name: "Sajid", city: "Udaipur", age: 28 },
  { name: "Gulista", city: "Jaipur", age: 26 },
  { name: "Rahul", city: "Udaipur", age: 30 }
]
```

---

## ✅ 1. `updateOne()`

> 🔹 Updates **only one** matching document.

### 🔹 Example: Without Upsert

```js
db.users.updateOne(
  { name: "Sajid" },
  { $set: { age: 29 } }
);
```

📌 Changes Sajid's age to 29.

---

### 🔹 Example: With Upsert

```js
db.users.updateOne(
  { name: "Zoya" },
  { $set: { city: "Delhi", age: 22 } },
  { upsert: true }
);
```

📌 If "Zoya" not found, it creates:

```js
{ name: "Zoya", city: "Delhi", age: 22 }
```

---

## ✅ 2. `updateMany()`

> 🔹 Updates **all documents** matching the filter.

### 🔹 Example:

```js
db.users.updateMany(
  { city: "Udaipur" },
  { $set: { state: "Rajasthan" } }
);
```

📌 Adds `state: "Rajasthan"` to all users in Udaipur.

---

## ✅ 3. `replaceOne()`

> 🔹 **Replaces entire document** (not partial update).

### 🔹 Example: Replace Sajid’s full document

```js
db.users.replaceOne(
  { name: "Sajid" },
  { name: "Sajid", city: "Bangalore", age: 29 }
);
```

📌 Replaces whole document. Old fields not mentioned will be **removed**.

---

### 💡 Tip:

Use `updateOne()` with `$set` for **partial updates**.
Use `replaceOne()` when you want to **replace full object**.

---


## Q. ***Is there an "upsert" option in the mongodb insert command?***

The `db.collection.insert()` provides no upsert possibility. Instead, mongo insert inserts a new document into a collection. Upsert is only possible using `db.collection.update()` and `db.collection.save()`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is oplog?***

The OpLog (Operations Log) is a special capped collection that keeps a rolling record of all operations that modify the data stored in databases.

MongoDB applies database operations on the primary and then records the operations on the primary\'s oplog. The secondary members then copy and apply these operations in an asynchronous process. All replica set members contain a copy of the oplog, in the **local.oplog.rs** collection, which allows them to maintain the current state of the database.

Each operation in the oplog is idempotent. That is, oplog operations produce the same results whether applied once or multiple times to the target dataset.

**Example:** Querying The OpLog

```js
MongoDB shell version: 2.0.4
connecting to: mongodb:27017/test
PRIMARY> use local
PRIMARY> db.oplog.rs.find()
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does MongoDB pushes the writes to disk immediately or lazily?***

MongoDB pushes the data to disk lazily. It updates the immediately written to the journal but writing the data from journal to disk happens lazily.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to perform a delete operation in MongoDB?***

MongoDB\'s `db.collection.deleteMany()` and `db.collection.deleteOne()` method is used to delete documents from the collection. Delete operations do not drop indexes, even if deleting all documents from a collection. All write operations in MongoDB are atomic on the level of a single document.

**Example:**

```js
// Create Inventory Collection
db.inventory.insertMany( [
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
] );



// Delete Commands
db.inventory.deleteMany({}) // Delete All Documents

db.inventory.deleteMany({ status : "A" }) // Delete All Documents that Match a Condition

db.inventory.deleteOne( { status: "D" } ) // Delete Only One Document that Matches a Condition
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***If you remove a document from database, does MongoDB remove it from disk?***

Yes. If you remove a document from database, MongoDB will remove it from disk too.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the structure of ObjectID in MongoDB?***

The **ObjectId(`<hexadecimal>`)** class is the default primary key for a MongoDB document and is usually found in the `_id` field in an inserted document. It returns a new ObjectId value. The 12-byte ObjectId value consists of:

* a 4-byte timestamp value, representing the ObjectId\'s creation, measured in seconds since the Unix epoch
* a 5-byte random value
* a 3-byte incrementing counter, initialized to a random value

<p align="center">
  <img src="assets/objectid.png" alt="Document Databases" />
</p>

While the BSON format itself is little-endian, the timestamp and counter values are big-endian, with the most significant bytes appearing first in the byte sequence.

**Create ObjectId**

To create a new objectID manually within the MongoDB we can declare `objectId()` as a method.

```js
> newObjectId = ObjectId();

// Output
ObjectId("5349b4ddd2781d08c09890f3")
```

**MongoDB provides three methods for ObjectId**

|  Method               |Description             |
|-----------------------|------------------------|
|ObjectId.getTimestamp()|Returns the timestamp portion of the object as a Date.|
|ObjectId.toString()    |Returns the JavaScript representation in the form of a string literal "ObjectId(...)".|
|ObjectId.valueOf()     |Returns the representation of the object as a hexadecimal string.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a covered query in MongoDB?***

The MongoDB covered query is one which uses an index and does not have to examine any documents. An index will cover a query if it satisfies the following conditions:

* All fields in a query are part of an index.
* All fields returned in the results are of the same index.
* No fields in the query are equal to null

Since all the fields present in the query are part of an index, MongoDB matches the query conditions and returns the result using the same index without actually looking inside the documents.

**Example:**

A collection inventory has the following index on the type and item fields:

```js
db.inventory.createIndex( { type: 1, item: 1 } )
```

This index will cover the following operation which queries on the type and item fields and returns only the item field:

```js
db.inventory.find(
   { type: "food", item:/^c/ },
   { item: 1, _id: 0 }
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why MongoDB is not preferred over a 32-bit system?***

When running a 32-bit system build of MongoDB, the total storage size for the server, including data and indexes, is 2 gigabytes. The reason for this is that the MongoDB storage engine uses memory-mapped files for performance.

If you are running a 64-bit build of MongoDB, there is virtually no limit to storage size.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Can one MongoDB operation lock more than one database?***

Yes. Operations like `db.copyDatabase()`, `db.repairDatabase()`, etc. can lock more than one databases involved.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Sharding in MongoDB?***

**Sharding** is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.

Database systems with large data sets or high throughput applications can challenge the capacity of a single server. For example, high query rates can exhaust the CPU capacity of the server. Working set sizes larger than the system\'s RAM stress the I/O capacity of disk drives. There are two methods for addressing system growth: vertical and horizontal scaling.

**1. Vertical Scaling**

Vertical Scaling involves increasing the capacity of a single server, such as using a more powerful CPU, adding more RAM, or increasing the amount of storage space.

**2. Horizontal Scaling**

Horizontal Scaling involves dividing the system dataset and load over multiple servers, adding additional servers to increase capacity as required. While the overall speed or capacity of a single machine may not be high, each machine handles a subset of the overall workload, potentially providing better efficiency than a single high-speed high-capacity server.

<p align="center">
  <img src="assets/sharding.png" alt="Document Databases" width="400px" />
</p>

MongoDB supports horizontal scaling through `sharding`. A MongoDB sharded cluster consists of the following components:

* **Shards**: Each shard contains a subset of the sharded data. Each shard can be deployed as a replica set.
* **Mongos**: The mongos acts as a query router, providing an interface between client applications and the sharded  cluster. Starting in MongoDB 4.4, mongos can support hedged reads to minimize latencies.
* **Config Servers**: Config servers store metadata and configuration settings for the cluster.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is Aggregation in MongoDB?***

Aggregation in MongoDB is an operation used to process the data that returns the computed results. Aggregation basically groups the data from multiple documents and operates in many ways on those grouped data in order to return one combined result.

Aggregate function groups the records in a collection, and can be used to provide total number(sum), average, minimum, maximum etc out of the group selected. In order to perform the aggregate function in MongoDB, aggregate () is the function to be used.

Syntax 

```js
db.collection_name.aggregate(aggregate_operation)
```

MongoDB provides three ways to perform aggregation:

* the aggregation pipeline,
* the map-reduce function,
* and single purpose aggregation methods and commands.

MongoDB\'s aggregation framework is modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into an aggregated result.

**Example**

```js
db.orders.aggregate([
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
]);
```

The `$match` stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A". The `$group` stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id.

**Expressions used by Aggregate function**

|Expression  |Description                                                           |
|------------|----------------------------------------------------------------------|
|$sum        |Summates the defined values from all the documents in a collection|
|$avg        |Calculates the average values from all the documents in a collection|
|$min        |Return the minimum of all values of documents in a collection|
|$max        |Return the maximum of all values of documents in a collection|
|$addToSet   |Inserts values to an array but no duplicates in the resulting document|
|$push       |Inserts values to an array in the resulting document|
|$first      |Returns the first document from the source document|
|$last       |Returns the last document from the source document|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why are MongoDB data files large in size?***

MongoDB preallocates data files to reserve space and avoid file system fragmentation when you setup the server.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can you isolate your cursors from intervening with the write operations?***

As cursor is not isolated during its lifetime, thus intervening write operations on a document may result in cursor that returns a document more than once. The `snapshot()` method can be used on a cursor to isolate the operation for a very specific case. `snapshot()` traverses the index on the `_id` field and guarantees that the query will return each document no more than once.

**Restriction:**

* We cannot use `snapshot()` with sharded collections.
* We cannot use `snapshot()` with `sort()` or `hint()` cursor methods.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***At what interval does MongoDB write updates to the disk?***

By default configuration, MongoDB writes updates to the disk every 60 seconds. However, this is configurable with the `commitIntervalMs` and `syncPeriodSecs` options.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What happens if an index does not fit into RAM?***

If the indexes does not fit into RAM, MongoDB reads data from disk which is relatively very much slower than reading from RAM.

Indexes do not have to fit entirely into RAM in all cases. If the value of the indexed field increments with every insert, and most queries select recently added documents; then MongoDB only needs to keep the parts of the index that hold the most recent or "right-most" values in RAM. This allows for efficient index use for read and write operations and minimize the amount of RAM required to support the index.

**Example**: To check the size of indexes

```js
> db.collection.totalIndexSize()

// Output (in bytes)
4294976499 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Does MongoDB provide a facility to do text search?***

MongoDB supports query operations that perform a text search of string content. To perform text search, MongoDB uses a `text index` and the `$text` operator.

**Example**

A collection stores with the following documents:

```js
db.stores.insert(
   [
     { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
     { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
     { _id: 3, name: "Coffee Shop", description: "Just coffee" },
     { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { _id: 5, name: "Java Shopping", description: "Indonesian goods" }
   ]
)
```

**1. Text Index**

MongoDB provides `text indexes` to support text search queries on string content. `text indexes` can include any field whose value is a string or an array of string elements.

```js
db.stores.createIndex( { name: "text", description: "text" } )
```

**2. $text Operator**

Use the `$text` query operator to perform text searches on a collection with a text index. `$text` will tokenize the search string using whitespace and most punctuation as delimiters, and perform a logical OR of all such tokens in the search string.

**Example**:

```js
// Returns all stores containing any terms from the list “coffee”, “shop”, and “java”
db.stores.find( { $text: { $search: "java coffee shop" } } )


// Returns all documents containing “coffee shop”
db.stores.find( { $text: { $search: "\"coffee shop\"" } } )


// Returns all stores containing “java” or “shop” but not “coffee”
db.stores.find( { $text: { $search: "java shop -coffee" } } )
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How does Journaling work in MongoDB?***

Mongod primarily hosts the write operations in memory in shared view. It is called shared because it has memory mapping in actual disc. In this process, a write operation occurs in mongod, which then creates changes in private view. The first block is memory and the second block is "my disc". After a specified interval, which is called a "journal commit interval", the private view writes those operations in journal directory (residing in the disc).

Once the journal commit happens, mongod pushes data into shared view. As part of the process, it gets written to actual data directory from the shared view (as this process happens in background). The basic advantage is, we have a reduced cycle from 60 seconds to 200 milliseconds.

In a scenario where an abruption occurs at any point of time or flash disc remains unavailable for last 59 seconds , then when the next time mongod starts, it basically replays all write operation logs and writes into the actual data directory.

<p align="center">
  <img src="assets/journaling.png" alt="Document Databases" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is MongoDB schema-less?***

As a NoSQL database, MongoDB is considered schemaless because it does not require a rigid, pre-defined schema like a relational database. The database management system (DBMS) enforces a partial schema as data is written, explicitly listing collections and indexes.

MongoDB is a document based database, which does not use the concept of tables and columns, instead of which it uses the concept of documents and collections. All the referential data with respect to different modules will be stored as one collection. More over the BSON data structure used by MongoDB can easily have varying sets of data and fields with different types.

When we say **schemaless**, we actually mean **dynamically typed schema**, as opposed to statically typed schemas as available in RDBMS(SQL) databases. JSON is a completely schema free data structure, as opposed to XML which allows you to specify XSD if you need.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is a Storage Engine in MongoDB?***

The storage engine is the component of the database that is responsible for managing how data is stored, both in memory and on disk. MongoDB supports multiple storage engines, as different engines perform better for specific workloads.

**Example**: command to find storage engine

```js
> db.serverStatus().storageEngine

// Output
{
    "name" : "wiredTiger",
    "supportsCommittedReads" : true,
    "oldestRequiredTimestampForCrashRecovery" : Timestamp(0, 0),
    "supportsPendingDrops" : true,
    "dropPendingIdents" : NumberLong(0),
    "supportsTwoPhaseIndexBuild" : true,
    "supportsSnapshotReadConcern" : true,
    "readOnly" : false,
    "persistent" : true,
    "backupCursorOpen" : false
}
```

<p align="center">
  <img src="assets/StorageEngine.png" alt="Storage Engine" />
</p>

MongoDB supports mainly 3 storage engines whose performance differ in accordance to some specific workloads. The storage engines are:

* WiredTiger Storage Engine
* In-Memory Storage Engine
* MMAPv1 Storage Engine

**1. WiredTiger Storage Engine**

`WiredTiger` is the default storage engine starting in MongoDB 3.2. It is well-suited for most workloads and is recommended for new deployments. WiredTiger provides a document-level concurrency model, checkpointing, and compression, among other features. The WiredTiger storage engine has both configurations of a `B-Tree` Based Engine and a `Log Structured Merge Tree` Based Engine.

**2. In-Memory Storage Engine**

In-Memory Storage Engine is available in MongoDB Enterprise. Rather than storing documents on-disk, it retains them in-memory for more predictable data latencies.

**3. MMAPv1 Storage Engine**

MMAPv1 is a B-tree based system which powers many of the functions such as storage interaction and memory management to the operating system. Its name comes from the fact that it uses memory mapped files to access data. It does so by directly loading and modifying file contents, which are in a virtual memory through a `mmap()` `syscall` methodology.

<p align="center">
  <img src="assets/MONGO_SE1.png" alt="Storage Engine" width="600px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to condense large volumes of data in Mongodb?***

**compact**

Rewrites and defragments all data and indexes in a collection. On `WiredTiger` databases, this command will release unneeded disk space to the operating system. This command will perform a compaction "in-line".

MongoDB compresses the files by:

* copying the files to a new location
* looping through the documents and re-ordering / re-solving them
* replacing the original files with the new files

**Syntax**

```js
{ compact: <collection name> }
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain relationships in MongoDB?***

Relationships in MongoDB are used to specify how one or more documents are related to each other. In MongoDB, the relationships can be modelled either by Embedded way or by using the Reference approach. These relationships can be of the following forms:

* One to One
* One to Many
* Many to Many

**Example**: Let us consider the case of storing addresses for users. So, one user can have multiple addresses making this a `1:N` relationship.

User Collection

```js
{
   "_id":ObjectId("52ffc33cd85242f436000001"),
   "name": "Alex K",
   "contact": "987654321",
   "dob": "01-01-1990"
}
```

Address Collection

```js
{
   "_id":ObjectId("52ffc4a5d85242602e000000"),
   "building": "22 A, Indiana Apt",
   "pincode": 123456,
   "city": "Los Angeles",
   "state": "California"
} 
```

**1. Modeling Embedded Relationships**

In the embedded approach, we will embed the address document inside the user document.

```js
> db.users.insert({
	{
		"_id":ObjectId("52ffc33cd85242f436000001"),
		"contact": "987654321",
		"dob": "01-01-1991",
		"name": "Alex K",
		"address": [
			{
				"building": "22 A, Indiana Apt",
				"pincode": 123456,
				"city": "Los Angeles",
				"state": "California"
			},
			{
				"building": "170 A, Acropolis Apt",
				"pincode": 456789,
				"city": "Chicago",
				"state": "Illinois"
			}
		]
	}
})
```

This approach maintains all the related data in a single document, which makes it easy to retrieve and maintain. The whole document can be retrieved in a single query such as −

```js
>db.users.findOne({"name":"Alex K"},{"address":1})
```

The drawback is that if the embedded document keeps on growing too much in size, it can impact the read/write performance.

**2. Modeling Referenced Relationships**

This is the approach of designing normalized relationship. In this approach, both the user and address documents will be maintained separately but the user document will contain a field that will reference the address document\'s id field.

```js
{
   "_id":ObjectId("52ffc33cd85242f436000001"),
   "contact": "987654321",
   "dob": "01-01-1991",
   "name": "Alex K",
   "address_ids": [
      ObjectId("52ffc4a5d85242602e000000"),
      ObjectId("52ffc4a5d85242602e000001")
   ]
}
```

With this approach, we will need two queries: first to fetch the `address_ids` fields from user document and second to fetch these addresses from address collection.

```js
>var result = db.users.findOne({"name":"Alex K"},{"address_ids":1})
>var addresses = db.address.find({"_id":{"$in":result["address_ids"]}})
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is use of capped collection in MongoDB?***

**Capped collections** are fixed-size collections that support high-throughput operations that insert and retrieve documents based on insertion order. Capped collections work in a way similar to `circular buffers`: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.

Capped collections restrict updates to the documents if the update results in increased document size. Since capped collections store documents in the order of the disk storage, it ensures that the document size does not increase the size allocated on the disk. Capped collections are best for storing log information, cache data, or any other high volume data.

**Example:-**

```js
>db.createCollection( "log", { capped: true, size: 100000 } )


// specify a maximum number of documents for the collection
>db.createCollection("log", { capped: true, size: 5242880, max: 5000 } )


// check whether a collection is capped or not
>db.cappedLogCollection.isCapped()


// convert existing collection to capped
>db.runCommand({"convertToCapped": "posts", size: 10000})


// Querying Capped Collection
>db.cappedLogCollection.find().sort({$natural: -1})
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is splitting in MongoDB?***

Splitting is a process that keeps chunks from growing too large. When a chunk grows beyond a specified chunk size, or if the number of documents in the chunk exceeds Maximum Number of Documents Per Chunk to Migrate, MongoDB splits the chunk based on the shard key values the chunk represent.

<p align="center">
  <img src="assets/mongoSplitting.svg" alt="Document Databases" width="400px" />
</p>

## Q. ***Explain what is horizontal scalability in mongodb?***

Horizontal Scaling involves dividing the system dataset and load over multiple servers, adding additional servers to increase capacity as required. While the overall speed or capacity of a single machine may not be high, each machine handles a subset of the overall workload, potentially providing better efficiency than a single high-speed high-capacity server. Expanding the capacity of the deployment only requires adding additional servers as needed, which can be a lower overall cost than high-end hardware for a single machine. The trade off is increased complexity in infrastructure and maintenance for the deployment.

<p align="center">
  <img src="assets/horizontal-vs-vertical-scaling.png" alt="Document Databases" width="400px" />
</p>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>