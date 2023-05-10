import { configureStore } from "@reduxjs/toolkit";

import { artworksSlice } from "~/art/store";

export const appStore = configureStore({
  reducer: {
    artworks: artworksSlice.reducer,
  },
});
