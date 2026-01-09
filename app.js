const address = document.getElementById("address");
const addressBox = document.getElementById("addressBox");
const amount = document.getElementById("amount");
const next = document.getElementById("next");
const inr = document.getElementById("inr");

const RATE = 83;

address.addEventListener("focus", () => {
  addressBox.classList.add("focused");
});

address.addEventListener("blur", () => {
  if (!address.value.trim()) addressBox.classList.remove("focused");
});

function update() {
  const usdt = parseFloat(amount.value);
  if (!isNaN(usdt) && usdt > 0) {
    inr.textContent = (usdt * RATE).toFixed(2);
  } else {
    inr.textContent = "0.00";
  }

  if (address.value.trim() && usdt > 0) {
    next.classList.add("enabled");
    next.disabled = false;
  } else {
    next.classList.remove("enabled");
    next.disabled = true;
  }
}

address.addEventListener("input", update);
amount.addEventListener("input", update);
