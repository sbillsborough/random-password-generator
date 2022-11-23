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

// Global Variables

var passwordCharacters = "";
var passwordResult = "";

// Functions to prompt user for password options

function getPasswordOptions() {
  promptValue = prompt(
    "Please pick your desired password length. Must be between 10 - 64 characters."
  );

  promptValue = parseInt(promptValue);

  if (promptValue >= 10 && promptValue <= 64) {
    addLowercase();
  } else {
    alert("Length is outside of the required parameters.");
    location.reload();
  }
}

// Function to confirm and add lowercase characters if true

function addLowercase() {
  passwordResult = "";
  passwordCharacters = "";
  var lowerCaseOption = confirm("Include lowercase characters?");
  if (lowerCaseOption) {
    passwordCharacters += lowerCasedCharacters;
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    addUppercase();
  } else {
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    addUppercase();
  }
}

// Function to confirm and add uppercase characters if true

function addUppercase() {
  var upperCaseOption = confirm("Include uppercase characters?");
  if (upperCaseOption) {
    passwordCharacters += upperCasedCharacters;
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    addNumeric();
  } else {
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    addNumeric();
  }
}

// Function to confirm and add numeric characters if true

function addNumeric() {
  var numericOption = confirm("Include numeric characters?");
  if (numericOption) {
    passwordCharacters += numericCharacters;
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    addSpecial();
  } else {
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    addSpecial();
  }
}

// Function to confirm and add special characters if true

function addSpecial() {
  var specialOption = confirm("Inlude special characters?");
  if (specialOption) {
    passwordCharacters += specialCharacters;
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    generatePassword();
  } else {
    passwordCharacters = passwordCharacters.replaceAll(",", "");
    generatePassword();
  }
}

// Function to check if passwordCharacters is empty

function passwordCharactersEmpty() {
  if (passwordCharacters) {
    generatePassword();
  }
}

// Function to generate password with user input

function generatePassword() {
  if (passwordCharacters) {
    for (i = 0; i < promptValue; i++) {
      var randomNum = Math.floor(Math.random() * passwordCharacters.length);
      passwordResult += passwordCharacters.substring(randomNum, randomNum + 1);
    }
  } else {
    alert(
      "Password must contain at least one character set. Please try again!"
    );
    location.reload();
  }
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  getPasswordOptions();
  var password = passwordResult;
  var passwordText = (document.querySelector("#password").value = password);
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
