import React from "react";
import "./Recipe.css";
import "../shared/style.css"

const IngredientList = (props) => {

  const {ingredientList, setIngredientList } = props;

  const removeIngredient = (name) => {
    const filteredIngredients = ingredientList.filter((ingredient) => ingredient.name !== name);
    setIngredientList(filteredIngredients);
  }

  return (
    <>
      <div className="card-subtitle amount-heading">Amount</div>
      {ingredientList?.map((ingredient, index) => {
        return (
          <div key={index}>
            <div className="flex-container input-field-col">
              <div className="name-field name-position">{ingredient.name}</div>
              <div>
                <div className="amount-field">{`${ingredient.amount} oz`}</div>
              </div>
              <i className="bi bi-x-circle-fill remove-icon" onClick={() => removeIngredient(ingredient.name)}></i>
            </div>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default IngredientList;