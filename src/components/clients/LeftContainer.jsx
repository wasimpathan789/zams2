import "./LeftContainer.css";

const LeftContainer = ({ title }) => {
  return (
    <div className="left-container">
      <div className="left-dot"></div>

      {/* <img src="../src/assets/freshworks-vector-logo.png" alt="" /> */}
      <h1>{title}</h1>
      {/* <div className="freshLine"></div> */}
    </div>
  );
};

export default LeftContainer;
