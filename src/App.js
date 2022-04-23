import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./routes/HomePage";
import VideoListing from "./routes/VideoListing";
import PlaylistManage from "./routes/PlaylistManage";
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
        <Route path='/listing' element={<VideoListing />} />
        <Route
          path='/playlist'
          element={
            <RequiresAuth>
              <PlaylistManage />
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
