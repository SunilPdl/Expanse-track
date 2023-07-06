import React from "react";
import ServiceCard from "./components/ServiceCard";
import { Airplay, BarChart, Bell } from "react-feather";

const Services = () => {
  return (
    <div className="container" id="service">
      <h2>Services</h2>
      <div className="flex services-list">
        <ServiceCard
          icon={<Airplay />}
          title="USER FRIENDLY"
          desp="Expense Tracking is user friendly & very easy to use."
        />
        <ServiceCard
          icon={<BarChart />}
          title="REPORTING"
          desp="Expense Tracking provide you with weekly reporting."
        />
        <ServiceCard
          icon={<Bell />}
          title="NOTIFICATION"
          desp="Expense Tracking provide you with timely notifications."
        />
      </div>
    </div>
  );
};

export default Services;
