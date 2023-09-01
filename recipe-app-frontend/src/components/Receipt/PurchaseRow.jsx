import React, { useState, useEffect } from 'react';
import InputField from "../shared/InputField";
import "../Recipe/Recipe.css";
import "../shared/style.css"

const PurchaseRow = (props) => {
  const {
    index,
    product,
    setProduct,
    purchaseList,
    setPurchaseList,
    ingredient,
  } = props;

  const [currentProduct, setCurrentProduct] = useState(
    purchaseList[index] || { purchase_amount: "", purchase_price: "" }
  );

  const [ priceError, setPriceError ] = useState(false);
  const [ amountError, setAmountError ] = useState(false);

  const handlePurchaseList = () => {
    purchaseList[index] = currentProduct;
    setPurchaseList([...purchaseList]);
  }

  const handlePrice = ({ target }) => {
    const price = target.value;
    setProduct({ ...product, purchase_price: price });
    setCurrentProduct(prevProduct => ({ ...prevProduct, purchase_price: price }));
  };

  const handleAmount = ({ target }) => {
    const amount = target.value;
    setProduct({ ...product, purchase_amount: amount });
    setCurrentProduct(prevProduct => ({ ...prevProduct, purchase_amount: amount }));
  };

  useEffect(() => {
    if(!currentProduct){
      setAmountError(true)
      setPriceError(true)
      return;
    }
    if(!currentProduct?.purchase_amount
      || currentProduct?.purchase_amount === ""
      || currentProduct?.purchase_amount  == 0) {
        setAmountError(true);
      } else {
        setAmountError(false);
      }
    if (!currentProduct?.purchase_price 
      || currentProduct?.purchase_price === "" 
      || currentProduct?.purchase_price == 0) {
        setPriceError(true)
      } else {
        setPriceError(false)
      }
  }, [currentProduct])

  return (
    <tr key={index}>
      <th scope="row">{ingredient.name}</th>
      <td>
        <div>
          <span>$ &nbsp;</span>
          <InputField
            color={priceError ? "red" : ""}
            inputType="number"
            step="0.1"
            index={index}
            handleInput={handlePrice}
            classes="amount-field"
            placeholderText="Price"
            onBlur={handlePurchaseList}
            value={currentProduct?.purchase_price}
          />
          <em>&nbsp;&nbsp; per</em>
        </div>
      </td>
      <td>
        <div>
          <InputField
            color={amountError ? "red" : ""}
            inputType="number"
            step="0.1"
            index={index}
            handleInput={handleAmount}
            classes="amount-field"
            placeholderText="Amount"
            onBlur={handlePurchaseList}
            value={currentProduct?.purchase_amount}
          />
          <em>&nbsp;&nbsp;&nbsp; oz</em>
        </div>
      </td>
    </tr>
  )
}

export default PurchaseRow;
