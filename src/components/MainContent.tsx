import { useState } from "react";
import episodeData from "../utils/episodes.json"
import { IEpisode } from "../utils/IEpisode";
import { episodeDataPreparation } from "../utils/episodeDataPreparation";
import { twoDigitConverter } from "../utils/twoDigitConverter";

function MainContent(): JSX.Element {

  const [searchInput, setSearchInput] = useState<string>("")
  const searchFilteredData = episodeData.filter((episode) => episode.name.toLowerCase().includes(searchInput.toLowerCase()) || episode.summary.toLowerCase().includes(searchInput.toLowerCase()))
    
  const episodeComponents: JSX.Element[] = searchFilteredData.map((episodeInfo: IEpisode) => {
      episodeDataPreparation(episodeData);
      return (
        <div key={episodeInfo.id} id={episodeInfo.id.toString()}>
          <h2>
            S{twoDigitConverter(episodeInfo.season)}E
            {twoDigitConverter(episodeInfo.number)} - {episodeInfo.name}
          </h2>
          <img src={episodeInfo.image.medium} alt={episodeInfo.name + " image"} />
          {episodeInfo.image && <img src={episodeInfo.image.medium} alt={episodeInfo.name + " image"} />}
          {episodeInfo.image===null && <i>image unavailable</i>}
          <p>{episodeInfo.summary}</p>
          <p>Episode Run-Time: {episodeInfo.runtime}</p>
          <p>Episode Rating: {episodeInfo.rating.average}</p>
        </div>
      );
    });
  

  return (
    <>
    <hr/>
      <input
      placeholder="Search Here"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
       />
       <hr/>
       <p>Showing {searchFilteredData.length} of {episodeData.length}</p>
      <div>{episodeComponents}</div>;
    </>
  );
}

export default MainContent;
