import React, { useState } from "react";
import AddIngredient from "./AddIngredient";
import IngredientList from "./IngredientList";
import Button from "../shared/Button";
import "./Recipe.css";
import "../shared/style.css"

const IngredientInfo = (props) => {
  const { ingredientList, setIngredientList, ingredient, setIngredient } = props;
  const [ showInputIngredient, setShowInputIngredient ] = useState(false);
  const [ nameError, setNameError ] = useState(false);
  const [ amountError, setAmountError ] = useState(false);

  const { name, amount } = ingredient;

  const handleShowInputIngredient = (flag) => {
    if (flag === "remove") {
      setShowInputIngredient(false);
      return;
    }
    setShowInputIngredient(true);
  }

  const handleIngredientList = () => {
    if (name !== "" 
        && amount 
        && amount !== "") {
      setIngredientList(oldArray => [...oldArray, {name: name, amount: amount} ])
      handleShowInputIngredient("remove");
    }
    else {
      !amount ?? "" ? setAmountError(true) : setAmountError(false);
      !name ?? "" ? setNameError(true) : setNameError(false);
    }
  }

  return (
    <div className="card card-size">
      <div className="card-body">
        {ingredientList.length > 0 && (
          <IngredientList 
            ingredientList={ingredientList} 
            setIngredientList={setIngredientList} 
          />
        )} 
        {showInputIngredient && (
          <AddIngredient 
            ingredient={ingredient} 
            setIngredient={setIngredient} 
            ingredientList={ingredientList} 
            handleShowInputIngredient={handleShowInputIngredient}
            nameError={nameError}
            setNameError={setNameError}
            setAmountError={setAmountError}
            amountError={amountError}
          />
        )}
      </div>
      {showInputIngredient ? (
        <div className="card-footer">
          <Button handleFunction={handleIngredientList} text="Done" />
        </div>
      ) : (
        <div className="card-footer">
          <Button handleFunction={handleShowInputIngredient} text="New Ingredient" />
        </div>
      )}
    </div>
  )
}

export default IngredientInfo;