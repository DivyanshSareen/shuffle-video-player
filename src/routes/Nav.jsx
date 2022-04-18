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
          <Link to='/'>
            <div className='nav-item'>Home</div>
          </Link>
          <Link to='/listing'>
            <div className='nav-item' onClick={() => getVideos()}>
              Explore
            </div>
          </Link>
          <Link to='/login'>
            <div className='nav-item btn'>Login</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
