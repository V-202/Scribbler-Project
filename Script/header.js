var signUpModel = document.getElementsByClassName("signUp")[0];


var signUpBtn = document.getElementsByClassName("topButtons")[0];

var signUpClose = document.getElementsByClassName("signUpClose")[0];

signUpBtn.onclick = function() {
    signUpModel.style.display = "flex";

}

signUpClose.onclick = function() {
    signUpModel.style.display = "none";
}



var signInModel = document.getElementsByClassName("signIn")[0];

var signInBtn = document.getElementsByClassName("topButtons")[1];

var signInClose = document.getElementsByClassName("signInClose")[0];

signInBtn.onclick = function() {
    signInModel.style.display = "flex";

}

signInClose.onclick = function() {
    signInModel.style.display = "none";
}


var ggwp = document.getElementsByClassName("ggwp")[0];

ggwp.onclick = function() {
    signInModel.style.display = "none";
    signUpModel.style.display = "flex";
}





window.onclick = function(event) {
    if (event.target === signUpModel) {
        signUpModel.style.display = "none";
    }
    if (event.target === signInModel) {
        signin_modal.style.display = "none";
    }
}