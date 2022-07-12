// DOM Elements
const fightStage = document.getElementById("fightStage");

// Bindings
const robotNameValue = document.getElementById("robotName").value;

function displayRobotName() {
	const displayRobotNameEventValue = document.getElementById("robotName").value;
	fightStage.style.visibility = "visible";
}

// function showFightStage() {
// 	displayRobotName() === "" ? (fightStage.style.visibility = "hidden") : (fightStage.style.visibility = "visible");
// }

showFightStage();

function alert() {
	alert("alert");
}

