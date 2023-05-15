// Mendapatkan URL saat ini
var currentUrl = window.location.href;

// Membuat objek URL dari URL saat ini
var parsedUrl = new URL(currentUrl);

// Mendapatkan parameter URLSearchParams dari objek URL
var params = parsedUrl.searchParams;

// Menghapus semua parameter
params.delete('');

// Menghasilkan URL baru tanpa parameter
var newUrl = parsedUrl.origin + parsedUrl.pathname;

console.log(newUrl);
