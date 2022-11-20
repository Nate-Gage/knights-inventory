import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./healthSlice";
import { selectHealth } from "../inventory/selectors/healthSelectors";
import styles from "./Inventory.module.css";

export const HealthCounter = () => {
  const health = useSelector(selectHealth);
  const dispatch = useDispatch();

  return (
    <div className={styles.row} data-testid="healthcounter-component">
      <h2>Health is currently at:</h2>
      <p data-testid="health">{health}</p>
      <button data-testid="increment-button" className={styles.button} onClick={() => dispatch(decrement())}>
        -
      </button>
      <button data-testid="decrement-button" className={styles.button} onClick={() => dispatch(increment())}>
        +
      </button>
      {health < 1 && <p>Oh no, you have died!</p>}
    </div>
  );
};
