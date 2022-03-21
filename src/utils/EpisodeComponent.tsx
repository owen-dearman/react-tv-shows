import episodeData from "./episodes.json";
import { IEpisode } from "./IEpisode";
import { episodeDataPreparation } from "./episodeDataPreparation";
import { twoDigitConverter } from "./twoDigitConverter";

export default function EpisodeComponent(
  filteredData: IEpisode[]
): JSX.Element {
  const episodeComponents: JSX.Element[] = filteredData.map(
    (episodeInfo: IEpisode) => {
      episodeDataPreparation(episodeData);
      return (
        <div
          className="blockContent"
          key={episodeInfo.id}
          id={episodeInfo.id.toString()}
        >
          <h2 className="blockTitle">
            S{twoDigitConverter(episodeInfo.season)}E
            {twoDigitConverter(episodeInfo.number)} - {episodeInfo.name}
          </h2>
          {episodeInfo.image && (
            <img
              src={episodeInfo.image.medium}
              alt={episodeInfo.name + " image"}
            />
          )}
          {episodeInfo.image === null && <i>image unavailable</i>}
          <p>{episodeInfo.summary}</p>
          <h4>Episode Run Time: {episodeInfo.runtime} minutes</h4>
          <hr />
          <h3>Episode Rating: {episodeInfo.rating.average} / 10</h3>
        </div>
      );
    }
  );
  return <>{episodeComponents}</>;
}
