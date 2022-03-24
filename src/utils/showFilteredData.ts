import showData from "./shows.json";

export const showFilteredData = (
  episodeData: typeof showData,
  searchInput: string
) => {
  return episodeData.filter(
    (episode) =>
      episode.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchInput.toLowerCase()) ||
      episode.genres.join("").toLowerCase().includes(searchInput.toLowerCase())
  );
};
