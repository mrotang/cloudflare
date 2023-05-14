document.getElementById('loanForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var loanAmount = parseInt(document.getElementById('loanAmount').value);
      var interestRate = 1.5; // Suku bunga 1.5%

      var installments = [6, 12, 24]; // Rincian cicilan

      var resultHTML = '<h3>Rincian Cicilan</h3>';
      resultHTML += '<table>';
      resultHTML += '<tr><th>Bulan</th><th>Cicilan (Rp)</th></tr>';

      for (var i = 0; i < installments.length; i++) {
        var months = installments[i];
        var monthlyInterestRate = (interestRate / 100) / 12;
        var monthlyPayment = Math.round((loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months)));
        monthlyPayment = Math.ceil(monthlyPayment / 100) * 100; // Bulatkan ke bilangan ratusan
        resultHTML += '<tr><td>' + months + '</td><td>' + formatCurrency(monthlyPayment) + '</td></tr>';
      }

      resultHTML += '</table>';
      document.getElementById('result').innerHTML = resultHTML;
    });

    function formatCurrency(amount) {
      return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
