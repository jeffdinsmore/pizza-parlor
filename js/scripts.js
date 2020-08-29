// Business Logic
function Pizza(size, type, toppings) {
  this.size = size;
  this.type = type;
  this.toppings = toppings;
  this.price = 10;
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
  if (this.type === "thick crust") {
    this.price +=2;
  } else {
    this.price = this.price;
  }
  this.price = this.price + this.toppings.veggie.length * .5;
  this.price = this.price + this.toppings.meat.length * 1;
  if (this.toppings.cheese.length > 1) {
    this.price = this.price + (this.toppings.cheese.length - 1);
  }
  console.log(this.toppings.cheese.length);
  // this.price = this.price + ((this.toppings.sauces.length - 2) * 1);
  return this.price;
}

// Business Pizza Toppings Logic
function PizzaToppings(veggie, meat, sauces, cheese) {
  this.veggie = veggie;
  this.meat = meat;
  this.sauces = sauces;
  this.cheese = cheese;
}

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
    let pizzaToppings = new PizzaToppings(inputtedVeggies, inputtedMeat, inputtedSauces, inputtedCheese);
    let pizza = new Pizza(inputtedSize, inputtedType, pizzaToppings);
    
    if (inputtedSize === "error") {
      alert("Please choose a size");
    } else if (inputtedType === "error") {
      alert("Please choose a type of crust");
    } else {
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
      let pizzaPrice = Object.values(pizza);
      let finalPrice = pizza.piePrice(pizzaPrice).toFixed(2);
      $("#price").text("$" + finalPrice);
      $("form").hide();
      $("button#change").show();
      $("#result").show();
      $("#showSize").text(pizza.size);
      $("#showType").text(pizza.type);
      $("#showToppings").text(pizzaToppings.sauces.join(", ") + ", " + pizzaToppings.cheese.join(", ") + ", " + pizzaToppings.veggie.join(", ") + ", " + pizzaToppings.meat.join(", ") + ".");
    }
  });

  $("button#change").click(function() {
    $("#result").hide();
    $("form").show();
    $("button#change").hide();
  });
});

