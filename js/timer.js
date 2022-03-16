let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let hour_range = document.getElementById("range_hour");
let min_range = document.getElementById("range_min");
let sec_range = document.getElementById("range_sec");

const start = document.getElementById("startTimer");
const pause = document.getElementById("pauseTimer");
const stop = document.getElementById("stopTimer");

let nIntervalId;

function startTimer() {
	let timer_hour = hour.value;
	let timer_minute = minute.value;
	let timer_second = second.value;

	timer_hour = Number(timer_hour);
	timer_minute = Number(timer_minute);
	timer_second = Number(timer_second);

	alert("시작합니다.");
	nIntervalId = setInterval(function () {
		if (timer_hour === 0 && timer_minute === 0 && timer_second === 0) {
			// 종료 조건
			alert("Timer를 종료합니다.");
			clearInterval(nIntervalId);
			return 0;
		}

		if (timer_hour !== 0) {
			// 시간이 세팅됨
			timer_hour -= 1;

			if (timer_minute === 0) {
				timer_second = 59;
				timer_minute = 59;
			} else {
				timer_second -= 1;
			}

			sec_range.value = timer_second;
		} else if (timer_hour === 0 && timer_minute !== 0) {
			// 시간X, 분 세팅
			if (timer_minute < 0) {
				timer_second = 59;
			} else {
				timer_second -= 1;
			}

			if (timer_second < 0) {
				timer_minute -= 1;
				timer_second = 59;
			}
		} else if (timer_hour === 0 && timer_minute === 0 && timer_second !== 0) {
			// 초만 세팅
			timer_second -= 1;
		} else {
			// 알 수 없음.
			alert("알 수 없는 조건입니다. 관리자에게 문의해주세요.");
			return 0;
		}

		hour.value = timer_hour.toString().padStart(2, 0);
		hour_range.value = timer_hour;
		minute.value = timer_minute.toString().padStart(2, 0);
		min_range.value = timer_minute;
		second.value = timer_second.toString().padStart(2, 0);
		sec_range.value = timer_second;
	}, 1000);
}

function pauseTimer() {
	alert("일시정시 되었습니다.");
	clearInterval(nIntervalId);
	return 0;
}

function stopTimer() {
	let timer_hour;
	let timer_minute;
	let timer_second;

	if (confirm("중시하시겠습니까? 확인 시, 초기로 돌아갑니다.")) {
		clearInterval(nIntervalId);

		timer_hour = 1;
		timer_minute = 0;
		timer_second = 0;
		hour.value = timer_hour.toString().padStart(2, 0);
		hour_range.value = timer_hour;
		minute.value = timer_minute.toString().padStart(2, 0);
		min_range.value = timer_minute;
		second.value = timer_second.toString().padStart(2, 0);
		sec_range.value = timer_second;

		return 0;
	}
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
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);

initTimer();
