import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Button.css";

const Button = () => {
  const [isVisible, setVisible] = useState(false);
  const handleScroll = () => {
    window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollTop}
    >
      <AiOutlineArrowUp fontSize={18} />
    </button>
  );
};

export default Button;
