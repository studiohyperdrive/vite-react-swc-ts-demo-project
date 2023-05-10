import { AppState } from "~/app/store";

export const selectArtworksData = (state: AppState) => state.artworks;
