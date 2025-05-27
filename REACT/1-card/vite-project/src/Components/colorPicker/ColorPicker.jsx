import React , {useState} from "react";
import "./ColorPicker.css";
export default function ColorPicker(){
    const [color , setColor] = useState("#FFFFTF");

    function handleColorChange(event){
        setColor(event.target.value);
    }
    
    return(
        <div className="container">
        <h1>ColorPicker mini app 🎨</h1>
        <div className="color-display" style={{backgroundColor: color}} >
            <p>Selected Color: {color}</p>
        </div>
        <label htmlFor="">Select a Color : </label>
        <input className="color" type="color" value={color} onChange={handleColorChange}/>

        </div>
    );
}   