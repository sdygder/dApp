const address = document.getElementById("address");
const addressBox = document.getElementById("addressBox");
const amount = document.getElementById("amount");
const next = document.getElementById("next");
const inr = document.getElementById("inr");

address.addEventListener("focus", () => {
  addressBox.classList.add("focused");
});

address.addEventListener("blur", () => {
  if (!address.value.trim()) {
    addressBox.classList.remove("focused");
  }
});

function update() {
  inr.textContent = amount.value
    ? (amount.value * 83).toFixed(2)
    : "0.00";

  if (address.value && amount.value) {
    next.classList.add("enabled");
    next.disabled = false;
  } else {
    next.classList.remove("enabled");
    next.disabled = true;
  }
}

address.addEventListener("input", update);
amount.addEventListener("input", update);
