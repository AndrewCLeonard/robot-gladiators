console.log(`line 1 robotName.value = ${robotName.value}`);

const robotNameInput = document.getElementById("robotNameSubmit");
function displayRobotName() {
	document.getElementById("displayRobotName").innerHTML = `You've named it ${robotName.value}`;
}

if (robotName.value === "") {
	console.log("robotName.value = null");
} else {
	console.log(`line 11 robotName.value = ${robotName.value}`);
	console.log("name assigned");
}
