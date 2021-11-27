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

// Get String based on user preference
var getString = function(myString, string) {
    buildString = myString;
    for ( var i = 0; i < string.length; i++ ) {
      var letter = string.charAt(i)
      buildString = buildString.concat(letter);
    }
    characters = buildString;
    return characters;
  }

// Generate password based on user preference
var generatePassword = function(long, upper, lower, number, special) {

  var characters = '';
  if (upper === true) {
    var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var characters = getString(characters, upCharacters);
  }

  if (lower === true) {
    var lowCharacters = "abcdefghijklmnopqrstuvwxyz";
    var characters = getString(characters, lowCharacters);
  }

  if (number === true) {
    var nums = "0123456789";
    var characters = getString(characters, nums);
  }

  if (special === true) {
    var specCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";
    var characters = getString(characters, specCharacters);
  }

  var result = '';
  var charactersLength = characters.length;
  for ( var i = 0; i < long; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
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

console.log(generatePassword(length, upperCase, lowerCase, numbers, specialCharacters));

// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
