const playlistReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        [action.payload]: state[action.payload] ? false : true,
      };
    case "UPDATE_FIELD":
      console.log({ ...state, [action.field]: action.payload });
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export default playlistReducer;
