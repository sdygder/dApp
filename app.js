const addressInput = document.getElementById("address");
const addressBox = document.getElementById("addressBox");
const amountInput = document.getElementById("amount");
const nextBtn = document.getElementById("next");
const inr = document.getElementById("inr");

// Address focus behavior (green border on touch)
addressInput.addEventListener("focus", () => {
  addressBox.classList.add("focused");
});

addressInput.addEventListener("blur", () => {
  if (!addressInput.value.trim()) {
    addressBox.classList.remove("focused");
  }
});

// Enable Next + INR calc
function updateUI() {
  if (amountInput.value) {
    inr.textContent = (amountInput.value * 83).toFixed(2);
  } else {
    inr.textContent = "0.00";
  }

  if (addressInput.value && amountInput.value) {
    nextBtn.classList.add("enabled");
    nextBtn.disabled = false;
  } else {
    nextBtn.classList.remove("enabled");
    nextBtn.disabled = true;
  }
}

addressInput.addEventListener("input", updateUI);
amountInput.addEventListener("input", updateUI);
