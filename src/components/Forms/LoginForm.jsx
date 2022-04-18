import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <h5 className='h5 center-text login-head'>Login</h5>
      <div className='input'>
        <label htmlFor='userEmail' className='input-label'>
          Email address
        </label>
        <input
          name='userEmail'
          type='email'
          className='input-data'
          placeholder='example@gmail.com'
          d
          required></input>
      </div>
      <div className='input'>
        <label htmlFor='userPassword' className='input-label'>
          Password
        </label>
        <input
          name='userPassword'
          type='password'
          id='password'
          className='input-data'
          placeholder='********'
          required></input>
      </div>
      <div className='options'>
        <div className='input remember-check'>
          <input
            name='remember_me'
            type='checkbox'
            className='input-data'
            id='remember'></input>
          <label htmlFor='remember_me'>Remember me</label>
        </div>
        <div className='paragraph2 forgot-password'>Forgot your Password?</div>
      </div>
      <div className='btn btn-login center-text'>Log In</div>
      <Link to='/signup'>
        <div className='paragraph1 center-text'>
          Create New Account <i className='fa-solid fa-chevron-right'></i>
        </div>
      </Link>
    </form>
  );
};

export default LoginForm;
