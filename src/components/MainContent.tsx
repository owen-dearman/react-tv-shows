import { IEpisode } from "../utils/IEpisode";
import episodeData from "../utils/episodes.json";
import { episodeDataPreparation } from "../utils/episodeDataPreparation";
import { twoDigitConverter } from "../utils/twoDigitConverter";

function MainContent(): JSX.Element {
  const episodeComponent: JSX.Element[] = episodeData.map(
    (episodeInfo: IEpisode) => {
      episodeDataPreparation(episodeData);
      return (
        <div key={episodeInfo.id}>
          <h2>
            S{twoDigitConverter(episodeInfo.season)}E{twoDigitConverter(episodeInfo.number)} - {episodeInfo.name}
          </h2>
          <img
            src={episodeInfo.image.medium}
            alt={episodeInfo.name + " image"}
          />
          <p>{episodeInfo.summary}</p>
          <p>Episode Run-Time: {episodeInfo.runtime}</p>
          <p>Episode Rating: {episodeInfo.rating.average}</p>
        </div>
      );
    }
  );

  return <>{episodeComponent}</>;
}

export default MainContent;
