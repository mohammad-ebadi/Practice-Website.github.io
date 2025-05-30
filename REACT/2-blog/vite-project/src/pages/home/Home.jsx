import { Link } from "react-router-dom";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [articles , setArticles] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8000/articles").then(result =>{
      setArticles(result.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  }, []);
  return (
    <div className={style.homeWrapper}>
      <Navbar></Navbar>
      <div className="container">
        <h1>Blogs</h1>
        <div className={style.articles}>
          {articles.map((article) => (
            <Link to={`/article/${article.id}`}>
              <Article article={article} key={article.id}></Article>
            </Link>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
