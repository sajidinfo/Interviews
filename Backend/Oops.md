# **OOP (Object-Oriented Programming) Interview Questions & Answers**  

Object-Oriented Programming (OOP) is a programming paradigm based on **objects, classes, inheritance, polymorphism, encapsulation, and abstraction**. Below are **basic interview questions and answers** covering these core concepts.  

---

## **1. Basics of OOP**  

### **Q1: What is Object-Oriented Programming (OOP)?**  
**A:**  
OOP is a programming paradigm that organizes software design around **objects** (instances of classes) rather than functions and logic. It focuses on:  
- **Classes & Objects**  
- **Inheritance**  
- **Polymorphism**  
- **Encapsulation**  
- **Abstraction**  

### **Q2: What is a Class and an Object?**  
**A:**  
- **Class:** A blueprint/template for creating objects (defines attributes & methods).  
- **Object:** An instance of a class (has state & behavior).  
- **Example:**  
  ```java
  class Car {          // Class
      String color;    // Attribute
      void drive() {   // Method
          System.out.println("Driving...");
      }
  }
  
  Car myCar = new Car(); // Object
  myCar.drive();
  ```  

---

## **2. Four Pillars of OOP**  

### **Q3: What is Inheritance?**  
**A:**  
- A mechanism where a **child class** inherits properties and methods from a **parent class**.  
- **Types:**  
  - **Single Inheritance** (Java, C#)  
  - **Multiple Inheritance** (C++ via interfaces)  
- **Example:**  
  ```java
  class Animal {        // Parent class
      void eat() { System.out.println("Eating..."); }
  }
  
  class Dog extends Animal {  // Child class
      void bark() { System.out.println("Barking..."); }
  }
  
  Dog d = new Dog();
  d.eat();  // Inherited
  d.bark(); // Own method
  ```  

### **Q4: What is Polymorphism?**  
**A:**  
- The ability of an object to **take many forms**.  
- **Types:**  
  - **Compile-time (Method Overloading)**  
  - **Runtime (Method Overriding)**  
- **Example:**  
  ```java
  // Method Overloading (Compile-time)
  class Calculator {
      int add(int a, int b) { return a + b; }
      double add(double a, double b) { return a + b; }
  }
  
  // Method Overriding (Runtime)
  class Animal {
      void sound() { System.out.println("Animal sound"); }
  }
  
  class Dog extends Animal {
      @Override
      void sound() { System.out.println("Bark!"); }
  }
  ```  

### **Q5: What is Encapsulation?**  
**A:**  
- **Wrapping data (variables) and methods** into a single unit (class).  
- Achieved using **private variables + public getters/setters**.  
- **Example:**  
  ```java
  class BankAccount {
      private double balance; // Private variable
      
      public double getBalance() { return balance; } // Getter
      public void deposit(double amount) { balance += amount; } // Setter
  }
  ```  

### **Q6: What is Abstraction?**  
**A:**  
- Hiding **implementation details** and showing only **essential features**.  
- Achieved via **abstract classes & interfaces**.  
- **Example:**  
  ```java
  abstract class Vehicle {  // Abstract class
      abstract void start(); // Abstract method (no body)
  }
  
  class Car extends Vehicle {
      @Override
      void start() { System.out.println("Car started"); }
  }
  ```  

---

## **3. Advanced OOP Concepts**  

### **Q7: What is an Interface?**  
**A:**  
- A **100% abstract class** (only method declarations, no implementation).  
- **Java 8+ allows `default` and `static` methods.**  
- **Example:**  
  ```java
  interface Drivable {
      void drive(); // Abstract method
      default void honk() { System.out.println("Honking!"); } // Default method
  }
  
  class Car implements Drivable {
      @Override
      public void drive() { System.out.println("Driving car"); }
  }
  ```  

### **Q8: What is the difference between Abstract Class and Interface?**  
**A:**  
| **Abstract Class** | **Interface** |  
|--------------------|--------------|  
| Can have **concrete methods** | Only abstract methods (before Java 8) |  
| Supports **single inheritance** | Supports **multiple inheritance** |  
| Can have **constructors** | No constructors |  
| Used for **partial abstraction** | Used for **full abstraction** |  

### **Q9: What is Composition over Inheritance?**  
**A:**  
- **Composition:** Designing classes by **including objects** of other classes (has-a relationship).  
- **Inheritance:** Deriving a class from another (is-a relationship).  
- **Example:**  
  ```java
  // Inheritance (IS-A)
  class Car extends Vehicle { ... }
  
  // Composition (HAS-A)
  class Engine { ... }
  class Car {
      private Engine engine; // Car HAS-A Engine
  }
  ```  

### **Q10: What is Method Overriding vs. Method Overloading?**  
**A:**  
| **Method Overriding** | **Method Overloading** |  
|----------------------|-----------------------|  
| Same method name & signature in **child class** | Same method name but **different parameters** |  
| **Runtime polymorphism** | **Compile-time polymorphism** |  
| Requires inheritance | No inheritance needed |  

---

## **4. Common OOP Interview Questions**  

### **Q11: What is a Constructor?**  
**A:**  
- A special method **called when an object is created**.  
- **Types:**  
  - **Default (no-args)**  
  - **Parameterized**  
  - **Copy Constructor**  
- **Example:**  
  ```java
  class Person {
      String name;
      
      // Constructor
      Person(String name) {
          this.name = name;
      }
  }
  ```  

### **Q12: What is the `super` keyword?**  
**A:**  
- Refers to the **parent class** (used to call parent’s methods/constructors).  
- **Example:**  
  ```java
  class Animal {
      void eat() { System.out.println("Eating..."); }
  }
  
  class Dog extends Animal {
      void bark() { 
          super.eat(); // Calls parent's eat()
          System.out.println("Barking..."); 
      }
  }
  ```  

### **Q13: What is the `this` keyword?**  
**A:**  
- Refers to the **current object** (used to differentiate instance variables from parameters).  
- **Example:**  
  ```java
  class Student {
      String name;
      
      Student(String name) {
          this.name = name; // this.name = instance variable
      }
  }
  ```  

### **Q14: What is a Static Method/Variable?**  
**A:**  
- Belongs to the **class** (not instances).  
- **Static methods** can’t access non-static members.  
- **Example:**  
  ```java
  class MathUtils {
      static int add(int a, int b) { return a + b; } // Static method
  }
  
  int sum = MathUtils.add(5, 3); // Called without object
  ```  

---

## **Summary Table of OOP Concepts**  
| **Concept** | **Definition** | **Example** |  
|------------|---------------|------------|  
| **Class** | Blueprint for objects | `class Car { ... }` |  
| **Object** | Instance of a class | `Car myCar = new Car();` |  
| **Inheritance** | Child class extends parent | `class Dog extends Animal` |  
| **Polymorphism** | Same method, different forms | Method overloading/overriding |  
| **Encapsulation** | Data hiding (private + getters/setters) | `private int age;` |  
| **Abstraction** | Hide details, show functionality | `abstract class Shape` |  
| **Interface** | 100% abstract class | `interface Drivable` |  

---
