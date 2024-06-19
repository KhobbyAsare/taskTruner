import {  useEffect, useState } from "react";
import "./NavigationBar.scss";
import useBrand from "../../../context-api/Brandname-context/brandname";
import useAuth from "../../../context-api/AuthContext/auth";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { brandname } = useBrand();
  const { user, isLoggedIn } = useAuth();

  useEffect(()=>{
    console.log(user)
  })

 

  return (
    <>
      <nav>
        <div className="navlinks-holder">
          <div className="brandname">{brandname}</div>
          <div className="navLinks">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/services">
              Feature
            </Link>
            <Link className="link" to="">
              How it works
            </Link>
            <Link className="link" to="">
              Contact
            </Link>
          </div>
          <button className="signup-btn">
            {isLoggedIn ? user.name : "Signup"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="m10 17l5-5m0 0l-5-5"
              />
            </svg>
          </button>

          <div className="smaller-screen-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              onClick={() => setShowMenu(!showMenu)}
            >
              <path
                fill="#666666"
                d="M12 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-5 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
              />
            </svg>
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="smaller-screen-links">
          <div className="top-wrapper">
            <div className="brandname">{brandname}</div>
            <div className="navlinks-holder">
              <Link className="link" to="#home">
                Home
              </Link>
              <Link className="link" to="#about">
                About
              </Link>
              <Link className="link" to="#services">
                Feature
              </Link>
              <Link className="link" to="#services">
                How it works
              </Link>
              <Link className="link" to="#contact">
                Contact
              </Link>
            </div>
          </div>

          <button className="signup-btn">
            Signup{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="m10 17l5-5m0 0l-5-5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
