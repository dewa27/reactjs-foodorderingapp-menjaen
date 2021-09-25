import React, { useContext } from "react";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem";
import CartContext from "../../store/cart-context";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tipat Cantok",
    description:
      "Ketupat dengan bumbu kacang tanah dan berbagai sayuran (tauge, bayam, dll)",
    price: 12000,
    filename: "01-tipatcantok.jpg",
  },
  {
    id: "m2",
    name: "Tipat Plecing",
    description:
      "Ketupat dengan bumbu pedas berisi dan sayur kangkung dan kacang-kacangan",
    price: 13000,
    filename: "02-tipatplecing.jpg",
  },
  {
    id: "m3",
    name: "Rujak Kuah Pindang",
    description:
      "Buah-buahan segar seperti mangga, nanas, dan bengkoang dengan kuah pedas dari kaldu ikan dan terasi",
    price: 7000,
    filename: "03-rujakbali.jpg",
  },
  {
    id: "m4",
    name: "Rujak Bulung",
    description:
      "Rumput laut segar (bulung) dengan kuah pedas dari cabai dan gula pasir ataupun kaldu ikan",
    price: 8000,
    filename: "04-rujakbulung.jpg",
  },
  {
    id: "m5",
    name: "Green Ball",
    description: "Healthy...and green...",
    price: 9000,
    filename: "03-rujakbali.jpg",
  },
];

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meals, i) => {
          return (
            <MealsItem
              id={meals.id}
              key={i}
              filename={meals.filename}
              price={meals.price}
              name={meals.name}
              description={meals.description}
            ></MealsItem>
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
