import { Routes, Route } from "react-router-dom";
import Nav from "./routes/Navigation/Nav";
import HomePage from "./routes/Home/HomePage";
import Mockman from "mockman-js";

import "./styles/style.css";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
