getGuess.onclick = function () {
    let Guess = findguesswho(true, true, true);
    console.log(guess);
    resultDiv.textContent = Guess;

    function guessWho() {
        alert("You are Correct!");
    }
    let guesswho = function (hasHair, hasNoglasses, wearingHat) {
        let hasNOglasses = true
        let wearingHat = true
        let hasGlasses = false
        let hasHair = true

        let guessWho = isMary

        let isMary = hasHair && hasNOglasses && wearingHat;
        let isHerman = hasHair && hasNoglasses && !wearingHat;
        let isAnne = hasHair && hasNoglasses && !wearingHat;
        let isTom = hasHair && hasGlasses && !wearingHat;

        if (isMary) {
            alert = ("Congrats I am Mary");
            guessWho = "Mary"
            if (isHerman) {
                alert = ("umm Not quite the answer")
                guessWho = "Herman"
            } else if (isTom) {
                alert = ("well I have glass, so no!")
                guessWho = "Tom"
            } if (isAnne) {
                alert = ("not me Anne, I don't have a hat")
                guessWho = "Anne"
            }
        }
        return guesswho;

    }

}
