const connectBtn = document.getElementById("connectBtn");
const walletInfo = document.getElementById("walletInfo");
const addressEl = document.getElementById("address");
const networkEl = document.getElementById("network");

const BSC_PARAMS = {
  chainId: "0x38",
  chainName: "BNB Smart Chain",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: ["https://bsc-dataseed.binance.org/"],
  blockExplorerUrls: ["https://bscscan.com"]
};

async function switchToBSC() {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }]
    });
  } catch (err) {
    if (err.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [BSC_PARAMS]
      });
    } else {
      throw err;
    }
  }
}

connectBtn.onclick = async () => {
  if (!window.ethereum) {
    alert("Please open this dApp in Trust Wallet or MetaMask");
    return;
  }

  try {
    await switchToBSC();

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();

    addressEl.textContent = address;
    networkEl.textContent = network.chainId === 56n ? "BNB Smart Chain" : "Wrong Network";

    walletInfo.classList.remove("hidden");
    connectBtn.textContent = "Wallet Connected ✅";

  } catch (err) {
    console.error(err);
    alert("Wallet connection failed");
  }
};
