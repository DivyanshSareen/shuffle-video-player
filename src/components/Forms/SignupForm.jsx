import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const SignupForm = () => {
  const { authState, authDispatch } = useAuth();
  const { email, password, accept_t_and_c } = authState.signupForm;
  return (
    <form action=''>
      <h5 className='h5 center-text login-head'>Signup</h5>
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
          onChange={(e) => {
            authDispatch({
              type: "UPDATE_SIGNUP_FORM_FIELD",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
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
          onChange={(e) => {
            authDispatch({
              type: "UPDATE_SIGNUP_FORM_FIELD",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          required></input>
      </div>
      <div className='options'>
        <div className='input terms'>
          <input
            name='accept_t_and_c'
            type='checkbox'
            className='input-data'
            id='terms'
            value={accept_t_and_c}
            onChange={(e) => {
              authDispatch({
                type: "TOGGLE_SIGNUP_INPUT_ELEMENT",
                field: e.target.name,
                payload: e.target.value,
              });
            }}></input>
          <label htmlFor='terms'>I accept all Terms & Conditions</label>
        </div>
      </div>
      <div className='btn btn-login center-text'>Create Account</div>
      <Link to='/login'>
        <div className='paragraph1 center-text'>
          Already have an account <i className='fa-solid fa-chevron-right'></i>
        </div>
      </Link>
    </form>
  );
};

export default SignupForm;
