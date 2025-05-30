import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ArticlePage from "./pages/articlePage/articlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/article/:id" element={<ArticlePage></ArticlePage>}></Route>
        <Route path="/create-article" element={<CreateArticle></CreateArticle>}></Route>
      </Routes>
    </div>
  );
}
