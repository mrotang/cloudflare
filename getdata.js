var articleElement = document.getElementsByTagName('article')[0];

// Membuat objek XMLHttpRequest
var xhr = new XMLHttpRequest();

// URL yang ingin Anda ambil kontennya
var url = 'https://infokredit.tiger.web.id/2023/04/kredit-hp-xiaomi-poco-c40-3gb32gb.html';

// Mengirim permintaan GET ke URL
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Mengganti konten tag artikel dengan konten dari URL
    articleElement.innerHTML = xhr.responseText;
  }
};
xhr.send();
