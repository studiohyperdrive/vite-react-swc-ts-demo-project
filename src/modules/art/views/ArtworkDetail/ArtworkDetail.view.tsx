import { Badge, Text } from "@mantine/core";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { clearDetail, fetchArtwork, selectArtworksData } from "~/art/store";

export const ArtworkDetail: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { imageBaseUrl, artwork } = useAppSelector(selectArtworksData);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchArtwork({ id }));

    return () => {
      dispatch(clearDetail());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!artwork) {
    return <></>;
  }

  return (
    <>
      <Text fz="xl" fw={700} mt="xs">
        {artwork?.title}
      </Text>
      <Text fw={700} mt="xs" mb="xs">
        {artwork?.artist_title}
      </Text>
      <Badge>{artwork?.classification_title}</Badge>
      <Text fz="xs" c="dimmed" mt="sm" mb="sm">
        {artwork?.credit_line}
      </Text>
      <img
        src={`${imageBaseUrl}/${artwork?.image_id}/full/843,/0/default.jpg`}
      />
    </>
  );
};
