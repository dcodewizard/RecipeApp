import React from "react";
import "../shared/style.css"

const Button = (props) => {
  const { handleFunction, text } = props;
  
  return (
    <button 
      type="button" 
      className="btn btn-outline-success add-button"
      onClick={handleFunction}
    >
      {text}
    </button>
  )
}

export default Button;