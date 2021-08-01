function pizza(getSize, getCrust, getCheese, getQuantity) {
  this.getSize = getSize;
  this.getCrust = getCrust;
  this.getCheese = getCheese;
  this.getQuantity = getQuantity;
}

let userInput = new Order(getSize(), getCrust(), getCheese(), getQuantity());


function getSize() {
  let size = document.getElementById("pizzaSize").value;
  return parseInt(size);
}

function getCrust() {
  let crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}


function getCheese() {
  let cheese = document.getElementById("pizzaCheese").value;
  return parseInt(cheese);
}

function getQuantity() {
  let number = document.getElementById("quantity").value;
  return parseInt(number);
}

function totalAmount() {
  let totals = (getSize() + getCrust() + getCheese()) * getQuantity();
  alert(
    "YOU HAVE ORDERED " +
    getQuantity("") +
    " PIZZA," +
    "" +
    " AND YOU WILL PAY CASH. " +
    totals +
    "" +
    " ENJOY YOUR PIZZA."
  );


  let location = prompt("IF YOU WANT YOUR PIZZA TO BE DELIVERED TO YOUR LOCATION PLEASE ENTER DOWN BELOW AND IF NOT PLEASE SELECT CANCEL.");
  if (location !== "") {
    alert("YOUR ORDER WILL BE DELIVERED IN AN HOUR AND YOU WILL PAY CASH ON DELIVERY .");
  }
}
function onSubmit() {
  totalAmount()
}

