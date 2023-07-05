import React from "react";
import Navbar from "../components/landing/Navbar";
import Services from "../components/landing/Services";
import AboutUs from "../components/landing/AboutUs";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <div className="flex container">
        <h1>
          Save your money ,<br /> Enjoy your life...
        </h1>
        <img src="/money.svg" alt="photo" className="hero-image" />
      </div>

      <Services />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default LandingPage;
