var wins = 0;
var loss = 0;
var animals = ["hippopotamus", "chimpanzee", "crocodile", "scorpion", "alligator", "dolphin"];
var letter = " ";
var randWord = getRanWord();


    console.log(randWord);
    
  function getRanWord() {
    var rand = animals[Math.floor(Math.random()* animals.length)];
    return rand;
  }
  function display() {
      for(i = 0; i <= randWord.length; i++){
        letter = letter + "_" + " ";
    }
    document.getElementById('secretWord').innerHTML = "<h3>" + letter + "</h3>";
  }
  function match(guess) {
    for(i = 0; i <= randWord.length; i++){
        if(guess === randWord[i]) {
            
            console.log(randWord[i])
        }
    }
  }
  function getLetter() {
    var userGuess = prompt("Choose a letter");
    return userGuess;
  }
// Whenever a key is pressed, alert "pressed a button".
document.onkeyup = function() {  
    var guess = getLetter();
    match(guess);
};