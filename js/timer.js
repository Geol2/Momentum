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
	const hour_range = document.getElementById("range_hour");
	const min_range = document.getElementById("range_min");
	const sec_range = document.getElementById("range_sec");

	const hour = document.getElementById("hour");
	const minute = document.getElementById("minute");
	const second = document.getElementById("second");

	hour.innerHTML = hour_range.value;
	minute.innerHTML = min_range.value;
	second.innerHTML = sec_range.value;
}

initTimer();

() => {};
