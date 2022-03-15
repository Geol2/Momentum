let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

const hour_range = document.getElementById("range_hour");
const min_range = document.getElementById("range_min");
const sec_range = document.getElementById("range_sec");

const start = document.getElementById("startTimer");

let nIntervalId;

function startTimer() {
	let timer_second = second.value;

	console.log( hour.value );
    console.log( minute.value );
    console.log( second.value );
	
	nIntervalId = setInterval(function() {
		if(timer_second === 1) {
			clearInterval(nIntervalId);
		}

		timer_second -= 1;
		console.log( timer_second );
		second.value = timer_second;
	}, 1000);

}

function pauseTimer() {
	console.log(2);
}

function stopTimer() {
	console.log(3);
}

function updateHour() {
	let range = hour_range.value.padStart(2, 0); 
	hour.value = range;
}

function updateMinute() {
	minute.value = min_range.value.padStart(2, 0);
}

function updateSecond() {
	second.value = sec_range.value.padStart(2, 0);
}

function updateHourRange() {
	hour_range.value = hour.value;
}

function updateMinRange() {
	min_range.value = minute.value;
}

function updateSecRange() {
	sec_range.value = second.value;
}

function initTimer() {
	hour.value = hour_range.value.padStart(2, 0);
	minute.value = min_range.value.padStart(2, 0);
	second.value = sec_range.value.padStart(2, 0);
}

hour_range.addEventListener("input", updateHour);
min_range.addEventListener("input", updateMinute);
sec_range.addEventListener("input", updateSecond);

hour.addEventListener("input", updateHourRange);
minute.addEventListener("input", updateMinRange);
second.addEventListener("input", updateSecRange);

start.addEventListener("click", startTimer);

initTimer();
