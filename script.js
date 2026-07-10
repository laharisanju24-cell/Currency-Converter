
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  select.innerHTML = ""; 
  
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    
    
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

 
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  
  
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  msg.innerText = "Fetching real-time exchange rates...";

  try {
    
    const fromCode = fromCurr.value.toLowerCase();
    const toCode = toCurr.value.toLowerCase();
    
    
    const URL = `${BASE_URL}/${fromCode}.json`;
    
    let response = await fetch(URL);
    if (!response.ok) throw new Error("Network response failed");
    
    let data = await response.json();
    
    
    let rate = data[fromCode][toCode];
    let finalAmount = (amtVal * rate).toFixed(2);
    
    
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error: Failed to track live rates. Try again.";
    console.error("Fetch Execution Failure:", error);
  }
};


const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  
  if (countryCode) {
    let newSrc = `https://flagsapi.com{countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  }
};


btn.addEventListener("click", (evt) => {
  evt.preventDefault(); 
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
