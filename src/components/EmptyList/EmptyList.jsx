const EmptyList = ({ type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <img
        width='25%'
        style={{
          borderRadius: "4px",
          margin: "7% 0 4% 0",
          border: "2px solid white",
        }}
        src={require("../../assets/empty.jpg")}
        alt='disc-pixel-art'></img>
      <h4 className='h5'>No {type} videos yet</h4>
    </div>
  );
};

export default EmptyList;
