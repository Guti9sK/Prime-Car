
import "./styles/main.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import AboutUs from "./sections/AboutUs";
import AmazedByPower from "./sections/AmazedByPower";
import Benefits from "./sections/Benefits";
import Cars from "./sections/Cars";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import gsap from "gsap";
import Header from "./sections/Header";
import Lenis from "lenis";
import Map from "./sections/Map";

const App: React.FC = () => {
 useEffect(() => {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
 }, []);

  return (
    <>
      <Header />
      <AboutUs />
      <Benefits />
      <Cars />
      <AmazedByPower />
      <ContactUs />
      <Map />
      <Footer />
    </>
  );
};

export default App;
