import "./serviceCard.css";

const ServiceCard = ({ title, description, icon, animation }) => {
  return (
    <div
      className="service-card"
      data-aos="fade-right"
      data-aos-duration="1500"
      style={{ animation: { animation } }}
    >
      <div className="serviceCardTop">
        <span data-aos="fade-up" data-aos-duration="1500">
          {icon}
        </span>
        <h3 data-aos="fade-right" data-aos-duration="1500">
          {title}
        </h3>
      </div>
      <div className="serviceCardBottom">
        <p data-aos="fade-left" data-aos-duration="1500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
