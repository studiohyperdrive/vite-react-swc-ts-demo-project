export class ArtworksService {
  public static async fetchArtworks(page = 1, limit = 12) {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
    );
    return response.json();
  }
  public static async fetchArtwork(id: string | number) {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    return response.json();
  }
}
