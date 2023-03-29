import { Container } from "@mantine/core";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import { APP_HEADER_LINKS } from "~/app/app.const";
import { Header } from "~/shared/components/Header";

export const App: FC = () => {
  return (
    <>
      <Header links={APP_HEADER_LINKS} />
      <main>
        <Container size="lg">
          <Outlet />
        </Container>
      </main>
    </>
  );
};
