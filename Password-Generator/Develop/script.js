// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt with Question, Passwordlength 8 to 128
let getPasswordLength = () => {
  let passwordLength = parseInt(prompt("How long the password will be?"));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please select a number between 8-128");
    return;
  }
  return passwordLength;
};
//All four Criteria: lowercae,uppercase,numbers and special characters.
let getPasswordCriteria = () => {
  let passwordLength = getPasswordLength();
  let totalString = "";
  if (confirm("Would you like Lowercase letters?")) {
    totalString += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("Would you like Uppercase letters?")) {
    totalString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Would you like Numebers?")) {
    totalString += "0123456789";
  }
  if (confirm("Would you like to add Special Characters?")) {
    totalString += " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  return { passwordLength, totalString };
};

//Random
let generatePassword = () => {
  let passwordCriteria = getPasswordCriteria();
  let passwordArray = passwordCriteria.totalString.split("");
  console.log(passwordArray);
  let result = [];
  for (let i = 0; i < passwordCriteria.passwordLength; i++) {
    let key = Math.floor(Math.random() * passwordArray.length);
    let digit = passwordArray[key];
    result.push(digit);
  }
  console.log(password);
  // The join method returns an array as a string
  return result.join("");
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
