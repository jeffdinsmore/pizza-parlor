// Business Logic
function Pizza(size, type, toppings) {
  this.size = size;
  this.type = type;
  this.toppings = toppings;
  this.price = 8;
}

Pizza.prototype.piePrice = function() {
  if (this.size === "small") {
    this.price += 2;
  } else {
    this.price = this.price;
  }
  if (this.type === "thin") {
    this.price +=2;
  } else {
    this.price = this.price
  }

  return this.price;
}

// Business Pizza Size Logic
function PizzaSize(small, medium, large, xLarge) {
  this.small = small;
  this.meduim = medium;
  this.large = large;
  this.xLarge = xLarge;
}

// Business Pizza Type Logic
function PizzaType(thinCrust, thickCrust) {
  this.thinCrust = thinCrust;
  this.thickCrust = thickCrust;
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
let pizza = new Pizza();

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedSize = "small";
    const inputtedType = "thin";
    const inputtedToppings = "olives"
    // let inputtedSize = new PizzaSize(smallInput, mediumInput, largeInput, xLargeInput);
    // let inputtedType = new PizzaType (thinInput, thickInput);
    // let inputtedToppings = new PizzaToppings(olivesInput, broccoliInput, spinachInput, jalapenosInput, tomatoesInput, sunDriedTomatoesInput, mushroomsInput, pineappleInput, onionsInput, redPeppersInput, greenPeppersInput, pepperonciniInput);
    let pizza = new Pizza(inputtedSize, inputtedType, inputtedToppings);
    console.log(pizza.price);
    let pizzaPrice = Object.values(pizza);
    console.log(pizzaPrice);
    let finalPrice = pizza.piePrice(pizzaPrice);
    console.log(finalPrice);
  })
  
  
});

