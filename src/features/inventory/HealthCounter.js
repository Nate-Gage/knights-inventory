import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHealth, increment, decrement } from "./healthSlice";
import styles from "./Inventory.module.css";

export const HealthCounter = () => {
  const health = useSelector(selectHealth);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Health is currently at:</p>
      <p>{health}</p>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        +
      </button>
      {health < 1 && <p>Oh no, you have died!</p>}
    </div>
  );
};
