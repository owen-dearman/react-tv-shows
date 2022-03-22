import episodeData from "./episodes.json";
import { IEpisode } from "./IEpisode";
import { twoDigitConverter } from "./twoDigitConverter";

export const searchFilteredData = (searchInput: string): IEpisode[] => {
  return episodeData.filter(
    (episode) =>
      episode.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchInput.toLowerCase()) ||
      "S" +
        twoDigitConverter(episode.season) +
        "E" +
        twoDigitConverter(episode.number) ===
        searchInput
  );
};
