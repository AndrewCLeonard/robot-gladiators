// DOM Elements

// Bindings
var onLoadRobotNameValue = document.getElementById("robotName").value;
const fightStageId = document.getElementById("fightStage");

// Event Listeners
const robotNameSubmitBtn = document.getElementById("robotNameSubmitBtn");
robotNameSubmitBtn.addEventListener("click", nameYourRobotBtn);

// Functions
function nameYourRobotBtn() {
	event.preventDefault;
	let nameSubmission = document.getElementById("robotName").value.trim();
	displayRobotReadyMsg();
	RobotReadyMsg();
	return nameSubmission;
}

function displayRobotReadyMsg() {
	fightStageId.style.visibility = "visible";
}

function RobotReadyMsg(robotName, callback) {
	// get robot's name from form
	robotName = document.getElementById("robotName").value;
	// message to be appended to DOM after robot name is submitted
	let msg = `It's time to battle, ${robotName}!`;
	// create a <p> element and append it to the `id=fightStage` <div> element
	const para = document.createElement("p");
	const node = document.createTextNode(msg);
	para.appendChild(node);
	fightStageId.appendChild(para);
}

// "name your robot" form onClick event
const nameFunctions = () => {
	event.preventDefault();
	RobotReadyMsg();
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
