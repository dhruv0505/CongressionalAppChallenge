if ((typeof localStorage.getItem("userID") !== "undefined" && !(typeof localStorage.getItem("userID") === "string" && localStorage.getItem("userID")=="undefined")) && window.location.href.slice(-10)=="login.html"){
    window.location.href = "home.html";
}

if ((typeof localStorage.getItem("userID") === "undefined" || (typeof localStorage.getItem("userID") === "string" && localStorage.getItem("userID")=="undefined"))&& window.location.href.slice(-10)!="login.html"){
    window.location.href = "login.html";
}

function openProfile(){
    window.location.href = "profilePage.html";
}
function openGroupPage(groupID){
}
function login(){
    localStorage.setItem("userID", document.getElementById("usernameLoginInput").value);
    window.location.href = "home.html";
}
function logout(){
    localStorage.setItem("userID", "undefined");
    window.location.href = "login.html";
}