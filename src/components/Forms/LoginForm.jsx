import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const LoginForm = () => {
  const { authState, authDispatch } = useAuth();
  const { email, password, remember_me } = authState.loginForm;
  return (
    <form>
      <h5 className='h5 center-text login-head'>Login</h5>
      <div className='input'>
        <label htmlFor='email' className='input-label'>
          Email address
        </label>
        <input
          name='email'
          type='email'
          className='input-data'
          placeholder='example@gmail.com'
          value={email}
          onChange={(e) =>
            authDispatch({
              type: "UPDATE_LOGIN_FORM_FIELD",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          required></input>
      </div>
      <div className='input'>
        <label htmlFor='password' className='input-label'>
          Password
        </label>
        <input
          name='password'
          type='password'
          id='password'
          className='input-data'
          placeholder='********'
          value={password}
          onChange={(e) =>
            authDispatch({
              type: "UPDATE_LOGIN_FORM_FIELD",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          required></input>
      </div>
      <div className='options'>
        <div className='input remember-check'>
          <input
            name='remember_me'
            type='checkbox'
            className='input-data'
            id='remember'
            value={remember_me}
            onChange={(e) => {
              authDispatch({
                type: "TOGGLE_LOGIN_INPUT_ELEMENT",
                field: e.target.name,
                payload: e.target.value,
              });
            }}></input>
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
