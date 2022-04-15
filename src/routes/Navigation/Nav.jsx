const Nav = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <i className='fa-solid fa-shuffle'></i> Shuffle
        </div>
        <div className='nav-list'>
          <div className='nav-item'>Home</div>
          <div className='nav-item'>Explore</div>
          <div className='nav-item btn'>Login</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
