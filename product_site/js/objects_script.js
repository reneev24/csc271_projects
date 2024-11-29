

function Message(senderID, receiverID, convo){
	this.senderID = senderID;
	this.receiverID = receiverID;
	this.convo = convo;
	this.sent = true;
	this.displayMessage = function(){ //displays the if message is sent 
		const sentStatus = this.sent ? "Sent" : "Not Sent";
		return `${this.senderID} -> ${this.receiverID}: "${this.convo}" (${sentStatus})`;
	};

	this.markAsSent = function(){
		this.sent = true;
		return `Message from ${this.senderID} to ${this.receiverID} marked as received.`;
	};

};

const messageContainer = document.querySelector(".message-container");

//my two instances
const message1 = new Message('Renee','Maheva', 'Hey! How is your day going?');
const message2 = new Message('Maheva', 'Renee', 'Hiii. It is going pretty well ngl, wbu?');

function appendMessagetoContainer(messageObj){
	const messageDiv = document.createElement("div");
	messageDiv.classList.add("message");

	if(messageObj.sent){
		messageDiv.classList.add("sent");
	} else {
		messageDiv.classList.add("received");
	}

	messageDiv.textContent = messageObj.displayMessage();

	messageContainer.appendChild(messageDiv);

}

	appendMessagetoContainer(message1);
	appendMessagetoContainer(message2);

