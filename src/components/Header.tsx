import episodesData from "../utils/episodes.json";
function Header(): JSX.Element {
  return (
    <>
      <h1>MovieNames</h1>
      {episodesData.map((episode) => (
        <li key={episode.id}>
          <a href={"#" + episode.id}>
            S{episode.season}E{episode.number}
          </a>
        </li>
      ))}
    </>
  );
}

export default Header;
