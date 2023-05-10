import { createAsyncThunk } from "@reduxjs/toolkit";

import { ArtworksService } from "./artworks.service";

export const fetchArtworks = createAsyncThunk(
  "artworks/fetchArtworks",
  ({ page, limit }: { page?: number; limit?: number } = {}) => {
    return ArtworksService.fetchArtworks(page, limit);
  }
);

export const fetchArtwork = createAsyncThunk(
  "artworks/fetchArtwork",
  ({ id }: { id: string | number }) => {
    return ArtworksService.fetchArtwork(id);
  }
);
