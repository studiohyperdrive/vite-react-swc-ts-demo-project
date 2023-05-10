export interface ArtworkDetail {
  id: number;
  image_id: number;
  artist_title: string;
  title: string;
  credit_line: string;
  classification_title: string;
}

export interface ArtworksState {
  status: string;
  error?: string | null;
  artwork: ArtworkDetail | null;
  artworks: ArtworkDetail[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  } | null;
  imageBaseUrl: string | null;
}
