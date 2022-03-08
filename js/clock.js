const selectClock = document.getElementById("clock");
const div = document.createElement("div");
div.innerHTML = "대한민국 표준시";

selectClock.after(div);

function getCurrentDay() {
	const date = new Date();
	let hourToString = date.toString();
	hourToString = hourToString.substr(16, 8);

	selectClock.innerHTML = hourToString;
}

setInterval(getCurrentDay, 1000);
