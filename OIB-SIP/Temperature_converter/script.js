document.getElementById("convertBtn").addEventListener("click", function() {
  const inputTemp = parseFloat(document.getElementById("temperatureInput").value);
  const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
  const resultText = document.getElementById("resultText");

  if (isNaN(inputTemp)) {
    resultText.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Convert based on input unit
  if (selectedUnit === "C") {
    celsius = inputTemp;
    fahrenheit = (inputTemp * 9/5) + 32;
    kelvin = inputTemp + 273.15;
  } else if (selectedUnit === "F") {
    fahrenheit = inputTemp;
    celsius = (inputTemp - 32) * 5/9;
    kelvin = celsius + 273.15;
  } else {
    kelvin = inputTemp;
    celsius = inputTemp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  resultText.textContent = `
    🌡️ ${inputTemp}°${selectedUnit} =
    ${celsius.toFixed(2)}°C |
    ${fahrenheit.toFixed(2)}°F |
    ${kelvin.toFixed(2)}K
  `;
});