import Bugatti from "../assets/images/bugatti.webp";
const AboutUs: React.FC = () => {
  return (
    <section className="about-us" id="about-us">
      <h2>About Us</h2>
      <div className="content">
        <p>We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for. <br /> <br />
        We maintain outstanding customer service by listening to our customers and making sure that we meet their needs. Even if you don't buy from us, we will offer free advice on whe to look for when buying a used car or truck. <br /> <br /> Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices. We have a wide selection of vehicles and the expertise to deal with what you are looking for.</p>
        <img src={Bugatti} alt="bugatti" />
      </div>
    </section>
  );
};

export default AboutUs;
