import F12tdf from '../assets/images/f12tdf.webp';
import HuayraBC from '../assets/images/huayra-bc.webp';
import F8tributo from '../assets/images/f8-tributo.webp';
import F488 from '../assets/images/488.webp';
import LamboSVJ from '../assets/images/svj.webp';
import LaFerrari from '../assets/images/laferrari.webp';
import SuperFast from '../assets/images/812-superfast.webp';
import Mclaren600lt from '../assets/images/600lt.webp';
import F430 from '../assets/images/f430.webp';
import ZondaCinque from '../assets/images/zonda-cinque.webp';
import AventadorSV from '../assets/images/aventador-sv.webp';
import F488Pista from '../assets/images/488-pista.webp';
import DB12 from '../assets/images/db12.webp';
import Divo from '../assets/images/bugatti-divo.webp';

const Cars = () => {
  return (
    <section className="cars" id="cars">
      <div className="cars_text">
        <h2>The cars that are hot right now</h2>
        <p>Buy yours and be the most stylish in the neighborhood</p>
      </div>
      <div className="cars_car-slider">
        <div className="cars_car-slider_list1">
          <div className="item-left item1">
            <img src={F12tdf} alt="Ferrari-f12tdf" />
            <div className="overlay">
              <h3>Ferrari F12tdf</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-left item2">
            <img src={HuayraBC} alt="Pagani-Huayra-BC" />
            <div className="overlay">
              <h3>Pagani Huayra BC</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-left item3">
            <img src={F8tributo} alt="Ferrar-F8-Tributo" />
            <div className="overlay">
              <h3>Ferrar F8 Tributo</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-left item4">
            <img src={F488} alt="Ferrari-488" />
            <div className="overlay">
              <h3>Ferrari 488</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-left item5">
            <img src={LamboSVJ} alt="Lamborghini-SVJ" />
            <div className="overlay">
              <h3>Lamborghini SVJ</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-left item6">
            <img src={LaFerrari} alt="Ferrari-LaFerrari" />
            <div className="overlay">
              <h3>Ferrari LaFerrari</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-left item7">
            <img src={SuperFast} alt="Ferrari-812-Superfast" />
            <div className="overlay">
              <h3>Ferrari 812 Superfast</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
        </div>
        <div className="cars_car-slider_list2">
          <div className="item-right item1">
            <img src={Mclaren600lt} alt="Mclaren-600lt" />
            <div className="overlay">
              <h3>Mclaren 600lt</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-right item2">
            <img src={ZondaCinque} alt="Pagani-Zonda-Cinque" />
            <div className="overlay">
              <h3>Pagani Zonda Cinque</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-right item3">
            <img src={F430} alt="Ferrari-F430" />
            <div className="overlay">
              <h3>Ferrar F430</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-right item4">
            <img src={F488Pista} alt="Ferrari-488-Pista" />
            <div className="overlay">
              <h3>Ferrari 488 Pista</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-right item5">
            <img
              src={AventadorSV}
              alt="Lamborghini-Aventador-SV"
            />
            <div className="overlay">
              <h3>Lamborghini Aventador SV</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-right item6">
            <img src={DB12} alt="Aston-Martin-DB12" />
            <div className="overlay">
              <h3>Aston Martin DB12</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item-right item7">
            <img src={Divo} alt="Bugatti-Divo" />
            <div className="overlay">
              <h3>Bugatti Divo</h3>
              <p>Description</p>
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
