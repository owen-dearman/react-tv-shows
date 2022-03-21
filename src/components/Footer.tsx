import episodesData from "../utils/episodes.json";
function Footer(): JSX.Element {
  return (
    <footer>
      <hr />
      The data displayed on this webpage is the property of TVMaze. Please click
      below to navigate to the official data source for each episode.
      <br />
      {episodesData.map((episode) => (
        <li key={episode.id}>
          <a href={episode.url}>
            S{episode.season}E{episode.number}
          </a>
        </li>
      ))}
    </footer>
  );
}

export default Footer;
