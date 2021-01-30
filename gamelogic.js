function displayWordSoFar(word, guesses) {
    /*
      checken of de letter in het woord zit door middel van een for loop
      inhoud for loop:
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
    checken of de letter tussen guesses staat zit door middel van een for loop
    inhoud for loop:
    voor iedere letter in het woord checken of het tussen de geraden letters staat
    als de letter tussen de geraden letters staat ga je door met de loop, zo niet stop je met checken
    als het einde van het woord is bereikt wordt er true teruggegeven
  */
    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word[i]) && i === word.length - 1) {
            return true;
        } else if (!guesses.includes(word[i])) {
            return false;
        }
    }
}

function isGameLost(word, guesses) {
    /*
    checken of de letter in de guesses zit door middel van een for loop
    inhoud for loop:
    nested loop die per letter checkt of en waar hij in het woord zit
    voor de lengte van het woord een counter opzetten
    counter++
    if counter guesses.length is > 7 return true
  */
    let counter = 0;
    for (let i = 0; i < guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            counter++;
        }
    }
    if (counter >= 7) {
        return true;
    } else {
        return false;
    }
}

function showGallows(word, guesses) {
    if (showWrongLettersGuessedCount(word, guesses) === 1) {
        console.log(
            "|\n" +
            "|\n" +
            "|\n" +
            "|\n" +
            "|\n" +
            "===========");
    } else if (showWrongLettersGuessedCount(word, guesses) === 2) {
        console.log(
            "___________\n" +
            "| /\n" +
            "|/\n" +
            "|\n" +
            "|\n" +
            "|\n" +
            "===========");
    } else if (showWrongLettersGuessedCount(word, guesses) === 3) {
        console.log(
            "___________\n" +
            "| /      |\n" +
            "|/       o\n" +
            "|\n" +
            "|\n" +
            "|\n" +
            "===========");
    } else if (showWrongLettersGuessedCount(word, guesses) === 4) {
        console.log(
            "___________\n" +
            "| /      |\n" +
            "|/      _o_\n" +
            "|\n" +
            "|\n" +
            "|\n" +
            "===========");
    }  else if (showWrongLettersGuessedCount(word, guesses) === 5) {
        console.log(
            "___________\n" +
            "| /      |\n" +
            "|/      _o_\n" +
            "|        0\n" +
            "|\n" +
            "|\n" +
            "===========");
    }   else if (showWrongLettersGuessedCount(word, guesses) === 6) {
        console.log(
            "___________\n" +
            "| /      |\n" +
            "|/      _o_\n" +
            "|        0\n" +
            "|       / \n" +
            "|\n" +
            "===========");
    } else if (showWrongLettersGuessedCount(word, guesses) === 7) {
        console.log(
            "___________\n" +
            "| /      |\n" +
            "|/      _o_\n" +
            "|        0\n" +
            "|       / \\\n" +
            "|\n" +
            "===========");
    }
}

function showWrongLettersGuessedCount(word, guesses) {
    let counter = 0;
    for (let i = 0; i < guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            counter++;
        }
    }
    return counter;
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
    showWrongLetterCount: showWrongLettersGuessedCount,
    showGallows : showGallows,
};
