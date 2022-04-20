const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM_FIELD":
      return {
        ...state,
        loginForm: { ...state.loginForm, [action.field]: action.payload },
      };
    case "TOGGLE_LOGIN_INPUT_ELEMENT":
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.field]: action.payload === "true" ? false : true,
        },
      };
    case "UPDATE_SIGNUP_FORM_FIELD":
      return {
        ...state,
        signupForm: {
          ...state.signupForm,
          [action.field]: action.payload,
        },
      };
    case "TOGGLE_SIGNUP_INPUT_ELEMENT":
      return {
        ...state,
        signupForm: {
          ...state.signupForm,
          [action.field]: action.payload === "true" ? false : true,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
