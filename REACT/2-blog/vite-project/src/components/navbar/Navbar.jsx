import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.header}>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul>
        <li>
          <Link to="/">Blogs list</Link>
        </li>
        <li>
          <Link to="/create-article">New Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
