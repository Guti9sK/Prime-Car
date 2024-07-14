import gsap from "gsap";
import React, { useEffect } from "react";

const Header : React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.header_hero .content > *', {
      opacity: 0,
      x: -400,
      duration: 1
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.Out',
      stagger: .4
    });
  }, []);
  return (
    <header className="header">
      <nav className="header_nav">
        <div className="logo">
          <h2>PRIME CAR</h2>
        </div>
        <li className="has-submenu">
          <a href="#">Services</a>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about-us">About</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#cars">Cars</a>
            </li>
            <li>
            <button>Contact Us</button>
            </li>
          </ul>
        </li>
        <ul>
          <a href="/">Home</a>
          <a href="#about-us">About</a>
          <a href="#benefits">Benefits</a>
          <a href="#cars">Cars</a>
        </ul>
        <button>Contact Us</button>
      </nav>
      <div className="header_hero">
        <img src="/images/hero.jpg" alt="hero image" />
        <div className="content">
          <h1>
            MORE ECONOMY, <br />
            SAME SPEED
          </h1>
          <p>
            The most beloved cars of the moment <br /> for those who want to
            ride in style <br /> without spending too much.
          </p>
          <button>
            Discover{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
