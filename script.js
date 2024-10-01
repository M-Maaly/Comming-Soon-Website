// count Down By Second
let countSecond = setInterval(countDownSecond, 100);
let setSecond = document.querySelector(".second .number");

function countDownSecond() {
    let currentSecond = parseInt(setSecond.innerHTML);
    currentSecond -= 1;
    if (currentSecond === 0) {
        currentSecond = 60;
    }

    setSecond.innerHTML = currentSecond.toString().padStart(2, "0");

    if (setMinute.innerHTML === "00" && setSecond.innerHTML === "01" ) {
        setSecond.innerHTML = "00"
        clearInterval(countSecond)
    }
}

// count Down By Minute
let countMinute = setInterval(countDownMinute, 100);
let setMinute = document.querySelector(".minute .number");

function countDownMinute() {
    let currentMinute = parseInt(setMinute.innerHTML);
    currentMinute -= 1;
    if (currentMinute === 0) {
        currentMinute = 60;
    }

    setMinute.innerHTML = currentMinute.toString().padStart(2, "0");

    if (setHour.innerHTML === "00" && setMinute.innerHTML === "01" ) {
        setMinute.innerHTML = "00"
        clearInterval(countMinute)
    }
}

// count Down By Hour
let countHour = setInterval(countDownHour, 100);
let setHour = document.querySelector(".hour .number");

function countDownHour() {
    let currentHour = parseInt(setHour.innerHTML);
    currentHour -= 1;
    if (currentHour === 0) {
        currentHour = 24;
    }

    setHour.innerHTML = currentHour.toString().padStart(2, "0");

    if (setDay.innerHTML === "00" && setHour.innerHTML === "01" ) {
        setHour.innerHTML = "00"
        clearInterval(countHour)
    }
}

// count Down By Day
let countDay = setInterval(countDownDay, 100);
let setDay = document.querySelector(".day .number");

function countDownDay() {
    let currentDay = parseInt(setDay.innerHTML);
    currentDay -= 1;
    if (currentDay === 0) {
        clearInterval(countDay);
    }
    setDay.innerHTML = currentDay.toString().padStart(2, "0");
}
