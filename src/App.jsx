import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home/home";
import Spotify from "@pages/Spotify/spotify";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/spotify" element={<Spotify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
