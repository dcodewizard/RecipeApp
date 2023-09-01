import React from "react";
import { useSelector } from "react-redux";
import AddPricePerOunce from "./AddPricePerOunce";
import CalculateBill from "./CalculateBill";
import "../Recipe/Recipe.css";

const PurchaseInfo = (props) => {

  const { cost } = useSelector((state) => state.recipesReducer);

  const { 
    product, 
    setProduct, 
    ingredientList, 
    setIngredientList, 
    setPurchaseList,
    calculateTotalCost,
    purchaseList
   } = props;

  return (
    <div className="card card-size border-0">
      <div className="card-body">
        <AddPricePerOunce 
          ingredientList={ingredientList} 
          setIngredientList={setIngredientList} 
          product={product}
          setProduct={setProduct}
          purchaseList={purchaseList}
          setPurchaseList={setPurchaseList}
        />
      </div>
      <div className="card-footer">
        <CalculateBill 
          calculateTotalCost={calculateTotalCost} 
          cost={cost} 
        />
      </div>
    </div>
  )
}

export default PurchaseInfo;