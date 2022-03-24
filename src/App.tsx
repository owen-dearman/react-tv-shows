import EpisodeContent from "./components/EpisodeContent";
import ShowContent from "./components/ShowContent";
import Header from "./components/Header";
import showData from "./utils/shows.json";
import { useState } from "react";

function App(): JSX.Element {
  const [view, setView] = useState<boolean>(false);
  const [data, setData] = useState<number>(showData[0].id);

  function handleClick() {
    setView(!view);
  }

  return (
    <>
      <Header />
      {view ? (
        <button onClick={() => setView(!view)}>View Series List</button>
      ) : (
        <button onClick={() => setView(!view)}>View Episodes List</button>
      )}

      {view && <EpisodeContent currentShow={data} setCurrentShow={setData} />}
      {!view && (
        <ShowContent
          currentShow={data}
          setCurrentShow={setData}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default App;
