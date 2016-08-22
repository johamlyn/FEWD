$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);
$("#clearButton").click(clearLights);
//document.getElementById('stopButton').onclick = illuminateRed;
//document.getElementById('slowButton').onclick = illuminateYellow;
//document.getElementById('goButton').onclick = illuminateGreen;
//document.getElementById('clearButton').onclick = clearLights;

function illuminateRed() {
  clearLights();
  $("#stopLight").css("backgroundColor", "red");
  // document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  $("#slowLight").css("backgroundColor", "yellow");
  //document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  $("#goLight").css("backgroundColor", "green");
  //document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  $("#stopLight").css("backgroundColor", "black");
  $("#slowLight").css("backgroundColor", "black");
  $("#goLight").css("backgroundColor", "black");
  // document.querySelector('#stopLight').style.backgroundColor = "black";
  // document.querySelector('#slowLight').style.backgroundColor = "black";
  // document.querySelector('#goLight').style.backgroundColor = "black";
}

/*function turnOff (buttonNode) {
  buttonNode.style.backgroundColor = "black";
}

function fancyClearLights() {
 document.querySelectorAll('.bulb').forEach(turnOff);
}*/
