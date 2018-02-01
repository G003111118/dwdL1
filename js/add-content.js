var today = new Date();
var hourNow = today.getHours();
var greeting;

var day = today.getDay();

console.log("day index is " + day);

var weekDay;

var weekDay = new Array('Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday');
					



if (hourNow > 18) {
	greeting = 'Good evening, its ' + weekDay[day];
} else if (hourNow > 12) {
	greeting = 'Good afternoon Stephen! Happy ' + weekDay[day];
} else if (hourNow > 0) {
	greeting = 'Good morning Stephen! Happy ' + weekDay[day];
}else {
	greeting = 'Welcome! ';
}

document.write('<h3>' + greeting + '</h3>'); 


