import { MantineProvider } from "@mantine/core";
import { FC } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { appStore } from "~/app/store";

import { router } from "../../app.routes";

export const Root: FC = () => {
  return (
    <Provider store={appStore}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  );
};
