import { RouteObject } from "react-router-dom";

import { ART_PATHS } from "./art.const";
import { ArtworksView } from "./views";
import { ArtworkDetail } from "./views/ArtworkDetail";

export const ART_ROUTES: RouteObject[] = [
  {
    path: ART_PATHS.overview,
    element: <ArtworksView />,
  },
  {
    path: ART_PATHS.detail,
    element: <ArtworkDetail />,
  },
];
