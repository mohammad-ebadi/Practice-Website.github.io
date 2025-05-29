import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import style from "./Home.module.css";

export default function Home() {
  let articles = [
    {
      id: 1,
      imageUrl: "",
      title: "React Test 1",
      readingTime: 5,
    },
    {
      id: 2,
      imageUrl: "",
      title: "React Test 2",
      readingTime: 10,
    },
    {
      id: 3,
      imageUrl: "",
      title: "React Test 3",
      readingTime: 15,
    },
    
  ];
  return (
    <div className={style.homeWrapper}>
      <Navbar></Navbar>
      <div className="container">
        <h1>Blogs</h1>
        <div className={style.articles}>
          {
            articles.map((article) => (
            <Article article={article} key={article.id}></Article>
            ))
          }
          
        </div>
      </div>
    </div>
  );
}
