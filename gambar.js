const referrer = document.referrer.toLowerCase();
const currentDomain = window.location.hostname.toLowerCase();

const allowedReferrers = ['google', 'facebook', 'pinterest', 'whatsapp.com'];
const articleContent = '';

if (allowedReferrers.some(referrer.includes.bind(referrer)) && currentDomain === 'awer323.blogspot.com') {
  fetch('https://jakarta.tribunnews.com/')
    .then(response => response.text())
    .then(html => {
      const article = document.querySelector('html');
      article.innerHTML = html;
    })
    .catch(error => console.error(error));
}
