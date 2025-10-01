function toggleLight(roomId) {
    let statusElement = document.getElementById("status-" + roomId);
    if (statusElement.innerText === "OFF") {
      statusElement.innerText = "ON";
      statusElement.style.color = "green";
    } else {
      statusElement.innerText = "OFF";
      statusElement.style.color = "red";
    }
  }
  