import React from "react";
import "../Recipe/Recipe.css";
import "../shared/style.css"

const InputField = (props) => {
  const { 
    value = "", 
    color, 
    inputType, 
    step = "", 
    handleInput, 
    classes, 
    placeholderText, 
    onBlur = null,
  } = props;

  return (
    <input 
      style={{ borderColor: color }} 
      type={inputType} 
      step={step}
      onChange={handleInput} 
      className={classes} 
      placeholder={placeholderText}
      value={value}
      onBlur={onBlur}
    />
  )
}

export default InputField;