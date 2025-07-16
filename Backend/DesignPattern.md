# **Design Patterns Interview Questions & Answers**  

Design patterns are reusable solutions to common software design problems. They improve code maintainability, scalability, and readability. Below are **basic interview questions and answers** categorized by design pattern types.  

---

## **1. Creational Design Patterns**  
*(Deal with object creation mechanisms.)*  

### **Q1: What is the Singleton Pattern?**  
**A:**  
- Ensures a class has **only one instance** and provides a **global access point** to it.  
- **Use Case:** Logging, database connections, configuration settings.  
- **Example:**  
  ```java
  public class Singleton {
      private static Singleton instance;
      
      private Singleton() {} // Private constructor
      
      public static Singleton getInstance() {
          if (instance == null) {
              instance = new Singleton();
          }
          return instance;
      }
  }
  ```  

### **Q2: What is the Factory Method Pattern?**  
**A:**  
- Defines an **interface** for creating objects but lets **subclasses decide** which class to instantiate.  
- **Use Case:** Decoupling object creation (e.g., UI components, payment gateways).  
- **Example:**  
  ```java
  interface Payment {
      void pay();
  }
  class CreditCard implements Payment { ... }
  class PayPal implements Payment { ... }
  
  class PaymentFactory {
      public Payment createPayment(String type) {
          if (type.equals("credit")) return new CreditCard();
          else return new PayPal();
      }
  }
  ```  

### **Q3: What is the Builder Pattern?**  
**A:**  
- Separates the **construction of a complex object** from its representation.  
- **Use Case:** Immutable objects with many optional parameters (e.g., `StringBuilder`).  
- **Example:**  
  ```java
  class Pizza {
      private String crust, sauce, toppings;
      
      static class Builder {
          private String crust, sauce, toppings;
          
          Builder setCrust(String crust) { this.crust = crust; return this; }
          Builder setSauce(String sauce) { this.sauce = sauce; return this; }
          Builder setToppings(String toppings) { this.toppings = toppings; return this; }
          
          Pizza build() { return new Pizza(this); }
      }
      
      private Pizza(Builder builder) {
          this.crust = builder.crust;
          this.sauce = builder.sauce;
          this.toppings = builder.toppings;
      }
  }
  // Usage:
  Pizza pizza = new Pizza.Builder().setCrust("thin").setSauce("tomato").build();
  ```  

---

## **2. Structural Design Patterns**  
*(Deal with class/object composition.)*  

### **Q4: What is the Adapter Pattern?**  
**A:**  
- Allows **incompatible interfaces** to work together by converting one interface into another.  
- **Use Case:** Legacy system integration, third-party API wrappers.  
- **Example:**  
  ```java
  interface ModernPrinter {
      void print(String text);
  }
  class LegacyPrinter {
      void printDocument(String doc) { ... }
  }
  
  class PrinterAdapter implements ModernPrinter {
      private LegacyPrinter legacyPrinter;
      
      public PrinterAdapter(LegacyPrinter printer) {
          this.legacyPrinter = printer;
      }
      
      @Override
      public void print(String text) {
          legacyPrinter.printDocument(text);
      }
  }
  ```  

### **Q5: What is the Decorator Pattern?**  
**A:**  
- Dynamically **adds behavior** to an object without altering its class.  
- **Use Case:** Adding features to UI components, logging, caching.  
- **Example (Java I/O Streams):**  
  ```java
  interface Coffee {
      double getCost();
  }
  class SimpleCoffee implements Coffee { ... }
  
  class MilkDecorator implements Coffee {
      private Coffee coffee;
      public MilkDecorator(Coffee coffee) { this.coffee = coffee; }
      
      @Override
      public double getCost() {
          return coffee.getCost() + 0.5;
      }
  }
  ```  

### **Q6: What is the Facade Pattern?**  
**A:**  
- Provides a **simplified interface** to a complex subsystem.  
- **Use Case:** Simplifying APIs, hiding internal complexity.  
- **Example:**  
  ```java
  class CPU { void start() { ... } }
  class Memory { void load() { ... } }
  
  class ComputerFacade {
      private CPU cpu;
      private Memory memory;
      
      public ComputerFacade() {
          this.cpu = new CPU();
          this.memory = new Memory();
      }
      
      public void start() {
          cpu.start();
          memory.load();
      }
  }
  ```  

---

## **3. Behavioral Design Patterns**  
*(Deal with object interaction & responsibility assignment.)*  

### **Q7: What is the Observer Pattern?**  
**A:**  
- Defines a **one-to-many dependency** between objects so that when one object changes state, all its dependents are notified.  
- **Use Case:** Event handling, real-time notifications.  
- **Example:**  
  ```java
  interface Observer {
      void update(String message);
  }
  class User implements Observer { ... }
  
  class NewsAgency {
      private List<Observer> observers = new ArrayList<>();
      
      public void addObserver(Observer observer) {
          observers.add(observer);
      }
      
      public void notifyObservers(String news) {
          for (Observer observer : observers) {
              observer.update(news);
          }
      }
  }
  ```  

### **Q8: What is the Strategy Pattern?**  
**A:**  
- Defines a **family of algorithms**, encapsulates each one, and makes them interchangeable.  
- **Use Case:** Sorting algorithms, payment methods.  
- **Example:**  
  ```java
  interface PaymentStrategy {
      void pay(int amount);
  }
  class CreditCardStrategy implements PaymentStrategy { ... }
  class PayPalStrategy implements PaymentStrategy { ... }
  
  class ShoppingCart {
      private PaymentStrategy strategy;
      
      public void setPaymentStrategy(PaymentStrategy strategy) {
          this.strategy = strategy;
      }
      
      public void checkout(int amount) {
          strategy.pay(amount);
      }
  }
  ```  

### **Q9: What is the Command Pattern?**  
**A:**  
- Encapsulates a **request as an object**, allowing parameterization and queuing of requests.  
- **Use Case:** Undo/redo operations, GUI actions.  
- **Example:**  
  ```java
  interface Command {
      void execute();
  }
  class LightOnCommand implements Command {
      private Light light;
      public LightOnCommand(Light light) { this.light = light; }
      public void execute() { light.turnOn(); }
  }
  
  class RemoteControl {
      private Command command;
      public void setCommand(Command command) { this.command = command; }
      public void pressButton() { command.execute(); }
  }
  ```  

---

## **Summary Table of Key Design Patterns**  
| **Category** | **Pattern** | **Purpose** |  
|-------------|------------|------------|  
| **Creational** | Singleton | Single shared instance |  
|  | Factory Method | Delegates instantiation to subclasses |  
|  | Builder | Constructs complex objects step-by-step |  
| **Structural** | Adapter | Makes incompatible interfaces work together |  
|  | Decorator | Adds behavior dynamically |  
|  | Facade | Simplifies complex subsystems |  
| **Behavioral** | Observer | Notifies dependents of state changes |  
|  | Strategy | Encapsulates interchangeable algorithms |  
|  | Command | Encapsulates requests as objects |  

---
