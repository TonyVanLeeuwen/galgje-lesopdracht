const {question} = require("readline-sync");
const {displayWordSoFar, isGameWon, isGameLost, showWrongLetterCount} = require("./gamelogic");

function game(word, guesses) {
    console.log("Dit heb je tot nu toe geraden: ", guesses);
    console.log("Dit zijn de letters die je tot nu toe goed hebt: " + displayWordSoFar(word, guesses));
    console.log("Aantal verkeerd geraden letters: " + showWrongLetterCount(word, guesses));

    const letter = question("Raad een letter: ");

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter.toLowerCase());

    if (!isGameLost(word, guesses) && !isGameWon(word, guesses)) {
        // volgende ronde! we roepen game nog een keer aan
        game(word, guesses);
    } else if (isGameWon(word, guesses)) {
        //winst! lekker gewerkt pik
        console.log("Inderdaad! het woord was " + word + "! gefeliciteerd! je hebt gewonnen!");

    } else if (isGameLost(word, guesses)) {
        //jammer de bammer
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
