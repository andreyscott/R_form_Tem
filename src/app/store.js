import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import templatesReducer from "../services/templatesSlice"

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
  },
});

  setupListeners(store.dispatch)