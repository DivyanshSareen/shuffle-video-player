const Loading = () => {
  return (
    <img
      style={{
        height: "5rem",
        width: "5rem",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
      alt='loading'
      src={require("../../assets/loading.gif")}></img>
  );
};

export default Loading;
