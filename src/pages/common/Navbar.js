import React from "react";
import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import logo from "../../images/purrfectlogo.png"

const Navbar = () => {

	const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position to determine if the navbar should change color
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Define a CSS class for the navbar based on the scroll state
  const navbarClass = isScrolled ? "navbar scrolled" : "navbar";

	return(
		
		 <div className="container-fluid navigation_bar">
      <nav className={`navscroll ${navbarClass} fixed-top navbar-expand-lg navbar-light py-2 px-3`}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo1" className="img-fluid" width="160" />
          </NavLink>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="text-white"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/"><span className="d-lg-none d-xl-none mr-3"></span>Home<span className="sr-only"></span></NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/service"><span className="d-lg-none d-xl-none mr-3"></span>Services</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/Health"><span className="d-lg-none d-xl-none mr-3"></span>Health</NavLink>
				      </li>
					  <li className="nav-item">
				        <NavLink exact className="nav-link" to="/products"><span className="d-lg-none d-xl-none mr-3"></span>Products</NavLink>
				      </li>
				      {/* <li className="nav-item">
				        <NavLink exact className="nav-link" to="/about"><span className="d-lg-none d-xl-none mr-3"></span>About</NavLink>
				      </li> */}
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/contact"><span className="d-lg-none d-xl-none mr-3"></span>Contact</NavLink>
				      </li>
					  <li className="nav-item">
				        <NavLink exact className="nav-link" to="/signin"><span className="d-lg-none d-xl-none mr-3"></span>Log In</NavLink>
				      </li>

				    </ul>
				  </div>
				</div>
			</nav>
		</div>
		
	);
};

export default Navbar;