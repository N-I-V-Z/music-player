import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicPlayer from "./component/MusicPlayer";
import UploadMusic from "./component/UploadMusic";
import Header from "./component/Header"; // Import Header component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MusicPlayer />} />
          <Route path="/upload" element={<UploadMusic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
