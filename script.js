// Guess Who?
let Guesswho = function (hasHair, hasNoglasses, wearingHat) {
    let hasNOglasses = true
    let wearingHat = true
    let hasGlasses = false
    let hasHair = true

    let guessWho = isMary

    let isMary = hasHair && hasNOglasses && wearingHat;
    let isHerman = hasHair && hasNoglasses && !wearingHat;
    let isAnne = hasHair && hasNogalsses && !wearingHat;
    let letTom = hasHair && hasGlasses && !wearingHat;

    if (isMary) {
        console.log("Congrats I am Mary");
        guessWho = "Mary"
        if (isHerman) {
            console.log("umm Not quite the answer")
            guessWho = "Herman"
        } else if (isTom) {
            console.log("well I have glass, so no!")
            guessWho = "Tom"
        } if (isAnne) {
            console.log("not me Anne, I dont have a hat")
            guessWho = "Anne"
        }
    } return guesswho;


}

getGuess.onclick = function () {
    let Guess = findGuesswho(true, true, true);
    console.log(guess);
    resultDiv.textContent = Guess;

}