import { Link } from "react-router-dom";
import { useVideo } from "../context/video-context";

const Nav = () => {
  const { getVideos } = useVideo();
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <Link to='/'>
            <i className='fa-solid fa-shuffle'></i> Shuffle
          </Link>
        </div>
        <div className='nav-list'>
          <Link className='nav-item' to='/'>
            Home
          </Link>
          <Link className='nav-item' onClick={() => getVideos()} to='/listing'>
            Explore
          </Link>
          <Link className='nav-item' to='/playlist'>
            Playlist
          </Link>
          <Link className='nav-item btn' to='/login'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
