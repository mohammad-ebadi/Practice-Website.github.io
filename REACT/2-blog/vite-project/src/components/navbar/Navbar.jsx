import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.header}>
      <h3>Logo</h3>
      <ul>
        <li>Blogs list</li>
        <li>New Blog</li>
        <li>About</li>
      </ul>
    </div>
  );
}
