var englishDateElement = document.getElementById('englishDate');
var todayDateElement = document.getElementById('today-date');

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
var day = today.getDate();
var monthIndex = today.getMonth(); 
var year = today.getFullYear();
var dayIndex = today.getDay();

if (day < 10) {
    day = '0' + day;
}

var monthName = monthNames[monthIndex];
var dayName = dayNames[dayIndex];


var dateString =  day + ' ' + monthName + ' ' + year;

document.getElementById("englishDate").innerHTML =dayName + ', '+ '  ' + dateString ;

