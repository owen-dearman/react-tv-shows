// import episodeData from "./episodes.json";
// import { IShow } from "./IShow";
import showData from "./shows.json";
import { episodeDataPreparation } from "../utils/episodeDataPreparation";

export default function ShowComponent(
  showDataArray: typeof showData
): JSX.Element {
  episodeDataPreparation(showData);
  const showComponents: JSX.Element[] = showDataArray.map((seriesInfo) => {
    return (
      <div
        className="blockContent"
        key={seriesInfo.id}
        id={seriesInfo.id.toString()}
      >
        <h2>{seriesInfo.name}</h2>
        <p>{seriesInfo.genres.join(", ")}</p>
        {seriesInfo.image && (
          <img src={seriesInfo.image.medium} alt={seriesInfo.name + " image"} />
        )}
        {seriesInfo.image === null && <i>image unavailable</i>}
        <p>{seriesInfo.summary}</p>
        <h4 className="blockSubtitle">
          Episode Run Time: {seriesInfo.runtime} minutes
        </h4>
        <h4 className="blockSubtitle">
          {seriesInfo.rating.average &&
            `Series Rating: ${seriesInfo.rating.average} / 10`}
        </h4>
        <h3>Show Status: {seriesInfo.status}</h3>
      </div>
    );
  });
  return <>{showComponents}</>;
}
