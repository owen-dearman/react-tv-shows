import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { IEpisode } from "./utils/IEpisode";
import { useState } from "react";
import showData from "./utils/shows.json";
import { showsList } from "./utils/ShowsList";

function App(): JSX.Element {
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [data, setData] = useState<number>(showData[0].id);

  useEffect(() => {
    const url = `https://api.tvmaze.com/shows/${data}/episodes`;
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: IEpisode[] = await response.json();
      setEpisodeData(jsonBody);
      //console.log(jsonBody);
    };
    fetchData();
  }, [data]);

  return (
    <>
      <Header />
      <select onChange={(e) => setData(parseInt(e.target.value))}>
        {showsList()}
      </select>
      {MainContent(episodeData)}
      <Footer episodeData={episodeData} />
    </>
  );
}

export default App;
