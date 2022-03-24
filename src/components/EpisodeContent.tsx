import { useState } from "react";
import { searchFilteredData } from "../utils/searchFilteredData";
import EpisodeComponent from "../utils/EpisodeComponent";
import { optionsList } from "../utils/OptionList";
import { IEpisode } from "../utils/IEpisode";
import { useEffect } from "react";
import { twoDigitConverter } from "../utils/twoDigitConverter";
import { showsList } from "../utils/ShowsList";

interface EpisodeContentInterface {
  currentShow: number;
  setCurrentShow: (x: number) => void;
}

function EpisodeContent(props: EpisodeContentInterface): JSX.Element {
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
      <div className="block">
        {" "}
        <EpisodeComponent
          filteredData={filteredData}
          episodeData={episodeData}
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
