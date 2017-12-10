function handleSignUp() {
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value

	if(email.length < 4) {
		alert("Please enter a valid email");
		return;
	}
	if(password.length < 4) {
		alert("Please enter a stronger password");
		return;
	}
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(){
		//success
		alert("User Created");
	})
	.catch(function(error){
		//fail
		alert("error.message");
	})
}

function handleSignIn() {
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value

	firebase.auth().signInWithEmailAndPassword(email, password)
			.then(function() {
				alert("Success!!!")
			})
			.catch(function(error){
				alert("Something Wrong")
			})
}

function handleSignOut() {
	firebase.auth().signOut().then(function(){
		alert("Signed Out")
	})
	.catch(function(error){
		//fail
		alert("error.message");
	})
}

function handleFBLogin() {
	if(!firebase.auth().currentUser) {
		//allow fb login
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(function(result){
			var token = result.credential.accessToken;
			var user = result.user;
			alert(user, email);
			window.location.href="http://google.com"
		})
		.catch(function(error){
			alert(error.message);
		})
	}
	else {
		//already signed in
		handleSignOut();
	}
}