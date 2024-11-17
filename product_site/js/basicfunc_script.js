//basic function to display messages
function messages(){
	console.log("Messages:");
}

messages();

//function with two parameters (new messages + current messages)

/*
var newMes = 1;
var oldMes = 2;

var userMessages = function (mes, old){
	var messages = newMes + oldMes;

	return messages;
};

var totalMessages = userMessages(newMes, oldMes);
*/

var oldmMsg = 1;
var newMsg = 2;

function userMessages(oldMsg, newMsg){
	return oldMsg + newMsg
}

	let result = userMessages(oldmMsg, newMsg)

console.log("Messages:", result);
