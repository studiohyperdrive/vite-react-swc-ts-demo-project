import { RouteObject } from "react-router-dom";

import { ArtView } from "./views";

export const ART_ROUTES: RouteObject[] = [
  {
    path: "/art",
    element: <ArtView />,
  },
];
