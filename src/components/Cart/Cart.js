import React, { useContext } from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const toRupiah = (angka) => {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return ribuan;
};
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = toRupiah(cartCtx.totalAmount);
  const addItemCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemCartHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItem = (
    <tbody>
      {cartCtx.items.map((item, i) => (
        <CartItem
          key={item.id}
          no={i + 1}
          name={item.name}
          formattedPrice={toRupiah(item.price)}
          formattedTotal={toRupiah(item.price * item.amount)}
          amount={item.amount}
          onAddItem={addItemCartHandler.bind(null, item)}
          onRemoveItem={removeItemCartHandler.bind(null, item.id)}
        />
      ))}
    </tbody>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.wrapper}>
        <table className={classes.table}>
          <colgroup className={classes.colgroup}>
            <col className={classes.no}></col>
            <col className={classes["nama-makanan"]}></col>
            <col className={classes.jumlah}></col>
            <col className={classes.harga}></col>
            <col className={classes.total}></col>
          </colgroup>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Makanan</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Total</th>
            </tr>
          </thead>
          {cartItem}
        </table>
        <div className={classes.footer}>
          <div>
            <div className={classes.total}>
              <p>Total Amount</p>
              <p>Rp. {toRupiah(cartCtx.totalAmount)}</p>
            </div>
            <div className={classes.actions}>
              <Button className="" onClick={props.onHideCart}>
                Close
              </Button>
              {cartCtx.items.length !== 0 && <Button>Order</Button>}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
