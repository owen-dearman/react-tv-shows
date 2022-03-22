import episodeData from "./episodes.json";
import { IEpisode } from "./IEpisode";

export const searchFilteredData = (
  episodeData: IEpisode[],
  searchInput: string
): IEpisode[] => {
  return episodeData.filter(
    (episode) =>
      episode.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchInput.toLowerCase())
  );
};
