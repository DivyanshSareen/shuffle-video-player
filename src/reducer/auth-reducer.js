const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.payload.encodedToken,
      };
    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, authToken: "" };
    default:
      return state;
  }
};

export default authReducer;
