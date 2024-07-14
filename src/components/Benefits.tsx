import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits : React.FC = () => {
  useEffect(() => {
    const benefitsSection : HTMLElement | null = document.getElementById('benefits');

    gsap.from('.benefits > *', {
      opacity: 0,
      y: 600,
      duration: 1,
      scrollTrigger: {
        trigger: benefitsSection,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
    });
  }, []);
  return (
    <section className="benefits" id="benefits">
        <div className="benefits_text">
          <h2>All the benefits you will get <br /> when you shop with us</h2>
          <p>Take advantage of everything you can have now by buying your new car at Prime Car</p>
        </div>
        <div className="benefits_items">
          <div className="benefits_items_item-1">
            <img src="images/MAP.svg" alt="icono mapa" />
            <div className="benefits_items_item-1_text">
            <h3>Several Headquarters</h3>
            <p>You can find several Prime Car stores around the United States!</p>
            <a href="#">Find the store closest to you now</a>
            </div>
          </div>
          <div className="benefits_items_item-2">
          <img src="images/CALENDAR.svg" alt="icono calendario" />
          <div className="benefits_items_item-2_text">
            <h3>Schedule Your Best Day</h3>
            <p>Choose the day and time to take a test drive for free!</p>
            </div>
          </div>
          <div className="benefits_items_item-3">
          <img src="images/KEY.svg" alt="icono llaves" />
          <div className="benefits_items_item-3_text">
            <h3>Receive Your Car Right Away</h3>
            <p>Close the contract and you get the keys right away</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Benefits;
