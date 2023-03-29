import { Badge, Group, Image, Card as MCard, Text } from "@mantine/core";
import { FC } from "react";

import { useStyles } from "./Card.styles";
import { CardProps } from "./Card.types";

export const Card: FC<CardProps> = ({
  image,
  title,
  artistDisplayName,
  medium,
  artistDisplayBio,
}) => {
  const { classes } = useStyles();

  return (
    <MCard withBorder padding="lg" radius="md" className={classes.card}>
      <MCard.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </MCard.Section>

      <Badge>{medium}</Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {title}
      </Text>

      <Group mt="lg">
        <Text fw={500}>{artistDisplayName}</Text>
        <Text fz="xs" c="dimmed">
          {artistDisplayBio}
        </Text>
      </Group>
    </MCard>
  );
};
