const videoReducer = (state, action) => {
  switch (action.type) {
    case "LIST_VIDEOS":
      console.log({ ...state, videos: [...action.payload] });
      return { ...state, videos: [...action.payload] };
    default:
      return state;
  }
};

export default videoReducer;
