import React from "react";

const ServiceCard = ({ icon, title, desp }) => {
  return (
    <div className="service-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{desp}</p>
    </div>
  );
};

export default ServiceCard;
