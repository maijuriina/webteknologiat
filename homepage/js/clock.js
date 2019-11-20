alarmHour = undefined;
alarmMin = undefined;
let alarm = new Audio('sounds/Alarm02.wav');
playing = false;

setInterval(function time() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    $("#digitalClock").html(time);
});

function setAlarm() {
  var timeValue = $("#alarmId").val();
  alarmHour = timeValue.substring(0,2);
  alarmMin = timeValue.substring(3);
};

function alarmFlash() {
  $("#digitalClock").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
}

$("#alarmBtn").click(function() {
  $("i", this).toggleClass("fas fa-bell fas fa-bell-slash");
  if (!playing) {
    setAlarm();
    playing = true;
    alarmFlash();
  } else {
    alarm.loop = false;
    playing = false;
    alarmFlash().stop(true, true);
  }
});

function clock() {

    var now = new Date();
    var ctx = document.getElementById('clock').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
  
    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();
  
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
      if (i % 5!= 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
   
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();

    if (alarmHour == hr && alarmMin == min) {
      if (playing) {
        alarm.play();
        alarm.loop = true;
        if (playing) {
          alarmFlash();
        }
      }
    }

    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = 'black';
  
    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
  
    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
   
    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#d35f8d';
    ctx.fillStyle = '#d35f8d';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#c83771';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
  
    ctx.restore();
  
    window.requestAnimationFrame(clock);
  };
  
  window.requestAnimationFrame(clock);