window.addEventListener('DOMContentLoaded', function showTime() {

    "use strict";

    setTimeout (function recursive() {

    let content = document.querySelectorAll('content'),
        time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds(),
        text = hours + ':' + minutes + ':' + seconds;

    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    content[0].textContent = text;

    setTimeout (recursive , 1000);
    });
});