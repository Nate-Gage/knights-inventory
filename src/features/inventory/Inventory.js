import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectArmor,
  selectShield,
  selectWeapon,
  editWeapon,
} from "./inventorySlice.js";

export const Inventory = () => {
  const dispatch = useDispatch();
  const weapon = useSelector(selectWeapon);
  const shield = useSelector(selectShield);
  const armor = useSelector(selectArmor);

  return (
    <div>
      This is the Knight's Inventory! It consists of:
      <ul>
        <li>{weapon.type}</li>
        <li>{shield}</li>
        <li>{armor}</li>
      </ul>
      <p>Weapon properties:</p>
      <ul>
        <li>Power: {weapon.power}</li>
        <li>Rarity: {weapon.rarity}</li>
      </ul>
      <button
        onClick={() =>
          dispatch(
            editWeapon({
              type: "Small stick (whoops!)",
              power: 0,
              rarity: "Common",
            })
          )
        }
      >
        Click to change the weapon!{" "}
      </button>
    </div>
  );
};
