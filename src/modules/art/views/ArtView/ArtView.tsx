import { Grid } from "@mantine/core";
import { FC } from "react";

import { Card } from "~/art/components/Card";

export const ArtView: FC = () => {
  return (
    <Grid grow>
      <Grid.Col sm={1} md={4}>
        <Card
          image="https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
          title="Wheat Field with Cypresses"
          artistDisplayName="Vincent van Gogh"
          artistDisplayBio="Dutch, Zundert 1853–1890 Auvers-sur-Oise"
          medium="Oil on canvas"
        />
      </Grid.Col>
      <Grid.Col sm={1} md={4}>
        <Card
          image="https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
          title="Wheat Field with Cypresses"
          artistDisplayName="Vincent van Gogh"
          artistDisplayBio="Dutch, Zundert 1853–1890 Auvers-sur-Oise"
          medium="Oil on canvas"
        />
      </Grid.Col>
      <Grid.Col sm={1} md={4}>
        <Card
          image="https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
          title="Wheat Field with Cypresses"
          artistDisplayName="Vincent van Gogh"
          artistDisplayBio="Dutch, Zundert 1853–1890 Auvers-sur-Oise"
          medium="Oil on canvas"
        />
      </Grid.Col>
    </Grid>
  );
};
