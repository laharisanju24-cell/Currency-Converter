## Currency Converter
A simple, lightweight currency converter web app built with Vanilla JavaScript, HTML, and CSS. It fetches live, real-time exchange rates from an open API and updates country flags dynamically based on the selected currency.

## Features
* Live Exchange Rates: Uses ://er-api.com for keyless, up-to-date conversion rates.
* CORS-Friendly: Works on localhost out-of-the-box without origin-blocking issues.
* Dynamic Flags: Updates country flag icons instantly using flagsapi.com.
* Smart Input: Prevents errors by automatically defaulting negative numbers or empty inputs to a value of 1.

## Project Structure

├── index.html       
├── index.css        
├── codes.js         
└── script.js        

## Setup & Installation

   1. Clone or download this repository.
   2. Put index.html, codes.js, and script.js in the same project folder.
   3. Open index.html directly in your browser, or run it through a local server extension like Live Server in VS Code (http://127.0.0.1:5500).

## How It Works (The Code)
The app grabs data by hitting the endpoint with the base currency and extracts the target currency rate from the returned JSON:

const URL = `https://er-api.com{fromCurrency}`;let response = await fetch(URL);let data = await response.json();let rate = data.rates[toCurrency];

## APIs Used

* Exchange Rates: [ExchangeRate-API (Open Tier)](https://www.exchangerate-api.com/)
* Country Flags: [FlagsAPI](https://flagsapi.com/)


