import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import axios from "axios";

const LoginForm = () => {
  const { authDispatch } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    remember_me: false,
  });
  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.value]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      response = await axios.post("/api/auth/login", {
        email: loginForm.email,
        password: loginForm.password,
      });
    } catch (e) {
      console.log(e);
    } finally {
      authDispatch({ type: "LOGIN_USER", payload: response.data });
      navigate(from, { replace: true });
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  return (
    <form onSubmit={handleSubmit}>
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
          value={loginForm.email}
          onChange={(e) => handleChange(e)}
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
          value={loginForm.password}
          onChange={(e) => handleChange(e)}
          required></input>
      </div>
      <div className='options'>
        <div className='input remember-check'>
          <input
            name='remember_me'
            type='checkbox'
            className='input-data'
            id='remember'
            value={loginForm.remember_me}
            onChange={(e) => {
              handleChange(e);
            }}></input>
          <label htmlFor='remember_me'>Remember me</label>
        </div>
        <div className='paragraph2 forgot-password'>Forgot your Password?</div>
      </div>
      <input
        type='submit'
        value='LOGIN'
        className='btn btn-login center-text'></input>
      <Link to='/signup'>
        <div className='paragraph1 center-text'>
          Create New Account <i className='fa-solid fa-chevron-right'></i>
        </div>
      </Link>
    </form>
  );
};

export default LoginForm;
