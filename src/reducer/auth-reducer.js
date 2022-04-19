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
        loginForm: { ...state, [action.field]: action.payload ? false : true },
      };
    default:
      return state;
  }
};

export default authReducer;
