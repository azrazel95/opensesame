// this tells the script to reference the button in the document
var generateBtn = document.querySelector("#generate");
// this tells the button to start running the script when it is clicked
generateBtn.addEventListener("click", writePassword);

// this is the list of characters available
var numeric = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = " !'#$%&()*+,-./:;<>=?@[]\^{}\~`";
// this function creates the output
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

function generatePassword() {
  var password = "";
  //this starts our initial prompt
  var passwordLength = prompt("How long would you like your Password to be? Please select a Number larger than 8 and smaller than 128.");
    // these are our alerts for unexpected parameters, alongside a recursive loop so we dont have to restart the process
    if (passwordLength > 128) {
    alert("Please enter a Number smaller than 128, but larger than 8.");
      generatePassword();
    }
    else if (passwordLength < 8) {
      alert("Please enter a Number smaller than 128, but larger than 8.");
      generatePassword();
    };
    //these are our input parameter confirms
    var capitalConfirm = confirm("Would you like capital letters included?");
    var lowerCaseConfirm = confirm("Would you like lower case letters included?");
    var numericConfirm = confirm("Would you like numbers included?");
    var specialCharConfirm = confirm("Would you like Special characters (i.e. !?*) included?");
    //this actually creates the output using a for loop 
    for (let i = 0; i < passwordLength; i++) {
      if (capitalConfirm === true && password.length < passwordLength) {
        var capitalPosition = Math.floor(Math.random() * Capital.length);
        password = password + Capital[capitalPosition];
      }
      if (lowerCaseConfirm && password.length < passwordLength) {
        var lowerCasePosition = Math.floor(Math.random() * lowerCase.length);
        password = password + lowerCase[lowerCasePosition];
      }
      if (numericConfirm && password.length < passwordLength) {
        var numericPosition = Math.floor(Math.random() * numeric.length);
        password = password + numeric[numericPosition];
      }
      if (specialCharConfirm && password.length < passwordLength) {
        specialCharPosition = Math.floor(Math.random() * specialCharacters.length);
        password = password + specialCharacters[specialCharPosition]
      }
      
    }
    //this returns our new value of "password"
  return password;
  
}



