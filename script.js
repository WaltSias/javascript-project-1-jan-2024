guessButton.onclick = function () {
    let blackHair = blackHairCheckbox.checked;
    let glasses = glassesCheckbox.checked;
    let woman = womanCheckbox.checked;
    let hat = hatCheckbox.checked;

    let anne = !hat && blackHair && !glasses && woman;
    let mary = hat && !blackHair && !glasses && woman;
    let ashley = hat && !blackHair && glasses && woman;
    let bob = !hat && blackHair && !glasses && !woman;

    if (anne) {
        alert('I am Anne');
    } else if (mary) {
        alert('I am Mary');
    } else if (ashley) {
        alert('I am Ashley');
    } else if (bob) {
        alert('I am Bob');
    } else {
        alert('Not Quite, Guess Again?');
    }
}; 