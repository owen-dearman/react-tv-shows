import episodeData from "./episodes.json";
import { twoDigitConverter } from "./twoDigitConverter";
import { IEpisode } from "./IEpisode";

export const optionsList = episodeData.map((episode: IEpisode) => (
  <option
    key={episode.id}
    value={
      "S" +
      twoDigitConverter(episode.season) +
      "E" +
      twoDigitConverter(episode.number)
    }
  >
    S{twoDigitConverter(episode.season)}E{twoDigitConverter(episode.number)} -{" "}
    {episode.name}
  </option>
));
