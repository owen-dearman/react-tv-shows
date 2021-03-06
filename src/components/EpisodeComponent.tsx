// import episodeData from "./episodes.json";
import { IEpisode } from "../utils/IEpisode";
import { episodeDataPreparation } from "../utils/episodeDataPreparation";
import { twoDigitConverter } from "../utils/twoDigitConverter";

interface EpisodeComponentInterface {
  filteredData: IEpisode[];
  episodeData: IEpisode[];
  fav: IEpisode[];
  setFav: (x: IEpisode[]) => void;
}

export default function EpisodeComponent(
  props: EpisodeComponentInterface
): JSX.Element {
  const episodeComponents: JSX.Element[] = props.filteredData.map(
    (episodeInfo: IEpisode) => {
      episodeDataPreparation(props.filteredData);

      return (
        <div
          className="blockContent"
          key={episodeInfo.id}
          id={episodeInfo.id.toString()}
        >
          <h2 className="blockTitle">
            S{twoDigitConverter(episodeInfo.season)}E
            {twoDigitConverter(episodeInfo.number)}
          </h2>
          <h2>
            {episodeInfo.name}{" "}
            <span
              className={
                props.fav.includes(episodeInfo)
                  ? "fa fa-star checked"
                  : "fa fa-star"
              }
              onClick={() => {
                props.fav.find((x) => x.id === episodeInfo.id) !== undefined
                  ? props.setFav(
                      props.fav.filter((x) => x.id !== episodeInfo.id)
                    )
                  : props.setFav([...props.fav, episodeInfo]);
              }}
            >
              {" "}
            </span>
          </h2>

          {episodeInfo.image && (
            <img
              className="episodeImg"
              src={episodeInfo.image.medium}
              alt={episodeInfo.name + " image"}
            />
          )}
          {episodeInfo.image === null && <i>image unavailable</i>}
          <p>{episodeInfo.summary}</p>
          <h4 className="blockSubtitle">
            Episode Run Time: {episodeInfo.runtime} minutes
          </h4>
          <h4 className="blockSubtitle">
            {episodeInfo.rating.average &&
              `Episode Rating: ${episodeInfo.rating.average} / 10`}
          </h4>
        </div>
      );
    }
  );
  return <>{episodeComponents}</>;
}
