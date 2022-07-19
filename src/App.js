import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./routes/HomePage";
import VideoListing from "./routes/VideoListing";
import VideoPage from "./routes/VideoPage";
import LikesPage from "./routes/LikesPage";
import PlaylistManage from "./routes/PlaylistManage";
import HistoryPage from "./routes/HistoryPage";
import WatchLater from "./routes/WatchLater";
import Mockman from "mockman-js";

import "./styles/style.css";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import RequiresAuth from "./RequiresAuth";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/listing'
          element={
            <RequiresAuth>
              <VideoListing />
            </RequiresAuth>
          }
        />
        <Route
          path='/video/:videoId'
          element={
            <RequiresAuth>
              <VideoPage />
            </RequiresAuth>
          }
        />
        <Route
          path='/playlist'
          element={
            <RequiresAuth>
              <PlaylistManage />
            </RequiresAuth>
          }
        />
        <Route
          path='/likes'
          element={
            <RequiresAuth>
              <LikesPage />
            </RequiresAuth>
          }
        />
        <Route
          path='/history'
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          }
        />
        <Route
          path='/watchlater'
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
