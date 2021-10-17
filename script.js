//calls on variables and makes them constants
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbols
};

generateEl.addEventListener('click', () => {
    // length value grabbed from html converted from string to number w/ +
    const length = +lengthEl.value;
    //sees if this is true or false
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {
    
   let generatedPassword = '';
    
    const typesCount = lower + upper + number + symbol;
    //filters out unchecked items from array for passsword
   const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    
   if(typesCount >= 0) {
       alert("please enter a length");
   }
   //uses given length to loop through checked items already filterd combines diff items to make array
   for(let i = 0; i < length; i++){
       typesArr.forEach(type =>{
           const pushedItem = Object.keys(type)[0];
           generatedPassword += randomFunc[pushedItem]();
       })
    };
  
    const finalPassword = generatedPassword.slice(0, length);
   return finalPassword;
};

//uses charcode to generate random items
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbols() {
    const symbols = '!@#$%^&*{}[]></.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
