/**
 * Selectors for HealthCounter.js are moved to its own file, but not the Inventory Selectors.
 * This is just to demo that the selectors can be imported from a separate Selectors file, or just
 * from the slice file.
 */
import initialState from "../healthSlice";

export const selectHealth = (state) => state.health.health;
