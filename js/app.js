const set = document.getElementById("set");
const idOfMenu = document.getElementById("menu");
const setting = document.getElementsByClassName("setting");
const classOfMenu = document.getElementsByClassName("setting mb600");

const closeWin = document.getElementsByClassName("red m8 ml5 mr5");
const downWin = document.getElementsByClassName("yellow m8 ml5 mr5");
const maxWin = document.getElementsByClassName("green m8 ml5 mr5");


function createSpeechBubbleOfSetting() {
	setting[0].style.cursor = "pointer";
}

function createSpeechBubbleOfMenu() {
	classOfMenu[0].style.cursor = "pointer";
}

function removeSpeechBubbleOfMenu() {}

set.addEventListener("mouseover", createSpeechBubbleOfSetting);

menu.addEventListener("mouseover", createSpeechBubbleOfMenu);
menu.addEventListener("mouseleave", removeSpeechBubbleOfMenu);
