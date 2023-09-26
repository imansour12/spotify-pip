import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home/home";
import Spotify from "@pages/Spotify/spotify";
import NotSupported from "@pages/NotSupported/notSupported";
import Failed from "./pages/Spotify/Failed/failed";

function App() {
  if ('documentPictureInPicture' in window) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/failed" element={<Failed />} />
        </Routes>
      </BrowserRouter>
    );
  }
  else {
    return <NotSupported />
  }
}

export default App;
