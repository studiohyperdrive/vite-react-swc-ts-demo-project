import { createBrowserRouter } from "react-router-dom";

import { ART_ROUTES } from "~/art/art.routes";

import { APP_PATHS } from "./app.const";
import { App } from "./components/App/App";
import { Home } from "./views";

export const router = createBrowserRouter([
  {
    path: APP_PATHS.root,
    element: <App />,
    children: [
      {
        path: APP_PATHS.root,
        element: <Home />,
      },
      ...ART_ROUTES,
    ],
  },
]);
