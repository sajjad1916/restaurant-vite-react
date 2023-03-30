import React, { useState, useEffect } from "react";
import "../assets/styles/header.css";
import "../assets/styles/hero.css";
import "../assets/styles/about.css";
import "../assets/styles/whyus.css";
import "../assets/styles/statics.css";
import "../assets/styles/menu.css";
import "../assets/styles/testimonial.css";
import "../assets/styles/chefs.css";
import "../assets/styles/reservation.css";
import "../assets/styles/contact.css";
import "../assets/styles/footer.css";
import Header from "../components/common/Header";
import About from "../components/ui/About";
import Hero from "../components/ui/Hero";
import WhyUs from "../components/ui/WhyUs";
import Statics from "../components/ui/Statics";
import Menu from "../components/ui/Menu";
import Testimonial from "../components/ui/Testimonial";
import Chefs from "../components/ui/Chefs";
import Reservation from "../components/ui/Reservation";
import Contact from "../components/ui/Contact";
import Footer from "../components/common/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <Header />
          <Hero />
          <main id="main">
            <About />
            <WhyUs />
            <Statics />
            <Menu />
            <Testimonial />
            <Chefs />
            <Reservation />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
