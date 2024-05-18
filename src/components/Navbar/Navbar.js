//Navbar component
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AOS } from "aos";

function Navbar() {
  return (
    <div data-AOS="fade-down" data-AOS-duration="1000" className="page-nav">
      <div className="navbar navbar-expand-lg navbar-light">
        {/* LOGO */}
        <div>
          <Link className="navbar-brand" to="/">
            <img
              src="https://static.tildacdn.com/tild3036-3365-4337-b062-646437623830/Uprising_Brand-platf.svg"
              alt="logo"
              width="116px"
              height="40.75px"
            />
          </Link>
        </div>
        {/* BUTTON  */}
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={() => {document.querySelector(".full-screen").classList.add("screen-show")}}
          >
            <span className="navbar-toggler-icon">. . .</span>
          </button>
        </div>
        {/* NAVBAR */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style={{
              alignItems: "center",
            }}
            className="navbar-nav mr-auto main"
          >
            <li className="nav-item active">
              <Link className="nav-link" to="/projects">
                <span className="nav-item-title">Projects</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <span className="nav-item-title">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/landing">
                <div className="nav-item-title">Landing pages</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">
                <div className="request-button">Send a request</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="full-screen full-width" id="navbarSupportedContent">
        <div>
          <button className="navbar-collapsed-toggler-icon-container"
          onClick={() => {document.querySelector(".full-screen").classList.remove("screen-show")}}>
          <span className="navbar-collapsed-toggler-icon"></span>
          </button>
        </div>
          <ul
            
            className="navbar-nav mr-auto"
          >
            <li>
            <Link className="navbar-brand" to="/">
            <img
              src="https://static.tildacdn.com/tild3036-3365-4337-b062-646437623830/Uprising_Brand-platf.svg"
              alt="logo"
              width="116px"
              height="40.75px"
            />
          </Link>
            </li>
            <li className="nav-item active" style={{marginTop: "30px"}} >
              <Link className="nav-link" to="/projects">
                <span className="nav-item-title">Projects</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <span className="nav-item-title">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/landing">
                <div className="nav-item-title">Landing pages</div>
              </Link>
            </li>
            <li className="nav-item nav-text">
            Huckletree (space Shoreditch) ∙ 18 Finsbury Square, London, EC2A 1AH, United Kingdom
            <br />service@uprising.agency
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">
                <div className="request-button">Send a request</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
