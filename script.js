// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passwordCharacters = "";
var passwordResult = "";
var promptValue = "";

// Functions to prompt user for password options
function getPasswordOptions() {
  promptValue = prompt(
    "Please pick your desired password length. Must be between 10 - 64 characters."
  );

  promptValue = parseInt(promptValue);

  console.log(typeof promptValue);
  console.log(promptValue);

  if (promptValue >= 10 && promptValue <= 64) {
    addLowercase();
  } else {
    alert("Length is outside of the required parameters.");
    location.reload();
  }
}

function addLowercase() {
  var lowerCaseOption = confirm("Include lowercase?");
  if (lowerCaseOption) {
    passwordCharacters += lowerCasedCharacters;
    console.log(passwordCharacters);
    console.log(promptValue);
    addUppercase();
  } else {
    console.log(passwordCharacters);
    addUppercase();
  }
}

function addUppercase() {
  var upperCaseOption = confirm("Include uppercase?");
  if (upperCaseOption) {
    passwordCharacters += upperCasedCharacters;
    console.log(passwordCharacters);
    console.log(promptValue);
    addNumeric();
  } else {
    console.log(passwordCharacters);
    addNumeric();
  }
}

function addNumeric() {
  var numericOption = confirm("Include numeric?");
  if (numericOption) {
    passwordCharacters += numericCharacters;
    console.log(passwordCharacters);
    console.log(promptValue);
    addSpecial();
  } else {
    console.log(passwordCharacters);
    addSpecial();
  }
}

function addSpecial() {
  var specialOption = confirm("Inlude special characters?");
  if (specialOption) {
    passwordCharacters += specialCharacters;
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    console.log(passwordCharacters);
    console.log(promptValue);
    generatePassword();
  } else {
    generatePassword();
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    console.log(passwordCharacters);
    console.log(promptValue);
  }
}

// passwordCharacters = passwordCharacters.replaceAll(",", "");
// console.log(passwordCharacters);

// Function to generate password with user input
function generatePassword() {
  for (i = 0; i < promptValue; i++) {
    var randomNum = Math.floor(Math.random() * passwordCharacters.length);
    passwordResult += passwordCharacters.substring(randomNum, randomNum + 1);
  }
  console.log(passwordResult);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = (document.querySelector("#password").value = password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
