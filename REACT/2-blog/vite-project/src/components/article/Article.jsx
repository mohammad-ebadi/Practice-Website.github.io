import style from "./Article.module.css"
export default function Article(props){
    console.log(props.article)
    return(
        <div className={style.articleWrapper}>
            <img src="https://picsum.photos/200" alt="random-picture" />
            <h3>{props.article.title}</h3>
            <p>Reading time is : {props.article.readingTime} min</p>
        </div>
    );
}