
import "./styles/main.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import AmazedByPower from "./components/AmazedByPower";
import Benefits from "./components/Benefits";
import Cars from "./components/Cars";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import gsap from "gsap";
import Header from "./components/Header";
import Lenis from "lenis";
import Map from "./components/Map";

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
