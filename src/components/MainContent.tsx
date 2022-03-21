import { useState } from "react";
import episodeData from "../utils/episodes.json";
import { searchFilteredData } from "../utils/searchFilteredData";
import EpisodeComponent from "../utils/EpisodeComponent";
import { optionsList } from "../utils/OptionList";

function MainContent(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredData = searchFilteredData(searchInput);

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
          {optionsList}
        </select>
        <button onClick={() => setSearchInput("")}>Show All</button>
        <hr />
      </div>
      <p className="subtitle">
        Showing {filteredData.length} of {episodeData.length}
      </p>
      <div className="block">{EpisodeComponent(filteredData)}</div>
    </>
  );
}

export default MainContent;
