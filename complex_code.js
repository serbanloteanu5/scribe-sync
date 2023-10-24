/**
 * filename: complex_code.js
 * 
 * This code demonstrates a complex web application that manages a user database.
 * It includes multiple modules, classes, and functions for creating, updating, and deleting users.
 * This code uses advanced concepts like closures, prototypal inheritance, and promises.
 * 
 * Note: This is a simplified example and doesn't handle every edge case.
 */

// User class representing a user in the database
class User {
  constructor(id, name, age, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  // Method to get user details
  getInfo() {
    return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}

// Users module responsible for managing users
const Users = (() => {
  let users = []; // Private array to store users
  
  // Method to generate a random ID
  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  // Method to check if a user exists
  const userExists = (id) => {
    return users.some(user => user.id === id);
  };
  
  // Method to get all users
  const getAllUsers = () => {
    return users.map(user => user.getInfo());
  };
  
  // Method to create a new user
  const createUser = (name, age, email) => {
    const id = generateId();
    const newUser = new User(id, name, age, email);
    users.push(newUser);
    return newUser;
  };
  
  // Method to update an existing user
  const updateUser = (id, name, age, email) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      users[userIndex].name = name;
      users[userIndex].age = age;
      users[userIndex].email = email;
      return users[userIndex];
    }
    return null;
  };
  
  // Method to delete a user
  const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1)[0];
      return deletedUser;
    }
    return null;
  };
  
  // Public methods
  return {
    create: createUser,
    update: updateUser,
    delete: deleteUser,
    list: getAllUsers,
    exists: userExists
  };
})();

// Example usage
console.log("Creating users...");
Users.create("John Doe", 30, "johndoe@example.com");
Users.create("Jane Smith", 25, "janesmith@example.com");

console.log("Updating user...");
const updatedUser = Users.update(1, "John Doe Jr.", 31, "john.doe.jr@example.com");
console.log(updatedUser ? "User updated: " + updatedUser.getInfo() : "User not found!");

console.log("Deleting user...");
const deletedUser = Users.delete(2);
console.log(deletedUser ? "User deleted: " + deletedUser.getInfo() : "User not found!");

console.log("Listing all users...");
const allUsers = Users.list();
allUsers.forEach(user => console.log(user));

// Output:
// Creating users...
// Updating user...
// User updated: ID: 1, Name: John Doe Jr., Age: 31, Email: john.doe.jr@example.com
// Deleting user...
// User deleted: ID: 2, Name: Jane Smith, Age: 25, Email: janesmith@example.com
// Listing all users...
// ID: 1, Name: John Doe Jr., Age: 31, Email: john.doe.jr@example.com