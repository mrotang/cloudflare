    // Mendapatkan URL saat ini
    var currentURL = window.location.href;

    // Mengecek apakah URL memiliki parameter ?br21r=3
    if (currentURL.indexOf('?br21r=3') > -1) {
      // Mengambil konten dari URL yang diberikan
      fetch('https://infokredit.tiger.web.id/2023/04/kredit-hp-xiaomi-poco-c40-3gb32gb.html')
        .then(response => response.text())
        .then(data => {
          // Menemukan tag <article> dalam konten yang diambil
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(data, 'text/html');
          var articleContent = htmlDoc.querySelector('article').innerHTML;

          // Mengganti konten di dalam tag <article> pada halaman saat ini
          document.getElementById('article-content').innerHTML = articleContent;
        });
    }
