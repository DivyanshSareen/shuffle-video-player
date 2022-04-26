import { Link } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";

const Nav = () => {
  const { getVideos } = useVideo();
  const { authState, authDispatch } = useAuth();
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
          {authState.isLoggedIn ? (
            <Link
              to='/'
              className='nav-item btn'
              onClick={() => authDispatch({ type: "LOGOUT_USER" })}>
              Logout
            </Link>
          ) : (
            <Link className='nav-item btn' to='/login'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
