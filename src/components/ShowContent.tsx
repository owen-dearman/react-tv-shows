import { useState } from "react";
import ShowComponent from "../utils/ShowComponent";
import showData from "../utils/shows.json";
import { showFilteredData } from "../utils/showFilteredData";

interface ShowContentProps {
  handleClick: () => void;
  currentShow: number;
  setCurrentShow: (x: number) => void;
}

function ShowContent(props: ShowContentProps): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const filteredData = showFilteredData(showData, searchInput);

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
        <hr />
      </div>
      <p className="subtitle">
        Showing {filteredData.length} of {showData.length}
      </p>
      <div className="block">
        {" "}
        <ShowComponent
          setCurrentShow={props.setCurrentShow}
          showDataArray={filteredData}
          handleClick={props.handleClick}
        />
      </div>
      <footer className="subtitle">
        <hr />
        The data displayed on this webpage is the property of TVMaze. Please
        click below to navigate to the official data source for each episode.
        <br />
      </footer>
    </>
  );
}

export default ShowContent;
