function formatRupiah(angka) {
      let rupiah = '';
      let angkarev = angka.toString().split('').reverse().join('');
      for (let i = 0; i < angkarev.length; i++) {
        if (i % 3 === 0) {
          rupiah += angkarev.substr(i, 3) + '.';
        }
      }
      return 'Rp ' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    function hitungCicilan() {
      const uangPinjaman = parseInt(document.getElementById('uangPinjaman').value);
      const bunga = 0.005;

      const rincianCicilan = {
        '6 Bulan': Math.round(uangPinjaman / 6 / 100) * 100,
        '12 Bulan': Math.round(uangPinjaman / 12 / 100) * 100,
        '24 Bulan': Math.round(uangPinjaman / 24 / 100) * 100
      };

      let tableHtml = '<table>';
      tableHtml += '<tr><th>Jangka Waktu</th><th>Cicilan per Bulan</th></tr>';
      for (const jangkaWaktu in rincianCicilan) {
        tableHtml += '<tr><td>' + jangkaWaktu + '</td><td>' + formatRupiah(rincianCicilan[jangkaWaktu]) + '</td></tr>';
      }
      tableHtml += '</table>';

      document.getElementById('cicilanTable').innerHTML = tableHtml;
      document.getElementById('totalPinjaman').innerText = 'Jumlah Pinjaman: ' + formatRupiah(uangPinjaman);
    }
