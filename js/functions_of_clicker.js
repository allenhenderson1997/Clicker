let increaser = 0;

function increaseNumber() {

    const number = document.getElementById("number");

    number.innerHTML = increaser.toLocaleString();
    increaser += 1;

    if (increaser >= 10 && increaser <= 19) {

        number.style.color = "limegreen";
    } else if (increaser >= 20 && increaser <= 29) {

        number.style.color = "greenyellow";
    } else if (increaser >= 30 && increaser <= 39) {

        number.style.color = "yellowgreen";
    } else if (increaser >= 40 && increaser <= 49) {

        number.style.color = "yellow";
    } else if (increaser >= 50 && increaser <= 59) {

        number.style.color = "orange";
    } else if (increaser >= 60 && increaser <= 69) {

        number.style.color = "red";
    } else if (increaser >= 70 && increaser <= 79) {

        number.style.color = "darkred";
    } else if (increaser >= 80 && increaser <= 89) {

        number.style.color = "brown";
    } else if (increaser >= 90 && increaser <= 99) {

        number.style.color = "aqua";
    } else if (increaser == 100) {

        number.style.color = "green";
    }
}