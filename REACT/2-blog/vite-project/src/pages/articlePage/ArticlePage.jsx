import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import style from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticlePage() {
  const [article, setArticle] = useState({});
  // Using Hook "useParams" in order to recive the dynamic ID
  const params = useParams();
  // http://localhost:8000/articles
  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        console.log(result);
        setArticle(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className={style.articlePage}>
        <h1>{article.title}</h1>
        <div className={style.articleInfo}>
          <span>Date : {article.date}</span>
          <span>Author : {article.author}</span>
          <span>Reading Time : {article.readingTime}</span>
        </div>
        <img src="https://picsum.photos/200" alt="random-picture" />
        <p>{article.content}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}
