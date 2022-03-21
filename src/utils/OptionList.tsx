import episodeData from "./episodes.json";
import { twoDigitConverter } from "./twoDigitConverter";
import { IEpisode } from "./IEpisode";

export const optionsList = episodeData.map((episode: IEpisode) => (
  <option key={episode.id} value={episode.name}>
    S{twoDigitConverter(episode.season)}E{twoDigitConverter(episode.number)}
  </option>
));
