import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <div className="heading-container">
      <div className="h-line"></div>
      <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
