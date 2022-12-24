const container = document.querySelector(".article-box");
const searchBtn = document.querySelector(".searchBtn");
const inputField = document.querySelector("#search_keyword");

let searchTerm;

// const currentDate = new Date();
// const startDate = new Date(currentDate.setDate(currentDate.getDate() - 5));
// console.log(new Date(startDate.toISOString()));

//API KEY
const newsAPIKey = "c300c0a2777c47458b27d4880fbb95c8";
const newsAPIURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`;
const keywordSearchURL = `https://newsapi.org/v2/everything?q=&apiKey=${newsAPIKey}`;

const news = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  const articles = data.articles;

  articles.forEach((el) => {
    if (!el.urlToImage) el.urlToImage = "defaultNew.png";
    if (!el.author) return;
    let date = new Date(el.publishedAt).toLocaleString();

    const markup = `
    <article class="article-container">
    <div class="title-div">
      <h1 class="title">${el.title}</h1>
      </div>
      <span class="img"><a href="${el.url}" target="_blank"><img src="
      ${el.urlToImage}" alt="image"></a></span>
      <span class="description">${el.description}</span>
      <div class="article-footer"
      <span class="author"> Author: ${el.author}</span>
      <span class="publishDate">Published: ${date}</span>
      </div>
    </article>
    `;

    addHTML(markup);
  });
};

news(newsAPIURL);

const addHTML = function (markup) {
  container.insertAdjacentHTML("beforeend", markup);
};

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let url = keywordSearchURL.replace("q=", `q=${inputField.value}`);
  container.innerHTML = " ";
  news(url);
});
