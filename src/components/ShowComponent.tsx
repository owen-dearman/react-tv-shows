// import episodeData from "./episodes.json";
// import { IShow } from "./IShow";
import showData from "../utils/shows.json";
import { episodeDataPreparation } from "../utils/episodeDataPreparation";

interface ShowComponentProps {
  showDataArray: typeof showData;
  handleClick: () => void;
  setCurrentShow: (x: number) => void;
}

export default function ShowComponent(props: ShowComponentProps): JSX.Element {
  episodeDataPreparation(showData);

  const showComponents: JSX.Element[] = props.showDataArray.map(
    (seriesInfo) => {
      return (
        <div
          className="seriesBlockContent"
          key={seriesInfo.id}
          id={seriesInfo.id.toString()}
          onClick={() => {
            props.handleClick();
            props.setCurrentShow(seriesInfo.id);
          }}
        >
          <div className="seriesBlockTitle">
            <h2 style={{ fontSize: 40 }}>{seriesInfo.name}</h2>
            <p style={{ fontSize: 20 }}>{seriesInfo.genres.join(", ")}</p>
          </div>
          <div className="seriesBlockRest">
            {seriesInfo.image && (
              <img
                className="seriesImg"
                src={seriesInfo.image.medium}
                alt={seriesInfo.name + " image"}
              />
            )}
            {seriesInfo.image === null && <i>image unavailable</i>}
            <p style={{ padding: 20 }}>{seriesInfo.summary}</p>
            <div style={{ padding: 20 }} className="seriesBlockData">
              <h4 className="blockSubtitle">{seriesInfo.runtime} minutes</h4>
              <h4 className="blockSubtitle">
                {seriesInfo.rating.average &&
                  `${seriesInfo.rating.average} / 10`}
              </h4>
              <h3>{seriesInfo.status}</h3>
            </div>
          </div>
        </div>
      );
    }
  );
  return <>{showComponents}</>;
}
