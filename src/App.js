import { Routes, Route } from "react-router-dom";
import Nav from "./routes/Nav";
import HomePage from "./routes/HomePage";
import Mockman from "mockman-js";

import "./styles/style.css";
import VideoListing from "./routes/VideoListing";
import PlaylistManage from "./routes/PlaylistManage";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/listing' element={<VideoListing />} />
        <Route path='/playlist' element={<PlaylistManage />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
