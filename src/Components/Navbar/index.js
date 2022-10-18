import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="www.google.com.pk" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={"/signUp"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/logIn"}>Log In</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/postJob"}>Post Job</Link>
            </li>
            <li>
              <Link to={"/job"}>job</Link>
            </li>
            {/* <li>
              <Link to={"/signUp"}>SignUp</Link>
            </li> */}
            {/* <li>
              <Link to={"/signUp"}>SignUp</Link>
            </li>
            <li>
              <Link to={"/signUp"}>SignUp</Link>
            </li>
            <li>
              <Link to={"/signUp"}>SignUp</Link>
            </li><li>
              <Link to={"/signUp"}>SignUp</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
