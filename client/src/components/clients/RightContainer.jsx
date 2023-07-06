import "./RightContainer.css";

const RightContainer = ({ title }) => {
  return (
    <div className="right-container">
      <div className="right-dot"></div>

      {/* <img src="../src/assets/freshworks-vector-logo.png" alt="" /> */}
      <h1>{title}</h1>
      {/* <div className="freshLine"></div> */}
    </div>
  );
};

export default RightContainer;
