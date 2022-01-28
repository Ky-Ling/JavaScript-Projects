/*
 * @Date: 2022-01-25 20:59:16
 * @LastEditors: GC
 * @LastEditTime: 2022-01-28 11:06:57
 * @FilePath: \Projects\5-Dynamic Landing Page\js\main.js
 */

// DOM element
const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus");

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
    
    // Set AM or PM
    const amPm = hour >= 12 ? "PM": "AM";

    // 12 hour format
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}</span>:</span>${addZero(sec)} ${showAmPm ? amPm : " "}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = 'url("../img/morning.jpg")';
        greeting.textContent = "Good Morning";

    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = 'url("../img/afternoon.jpg")';
        greeting.textContent = "Good Afternoon";
    } else {
        // Evening
        document.body.style.backgroundImage = 'url("../img/night.jpg")';
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}

// Set name
function setName(e) {
    if(e.target === "keypress") {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}
 
// Get name
function getName() {
    // Check to see what is in local storage
    if(localStorage.getItem("name") === null) {
        name.textContent = "[Enter name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

// Set focus
function setFocus(e) {
    if(e.today === "keypress") {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}

// Get focus
function getFocus() {
    // Check to see what is in local storage
    if(localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);


// Run
showTime();
setBgGreet();
getName();
getFocus();