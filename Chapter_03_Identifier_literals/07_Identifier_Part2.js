///best practise is it to be with the lower case letter

var name=123;
console.log(name)

var lastName="Puneeth";
var firstName="praod"
console.log(lastName);
console.log(firstName); //camel case

var last_Name="juhi";    //snake cases








// ============================================================
// JavaScript Naming Conventions (Cases)
// Different styles used to name variables, functions, classes
// ============================================================

console.log("=== JavaScript Naming Conventions (Cases) ===\n");


// ------------------------------------------------------------
// 1. camelCase
// First word lowercase, each subsequent word capitalized
// Most COMMON convention in JavaScript for variables & functions
// ------------------------------------------------------------
console.log("1. camelCase (Most Common for JS Variables & Functions)");

var firstName = "Pramod";
var totalAmount = 1500;
var isUserLoggedIn = true;
var getUserDetails = function() { return "User Info"; };

console.log("  firstName =", firstName);
console.log("  totalAmount =", totalAmount);
console.log("  isUserLoggedIn =", isUserLoggedIn);
console.log("  getUserDetails() =", getUserDetails());
console.log("  Example: firstName, totalAmount, getUserById\n");


// ------------------------------------------------------------
// 2. PascalCase (UpperCamelCase)
// Every word starts with a capital letter
// Used for: Class names, Constructor functions, React Components
// ------------------------------------------------------------
console.log("2. PascalCase (Used for Classes & Components)");

class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

class OrderDetails {
    constructor(id) {
        this.id = id;
    }
}

var myAccount = new UserAccount("Pramod");
var order = new OrderDetails(101);

console.log("  class UserAccount");
console.log("  class OrderDetails");
console.log("  myAccount.name =", myAccount.name);
console.log("  order.id =", order.id);
console.log("  Example: UserProfile, PaymentGateway, React Component: <MyButton />\n");


// ------------------------------------------------------------
// 3. snake_case
// All lowercase, words separated by underscores
// Common in: Python, Ruby; sometimes used in JS for DB fields, JSON keys
// ------------------------------------------------------------
console.log("3. snake_case (Common in Python/Ruby, sometimes in JS)");

var user_name = "pramod";
var order_total = 999.50;
var shipping_address = "Bangalore, India";
var is_active = true;

console.log("  user_name =", user_name);
console.log("  order_total =", order_total);
console.log("  shipping_address =", shipping_address);
console.log("  is_active =", is_active);
console.log("  Example: user_name, order_total, created_at\n");


// ------------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE / CONSTANT_CASE
// All UPPERCASE, words separated by underscores
// Used for: Constants that never change (configs, magic numbers)
// ------------------------------------------------------------
console.log("4. SCREAMING_SNAKE_CASE (Used for Constants)");

var MAX_LOGIN_ATTEMPTS = 3;
var PI_VALUE = 3.14159;
var API_BASE_URL = "https://api.example.com";
var DEFAULT_TIMEOUT_MS = 5000;

console.log("  MAX_LOGIN_ATTEMPTS =", MAX_LOGIN_ATTEMPTS);
console.log("  PI_VALUE =", PI_VALUE);
console.log("  API_BASE_URL =", API_BASE_URL);
console.log("  DEFAULT_TIMEOUT_MS =", DEFAULT_TIMEOUT_MS);
console.log("  Example: MAX_SIZE, ENVIRONMENT, DATABASE_NAME\n");


// ------------------------------------------------------------
// 5. kebab-case
// All lowercase, words separated by hyphens
// NOT valid for JavaScript variable names! (hyphen = minus operator)
// Used in: HTML attributes, CSS class names, URLs, file names
// ------------------------------------------------------------
console.log("5. kebab-case (NOT valid as JS variable, but used in HTML/CSS/Files)");

// INVALID in JS:
// var first-name = "Pramod";  // ERROR! interpreted as: first - name = "Pramod"

console.log("  INVALID in JS: var first-name = 'Pramod';");
console.log("  Reason: '-' is treated as subtraction operator!");
console.log("  Valid in HTML: <div class=\"user-profile\">");
console.log("  Valid in CSS: .order-details { color: red; }");
console.log("  Valid in File: user-profile.js, order-details.css\n");


// ------------------------------------------------------------
// 6. Hungarian Notation (Historical / Less common now)
// Prefix indicates the variable type
// Rarely used in modern JS, but good to know
// ------------------------------------------------------------
console.log("6. Hungarian Notation (Historical - type prefix)");

var strName = "Pramod";      // str = string
var nAge = 25;               // n = number
var bIsValid = true;         // b = boolean
var arrUsers = ["A", "B"];   // arr = array
var objUser = { id: 1 };     // obj = object

console.log("  strName =", strName);
console.log("  nAge =", nAge);
console.log("  bIsValid =", bIsValid);
console.log("  arrUsers =", arrUsers);
console.log("  objUser =", objUser);
console.log("  Note: Not recommended in modern JS (let const & types make it redundant)\n");


// ------------------------------------------------------------
// Summary / Best Practices in JavaScript
// ------------------------------------------------------------
console.log("=== SUMMARY: Best Practices for JavaScript ===");
console.log("");
console.log("  camelCase     -> variables, functions, methods");
console.log("                  (firstName, calculateTotal(), fetchData())");
console.log("");
console.log("  PascalCase    -> classes, constructors, React components");
console.log("                  (UserAccount, OrderDetails, <NavBar />)");
console.log("");
console.log("  snake_case    -> sometimes for object keys, DB fields");
console.log("                  (created_at, order_status in JSON)");
console.log("");
console.log("  SCREAMING_SNAKE_CASE -> constants, config values");
console.log("                  (MAX_SIZE, API_KEY, PORT_NUMBER)");
console.log("");
console.log("  kebab-case    -> NEVER for JS variables!");
console.log("                  Use in: file-names.js, css-class-names");
console.log("");
console.log("  Hungarian     -> AVOID in modern JS projects");
console.log("                  (use TypeScript if you need type safety)");

