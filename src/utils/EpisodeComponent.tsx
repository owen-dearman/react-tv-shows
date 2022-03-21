import episodeData from "./episodes.json";
import { IEpisode } from "./IEpisode";
import { episodeDataPreparation } from "./episodeDataPreparation";
import { twoDigitConverter } from "./twoDigitConverter";

export default function EpisodeComponent(): JSX.Element {
  const episodeComponents = episodeData.map((episodeInfo: IEpisode) => {
    episodeDataPreparation(episodeData);
    return (
      <div key={episodeInfo.id} id={episodeInfo.id.toString()}>
        <h2>
          S{twoDigitConverter(episodeInfo.season)}E
          {twoDigitConverter(episodeInfo.number)} - {episodeInfo.name}
        </h2>
        <img src={episodeInfo.image.medium} alt={episodeInfo.name + " image"} />
        <p>{episodeInfo.summary}</p>
        <p>Episode Run-Time: {episodeInfo.runtime}</p>
        <p>Episode Rating: {episodeInfo.rating.average}</p>
      </div>
    );
  });
  return <div>{episodeComponents}</div>;
}
