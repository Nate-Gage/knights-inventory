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
        <li>{weapon}</li>
        <li>{shield}</li>
        <li>{armor}</li>
      </ul>
      <button onClick={() => dispatch(editWeapon("Small stick (whoops!)"))}>
        Click to change the weapon!{" "}
      </button>
    </div>
  );
};
