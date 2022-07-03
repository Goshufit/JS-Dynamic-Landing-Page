// Dom Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const user = document.getElementById('user');
const focus = document.getElementById('focus');

// Optional
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

//Add Zero to time when new minutes hit 60 minutes and start at one or 60 seconds and start at 1

function addZero(n) {
    // The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). 
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
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

// Adding user personalization into local storage

// Set name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed 
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('user', e.target.innerText);
            // Blur is called which deselects the element after enter is pressed to stop from adding whitespace
            user.blur()
        }
    } else {
        localStorage.setItem('user', e.target.innerText);
    }
}

// Get name
function getName() {
    if (localStorage.getItem('user') === null) {
        user.textContent = '[Enter user]';
    } else {
        user.textContent = localStorage.getItem('user');
    }
}

// Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed 
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


user.addEventListener('keypress', setName);
// Blur event is when the elemnt is deselected after an event
user.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime()
setBgGreet()
getName()
getFocus()