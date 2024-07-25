import React from "react";
import Topic from "../components/TopicSection";
import ShowMoreButton from "../components/ShowMoreButton";
import CardNews from "../components/CardNews";
import NewsImage1 from "../images/home-page/photo-of-news-1.png";
import NewsImage2 from "../images/home-page/photo-of-news-2.png";
import NewsImage3 from "../images/home-page/photo-of-news-3.png";
import NewsImage4 from "../images/home-page/photo-of-news-4.png";
import NewsImage5 from "../images/home-page/photo-of-news-5.png";
import NewsImage6 from "../images/home-page/photo-of-news-6.png";

function News() {
  return (
    <section>
      <Topic title={"Новини"} />
      <div className="home-page-news-container">
        <div className="news-boxes">
          <CardNews
            className="news-box"
            newsImage={NewsImage1}
            content={"День студента"}
          />
          <CardNews
            className="news-box"
            newsImage={NewsImage2}
            content={"Оновлення студмістечка"}
          />
          <CardNews
            className="news-box"
            newsImage={NewsImage3}
            content={"Вебінари"}
          />
          <CardNews
            className="news-box"
            newsImage={NewsImage4}
            content={"Акція МУА"}
          />
          <CardNews
            className="news-box"
            newsImage={NewsImage5}
            content={"Випуск - 2024"}
          />
          <CardNews
            className="news-box"
            newsImage={NewsImage6}
            content={"Профком"}
          />
        </div>
      </div>
      <div className="container-news">
        <ShowMoreButton showMore={"Показати більше"} />
      </div>
    </section>
  );
}
export default News;
