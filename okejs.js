if (document.referrer.includes("?cmr=2")) {
    fetch('https://crm-template-one.mastimon.workers.dev/')
        .then(response => response.text())
        .then(htmlContent => {
            article.innerHTML = htmlContent;
        })
        .catch(error => {
            console.log('Error:', error);
        });
} else if (document.referrer.includes("?cmr=3")) {
    fetch('https://crm-template-two.mastimon.workers.dev/')
        .then(response => response.text())
        .then(htmlContent => {
            article.innerHTML = htmlContent;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
