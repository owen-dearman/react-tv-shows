import { useState } from "react";
import episodeData from "../utils/episodes.json";
import { searchFilteredData } from "../utils/searchFilteredData";
import EpisodeComponent from "../utils/EpisodeComponent";

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
      <p>
        Showing {filteredData.length} of {episodeData.length}
      </p>
      <div className="block">{EpisodeComponent(filteredData)}</div>
    </>
  );
}

export default MainContent;
