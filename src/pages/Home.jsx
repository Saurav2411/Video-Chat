import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import PartnerLogo from "../components/PartnerLogo";

function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogo />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
