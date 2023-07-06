import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="container aboutUs-section">
      <h2>About Us</h2>
      <div className="flex">
        <p>
          We are the team behind Expense Tracking. After having difficulty
          tracking our internal expenses and income in our company while using
          all the expense tracking application out in the wild we decided to
          create our own expense tracking software. After months of requirements
          gathering, developing the application and testing it within our
          company we were able to create something that is easy to use and lot
          more helpful product. We are always aiming to help our customers and
          users to get most out of the product we release and expense tracking
          is no exception to it..
        </p>
        <img src="/aboutUs.svg" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
