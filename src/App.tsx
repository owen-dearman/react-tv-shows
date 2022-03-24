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
      <button onClick={handleClick}>View Main Content</button>

      {view && <EpisodeContent />}
      {!view && ShowContent(handleClick)}
    </>
  );
}

export default App;
