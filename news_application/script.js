// c300c0a2777c47458b27d4880fbb95c8; API KEY

// query new by country
//https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

// query news by keyword
// https://newsapi.org/v2/everything?q=Apple&from=2022-12-14&sortBy=popularity&apiKey=API_KEY
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

response4 = news();

console.log(articleArr);
