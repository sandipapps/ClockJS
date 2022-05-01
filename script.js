function displayTime(){
  var d = new Date();
  var hour = d.getHours(); // 0-23
  var min = d.getMinutes(); // 0-59
  var sec = d.getSeconds(); // 0-59
  var amOrPm = "AM";
  if(hour >= 12)
  {
    amOrPm = "PM";
  }
  if(hour > 12)
  {
    hour = hour - 12;
  }
  if(hour < 10)
    hour = "0" + hour;
  if(min < 10)
    min = "0" + min;
  if(sec < 10)
    sec = "0" + sec;
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;
}
setInterval(displayTime, 1000);
