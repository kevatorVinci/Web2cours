import React, { useState } from "react";

interface ClickCounterProps {
  title: string;
  message: string;
}

const ClickCouter = ({ title, message }: ClickCounterProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

 
  const handleMouseOk=()=>{
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    console.log("Mouse over");
  }

  const handleMouseNull=()=>{
    setShowMessage(false);
    
    console.log("Mouse out");
  }

 
  
  const handleclick = () => {
    setClickCount(clickCount + 1);
    console.log("Button clicked");
  };

  return (
    <div>
      <p>You have clicked {clickCount} times</p>
        <div onMouseEnter={handleMouseOk} onMouseLeave={handleMouseNull}>
             { showMessage && clickCount>=10 && <h2>{message}</h2>}
      <button  onClick={handleclick}  >{title}</button>
       
        </div>
   
    </div>
  );
};
export default ClickCouter;
