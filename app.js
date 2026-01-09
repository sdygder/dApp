const address = document.getElementById("address");
const amount = document.getElementById("amount");
const next = document.getElementById("next");
const max = document.getElementById("max");
const inr = document.getElementById("inr");

function update() {
  if (amount.value) {
    max.classList.add("active");
    inr.textContent = (amount.value * 83).toFixed(2);
  } else {
    max.classList.remove("active");
    inr.textContent = "0.00";
  }

  if (address.value && amount.value) {
    next.classList.add("enabled");
    next.disabled = false;
  } else {
    next.classList.remove("enabled");
    next.disabled = true;
  }
}

amount.addEventListener("input", update);
address.addEventListener("input", update);

max.onclick = () => {
  amount.value = "100";
  update();
};
