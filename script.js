// Assignment Code
//var generateBtn = document.querySelector("#generate");
//var password = document.getElementById("password");
//generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "0123456789";
var specialChar = "!@#$%^&*()";



document.addEventListener("click", writePassword);
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyPassword () {
  var copyText = document.getElementById("password");
  copyText.select();
}

function generatePassword() {
  var passwordSize = prompt("Choose between 8 and 128 charaters long")
  console.log(passwordSize)

  var password = " ";
  if (passwordSize >= 8 && passwordSize <= 128)

  {


    var HasLowerCase = confirm("Include Lower Case Letters in Password?");
    var HasUpperCase = confirm("Include Upper Case Letters in Password?");
    var HasNumerals = confirm("Include Numerals in Password?")
    var HasSpecialCharact = confirm("Include Special Characters in Password?")



    if (!HasLowerCase) {
      chars = chars.replace(lowerCase, "")
    }

    if (!HasUpperCase) {
      chars = chars.replace(upperCase, "")
    }

    if (!HasNumerals) {
      chars = chars.replace(numerals, "")

      if (!HasSpecialCharact) {
        chars = chars.replace(specialChar, "")
      }
    }

    for (var i =0; i < passwordSize; i++) {
      var randomnumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomnumber,  randomnumber +1);

    }
  } else {
    alert("Must Choose number between 8 and 128!")
  }

  return password;
}
//document.addEventListener ('click', writePassword);

//generateBtn.addEventListener("click", writePassword)

