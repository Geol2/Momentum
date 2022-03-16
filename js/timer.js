let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let hour_range = document.getElementById("range_hour");
let min_range = document.getElementById("range_min");
let sec_range = document.getElementById("range_sec");

const start = document.getElementById("startTimer");

let nIntervalId;

function startTimer() {
	let timer_hour = hour.value;
	let timer_minute = minute.value;
	let timer_second = second.value;

	timer_hour = Number(timer_hour);
	timer_minute = Number(timer_minute);
	timer_second = Number(timer_second);

	console.log(Number(timer_hour));
	console.log(Number(timer_minute));
	console.log(Number(timer_second));

	nIntervalId = setInterval(function () {
		if (
			Number(timer_hour) === 0 &&
			Number(timer_minute) === 0 &&
			Number(timer_second) === 0
		) {
			clearInterval(nIntervalId);
			return 0;
		}
		if (Number(timer_second) === 0) {
			timer_second = 60;
			timer_minute = timer_minute - 1;
			minute.value = timer_minute.toString().padStart(2, 0);
			min_range.value = timer_minute;
		}

		timer_second -= 1;
		second.value = timer_second.toString().padStart(2, 0);
		sec_range.value = timer_second;
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
