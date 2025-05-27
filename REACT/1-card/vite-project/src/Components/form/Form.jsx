import React , {useState} from "react";
function Form(){
    const [name , setName] = useState("");
    const [quantity , setQuantity] = useState(1);

    function handleNameChange(event){
        setName(event.target.value);
    }

     function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    return(
        <>
            <h1>Using Hook "useState" & Events</h1>
            <input type="text" placeholder="Enter your name" onChange={handleNameChange}/>
            <p>Your Name Is : {name}</p>

            <input type="number" placeholder="Enter Quantity" onChange={handleQuantityChange}/>
            <p>Quantity Is : {quantity}</p>
            
        </>
    );
}

export default Form