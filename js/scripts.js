// Business Logic
function Pizza(size, type, toppings) {
  this.size = size;
  this.type = type;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {

}

// Business Pizza Type Logic
function PizzaType(small, medium, large, xlarge) {
  this.small = small;
  this.meduim = medium;
  this.large = large;
  this.xlarge = xlarge;
}

// Business Pizza Toppings Logic
function PizzaToppings(olives, broccoli, spinach, jalapenos, tomatoes, sunDriedTomatoes, mushrooms, pineapple, onions, redPeppers, greenPeppers, pepperoncini) {
  this.olives = olives;
  this.broccoli = broccoli;
  this.spinach = spinach;
  this.jalapenos = jalapenos;
  this.tomatoes = tomatoes;
  this.sunDriedTomatoes = sunDriedTomatoes;
  this.mushrooms = mushrooms;
  this.pineapple = pineapple;
  this. onions = onions;
  this.redPeppers = redPeppers;
  this.greenPeppers = greenPeppers;
  this.pepperoncini = pepperoncini;
}

// User Interface Logic
$(document).ready(function() {
  
  
  event.preventDefault();
});

