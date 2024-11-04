import React, { useState } from "react";

interface ClickCounterProps {
  title: string;
  message: string;
}

const ClickCouter = ({ title, message }: ClickCounterProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseOk = () => {
    setShowMessage(true);

    console.log("Mouse over");
  };

  const handleMouseNull = () => {
    setShowMessage(false);

    console.log("Mouse out");
  };

  const handleButtonOk = () => {
    setIsButtonHovered(true);

    console.log("Mouse over");
  };

  const handleButtonNull = () => {
    setIsButtonHovered(false);

    console.log("Mouse out");
  };

  const handleclick = () => {
    setClickCount(clickCount + 1);
    console.log("Button clicked");
  };

  return (
    <div>
      <div onMouseEnter={handleMouseOk} onMouseLeave={handleMouseNull}>
        {showMessage && clickCount >= 10 && <h2>{message}</h2>}
        <button
          onClick={handleclick}
          onMouseEnter={handleButtonOk}
          onMouseLeave={handleButtonNull}
        >
          {" "}
          <p>You have clicked {clickCount} times</p>{" "}
         
        </button> {isButtonHovered && <p>{title}</p>}
      </div>
    </div>
  );
};
export default ClickCouter;
