///_______________Med HTML user interface__________________

// Modeling the menu
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Check if pizza is on the menu
function checkOrderName(orderName) {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  // Get values from form instead of prompt
  const orderName = document.getElementById("pizzaType").value;
  const orderQuantity = parseInt(document.getElementById("quantity").value);
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";

  // Check pizza and show error in resultDiv instead of alert
  if (!checkOrderName(orderName)) {
    resultDiv.innerHTML = "Sorry, that pizza is not on our menu!";
    return false;
  }

  // Validate number and calculate cost
  if (isNaN(orderQuantity) || orderQuantity <= 0) {
    resultDiv.innerHTML = "Please enter a valid number of pizzas.";
    return false;
  }

  function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
  }

  const cost = totalCost(orderQuantity);

  // Calculate cooking time
  function cookingTime(orderQuantity) {
    if (orderQuantity >= 6) {
      return 20;
    } else if (orderQuantity >= 3) {
      return 15;
    } else {
      return 10;
    }
  }

  const time = cookingTime(orderQuantity);

  // Show final message in resultDiv instead of alert
  resultDiv.innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${cost} kr. The pizzas will take ${time} minutes.`;

  return false;
}

// Add form listener
document.getElementById("pizzaForm").addEventListener("submit", handleSubmit);

///_______________Orginal__________________

// // Modeling the menu
// const vegetarian = "Vegetarian Pizza";
// const hawaiian = "Hawaiian Pizza";
// const pepperoni = "Pepperoni Pizza";
// const pizzaPrice = 80;

// // Greeting the customer
// alert(
//   `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
// );

// // Ask user which pizza
// const orderName = prompt(
//   "Enter the name of the pizza you want to order today:"
// );

// // Check if pizza is on the menu
// function checkOrderName(orderName) {
//   if (
//     orderName === vegetarian ||
//     orderName === hawaiian ||
//     orderName === pepperoni
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // How many pizzas?
// const orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));
// if (!checkOrderName(orderName)) {
//   alert("Sorry, that pizza is not on our menu!");
// }

// // Make sure that a valid number is given and caculate the total price.
// if (isNaN(orderQuantity) || orderQuantity <= 0) {
//   alert("Please enter a valid number of pizzas.");
// } else {
//   function totalCost(orderQuantity) {
//     return orderQuantity * pizzaPrice;
//   }
// }

// const cost = totalCost(orderQuantity);

// // Calculate cooking time.
// function cookingTime(orderQuantity) {
//   if (orderQuantity >= 6) {
//     return 20;
//   } else if (orderQuantity >= 3) {
//     return 15;
//   } else {
//     return 10;
//   }
// }

// const time = cookingTime(orderQuantity);

// // Final message
// alert(
//   `Great, I'll get started on your ${orderName} right away, it will cost ${cost} kr. The pizzas will take ${time} minutes. `
// );
