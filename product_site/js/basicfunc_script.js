//basic function to display messages
function messages(){
	console.log("Messages:");
}

messages();

//function with two parameters (new messages + current messages)

var newMes = 1;
var oldMes = 2;

var userMessages = function (mes, old){
	var messages = newMes + oldMes;

	return messages;
};

var totalMessages = userMessages(newMes, oldMes);