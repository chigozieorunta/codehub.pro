import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

let state = false;

const hiddenState = {
  left: "-80%",
};

const visibleState = {
  left: "0",
};

const MobileNav = () => {
  const [mobileNavState, setMobileNavState] = useState(hiddenState);

  const slideOut = () => {
    !state ? setMobileNavState(visibleState) : setMobileNavState(hiddenState);
    state = !state;
  };

  return (
    <section>
      <button id="site-mobile-toggler" onClick={slideOut}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul id="site-mobile-nav" style={mobileNavState}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
