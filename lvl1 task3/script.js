// Get DOM elements
const tempInput = document.getElementById("temp-input");
const celsiusRadio = document.getElementById("celsius-radio");
const fahrenheitRadio = document.getElementById("fahrenheit-radio");
const kelvinRadio = document.getElementById("kelvin-radio");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Convert temperature based on selected scale
function convertTemp() {
  const temp = parseFloat(tempInput.value);
  if (isNaN(temp)) {
    output.innerText = "Please enter a valid temperature";
    return;
  }
  let convertedTemp;
  let convertedScale;
  if (celsiusRadio.checked) {
    convertedTemp = (temp * 9/5) + 32;
    convertedScale = "°F";
  } else if (fahrenheitRadio.checked) {
    convertedTemp = (temp - 32) * 5/9;
    convertedScale = "°C";
  } else if (kelvinRadio.checked) {
    convertedTemp = temp - 273.15;
    convertedScale = "°C";
  } else {
    output.innerText = "Please select a temperature scale";
    return;
  }
  output.innerText = convertedTemp.toFixed(2) + convertedScale;
}

// Add event listener to convert button
convertBtn.addEventListener("click", convertTemp);