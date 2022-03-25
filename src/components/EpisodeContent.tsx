import { useState } from "react";
import { searchFilteredData } from "../utils/searchFilteredData";
import EpisodeComponent from "./EpisodeComponent";
import { optionsList } from "../utils/OptionList";
import { IEpisode } from "../utils/IEpisode";
import { useEffect } from "react";
import { twoDigitConverter } from "../utils/twoDigitConverter";
import { showsList } from "../utils/ShowsList";
import showData from "../utils/shows.json";

interface EpisodeContentInterface {
  currentShow: number;
  setCurrentShow: (x: number) => void;
}

function EpisodeContent(props: EpisodeContentInterface): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [favList, setFavList] = useState<IEpisode[]>([]);
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);

  useEffect(() => {
    const url = `https://api.tvmaze.com/shows/${props.currentShow}/episodes`;
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: IEpisode[] = await response.json();
      setEpisodeData(jsonBody);
    };
    fetchData();
  }, [props.currentShow]);

  const [searchInput, setSearchInput] = useState<string>("");
  const filteredData = searchFilteredData(episodeData, searchInput);
  const currentShowName = showData.filter((x) => x.id === props.currentShow)[0]
    .name;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <hr />
        <select
          style={{ fontSize: 20 }}
          onChange={(e) => props.setCurrentShow(parseInt(e.target.value))}
          defaultValue={props.currentShow}
        >
          {showsList()}
        </select>
        <br />
        <input
          style={{ fontSize: 20 }}
          placeholder="Search Here"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => setSearchInput("")}>Clear Search</button>
        <select
          style={{ fontSize: 20 }}
          onChange={(e) => setSearchInput(e.target.value)}
        >
          {optionsList(episodeData)}
        </select>
        <button onClick={() => setSearchInput("")}>Show All</button>
        <hr />
      </div>
      <p className="subtitle">
        Showing {filteredData.length} of {episodeData.length}
      </p>
      <h2 style={{ color: "white" }}>Your Favorite Episodes List:</h2>
      {favList.map((x) => (
        <div key={x.id} className="Fav">
          {" "}
          {currentShowName} -- S{twoDigitConverter(x.season)}E
          {twoDigitConverter(x.number)} {x.name}{" "}
        </div>
      ))}

      <div className="block">
        {" "}
        <EpisodeComponent
          filteredData={filteredData}
          episodeData={episodeData}
          fav={favList}
          setFav={setFavList}
        />
      </div>
      <footer className="subtitle">
        <hr />
        The data displayed on this webpage is the property of TVMaze. Please
        click below to navigate to the official data source for each episode.
        <br />
        {episodeData.map((episode) => (
          <li key={episode.id}>
            <a href={episode.url}>
              S{twoDigitConverter(episode.season)}E
              {twoDigitConverter(episode.number)}
            </a>
          </li>
        ))}
      </footer>
    </>
  );
}

export default EpisodeContent;
