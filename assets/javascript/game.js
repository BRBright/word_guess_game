var animals = ["hippopotamus", "chimpanzee", "crocodile", "scorpion", "alligator", "dolphin"];
var letter = [];
var randWord = getRanWord();
var letRemain = randWord.length;

  function getRanWord() {
    var rand = animals[Math.floor(Math.random()* animals.length)];
    return rand;
  }
  function display() {
      for(i = 0; i < randWord.length; i++){
        letter[i] = "_";
    }
    }
document.onclick = function() {  
  do{
    alert(letter.join(" "));
    var guess = prompt("Guess or a Letter.");
    if(guess == null){
        break;
    }
    else if (guess.length !== 1){
        alert("Please enter a single letter.")
    }
    else {
        for(var j = 0; j < randWord.length; j++){
            if(randWord[j] == guess) {
                letter[j] = guess;
                letRemain--;
            }
            else if(guess !== randWord[j]){
                console.log(guess);
            }
        }
    }
  }while(letRemain > 0)
  document.getElementById('secretWord').innerHTML = randWord;
    alert("Good Job!")
};
