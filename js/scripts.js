// Business Logic
function Pizza(size, type, toppings) {
  this.size = size;
  this.type = type;
  this.toppings = toppings;
  this.price = 9;
}

Pizza.prototype.piePrice = function() {
  if (this.size === "medium") {
    this.price += 2;
  } else if (this.size === "large") {
    this.price += 4;
  } else if (this.size === "xLarge") {
    this.price +=6;
  } else {
    this.price = this.price;
  }
  if (this.type === "thick") {
    this.price +=2;
  } else {
    this.price = this.price
  }
  this.price = this.price + this.toppings.veggie.length * .5;
  this.price = this.price + this.toppings.meat.length * 1;
  this.price = this.price + this.toppings.cheese.length * 1 - 1;
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
function PizzaToppings(veggie, meat, sauces, cheese) {
  this.veggie = veggie;
  this.meat = meat;
  this.sauces = sauces;
  this.cheese = cheese;
}
  
  
  
  
  
  
//   olives, broccoli, spinach, jalapenos, tomatoes, sunDriedTomatoes, mushrooms, pineapple, onions, redPeppers, greenPeppers, pepperoncini) {
//   this.olives = olives;
//   this.broccoli = broccoli;
//   this.spinach = spinach;
//   this.jalapenos = jalapenos;
//   this.tomatoes = tomatoes;
//   this.sunDriedTomatoes = sunDriedTomatoes;
//   this.mushrooms = mushrooms;
//   this.pineapple = pineapple;
//   this.onions = onions;
//   this.redPeppers = redPeppers;
//   this.greenPeppers = greenPeppers;
//   this.pepperoncini = pepperoncini;
// }



// User Interface Logic
let pizza = new Pizza();
let pizzaToppings = new PizzaToppings();

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("#size").val();
    const inputtedType = $("#type").val();
    const inputtedVeggies = [];
    const inputtedMeat = [];
    const inputtedSauces = [];
    const inputtedCheese = [];
    $("input#cheese").each(function() {
      if ($(this).is(':checked')) {
        let checked = ($(this).val());
        inputtedCheese.push(checked);
      }
    });
    $("input#sauces").each(function() {
      if ($(this).is(':checked')) {
        let checked = ($(this).val());
        inputtedSauces.push(checked);
      }
    });
    $("input#veggies").each(function() {
      if ($(this).is(':checked')) {
        let checked = ($(this).val());
        inputtedVeggies.push(checked);
      }
    });
    $("input#meat").each(function() {
      if ($(this).is(':checked')) {
        let checked = ($(this).val());
        inputtedMeat.push(checked);
      }
    });

    let pizzaToppings = new PizzaToppings(inputtedVeggies, inputtedMeat, inputtedSauces, inputtedCheese);
    let pizza = new Pizza(inputtedSize, inputtedType, pizzaToppings);
    console.log(pizza);
    let pizzaPrice = Object.values(pizza);
    console.log(pizzaPrice);
    console.log(pizzaToppings.cheese.length);
    let finalPrice = pizza.piePrice(pizzaPrice);
    $("#result").text(finalPrice);
  })
  
  
});

