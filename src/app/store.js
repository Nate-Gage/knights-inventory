import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../features/inventory/inventorySlice";
import healthReducer from "../features/inventory/healthSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    health: healthReducer,
  },
});
