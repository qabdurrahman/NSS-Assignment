function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("clock").textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);