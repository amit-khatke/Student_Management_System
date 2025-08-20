import React from "react";
import Navbar from "../../components/Navbar";
import FeaturesThree from "../../components/FeaturesThree";
import ContactSection from "../../components/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      {/* Main Content */}
      <main className="flex-grow">
        <FeaturesThree />
        <ContactSection />
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
