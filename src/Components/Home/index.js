import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import DocCardPage from "../../Pages/DocCardPage";

const Home = () => {
  return (
    <Navbar>
      <HeroSection />
      <DocCardPage />
    </Navbar>
  );
};

export default Home;
