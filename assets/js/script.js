// Assignment code here

function getLength (){

  length = window.prompt("How long would you like your password to be? (It must be between 8-128 characters)")

 if (length > 7 && length < 129) {
   return length;
 }
 else {
   window.alert("Attention: You must enter a number between 8 and 128.")
   getLength()
 }
}

// Ask User for preference in password
var getPreference = function(item) {
  var choice = window.prompt("Would you like to use " + item + " in your password? (Enter 1 for Yes or 2 for No)");
  choice = parseInt(choice);
  switch (choice) {
  case 1:
    var choice = true;
    return choice;
  case 2:
    var choice = false;
    return choice;
  default:
    window.alert("Attention: You must enter 1 (Yes) or 2 (No).")
    var choice = getPreference(item);
    return choice;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
getLength(); 

// Call Preference function for different types of chracters and store as global variable
var upperCase = getPreference("Uppercase Letters");
var lowerCase = getPreference("Lowercase Letters");
var numbers = getPreference("Numbers");
var specialCharacters = getPreference("Special Characters");

// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
