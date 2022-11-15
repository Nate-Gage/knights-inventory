import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHealth } from "./healthAPI";

export const initialState = {
  weapon: {
    type: "Spear",
    rarity: "Uncommon",
    power: 5,
  },
  shield: "Large shield",
  armor: "Chainmail",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "inventory/fetchHealth",
  async (amount) => {
    const response = await fetchHealth(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    editWeapon: (state, action) => {
      state.weapon = action.payload;
    },
    editShield: (state, action) => {
      state.shield = action.payload;
    },
    editArmor: (state, action) => {
      state.armor = action.payload;
    },
  },
});

export const { editWeapon, editShield, editArmor } = inventorySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.inventory.value)`
export const selectArmor = (state) => state.inventory.armor;
export const selectShield = (state) => state.inventory.shield;
export const selectWeapon = (state) => state.inventory.weapon;

export default inventorySlice.reducer;
