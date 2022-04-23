const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return state;
    case "LOGIN_USER":
      return {
        ...state,
        isLoggedIn: true,
        authToken: state.handleLogin(state.loginForm),
      };
    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, authToken: "" };
    default:
      return state;
  }
};

export default authReducer;
