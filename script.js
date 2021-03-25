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
    //
    var settings;

    specCharacter = [
        "!", "@", "#", "$", "%", "^", "&", "*", "'", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "_",  "`",  "{", "|", "}",  "~",
      ];
    numbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ];
    alpha = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
      ];
    
    var toUpper = function(x){
        return x.toUpperCase();
    }
    upperLetter = alpha.map(toUpper);

    if(lowercaseEl.checked && uppercaseEl.checked && symbolsEl.checked&& numbersEl.checked === true) {
        console.log("has all");
        settings = specCharacter.concat(numbers, alpha, upperLetter, specCharacter);

        console.log(settings);
        //
        // for(var i = 0; i <lengthEl; i++){
        //     var array = [];
        //     array.push(lowercaseEl);
        //     array.push(uppercaseEl);
        //     array.push(symbolsEl);
        //     array.push(numbersEl);
        //     console.log(array);
        // };
    }else if(uppercaseEl.checked && symbolsEl.checked && numbersEl.checked === true ){
        settings = specCharacter.concat(numbers,upperLetter);
        console.log(settings);
    }else if(uppercaseEl.checked && numbersEl.checked && lowercaseEl.checked === true ){
        settings = alpha.concat(numbers, upperLetter);
        console.log(settings);
    }else if(uppercaseEl.checked && symbolsEl.checked && lowercaseEl.checked === true ){
        settings = upperLetter.concat(specCharacter, alpha);
        console.log(settings);
    }else if(symbolsEl.checked && numbersEl.checked && lowercaseEl.checked === true ){
        settings = specCharacter.concat(numbers, alpha);
        console.log(settings);
    }else if(uppercaseEl.checked && symbolsEl.checked === true ){
        settings = upperLetter.concat(specCharacter);
        console.log(settings);
    }else if(uppercaseEl.checked && numbersEl.checked=== true ){
        settings = upperLetter.concat(numbers);
        console.log(settings);
    }else if(uppercaseEl.checked && lowercaseEl.checked === true ){
        settings = upperLetter.concat(alpha);
        console.log(settings);
    }else if(lowercaseEl.checked && symbolsEl.checked === true ){
        settings = alpha.concat(specCharacter);
        console.log(settings);
    }else if(lowercaseEl.checked && numbersEl.checked=== true ){
        settings = alpha.concat(numbers);
        console.log(settings);
    }else if(numbersEl.checked && symbolsEl.checked=== true ){
        settings = numbers.concat(specCharacter);
        console.log(settings);
    }else if(lowercaseEl.checked === true ){
        console.log("has1")
    }else if(uppercaseEl.checked === true ){
        console.log("has1")
    }else if(numbersEl.checked === true ){
        console.log("has1")
    }else if(symbolsEl.checked === true ){
        console.log("has1")
    }else{
        console.log("needs a value");
        alert("please select a input");
        //event.preventDefault();
    }
    //for loop to take user input loop through "i" as long as length and push the final password into a array
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