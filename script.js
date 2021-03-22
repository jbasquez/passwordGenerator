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
    console.log("ive been clicked");
    if(lowercaseEl.checked && uppercaseEl.checked && symbolsEl.checked&& numbersEl.checked === true) {
        console.log("has all")
    }else if(uppercaseEl.checked && symbolsEl.checked && numbersEl.checked === true ){
        console.log("has3")
    }else if(uppercaseEl.checked && numbersEl.checked && lowercaseEl.checked === true ){
        console.log("has3")
    }else if(uppercaseEl.checked && symbolsEl.checked && lowercaseEl.checked === true ){
        console.log("has3")
    }else if(symbolsEl.checked && numbersEl.checked && lowercaseEl.checked === true ){
        console.log("has3")
    }else if(uppercaseEl.checked && symbolsEl.checked === true ){
        console.log("has2")
    }else if(uppercaseEl.checked && numbersEl.checked=== true ){
        console.log("has2")
    }else if(uppercaseEl.checked && lowercaseEl.checked === true ){
        console.log("has2")
    }else if(lowercaseEl.checked && symbolsEl.checked === true ){
        console.log("has2")
    }else if(lowercaseEl.checked && numbersEl.checked=== true ){
        console.log("has2")
    }else if(numbersEl.checked && symbolsEl.checked=== true ){
        console.log("has2")
    }
    else if(lowercaseEl.checked === true ){
        console.log("has1")
    }else if(uppercaseEl.checked === true ){
        console.log("has1")
    }else if(numbersEl.checked === true ){
        console.log("has1")
    }else if(symbolsEl.checked === true ){
        console.log("has1")
    }

    // const length = lengthEl.value;
    // const hasLower = lowercaseEl.checked;
    // const hasUpper = uppercaseEl.checked;
    // const hasNumber = numbersEl.checked;
    // const hasSymbol = symbolsEl.checked;
    
    // resultEl.innerText = generatePassword(
    //     hasLower,
    //     hasUpper,
    //     hasNumber,
    //     hasSymbol,
    //     length
    // );
});

function generatePassword(lower, upper, number, symbol, length) {
    
   let generatedPassword = '';
    
    const typesCount = lower + upper + number + symbols;
    
   const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
       (
       item => Object.values(item)[0]
       );
    
   if(typesCount === 0) {
       return '';
   }
  
    const finalPassword = generatedPassword.slice(0, length);
   return finalPassword;
};


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
    const symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}