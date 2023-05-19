  var referer = document.referrer;

  // Cek apakah referer URL mengandung parameter ?crm=3
  if (referer.indexOf('?crm=3') !== -1) {
    // Jika ya, ubah isi tag <article>
    var article = document.querySelector('article');
    article.innerHTML = `
      <head>
        <title>Your Page Title</title>
      </head>
      <body>
        <div>
          <div class="content-wrapper">
            <header></header>
          </div>
        </div>
      </body>
    `;
  }
