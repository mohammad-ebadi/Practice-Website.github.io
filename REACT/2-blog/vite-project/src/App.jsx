import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ArticlePage from "./pages/articlePage/articlePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/article/:id" element={<ArticlePage></ArticlePage>}></Route>
      </Routes>
    </div>
  );
}
