// DOM Elements

const fightStageId = document.getElementById("fightStage");

// Bindings
var onLoadRobotNameValue = document.getElementById("robotName").value;

// global console.logs
console.log(`onLoadRobotNameValue = ${onLoadRobotNameValue}`);
console.log(`onLoadRobotNameValue is empty? ${"" === onLoadRobotNameValue}`);

// functions
function displayRobotName() {
	fightStageId.style.visibility = "visible";
}

const nameFunctions = () => {
	event.preventDefault();

	// local vars
	const robotNameValueOnClick = document.getElementById("robotName").value;

	console.log(`robotNameValueOnClick = ${robotNameValueOnClick}`);
	console.log(document.getElementById("robotName").innerHTML);

	//
	if (robotNameValueOnClick) {
		// displayRobotName();
		console.log(fightStageId);

		function appendRobotName() {
			const para = document.createElement("p");
			const helloTextForRobotName = document.createTextNode(robotNameValueOnClick);

			para.appendChild(helloTextForRobotName);
			document.body.appendChild(para);
		}
		appendRobotName();
	}

	// displayRobotName();
	// showFightStage();
};

// Fight Variables
playerCurrency = 10;
playerHealth = 10;

// enemy robot collection
function Enemy(name, hitPoints) {
	this.name = name;
	this.hitPoints = hitPoints;
}

const enemy1 = new Enemy("enemy1", 10);
const enemy2 = new Enemy("enemy2", 10);

const enemyCollection = [enemy1, enemy2];
