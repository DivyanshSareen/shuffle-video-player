const videoReducer = (state, action) => {
  switch (action.type) {
    case "LIST_VIDEOS":
      return { ...state, videos: [...action.payload] };
    default:
      return state;
  }
};

export default videoReducer;
