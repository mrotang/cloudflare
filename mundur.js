var countdownButton = document.getElementById('countdown-button');

  var countdown = 10;
  var countdownInterval = setInterval(function() {
    countdown--;
    countdownButton.textContent = 'Hitung Mundur ' + countdown;

    if (countdown === 0) {
      countdownButton.removeAttribute('disabled');
      countdownButton.textContent = 'Klik Sekarang!';
      clearInterval(countdownInterval);
    }
  }, 1000);
