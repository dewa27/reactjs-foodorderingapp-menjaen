import React from "react";
import Button from "./Button";
import classes from "./StepperInput.module.css";
const StepperInput = React.forwardRef((props, ref) => {
  const incButtonHandler = (e) => {
    e.preventDefault();
    ref.current.value++;
    props.onInc();
  };
  const decButtonHandler = (e) => {
    e.preventDefault();
    if (ref.current.value > 1) {
      ref.current.value--;
    }
    if (props.onDec) {
      props.onDec();
    }
  };
  return (
    <div className={classes.wrapper}>
      <Button className={classes.btn} onClick={incButtonHandler}>
        +
      </Button>
      <input
        min="0"
        type="number"
        defaultValue={props.value ? props.value : 1}
        ref={ref}
      ></input>
      <Button className={classes.btn} onClick={decButtonHandler}>
        -
      </Button>
    </div>
  );
});

export default StepperInput;
