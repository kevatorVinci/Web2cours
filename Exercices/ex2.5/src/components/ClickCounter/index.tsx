import React,{useState} from "react";


const ClickCouter =()=>{
    const [clickCount,setClickCount] = useState(0);
    const handleclick = ()=>{
        setClickCount(clickCount+1);
        console.log("Button clicked");
    }
    
    return (
        <div>
            <p>You have clicked {clickCount} times</p>
            <button onClick={handleclick}>Click Me</button>  


        </div>
    )
};
export default ClickCouter;