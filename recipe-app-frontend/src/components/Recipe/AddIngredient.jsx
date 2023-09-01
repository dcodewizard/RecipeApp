import React, { useEffect } from "react";
import InputField from "../shared/InputField";
import "./Recipe.css";
import "../shared/style.css"

const AddIngredient = (props) => {

  const { 
    ingredient, 
    setIngredient, 
    ingredientList, 
    handleShowInputIngredient,
    amountError,
    setAmountError,
    setNameError,
    nameError,
  } = props;

  const { name, amount } = ingredient;

  const handleIngredientName = ({ target }) => {
    const name = target.value;
    setIngredient({ ...ingredient, name: name});
  }

  const handleIngredientAmount = ({ target }) => {
    const amount = target.value;
    setIngredient({ ...ingredient, amount });
  }

  useEffect(() => {
    if (ingredient) {
      (!amount 
        || amount === "" 
        || amount == 0) 
      ? setAmountError(true) 
      : setAmountError(false);

      (name === "") 
      ? setNameError(true) 
      : setNameError(false);
    }
  }, [ingredient])

  return (
    <div className="input-row">
      <div className="flex-container input-field-col">
        <InputField 
          color={nameError ? "red" : ""}
          inputType="text"
          handleInput={handleIngredientName}
          classes="name-field"
          placeholderText="Name"
          value={name !== "" ? name : ""}
        />
        <div>
          <InputField 
            color={amountError ? "red" : ""}
            inputType="number"
            step="0.1"
            handleInput={handleIngredientAmount}
            classes="amount-field"
            placeholderText="Amount"
            value={(amount && amount !== "") ? amount : ""}
          />
          <em>{` oz`}</em>
        </div>
        {ingredientList.length > 0 && <i className="bi bi-x-circle-fill" onClick={() => handleShowInputIngredient("remove")}></i>}
      </div>
    </div>
  )
}

export default AddIngredient;