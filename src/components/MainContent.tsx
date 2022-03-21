import { IEpisode } from "../utils/IEpisode";
import episodeData from "../utils/episodes.json";
import {episodeDataPreparation} from "../utils/episodeDataPreparation"

function MainContent(): JSX.Element {

  const episodeComponent: JSX.Element[] = episodeData.map((episodeInfo: IEpisode) => {
    episodeDataPreparation(episodeData)
    return(<div key ={episodeInfo.id}>
        <h2>S{episodeInfo.season} E{episodeInfo.number} - {episodeInfo.name}</h2>
        <img src={episodeInfo.image.medium} alt={episodeInfo.name + " image"} />
        <p>{episodeInfo.summary}</p>
      </div>
    )
  })

  return(
    <>
    {episodeComponent}
    </>
  )
}

export default MainContent;
