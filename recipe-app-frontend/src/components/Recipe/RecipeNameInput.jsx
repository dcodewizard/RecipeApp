import React, { useEffect, useState } from "react";
import InputField from "../shared/InputField";
import "./Recipe.css";

const RecipeNameInput = (props) => {
  const { setRecipeName, recipeName, recipeNameError, tempName, setTempName, setRecipeNameError } = props;
  const [ iconToggle, setIconToggle ] = useState(false);

  const handleIcon = () => {
    if (tempName !== "") {
      setIconToggle(!iconToggle);
      setRecipeName(tempName);
      setRecipeNameError(false);
    }
    else setRecipeNameError(true);
  }

  useEffect(() => {
    if (recipeName !== "") 
      setRecipeNameError(false)
    else setRecipeNameError(true);
  }, [recipeName])

  const handleRecipeName = ( {target} ) => {
    const name = target.value;
    setTempName(name);
  }

  return (
    <div>     
      { iconToggle ?
        <div className="flex-container">
          <p className="recipe-input">{tempName}</p>
          <i className="bi bi-pencil-fill icon" onClick={handleIcon}></i>
        </div>
       :
       <div className="flex-container top-heading">
        <InputField 
          color={recipeNameError ? "red" : ""}
          inputType="text"
          handleInput={handleRecipeName}
          classes="recipe-input"
          placeholderText="Recipe Name"
          value={tempName !== "" ? tempName : ""}
        />
        <i className="bi bi-check2-all icon" onClick={handleIcon}></i> 
       </div>
      }
    </div>
  )
}

export default RecipeNameInput;