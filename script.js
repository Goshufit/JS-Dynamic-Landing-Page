// Dom Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPM = hour >= 12? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add Zero to time when new minutes hit 60 minutes and start at one or 60 seconds and start at 1

function addZero(n) {
    // The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). 
    return(parseInt(n, 10) < 10? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

// Run
showTime()
setBgGreet()