import { Burger, Container, Group, Header as MHeader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import { APP_PATHS } from "~/app/app.const";

import { useStyles } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export const Header: FC<HeaderProps> = ({ links }) => {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(location.pathname);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.path}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.path,
      })}
      onClick={() => {
        setActive(link.path);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MHeader height={60} mb={120}>
      <Container className={classes.header}>
        <a
          href={APP_PATHS.root}
          className={cx(classes.link)}
          onClick={() => {
            setActive(APP_PATHS.root);
          }}
        >
          Studio Hyperdrive
        </a>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </MHeader>
  );
};
