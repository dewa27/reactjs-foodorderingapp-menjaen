import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../../UI/Card";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
const toRupiah = (angka) => {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return ribuan;
};
const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Card className={classes["meals-wrapper"]}>
      <div className={classes["meals-img"]}>
        <img
          src={require(`../../assets/${props.filename}`).default}
          alt={props.name}
        ></img>
      </div>
      <div className={classes["meals-body"]}>
        <div className={classes["meals-content"]}>
          <h2>{props.name}</h2>
          <p className={classes["meals-price"]}>
            Rp.{`${toRupiah(props.price)}`}
          </p>
          <p>{props.description}</p>
        </div>
        <div className={classes["meals-actions"]}>
          <MealsItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </Card>
  );
};

export default MealsItem;
