var timerEl = document.getElementById('countdown')





function countdown() {
    var timeLeft = 90;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '0 seconds remaining';

        clearInterval(timeInterval)
        gameover()
        }
        
    }, 1000);
  }

  countdown()