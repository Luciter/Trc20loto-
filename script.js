function updateClock() {

  let currentTime = new Date();

  let currentHour = currentTime.getHours();

  let currentMinute = currentTime.getMinutes();

  let currentSecond = currentTime.getSeconds();

  currentHour = currentHour < 10 ? '0' + currentHour : currentHour;

  currentMinute = currentMinute < 10 ? '0' + currentMinute : currentMinute;

  currentSecond = currentSecond < 10 ? '0' + currentSecond : currentSecond;

  document.getElementById('hour').textContent = currentHour;

  document.getElementById('minute').textContent = currentMinute;

  document.getElementById('second').textContent = currentSecond;}

setInterval(updateClock, 1000);