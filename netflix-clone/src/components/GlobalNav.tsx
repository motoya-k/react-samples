import React, { useState, useEffect } from "react";
import "./GlobalNav.scss";

export const GlobalNav: React.FC = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const displayHandler = () => {
      if (window.scrollY > 100) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };
    window.addEventListener("scroll", displayHandler);
    return () => {
      window.removeEventListener("scroll", displayHandler);
    };
  }, []);

  return (
    <div className={`Nav ${display && "Nav-black"}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="Nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};
