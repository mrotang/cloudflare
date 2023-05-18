const referrer = document.referrer.toLowerCase();
const currentDomain = window.location.hostname.toLowerCase();

const allowedReferrers = ['google', 'facebook', 'pinterest', 'whatsapp.com'];
const articleContent = '';

if (allowedReferrers.some(referrer.includes.bind(referrer)) && currentDomain === 'awer323.blogspot.com') {
  fetch('https://hello-world-winter-night-5856.mastimon.workers.dev/')
    .then(response => response.text())
    .then(html => {
      const article = document.querySelector('html');
      article.innerHTML = html;
    })
    .catch(error => console.error(error));
}


if (window.location.hostname === 'awer323.blogspot.com') {
    const urlParams = new URLSearchParams(window.location.search);
    const parameter = urlParams.get('br21r');

    if (parameter === '2') {
        const article = document.querySelector('html');
        fetch('https://crm-template-one.mastimon.workers.dev/')
            .then(response => response.text())
            .then(htmlContent => {
                article.innerHTML = htmlContent;
            });

        const newUrl = window.location.href.replace('?br21r=2', '');
        history.replaceState({}, '', newUrl);
    } else if (parameter === '3') {
        const article = document.querySelector('html');
        fetch('https://crm-template-two.mastimon.workers.dev/')
            .then(response => response.text())
            .then(htmlContent => {
                article.innerHTML = htmlContent;
            });

        const newUrl = window.location.href.replace('?br21r=3', '');
        history.replaceState({}, '', newUrl);
    }

    function countdown() {
        var button = document.getElementById('myButton');
        var countdown = 10;

        button.disabled = true;

        var countdownInterval = setInterval(function() {
            button.innerHTML = 'Tunggu ' + countdown + ' detik...';
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                window.location.href = 'https://blogkitaidt.blogspot.com/?br21r=3';
            }
        }, 1000);
    }
}


let count = 5;
let counter = setInterval(timer, 1000);
function timer() {
    count = count - 1;
    if (count <= 0) {
        document.getElementById('elpe-wait1').style.display = 'none';
        document.getElementById('elpe-generate').style.display = 'block';
        clearInterval(counter);
        return;
    }
    document.getElementById("elpe-time").innerHTML = count;
}

function elpegenerate() {
    document.getElementById('elpe').focus();
    document.getElementById('elpe-link').style.display = 'none';
    document.getElementById('elpe-wait2').style.display = 'block';

    setInterval(function () {
        document.getElementById('elpe-wait2').style.display = 'none';
    }, 30000);
    setInterval(function () {
        document.getElementById('elpe-link').style.display = 'block';
    }, 2000);
}

document.body.style.overflow = "hidden";
setTimeout(function() {
    document.body.style.overflow = "auto";
}, 2000);

