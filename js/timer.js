const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const hour_range = document.getElementById("range_hour");
const min_range = document.getElementById("range_min");
const sec_range = document.getElementById("range_sec");

const start = document.getElementById("startTimer");

function startTimer() {
	console.log(hour.value);
    console.log(minute.value);
    console.log(second.value);
    
}

function pauseTimer() {
	console.log(2);
}

function stopTimer() {
	console.log(3);
}

function initTimer() {
	hour.value = hour_range.value.padStart(2, 0);
	minute.value = min_range.value.padStart(2, 0);
	second.value = sec_range.value.padStart(2, 0);
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

hour_range.addEventListener("input", updateHour);
min_range.addEventListener("input", updateMinute);
sec_range.addEventListener("input", updateSecond);

hour.addEventListener("input", updateHourRange);
minute.addEventListener("input", updateMinRange);
second.addEventListener("input", updateSecRange);

start.addEventListener("click", startTimer);

initTimer();
