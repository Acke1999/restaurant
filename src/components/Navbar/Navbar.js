import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const links = document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>

      <ul className="app-navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#about">About</a>
        </li>
        <li className="p-opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app-navbar-responsive">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app-navbar-responsive-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay-close"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-responsive-links">
              <li className="p-opensans">
                <a href="home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="about">About</a>
              </li>
              <li className="p-opensans">
                <a href="menu">Menu</a>
              </li>
              <li className="p-opensans">
                <a href="awards">Awards</a>
              </li>
              <li className="p-opensans">
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
