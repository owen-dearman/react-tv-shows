import EpisodeContent from "./components/EpisodeContent";
import ShowContent from "./components/ShowContent";
import Header from "./components/Header";
import { useState } from "react";

function App(): JSX.Element {
  const [view,setView] = useState<boolean>(false)
  return (
    <>
      <Header />
      <button onClick={()=>setView(!view)}>View Main Content</button>
      {view && <EpisodeContent />}
      {!view && <ShowContent />}
    </>
  );
}

export default App;
