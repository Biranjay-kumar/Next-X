"use client";

import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(5);
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);
  return (
    <div className="text-gray-800 bg-slate-100 space-y-3 rounded-xl pt-2">
      <h1 className="font-bold text-xl px-4">Whats Happining</h1>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div className="hover:bg-slate-200">
              <div>
                <h6>{article.title}</h6>
                <p>{article.source.name}</p>
              </div>
              <img src={article.urlToImage} width={70} height={20}></img>
            </div>
          </a>
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px
	  -4 rounded px-2 w-full"
        onClick={() => setArticleNum(articleNum + 5)}
      >Load more</button>
    </div>
  );
}

export default News;
