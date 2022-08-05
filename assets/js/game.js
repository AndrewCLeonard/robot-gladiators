const h2El = document.createElement("h2");

// value from robot name form
let nameSubmission = "";

// win/loss message to be displayed, chosen randomly by `chooseWinner` function
let booleanWinner = "";

// container for win/loss messages
const battleResultId = document.getElementById("battleResult");

// Robot name event listener

// button for robot name
const robotNameSubmitBtn = document.getElementById("robotNameSubmitBtn");

// input for robot name
const robotNameInput = document.getElementById("robotName");

// trigger button click when enter key pressed
robotNameInput.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		e.preventDefault();
		robotNameSubmitBtn.click();
	}
});

robotNameSubmitBtn.addEventListener(
	"click",

	function gameStartEvents(e) {
		e.preventDefault;
		// update robot name with value from text box
		nameSubmission = document.getElementById("robotName").value.trim();
		// make `style.visibility = "visible"` for `RobotReadyMsg()`, which contains the announcement and "attack" button
		displayRobotReadyMsg();
		// create battle message
		createRobotReadyMsg();
	}
);

function displayRobotReadyMsg() {
	const fightStageId = document.getElementById("fightStage");
	fightStageId.style.visibility = "visible";
}

function createRobotReadyMsg() {
	// create battle message text
	let battleMessage = `It's time to battle, ${nameSubmission}!`;
	// put the message in a text node
	// append it to id="readyAnnouncement"
	let readyAnnouncementId = document.getElementById("readyAnnouncement");
	console.log(battleResultId);
	// clear readyAnnouncementId if it currently has any textContent
	if (readyAnnouncementId.textContent) {
		readyAnnouncementId.textContent = battleMessage;
	} else {
		readyAnnouncementId.textContent = battleMessage;
	}

	// clear win/loss messages if there's anything in those
	if (battleResultId.textContent) {
		battleResultId.textContent = "";
	}
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
