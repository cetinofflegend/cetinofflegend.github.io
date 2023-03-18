// Get elements
const balanceLabel = document.getElementById("balance");
const setBalanceTextbox = document.getElementById("setBalance");
const setBalanceButton = document.getElementById("update");
const sendToTextbox = document.getElementById("to");
const sendAmountTextbox = document.getElementById("amount");
const sendButton = document.getElementById("send");

// Initialize balance
let balance = 0;

// Set initial balance label text
balanceLabel.innerText = balance;

// Function to update balance
function updateBalance(amount) {
  balance += amount;
  balanceLabel.innerText = balance;
}

// Function to send BTC
function sendBTC() {
  const sendTo = sendToTextbox.value;
  const sendAmount = Number(sendAmountTextbox.value);
  if (sendTo.trim() === "" || isNaN(sendAmount) || sendAmount <= 0) {
    alert("Please fill in the correct values!");
    return;
  }
  if (sendAmount > balance) {
    alert("Not enough cash!");
    return;
  }
  updateBalance(-sendAmount);
  alert(`Successfully sent ${sendAmount} BTC to ${sendTo}!`);
  sendToTextbox.value = "";
  sendAmountTextbox.value = "";
}

// Set balance button click event
setBalanceButton.addEventListener("click", function () {
  const newBalance = balance +=Number(setBalanceTextbox.value);
  if (isNaN(newBalance) || newBalance < 0) {
    alert("Please enter a valid balance!");
    return;
  }
  balance = newBalance;
  balanceLabel.innerText = balance;
  setBalanceTextbox.value = "";
});

// Set send button click event
sendButton.addEventListener("click", sendBTC);
