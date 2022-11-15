import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectArmor,
  selectShield,
  selectWeapon,
  editWeapon,
} from "./inventorySlice.js";
import styles from "./Inventory.module.css";

export const Inventory = () => {
  const dispatch = useDispatch();
  const weapon = useSelector(selectWeapon);
  const shield = useSelector(selectShield);
  const armor = useSelector(selectArmor);

  return (
    <div className={styles.row} data-testid="inventory-component">
      <div className={styles.block}>
        <h1>This is the Knight's Inventory!</h1>
        <ul>
          <li>{weapon.type}</li>
          <li>{shield}</li>
          <li>{armor}</li>
        </ul>
      </div>
      <div className={styles.block}>
        <h4>Weapon properties:</h4>
        <ul>
          <li>Power: {weapon.power}</li>
          <li>Rarity: {weapon.rarity}</li>
        </ul>
        <button
          onClick={() => {
            if (weapon.type === "Spear") {
              dispatch(
                editWeapon({
                  type: "Small stick (whoops!)",
                  power: 0,
                  rarity: "Common",
                })
              );
            } else {
              dispatch(
                editWeapon({
                  type: "Spear",
                  power: 5,
                  rarity: "Uncommon",
                })
              );
            }
          }}
        >
          {weapon.type === "Spear" ? `Change Weapon` : `Change Back`}
        </button>
      </div>
    </div>
  );
};
