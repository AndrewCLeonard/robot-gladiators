// DOM Elements
const fightStage = document.getElementById("fightStage");

// Bindings
var onLoadRobotNameValue = document.getElementById("robotName").value;

// global console.logs
console.log(`onLoadRobotNameValue = ${onLoadRobotNameValue}`);
console.log(`onLoadRobotNameValue is empty? ${"" === onLoadRobotNameValue}`);

// functions
function displayRobotName() {
	fightStage.style.visibility = "visible";
}

const nameFunctions = () => {
	event.preventDefault();
	const robotNameValueOnClick = document.getElementById("robotName").value;
	console.log(`robotNameValueOnClick = ${robotNameValueOnClick}`);

	console.log("test");
	if (robotNameValueOnClick) {
		fightStage.style.visibility = "visible";
	}

	// displayRobotName();
	// showFightStage();
};
