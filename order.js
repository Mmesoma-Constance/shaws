const naira = "\u20A6";

let nameOption;

let quantity;

const deliveryFee = 500;
const listPrice = document.querySelector(".listPrice");

const shawarmaOptions = document.querySelectorAll(".shawarma-option");
shawarmaOptions.forEach((option) => {
  const checkbox = option.querySelector(".shawarma-checkbox");
  const quantityDisplay = option.querySelector(".quantity-display");
  /* localStorage.getItem(checkbox.name, JSON.stringify 
    ({
      checked: checkbox.checked,
      quantity: parseInt(quantityDisplay.textContent)
    })) */
  nameOption = option.dataset.name;
  const price = parseInt(option.dataset.price);
  quantity = parseInt(quantityDisplay.textContent);
  const quantityString = quantity.toLocaleString();

  // Automatically update quantity when checkbox is checked
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      quantityDisplay.textContent = "1";
    } else {
      quantityDisplay.textContent = "0";
    }
  });
});

function showResult() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();

  if (hour >= 22 && hour < 7) {
    alert(`Sorry, We're closed for shawarma orders at the moment.
Our working hours are from 7:00am to 10:00pm. Please visit us during our operating hours to enjoy our shawarmas!`);
    return;
  }

  let selectedOptions = "";

  let totalPrice = 0;
  let result = "SELECTED OPTION(S):\n";

  let orderPlaced = false;
  let isWeekendDiscountApplicable = false;

  // Check if it's Saturday or Sunday and the time is between 5:00 p.m. and 6:00 p.m.
  if ((day === 0 || day === 6) && hour >= 17 && hour < 18) {
    isWeekendDiscountApplicable = true;
  }

  shawarmaOptions.forEach((option) => {
    const checkbox = option.querySelector(".shawarma-checkbox");
    const quantityDisplay = option.querySelector(".quantity-display");
    nameOption = option.dataset.name;
    const price = parseInt(option.dataset.price);
    const priceString = price.toLocaleString();

    if (checkbox.checked) {
      orderPlaced = true;
      quantity = parseInt(quantityDisplay.textContent);
      const subtotal = quantity * price;
      selectedOptions += quantity + " " + nameOption + "\n";

      const subtotalString = subtotal.toLocaleString();

      // Apply discount for two Mixed Shawarmas during weekend discount hours
      if (
        nameOption === "Chicken Shawarma" &&
        quantity === 2 &&
        day > 0 &&
        day < 6 &&
        hour >= 16 &&
        hour < 18
      ) {
        result +=
          "Weekdays discount available: Congratulations! you have earned 1 shawarma FREE!" +
          "\n";
      }

      // Apply discount for two Mixed Shawarmas during weekend discount hours
      if (
        nameOption === "Mixed Shawarma" &&
        quantity === 2 &&
        isWeekendDiscountApplicable
      ) {
        const discountedPrice = price * 0.9; // Apply 10% discount
        totalPrice += discountedPrice * quantity;
        const subtotalComma = discountedPrice * quantity;
        const discountedPriceComma = subtotalComma.toLocaleString();
        result +=
          nameOption +
          " - Quantity: " +
          quantity +
          " - Subtotal: " +
          naira +
          discountedPriceComma +
          "\n" +
          "Weekends discount available: Congratulations! you have earned 10% off Mixed Shawarma!" +
          "\n";
      } else {
        totalPrice += subtotal;
        result +=
          nameOption +
          " - Quantity: " +
          quantity +
          " - Subtotal: " +
          naira +
          subtotalString +
          "\n";
      }
    }
  });

  if (!orderPlaced) {
    alert("Please place an order.");
    return;
  }

  totalPrice += deliveryFee;
  const totalPriceString = totalPrice.toLocaleString();

  console.log(totalPriceString);

  result += "Delivery Fee: " + naira + deliveryFee + "\n";
  const totalSummary = naira + totalPriceString;
  const priceSummary = totalPriceString;
  console.log(priceSummary);

  result += "Total Price (including delivery fee): " + totalSummary;
  sessionStorage.setItem("totalSummary", priceSummary);

  sessionStorage.setItem("orderSummary", result);

  sessionStorage.setItem("nameOption", selectedOptions);

  window.location.href = "ordersummary.html";
}

document.querySelectorAll(".quantity-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const option = this.parentNode;
    const quantityDisplay = option.querySelector(".quantity-display");
    let quantity = parseInt(quantityDisplay.textContent);

    if (this.classList.contains("increment-btn")) {
      if (quantity < 5) {
        quantity++;
        quantityDisplay.textContent = quantity;
        option.querySelector(".shawarma-checkbox").checked = true;
      }
    } else if (this.classList.contains("decrement-btn")) {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
        if (quantity === 0) {
          option.querySelector(".shawarma-checkbox").checked = false;
        }
      }
    }
  });
});
