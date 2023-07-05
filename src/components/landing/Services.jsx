import React from "react";

const Services = () => {
  return (
    <div className="container">
      <h2>Services</h2>
      <div className="flex services-list">
        <div>
          <img src="/easy.svg" alt="" />
          <p>Easy to use</p>
        </div>
        <div>
          <img src="/report.svg" alt="" />
          <p>Monthly report</p>
        </div>
        <div>
          <img src="/userFriendly.svg" alt="" />
          <p>User friendly</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
