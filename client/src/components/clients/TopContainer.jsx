import "./TopContainer.css";

const TopContainer = ({ title }) => {
  return (
    <div className="top-container">
      <div className="top-dot"></div>

      {/* <img src="../src/assets/freshworks-vector-logo.png" alt="" /> */}
      <h1>{title}</h1>
      {/* <div className="freshLine"></div> */}
    </div>
  );
};

export default TopContainer;
