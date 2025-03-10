window.onload = function () {
    // Variables for time values
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    // Variables to store time display
    const appendMinutes = document.getElementById("minutes");
    const appendSeconds = document.getElementById("seconds");
    const appendTens = document.getElementById("tens");

    // Variables for buttons
    const buttonStart = document.getElementById("start");
    const buttonStop = document.getElementById("stop");
    const buttonReset = document.getElementById("reset");

    // Variable to store the interval
    let interval;

    // Function to start the stopwatch
    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    }

    // Start button event listener
    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    // Stop button event listener
    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    // Reset button event listener
    buttonReset.onclick = function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendMinutes.innerHTML = "00";
    }
}
