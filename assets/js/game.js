// DOM Elements
const para = document.createElement("p");

// BINDINGS
const fightStageId = document.getElementById("fightStage");
const readyAnnouncementId = document.getElementById("readyAnnouncement");
let nameSubmission = "";

// EVENT LISTENERS START
//
const robotNameSubmitBtn = document.getElementById("robotNameSubmitBtn");
robotNameSubmitBtn.addEventListener(
	"click",

	// Functions
	function startGame(e) {
		e.preventDefault;
		nameSubmission = document.getElementById("robotName").value.trim(); // robotName = submission
		displayRobotReadyMsg(); // `style.visibility = "visible"` of...
		RobotReadyMsg(); // Battle message & attack button
	}
);

const attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener(
	"click",

	function chooseWinner(e) {
		e.preventDefault;
		booleanWinner = Math.random() > 0.5 ? winMessage : loseMessage;
	}
);

// EVENT LISTENERS END

function displayRobotReadyMsg() {
	fightStageId.style.visibility = "visible";
}

function RobotReadyMsg() {
	// get robot's name from form
	// message to be appended to DOM after robot name is submitted
	let msg = `It's time to battle, ${nameSubmission}!`;
	// create a <p> element and append it to the `id=fightStage` <div> element
	const node = document.createTextNode(msg);
	para.appendChild(node);
	readyAnnouncementId.appendChild(para);
}

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
