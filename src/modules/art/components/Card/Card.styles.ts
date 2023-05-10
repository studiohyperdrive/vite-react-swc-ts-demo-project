import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "100%",
    cursor: "pointer",
  },
  badge: {
    maxWidth: "100%",
    display: "inline-block",
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));
