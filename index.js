const {question} = require("readline-sync");
const {displayWordSoFar, isGameWon, isGameLost, showWrongLetterCount, showGallows} = require("./gamelogic");

function game(word, guesses) {
    console.log("Dit heb je tot nu toe geraden: ", guesses);
    console.log("Dit zijn de letters die je tot nu toe goed hebt: " + displayWordSoFar(word, guesses));
    console.log("Aantal verkeerd geraden letters: " + showWrongLetterCount(word, guesses));
    showGallows(word, guesses);

    let letter = question("Raad een letter: ");

    if (letter.length > 1) {
        letter = letter.slice(0, 1);
    }

    if (guesses.includes(letter)) {
        console.log("Die had je al");
        game(word, guesses);
    } else {
        guesses.push(letter.toLowerCase());
    }

    if (!isGameLost(word, guesses) && !isGameWon(word, guesses)) {
        game(word, guesses);
    } else if (isGameWon(word, guesses)) {
        console.log("Inderdaad! het woord was " + word + "! gefeliciteerd! je hebt gewonnen!");

    } else if (isGameLost(word, guesses)) {
        showGallows(word, guesses);
        console.log("Helaas, je hangt. Volgende keer beter!");
    }
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
