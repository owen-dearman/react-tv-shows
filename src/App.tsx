import EpisodeContent from "./components/EpisodeContent";
import ShowContent from "./components/ShowContent";
import Header from "./components/Header";
import { useState } from "react";

function App(): JSX.Element {
  const [view, setView] = useState<boolean>(false);

  function handleClick() {
    setView(!view);
  }

  return (
    <>
      <Header />
      <button onClick={() => setView(!view)}>View Main Content</button>

      {view && <EpisodeContent />}
      {!view && <ShowContent handleClick={handleClick} />}
    </>
  );
}

export default App;
