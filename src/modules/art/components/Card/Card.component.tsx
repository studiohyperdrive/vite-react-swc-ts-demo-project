import { Badge, Image, Card as MCard, Text } from "@mantine/core";
import { FC } from "react";

import { useStyles } from "./Card.styles";
import { CardProps } from "./Card.types";

export const Card: FC<CardProps> = ({
  id,
  image,
  title,
  artistDisplayName,
  medium,
  creditLine,
  onClick,
}) => {
  const { classes } = useStyles();

  return (
    <MCard
      withBorder
      padding="lg"
      radius="md"
      className={classes.card}
      onClick={() => onClick(id)}
    >
      <MCard.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </MCard.Section>

      <Badge className={classes.badge}>{medium}</Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {title}
      </Text>

      <Text fw={500} mt="lg">
        {artistDisplayName}
      </Text>
      <Text fz="xs" c="dimmed" mt="sm">
        {creditLine}
      </Text>
    </MCard>
  );
};
