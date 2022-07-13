// creacte DOM Elements
const para = document.createElement("p");

// Bindings
var onLoadRobotNameValue = document.getElementById("robotName").value;
const fightStageId = document.getElementById("fightStage");

// global console.logs
console.log(`onLoadRobotNameValue = ${onLoadRobotNameValue}`);
console.log(`onLoadRobotNameValue is empty? ${"" === onLoadRobotNameValue}`);

// functions
function displayRobotReadyMsg(text) {

}

function RobotReadyMsg(msg, robotName, callback) {
	// get robot's name from form
	robotName = document.getElementById("robotName").value;
	// message to be appended to DOM after robot name is submitted
	msg = `It's time to battle, ${robotName}!`;

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