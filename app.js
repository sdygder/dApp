const address = document.getElementById("address");
const addressBox = document.getElementById("addressBox");
const amount = document.getElementById("amount");
const amountBox = document.getElementById("amountBox");
const next = document.getElementById("next");
const inr = document.getElementById("inr");

const RATE = 83;

[address, amount].forEach((input) => {
  const box = input === address ? addressBox : amountBox;

  input.addEventListener("focus", () => {
    box.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    if (!input.value.trim()) box.classList.remove("focused");
  });
});

function update() {
  const usdt = parseFloat(amount.value);

  inr.textContent =
    !isNaN(usdt) && usdt > 0 ? (usdt * RATE).toFixed(2) : "0.00";

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
