import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const AboutUs: React.FC = () => {
  useEffect(() => {
    const aboutSection : HTMLElement | null = document.querySelector('.about-us');
    
    gsap.fromTo('.about-us .content p', {
        opacity: 0,
        x: -400,
        duration: 1
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      });
    gsap.fromTo('.about-us .content img', {
        opacity: 0,
        x: 1200,
        duration: 1
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      });
  }, []);
  return (
    <section className="about-us" id="about-us">
      <h2>About Us</h2>
      <div className="content">
        <p>We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for. <br /> <br />
        We maintain outstanding customer service by listening to our customers and making sure that we meet their needs. Even if you don't buy from us, we will offer free advice on whe to look for when buying a used car or truck. <br /> <br /> Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices. We have a wide selection of vehicles and the expertise to deal with what you are looking for.</p>
        <img src="/images/bugatti.jpg" alt="bugatti" />
      </div>
    </section>
  );
};

export default AboutUs;
