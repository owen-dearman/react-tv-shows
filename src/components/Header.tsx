import episodesData from "../utils/episodes.json";
import { twoDigitConverter } from "../utils/twoDigitConverter";
function Header(): JSX.Element {
  return (
    <>
      <h1>MovieNames</h1>
      {episodesData.map((episode) => (
        <li key={episode.id}>
          <a href={"#" + episode.id}>
            S{twoDigitConverter(episode.season)}E
            {twoDigitConverter(episode.number)}
          </a>
        </li>
      ))}
    </>
  );
}

export default Header;
