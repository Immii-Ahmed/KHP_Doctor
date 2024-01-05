import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  authenticatedRouteNames,
  authenticatedRoutes,
  unAuthenticatedRouteNames,
  unAuthenticatedRoutes,
} from "../../Utils";
import image from "./favicon.svg";

function Navbar({ children }) {
  const [routesArray, setRoutesArray] = useState(authenticatedRoutes);
  const [routesNamesArray, setRoutesNamesArray] = useState(
    authenticatedRouteNames
  );
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <header className="fixed-top" id="km-header">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="km-navbar-brand text-lg-center">
            <div className="container">
              <button
                className={`navbar-toggler ${isFocused ? "outline-none" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img alt="Website Logo" className="img-fluid" src={image} style={{  maxWidth: '100px', height: 'auto'}} />
              </a>
              <div className="km-navbar-brand-btn-container">
                <Link to="/login">LOGIN</Link> <Link to="/signup">SIGN UP</Link>
              </div>
            </div>
          </div>
          <div className="km-navbar-menu">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  {routesArray?.map((route, index) => {
                    if (index !== routesArray.length - 1) {
                      if (route.path === "/editposts")
                        return <span key={index}></span>;
                      else
                        return (
                          <li className="nav-item" key={index}>
                            <NavLink
                              className="nav-link active"
                              style={{
                                fontWeight: "bold",
                                backdropFilter: "opacity(1)",
                                backdropFilter: "opacity(1)",
                                width: "max-content",
                              }}
                              to={route.path}
                            >
                              {routesNamesArray[index]}
                            </NavLink>
                          </li>
                        );
                    } else {
                      return <>
                        <li className="nav-item km-cart d-flex align-items-center" style={{ paddingTop: '10px' }}>
                            <Link className="nav-link" to="/apointments" 
                            >
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex justify-content-center align-items-center"
                            style={{top:'10px', padding: '4px'}}>
                              0
                            </span>
                              Appointments
                            </Link>
                      </li></>
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}

export default Navbar;
