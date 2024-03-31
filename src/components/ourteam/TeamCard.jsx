import "./teamCard.css";

const TeamCard = ({ bg, color, designation, name, qualification }) => {
  return (
    <div className="teamCard">
      <div className="cardTopMain">
        <div className="cardTop" style={{ backgroundImage: `url(${bg})` }}>
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffff"
              // fill-opacity="1"
              d="M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,186.7C672,181,768,107,864,106.7C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="cardBottom" style={{ borderColor: color }}>
        <h3 style={{ color: color }}>{name}</h3>
        <h5>{qualification}</h5>
        <h5>{designation}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
