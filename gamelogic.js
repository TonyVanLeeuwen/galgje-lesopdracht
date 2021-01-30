function displayWordSoFar(word, guesses) {
    /*
      checken of de letter in het woord zit door middel van een for loop
      inhoud for loop:
      nested loop die per letter checkt of en waar hij in het woord zit
      als er nog geen guesses zijn laat je voor de lengte van het woord een string met underscores zien
      als er wel guesses zijn laat je per geraden letter de letter in plaats van de underscores zien.
  */
    let wordString = "";
    for (let j = 0; j < word.length; j++) {
        if (guesses.includes(word[j])) {
            wordString += word[j] + " ";
        } else {
            wordString += "_ ";
        }
    }
    return wordString;
}

function isGameWon(word, guesses) {
    /*
    checken of de letter in het woord zit door middel van een for loop
    inhoud for loop:
    voor de lengte van het woord een counter opzetten
    if found counter++
    if counter === word.length return true
  */
}

function isGameLost(word, guesses) {
    /*
    checken of de letter in het woord zit door middel van een for loop
     inhoud for loop:
    nested loop die per letter checkt of en waar hij in het woord zit
    voor de lengte van het woord een counter opzetten
    if found counter++
    if counter !== word.length && guesses.length is > 7 return true
  */
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
};
