import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExporeIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExporeIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>PersonOutline</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default NavBar;
