// USER AUTHENTICATION 
const fs = require("fs");
const bcrypt = require("bcryptjs");
const readline = require("readline-sync");

const userDatabaseFile = "users.json";

// Loading the user data from JSON file
function loadUsers() {
  try {
    const data = fs.readFileSync(userDatabaseFile);
    return JSON.parse(data);
  } catch (error) {
    return {}; // Return empty object if file doesn't exist or is empty
  }
}

// Save user data to JSON file
function saveUsers(users) {
  fs.writeFileSync(userDatabaseFile, JSON.stringify(users, null, 2));
}

// Register a new user
function register() {
  console.log("\n Register ");
  const userName = readline.question("Enter a username: ").trim();
  if (!userName) {
    console.log("Username cannot be empty.");
    return register();
  }

  const users = loadUsers();
  if (users[userName]) {
    console.log("Username already exists. Try a different one.");
    return;
  }

  const userPassword = readline.question("Enter a password: ", { hideEchoBack: true });


  const hashedPassword = bcrypt.hashSync(userPassword, 10);
  users[userName] = hashedPassword;
  saveUsers(users);
  
  console.log("Account created successfully!");
  
  // Asking if the user wants to log in
  const loginChoice = readline.question("Do you want to log in now? (yes/no): ").toLowerCase();
  if (loginChoice === "yes" || loginChoice === "y") {
    login();
  } else {
    console.log("Thank you for registering! ")
  } 
}

// Login function
function login() {
  console.log("\nLogin");
  const username = readline.question("Enter your username: ").trim();
  const userDatabase = loadUsers();

  if (!userDatabase[username]) {
    console.log("User not found. Please register first.");
    return;
  }

  const userPassword = readline.question("Enter your password: ", { hideEchoBack: true });

  if (bcrypt.compareSync(userPassword, userDatabase[username])) {
    console.log("Login successful!");
    userMenu(username);
  } else {
    console.log("Incorrect password. Try again.");
  }
}

// User menu after login
function userMenu(userName) {
  console.log(`\nWelcome, ${userName}!`);
  while (true) {
    console.log("\n1. View Profile");
    console.log("2. Logout");
    const option = readline.question("Choose an option: ");

    if (option === "1") {
      console.log(`\nUsername: ${userName}`);
    } else if (option === "2") {
      console.log("Logging out...\n");
      return;
    } else {
      console.log("Invalid choice. Try again.");
    }
  }
}

// We create a function for the Main menu
function mainMenu() {
  while (true) {
    console.log("\n1. Register");
    console.log("2. Login");
    console.log("3. Exit");
    const option = readline.question("Choose an option: ");

    if (option === "1") {
      register();
    } else if (option === "2") {
      login();
    } else if (option === "3") {
      console.log("Goodbye!");
      process.exit();
    } else {
      console.log("Invalid choice. Try again.");
    }
  }
}

// Calling the program
mainMenu();