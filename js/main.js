'use strict';
function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59

    // Adds "0" before seconds and minutes.
    if(s < 10) {   
        s = "0" + s;
    } 
    if(m < 10){
        m = "0" + m;
    }
    if(h < 10){
      h = "0" + h;
    }
//Break 09:05
    if (h == 9 && m == 5 && s == 0) {
        setTimeout(() => {
            confirm("Break time!");
            document.getElementById('alarmSound').play();
          }, 1000)
        
    } 
//Break 09:55
    if (h == 9 && m == 55 && s == 0) {
        confirm("Break time!");
    }
//Break 10:55
    if (h == 10 && m == 55 && s == 0) {
      confirm("LUNCH time!");
    } 
//Break 12:10
    if (h == 12 && m == 10 && s == 0) {
    confirm("Break time!");
    }
//Break 13:00
    if (h == 13 && m == 0 && s == 0) {
    confirm("Break time!");
     } 

    let time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time; // doesn't work for FireFox
    document.getElementById("myClock").textContent = time; // doesn't work for IE
}

setInterval(showTime, 1000);

// Sound trigger for alarm - place in function of break times.
/* setTimeout(() => {
    document.getElementById('alarmSound').play();
  }, 0) */