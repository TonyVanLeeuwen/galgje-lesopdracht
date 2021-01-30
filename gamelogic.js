function displayWordSoFar(word, guesses) {
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
    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word[i]) && i === word.length - 1) {
            return true;
        } else if (!guesses.includes(word[i])) {
            return false;
        }
    }
}

function isGameLost(word, guesses) {
    let counter = 0;
    for (let i = 0; i < guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            counter++;
        }
    }
    return counter >= 7;
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
    } else if (showWrongLettersGuessedCount(word, guesses) === 5) {
        console.log(
            "___________\n" +
            "| /      |\n" +
            "|/      _o_\n" +
            "|        0\n" +
            "|\n" +
            "|\n" +
            "===========");
    } else if (showWrongLettersGuessedCount(word, guesses) === 6) {
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
    showGallows: showGallows,
};
