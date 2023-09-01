import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import IngredientInfo from "./IngredientInfo";
import PurchaseInfo from "../Receipt/PurchaseInfo";
import RecipeNameInput from "./RecipeNameInput";
import { addRecipe } from "../../actions/recipe/addRecipe";
import "./Recipe.css";

const Description = () => {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = useState("");
  const [tempName, setTempName] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [purchaseList, setPurchaseList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeNameError, setRecipeNameError] = useState(false);

  const [ingredient, setIngredient] = useState({
    name: "",
    amount: "",
  })

  const [product, setProduct] = useState({
    purchase_price: "",
    purchase_amount: "",
    index: ingredientList.length - 1,
  })

  const calculateTotalCost = () => {
    if (recipeList.length > 0 && recipeName !== "") {
      const isEmpty = !recipeList.every(obj => 
        obj.name !== ""
        && obj.amount !== "" 
        && obj.purchase_amount !== ""
        && obj.purchase_price !== ""
      );
      !isEmpty &&
      dispatch(addRecipe(
        recipeName,
        recipeList
      ));
    } else {
      setRecipeNameError(true);
    }
  }

  useEffect(() => {
    if (purchaseList.length > 0 && ingredientList.length > 0) {
      const mergedArray = ingredientList.map((obj, index) => {
        return { ...obj, ...purchaseList[index] };
      });
      setRecipeList(mergedArray);
    }
  }, [purchaseList, ingredientList])

  useEffect(() => {
    setIngredient({
      name: "",
      amount: "",
    })
    setProduct({
      purchase_price: "",
      purchase_amount: "",
    })
  }, [ingredientList])

  return (
    <div>
      <RecipeNameInput
        recipeName={recipeName}
        setRecipeName={setRecipeName}
        tempName={tempName}
        setTempName={setTempName}
        recipeNameError={recipeNameError}
        setRecipeNameError={setRecipeNameError}
      />
      <div className="flex-container recipe-flex-container">
        <div className="flex-item">
          <IngredientInfo
            ingredient={ingredient}
            setIngredient={setIngredient}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
        </div>
        <div className="flex-item">
          <PurchaseInfo
            setPurchaseList={setPurchaseList}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
            product={product}
            purchaseList={purchaseList}
            setProduct={setProduct}
            calculateTotalCost={calculateTotalCost}
          />
        </div>
      </div>
    </div>
  )
}

export default Description;
