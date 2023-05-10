import { Button, Grid } from "@mantine/core";
import { FC, useEffect } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { ART_PATHS } from "~/art/art.const";
import { Card } from "~/art/components";
import { fetchArtworks, selectArtworksData } from "~/art/store";

import { useStyles } from "./Artworks.styles";

export const ArtworksView: FC = () => {
  const { classes } = useStyles();
  const { artworks, pagination, imageBaseUrl } =
    useAppSelector(selectArtworksData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!artworks.length) {
      dispatch(fetchArtworks());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNextArtworks = () => {
    dispatch(fetchArtworks({ page: (pagination?.current_page || 0) + 1 }));
  };

  const navigateToDetail = (id: number) => {
    navigate(generatePath(ART_PATHS.detail, { id }));
  };

  return (
    <>
      <Grid>
        {(artworks || []).map((artwork, index) => {
          return (
            <Grid.Col sm={4} md={3} key={index}>
              <Card
                id={artwork.id}
                image={`${imageBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`}
                title={artwork.title}
                artistDisplayName={artwork.artist_title}
                creditLine={artwork.credit_line}
                medium={artwork.classification_title}
                onClick={navigateToDetail}
              />
            </Grid.Col>
          );
        })}
      </Grid>
      <Button
        m="xl"
        onClick={fetchNextArtworks}
        className={classes.loadMoreButton}
      >
        Load more
      </Button>
    </>
  );
};
