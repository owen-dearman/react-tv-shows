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
      <hr />
      <input
        placeholder="Search Here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <select onChange={(e) => setSearchInput(e.target.value)}>
        {optionsList}
      </select>
      <button onClick={() => setSearchInput("")}>Show All</button>
      <hr />
      <p>
        Showing {filteredData.length} of {episodeData.length}
      </p>
      {EpisodeComponent(filteredData)}
    </>
  );
}

export default MainContent;
