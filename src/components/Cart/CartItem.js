import React, { useContext, useRef } from "react";
import StepperInput from "../../UI/StepperInput";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const amountInputRef = useRef();
  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.name}</td>
      <td className={classes.quantity}>
        <StepperInput
          ref={amountInputRef}
          onInc={props.onAddItem}
          onDec={props.onRemoveItem}
          value={props.amount}
        ></StepperInput>
        {/* <input type="number" defaultValue={props.amount} /> */}
      </td>
      <td>Rp. {props.formattedPrice}</td>
      <td>Rp. {props.formattedTotal}</td>
    </tr>
  );
};

export default CartItem;
