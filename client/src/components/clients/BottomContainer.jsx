import "./BottomContainer.css";

const BottomContainer = ({ title }) => {
  return (
    <div className="bottom-container">
      <div className="bottom-dot"></div>

      {/* <img src="../src/assets/freshworks-vector-logo.png" alt="" /> */}
      <h1>{title}</h1>
      {/* <div className="freshLine"></div> */}
    </div>
  );
};

export default BottomContainer;
