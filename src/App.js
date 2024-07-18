import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicPlayer from "./component/MusicPlayer";
import UploadMusic from "./component/UploadMusic";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicPlayer />} />
        <Route path="/upload" element={<UploadMusic />} />
      </Routes>
    </Router>
  );
}

export default App;
