// welcome message 
var user = "Marcelo";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here is the latest iPhone.";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

var price = 1200,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById("price"),
    studentPriceEl = document.getElementById("student-price");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);