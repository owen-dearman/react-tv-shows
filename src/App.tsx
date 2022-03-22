import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { IEpisode } from "./utils/IEpisode";
import { useState } from "react";

function App(): JSX.Element {
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody: IEpisode[] = await response.json();
      setEpisodeData(jsonBody);
      console.log(jsonBody);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {MainContent(episodeData)}
      {Footer(episodeData)}
    </>
  );
}

export default App;
