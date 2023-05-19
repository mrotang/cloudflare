  window.addEventListener('DOMContentLoaded', function() {
    var referer = document.referrer;
    if (referer.includes('?crm=3')) {
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
  });
