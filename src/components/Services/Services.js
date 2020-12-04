import React from "react";
import servicesImage from "../../assets/images/services.png";
import servicesIllustration from "../../assets/images/services-illustration.png";
import "./services.scss";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-content">
        <img
          className="services-image"
          src={servicesImage}
          alt="mastered languages logos"
        />
        <img
          className="services-illustration"
          src={servicesIllustration}
          alt="illustration of a developer seating on a desk"
        />
      </div>
    </section>
  );
};

export default Services;
