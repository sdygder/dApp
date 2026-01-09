const address = document.getElementById("address");
const amount = document.getElementById("amount");
const nextBtn = document.getElementById("next");
const max = document.getElementById("max");

function updateUI() {
  // Address field
  if (address.value.trim()) {
    address.classList.add("filled");
  } else {
    address.classList.remove("filled");
  }

  // Amount field
  if (amount.value.trim()) {
    amount.classList.add("filled");
    max.classList.add("active");
  } else {
    amount.classList.remove("filled");
    max.classList.remove("active");
  }

  // Enable Next button
  if (address.value.trim() && amount.value.trim()) {
    nextBtn.classList.add("enabled");
    nextBtn.disabled = false;
  } else {
    nextBtn.classList.remove("enabled");
    nextBtn.disabled = true;
  }
}

address.addEventListener("input", updateUI);
amount.addEventListener("input", updateUI);

// Demo Max click
max.addEventListener("click", () => {
  amount.value = "100";
  updateUI();
});
