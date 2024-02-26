// Guess Who?

let hasNOglasses = true
let wearingHat = true
let hasHair = true
let hasGlasses = false

let isMary = hasHair && hasNOglasses && wearingHat;
let isHerman = hasHair && hasNoglasses && !wearingHat;
let isAnne = hasHair && hasNogalsses && !wearingHat;
let letTom = hasHair && hasGlasses && !wearingHat;

if (isMary) {
    console.log("Congrats I am Mary");
    if (isHerman) {
        console.log("umm Not quite the answer")
    } else if (isTom) {
        console.log("well I have glass, so no!")
    } if (isAnne) {
        console.log("not me Anne, I dont have a hat")
    }
}