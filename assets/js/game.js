// creacte DOM Elements
const para = document.createElement("p");

// Bindings
var onLoadRobotNameValue = document.getElementById("robotName").value;
const fightStageId = document.getElementById("fightStage");

// global console.logs
console.log(`onLoadRobotNameValue = ${onLoadRobotNameValue}`);
console.log(`onLoadRobotNameValue is empty? ${"" === onLoadRobotNameValue}`);

// functions
function myClick() {
	let captureNameSubmission = new Promise(function (myResolve, myReject) {
		event.preventDefault;
		nameSubmission = document.getElementById("robotName").value.trim();
		myReject = console.log("error");
		myResolve(nameSubmission);
		console.log(nameSubmission);
		return nameSubmission;
	});

	captureNameSubmission.then(
		function (value) {
			console.log("success");
		},
		function (error) {
			console.log("error!");
		}
	);
}

function displayRobotReadyMsg(text) {
	fightStageId.innerHTML = text;
	console.log(text);
}

function RobotReadyMsg(robotName, callback) {
	// get robot's name from form
	robotName = document.getElementById("robotName").value;
	// message to be appended to DOM after robot name is submitted
	let msg = `It's time to battle, ${robotName}!`;
	callback(msg);

	RobotReadyMsg();
}

function useThisOne(robotName, callback) {}

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
