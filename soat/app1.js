function showtime() {
let clock, tiome, hour, minute, secound;
clock = document.getElementById('clock');
tiome = new Date();
hour = tiome.getHours();
minute = tiome.getMinutes();
secound = tiome.getSeconds();

if (hour >= 24){
 hour = hour - 24 + '';
} else{
    hour = hour + '';
}


if (hour < 10){
    hour = '0' + hour;
}
if (minute < 10){
    minute = '0' + minute;
}
if (secound < 10){
    secound = '0' + secound;
}

clock.innerHTML = `${hour} : ${minute} : ${secound}`;
setTimeout(showtime, 1000)
}

showtime();