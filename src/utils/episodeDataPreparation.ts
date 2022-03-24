import { IEpisode } from "./IEpisode";
import showData from "./shows.json";

export function episodeDataPreparation(
  episodeData: IEpisode[] | typeof showData
): IEpisode[] | typeof showData {
  for (const episode of episodeData) {
    //episode.summary.substring(3, episode.summary.length-7)
    episode.summary = episode.summary.replace(/<\/?[^>]+(>|$)/g, "");
  }
  return episodeData;
}
