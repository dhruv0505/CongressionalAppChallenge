if ((typeof localStorage.getItem("userID") !== "undefined" && !(typeof localStorage.getItem("userID") === "string" && localStorage.getItem("userID")=="undefined")) && window.location.href.slice(-10)=="login.html"){
    window.location.href = "home.html";
}

if ((typeof localStorage.getItem("userID") === "undefined" || (typeof localStorage.getItem("userID") === "string" && localStorage.getItem("userID")=="undefined"))&& window.location.href.slice(-10)!="login.html"){
    window.location.href = "login.html";
}


function googleLogin() {

}
function openProfile(){
    window.location.href = "profilePage.html";
}
function openGroupPage(){
    window.location.href = "groupPage.html";
}
function logout(){
    localStorage.setItem("userID", "undefined");
    window.location.href = "login.html";
}
function markComplete(){
    if (document.getElementById("taskCompletionButton").className=="taskCompletionButton centerContainer"){
        document.getElementById("taskCompletionButton").className="taskCompletionButtonCompleted centerContainer";
    } else{
        document.getElementById("taskCompletionButton").className= "taskCompletionButton centerContainer";
    }
}

