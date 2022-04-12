
/*This file was inspired the socket.io chat tutorial https://socket.io/get-started/chat and the lecture of the joint painting by the professor https://d2l.ucalgary.ca/d2l/le/content/422910/viewContent/5219346/View*/
let socket = io.connect('http://localhost:3000');

document.getElementById("csb").addEventListener("click", function (e) {
  e.preventDefault();
  if (document.getElementById("ServerName").value) {
    var jsonStuff = { "ServerName": document.getElementById("ServerName").value, "Description": document.getElementById("ServerDescription").value , "Password":document.getElementById("ServerPassword").value}
    var toSend = JSON.stringify(jsonStuff)
    const xhttp = new XMLHttpRequest();
    // Send a request
    xhttp.open("POST", "/createServer");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(toSend);
    window.location.href = "http://localhost:3000/login"
  }
});