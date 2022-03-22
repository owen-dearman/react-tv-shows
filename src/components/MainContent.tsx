import { useState } from "react";
import { searchFilteredData } from "../utils/searchFilteredData";
import EpisodeComponent from "../utils/EpisodeComponent";
import { optionsList } from "../utils/OptionList";
import { IEpisode } from "../utils/IEpisode";

function MainContent(episodeData: IEpisode[]): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredData = searchFilteredData(episodeData, searchInput);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <hr />
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
      <div className="block">{EpisodeComponent(filteredData, episodeData)}</div>
    </>
  );
}

export default MainContent;
