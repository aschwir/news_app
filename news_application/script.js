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

    const markup = `
    <article class="article-container">
      <span class="title">${el.title}</span>
      <span class="img"><img src="${el.urlToImage}" alt="image"></span>
      <span class="author">${el.author}</span>
      <span class="description">${el.description}</span>
      <span class="publishDate">${date}</span>
     
    </article>
    `;

    console.log(date);

    addHTML(markup);
  });
};

news();

const addHTML = function (markup) {
  container.insertAdjacentHTML("beforeend", markup);
};
