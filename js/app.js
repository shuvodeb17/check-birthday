var jsDays = document.querySelector('.js-days');
var jsHours = document.querySelector('.js-hours');
var jsMinutes = document.querySelector('.js-minutes');
var jsSecond = document.querySelector('.js-second');

var getDate = new Date('6 january 2023');
function countdown(){
    var relaseDay = new Date(getDate);
    var currentDay = new Date();

    var totalTime = (relaseDay - currentDay) / 1000;
    var days = Math.floor(totalTime / 3600 /24);
    var hours = Math.floor((totalTime / 3600) % 24);
    var minutes = Math.floor((totalTime / 60) % 60);
    var second = Math.floor(totalTime) % 60;
    document.querySelector('.js-days').innerHTML = days;
    document.querySelector('.js-hours').innerHTML = hours;
    document.querySelector('.js-minutes').innerHTML = minutes;
    document.querySelector('.js-second').innerHTML = second;
 


};
countdown();
setInterval(countdown, 1000);