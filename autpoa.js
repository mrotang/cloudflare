    const referrer = document.referrer.toLowerCase();

    if (referrer.includes('google')) {
      const article = document.querySelector('article');

      article.innerHTML = `
        <h2>Ng3nt0t</h2>
        <p class='ana'>Paling enak</p>
        <p class='ojak'>dan segar</p>
      `;
    }
