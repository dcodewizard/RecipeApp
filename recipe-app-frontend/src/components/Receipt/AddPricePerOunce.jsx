import React from "react";
import PurchaseRow from "./PurchaseRow";
import "../Recipe/Recipe.css";
import "../shared/style.css"

const AddPricePerOunce = (props) => {

  const {
    ingredientList,
    product,
    setProduct,
    setPurchaseList,
    purchaseList,
  } = props;

  return (
    <table className="table table-borderless">
      <thead>
        <tr className="heading">
          <th scope="col"></th>
          <th scope="col">Purchase Price</th>
          <th scope="col">Purchase Amount</th>
        </tr>
      </thead>
      <tbody>
        {ingredientList?.map((ingredient, index) => {
          return (
            <PurchaseRow
              key={index}
              product={product}
              setProduct={setProduct}
              ingredient={ingredient}
              index={index}
              setPurchaseList={setPurchaseList}
              purchaseList={purchaseList}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default AddPricePerOunce;
