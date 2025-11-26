import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyCreatex from "./components/WhyCreatex";
import FeaturedCourses from "./components/FeaturedCourses";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <WhyCreatex />
      <FeaturedCourses />
      <HowItWorks />
    </div>
  );
};

export default App;
