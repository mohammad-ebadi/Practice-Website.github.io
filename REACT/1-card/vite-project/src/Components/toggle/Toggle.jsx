import { useState } from "react";
import "./Toggle.css"
export default function Toggle(){
    const [show , setShow] = useState(true);

    const toggle = () =>{
        setShow(!show)
    }

    return(
        <div className="container">
            <h1>Hide / Show  with useState</h1>
            <button onClick={toggle}>Hide / Show</button>
            {show && <img src="https://picsum.photos/200" alt="picture" className="toggle" />}
        </div>
    );
}