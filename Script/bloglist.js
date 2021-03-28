var confirmation = document.getElementsByClassName("confirmationModel")[0];

var confirmationBtn = document.querySelectorAll(".delete");

var confirmationStat = document.getElementById("no");



var j;
for (j = 0; j < confirmationBtn.length; j++) {
    let btn = confirmationBtn[j];
    btn.onclick = function() {
        confirmation.style.display = "flex";
    }
}

confirmationStat.onclick = function() {
    confirmation.style.display = "none";
}