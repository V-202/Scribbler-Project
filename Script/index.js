var createPostModel = document.getElementsByClassName("postModel")[0];

var postBtn = document.getElementById("createPostBtn");

var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function() {
    createPostModel.style.display = "none";
}
postBtn.onclick = function() {
    createPostModel.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target === createPostModel) {
        createPostModel.style.display = "none";
    }
}