import { twoDigitConverter } from "../utils/twoDigitConverter";
import { IEpisode } from "../utils/IEpisode";

interface propsInterface {
  episodeData: IEpisode[];
}

function Footer(props: propsInterface): JSX.Element {
  return (
    <footer className="subtitle">
      <hr />
      The data displayed on this webpage is the property of TVMaze. Please click
      below to navigate to the official data source for each episode.
      <br />
      {props.episodeData.map((episode) => (
        <li key={episode.id}>
          <a href={episode.url}>
            S{twoDigitConverter(episode.season)}E
            {twoDigitConverter(episode.number)}
          </a>
        </li>
      ))}
    </footer>
  );
}

export default Footer;
