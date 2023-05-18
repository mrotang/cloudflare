// Cek apakah ada riwayat halaman sebelumnya
if (window.history && window.history.pushState) {
  window.addEventListener('popstate', function() {
    // Redirect ke Google.com
    window.location.href = 'https://www.google.com';
  });
}
