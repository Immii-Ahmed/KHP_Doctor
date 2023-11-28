import React from "react";
import Links from "../Links";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid mx-4">
          <img src="favicon.png" alt=""/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Links address={"/"} title={"Home"}/>
              </li>
              <li className="nav-item">
              <Links address={"##"} title={"Services"}/>
              </li>
              <li className="nav-item">
              <Links address={"##"} title={"About"}/>
              </li>
              <li className="nav-item">
              <Links address={"/login"} title={"Login"}/>
              </li>
              <li className="nav-item">
              <Links address={"/signup"} title={"Signup"}/>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
