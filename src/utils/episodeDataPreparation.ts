import { IEpisode } from "./IEpisode";
import showData from "./shows.json";

export function episodeDataPreparation(
  episodeData: IEpisode[] | typeof showData
): IEpisode[] | typeof showData {
  for (const episode of episodeData) {
    if (episode.summary !== null) {
      episode.summary = episode.summary.replace(/<\/?[^>]+(>|$)/g, "");
    }
  }
  return episodeData;
}
