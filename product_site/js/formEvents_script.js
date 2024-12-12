var validName = false;
var usernameInput = document.getElementById("username");
var messageDiv = document.getElementById("submit");

//shows when input box is selected
usernameInput.addEventListener('focus', function(){
	messsageDiv.innerHTML "Enter your username.";
});

//
usernameInput.addEventListener('blur', function(){
	var nameValue = usernameInput.value.trim();
	if (nameValue === ''){
		usernameInput.style.borderColor = 'black';
		messageDiv.innerHTML = 'Please enter a username with 8-14 characters.'
	} else if (nameValue.split('').length < 2){
		usernameInput.style.borderColor = 'black';
		messageDiv.innerHTML = 'Invalid input. Please enter a username with 8-14 characters.';
	} else{
		usernameInput.style.borderColor = '#B097C1';
		validName = true;
		messageDiv.innerHTML = '';
	}
});