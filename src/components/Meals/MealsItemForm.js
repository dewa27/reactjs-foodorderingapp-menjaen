import React, { useRef, useState } from "react";
import Button from "../../UI/Button";
import StepperInput from "../../UI/StepperInput";
import classes from "./MealsItemForm.module.css";
const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form}>
      <StepperInput ref={amountInputRef} onInc={() => {}} onDec={() => {}} />
      {/* <input
        ref={amountInputRef}
        id="amount"
        min="1"
        defaultValue="1"
        type="number"
      /> */}
      <Button onClick={submitHandler}>Add to Cart</Button>
      {!amountIsValid && <p>Form tidak bisa diisi</p>}
    </form>
  );
};

export default MealsItemForm;
