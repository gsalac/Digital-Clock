function showTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridiem = "AM";
    const clockId = document.getElementById("clock");
    
    clockId.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }

    if (hours === 0) {
        hours = 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    setTimeout(showTime, 1000);
}
showTime();
