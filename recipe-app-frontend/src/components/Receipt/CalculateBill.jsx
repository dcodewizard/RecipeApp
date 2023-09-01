import React from "react";
import Button from "../shared/Button";
import "./Receipt.css";
import "../shared/style.css"

const CalculateBill = (props) => {
  const { calculateTotalCost, cost } = props;
  
  return (
    <div className="flex-container input-field-col">
      <div className="total-cost">
        Recipe Cost
        <div>{` $ ${cost ? cost : 0} `}</div>
      </div>
      <Button handleFunction={calculateTotalCost} text="Calculate" />
    </div>
  )
}

export default CalculateBill;