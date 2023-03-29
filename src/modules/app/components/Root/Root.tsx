import { MantineProvider } from "@mantine/core";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "../../app.routes";

export const Root: FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
