import { createSlice } from "@reduxjs/toolkit";

import { fetchArtwork, fetchArtworks } from "./artworks.thunks";
import { ArtworksState } from "./artworks.types";

export const artworksSlice = createSlice({
  name: "artworks",
  initialState: {
    status: "idle",
    error: null,
    artworks: [],
    pagination: null,
    imageBaseUrl: null,
    artwork: null,
  } as ArtworksState,
  reducers: {
    clearDetail: (state) => {
      state.artwork = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artworks = state.artworks.concat(action.payload.data);
        state.pagination = action.payload.pagination;
        state.imageBaseUrl = action.payload.config.iiif_url;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchArtwork.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArtwork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artwork = action.payload.data;
        state.imageBaseUrl = action.payload.config.iiif_url;
      })
      .addCase(fetchArtwork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearDetail } = artworksSlice.actions;
