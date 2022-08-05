const h2El = document.createElement("h2");

// will contain robot name when "submit" is clicked
let nameSubmission = "";
let booleanWinner = "";

const robotNameSubmitBtn = document.getElementById("robotNameSubmitBtn");
robotNameSubmitBtn.addEventListener(
	"click",

	// Functions
	function startGame(e) {
		e.preventDefault;
		nameSubmission = document.getElementById("robotName").value.trim(); // robotName = submission
		displayRobotReadyMsg(); // make `style.visibility = "visible"` for `RobotReadyMsg()`
		RobotReadyMsg(); // Battle message & attack button
	}
);

function displayRobotReadyMsg() {
	const fightStageId = document.getElementById("fightStage");
	fightStageId.style.visibility = "visible";
}

function RobotReadyMsg() {
	// create battle message
	let msg = `It's time to battle, ${nameSubmission}!`;
	// put the message in a text node
	const battleMessage = document.createTextNode(msg);
	// append it to id='readyAnnouncement'
	const readyAnnouncementId = document.getElementById("readyAnnouncement");
	readyAnnouncementId.appendChild(battleMessage);
	// return nameSubmission;
}

// attack function logic
function chooseWinner(e) {
	e.preventDefault;
	// message options to display
	let winMessage = `🏆${nameSubmission} wins!🏆`;
	let loseMessage = `☠${nameSubmission} loses!☠`;

	// random number to determine win or loss
	booleanWinner = Math.random() > 0.5 ? winMessage : loseMessage;
	displayBattleResult();
}

const attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener("click", chooseWinner);

function displayBattleResult() {
	console.log(booleanWinner);
	const battleResultId = document.getElementById("battleResult");
	battleResultId.style.visibility = "visible";

	const battleResultText = document.createTextNode(booleanWinner);
	battleResultId.appendChild(battleResultText);

	const lineBreak = document.createElement("br");
	battleResultId.appendChild(lineBreak);
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
