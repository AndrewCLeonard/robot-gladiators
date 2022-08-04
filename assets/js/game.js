const paragraphEl = document.createElement("p");

// will contain robot name when "submit" is clicked
let nameSubmission = "";

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

function displayRobotReadyMsg() {
	const fightStageId = document.getElementById("fightStage");
	fightStageId.style.visibility = "visible";
}

function RobotReadyMsg() {
	// get robot's name from form & create message to be appended to DOM after robot name is submitted
	let msg = `It's time to battle, ${nameSubmission}!`;
	// create a <p> element and append it to the `id=fightStage` <div> element
	const battleMessage = document.createTextNode(msg);
	paragraphEl.appendChild(battleMessage);

	const readyAnnouncementId = document.getElementById("readyAnnouncement");
	readyAnnouncementId.appendChild(paragraphEl);
}

const attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener("click", function chooseWinner(e) {
	e.preventDefault;
	booleanWinner = Math.random() > 0.5 ? winMessage : loseMessage;
});

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
