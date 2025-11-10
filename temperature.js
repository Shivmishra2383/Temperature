let btn = document.querySelector("button");
let input = document.querySelector("#input_value");
let fromUnit = document.querySelector("#fromUnit");
let toUnit = document.querySelector("#toUnit");

btn.addEventListener("click", function () {
  console.log(input.value);
  
  input = parseFloat(input.value);
  var result = " ";

  if (fromUnit.value === "c" && toUnit.value === "k") {
    result = input + 273.15 +"K";
  }else if (fromUnit.value === "c" && toUnit.value === "f") {
    result = (input * 9/5) + 32 + "F";
  }else if (fromUnit.value === "k" && toUnit.value === "f") {
    result = (input - 273.15) * 9/5 + 32 + "F";
  }else if (fromUnit.value === "k" && toUnit.value === "c") {
    result = (input - 273.15) + "C";
  }else if (fromUnit.value === "f" && toUnit.value === "c") {
    result = (input -32) * 5/9 + "C";
  }else if (fromUnit.value === "f" && toUnit.value === "k") {
    result = (input -32) * 5/9 + 273.15 + "K";
  }else{
    result = "Please enter a valid input";
  }
  document.querySelector("#result").innerHTML = result;
});