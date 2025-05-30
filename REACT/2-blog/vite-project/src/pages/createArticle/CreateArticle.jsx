import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import style from "./CreateArticle.module.css";

export default function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
  });

  const hanldleChangeArticle = (event) => {
    setArticle((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(article);
  return (
    <div>
      <Navbar></Navbar>
      <div className={style.container}>
        <h1>Create your blog 📑</h1>

        <div className={style.inputWrapper}>
          <label htmlFor="">Title</label>
          <input name="title" type="text" onChange={hanldleChangeArticle} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="">Date</label>
          <input name="date" type="Date" onChange={hanldleChangeArticle} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="">Author</label>
          <input name="author" type="text" onChange={hanldleChangeArticle} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="">Reading Time</label>
          <input name="readingTime" type="number" onChange={hanldleChangeArticle}/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
