const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const hour_range = document.getElementById("range_hour");
const min_range = document.getElementById("range_min");
const sec_range = document.getElementById("range_sec");

function startTimer() {
	console.log(1);
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

hour_range.addEventListener("input", updateHour);
min_range.addEventListener("input", updateMinute);
sec_range.addEventListener("input", updateSecond);

initTimer();
