// c300c0a2777c47458b27d4880fbb95c8; API KEY

// query new by country
//https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

// query news by keyword
// https://newsapi.org/v2/everything?q=Apple&from=2022-12-14&sortBy=popularity&apiKey=API_KEY

const container = document.querySelector(".article-box");

const news = async function () {
  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=c300c0a2777c47458b27d4880fbb95c8`
  );
  const data = await results.json();
  const articleArr = data.articles;
  articleArr.forEach((el) => {
    if (!el.author || el.author.startsWith("http")) return;

    let date = new Date(el.publishedAt).toLocaleString();

    for (let i = 198; i < el.description.length; i++) {
      if (el.description[i] === " ") {
        return el.description.slice(0, i) + "...";
      }
    }

    const markup = `
    <article class="article-container">
      <h1 class="title">${el.title}</h1>
      <span class="img"><a href="${el.url}"><img src="${el.urlToImage}" alt="image"></a></span> 
      <span class="description">${el.description}</span>
      <span class="author"> Author: ${el.author}</span>
      <span class="publishDate">Published: ${date}</span>
     
    </article>
    `;

    addHTML(markup);
  });
};

news();

const addHTML = function (markup) {
  container.insertAdjacentHTML("beforeend", markup);
};
