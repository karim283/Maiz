import React from "react";
import "./maiz.css";
import logo from "./assets/logo.png";
import vector from "./assets/Group.svg";
import image from "./assets/image1.png";
import vector1 from "./assets/Vector.png";
import vector2 from "./assets/Vector1.png";
import image2 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import vector3 from "./assets/line.png";
import vector4 from "./assets/vector2.png";
import image7 from "./assets/Quote.png";
import logo2 from "./assets/logo2.png";
import bottom from "./assets/Bottom.png";

function Maiz() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <div className="nav">
          <button>About</button>
          <button>Menu</button>
          <button>Venue</button>
          <button>Events</button>
        </div>
        <button className="book">Book Now</button>

        <img src={vector} alt="" className="vector" />

        <div className="section1">
          <img src={image} alt="" className="image1" />
          <img src={vector2} alt="" className="vector2" />

          <div className="text1">
            <p>Taste the authentic Saudi cuisine</p>
          </div>
          <p className="text2">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="book2">Our Menu</button>
          <img src={vector1} alt="" className="vector1" />
        </div>
      </div>

      <div className="section2">
        <img src={image2} alt="" className="image2" />
        <div className="text3">
          <p className="text4">
            A distinctive dining destination inspired by the culture.
          </p>
          <p className="text5">Experience Al Balad old town of Jeddah vibes.</p>
          <button className="book3">Book Now</button>
          <button className="book4">Book Now</button>

          <div className="photo">
            <img src={image4} alt="" className="image4" />

            <img src={image5} alt="" className="image5" />

            <img src={image6} alt="" className="image6" />
          </div>
          <img src={vector3} alt="" className="vector3" />

          <img src={vector4} alt="" className="vector4" />
        </div>
      </div>

      <div className="section3">
        <img src={image7} alt="" className="image7" />
      </div>

      <div className="section4">
        <div className="content">
          <img src={vector2} alt="" />
          <p className="text6">
            A unique menu that reflects the true essence of the Saudi cuisine
          </p>
          <div className="buttons2">
            <button className="book3">Book Now</button>
            <button className="book4">Book Now</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={logo2} alt="" className="logo2" />
        <div className="nav2">
          <button className="home">Home</button>
          <button className="home">About</button>
          <button className="home">Menu</button>
          <button className="home">Venue</button>
          <button className="home">Events</button>
          <button className="home">Contact us</button>
        </div>
        <div className="footer2">
          <hr color="#243054" hieght="1px" />
          <img src={bottom} alt="" className="bottom" />
        </div>
      </div>
    </>
  );
}
export default Maiz;
