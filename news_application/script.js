// c300c0a2777c47458b27d4880fbb95c8; API KEY

// query new by country
//https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

// query news by keyword
// https://newsapi.org/v2/everything?q=Apple&from=2022-12-14&sortBy=popularity&apiKey=API_KEY

const container = document.querySelector(".article-box");
// console.log(container);
const articleArr = [];

// const article = {
//   author: "",
//   title: "",
//   description: "",
//   url: "",
//   urlToImage: "",
//   publishedAt: "",
//   content: "",
// };

const news = async function () {
  let articleOBJ = {};

  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=c300c0a2777c47458b27d4880fbb95c8`
  );

  const data = await results.json();
  data.articles.map((el) => articleArr.push(el));
};

news();

const markup = `
    <article class="article-container">
      <span class="title">Title</span>
      <span class="img">url to image</span>
      <span class="author">author</span>
      <span class="description">description</span>
      <span class="publishDate">published at</span>
      <span class="content">content</span>
    </article>
`;

const addHTML = function () {
  container.insertAdjacentHTML("beforeend", markup);
};
