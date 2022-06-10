import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const myDiv = document.getElementById("header");
    function ScrollFunction() {
      // console.log("window.scrollY;", window.scrollY);
      if (window.scrollY > 10) {
        myDiv.classList.add("header-color");
      } else {
        myDiv.classList.remove("header-color");
      }
    }
    window.addEventListener("scroll", ScrollFunction);

    return () => myDiv.removeEventListener("resize", ScrollFunction);
  }, []);

  return (
    <>
      <nav
        id="header"
        className="navbar navbar-expand-sm navbar-dark fixed-top"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <button type="button" className="btn-dark">
                Book A Tour
              </button>

              <li className="nav-item active">
                <a className="nav-link px-4" href="#">
                  <i className="fab fa-twitter"></i>
                  <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link px-4" href="#">
                  <i className="fab fa-facebook"></i>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link px-4" href="#">
                  <i className="fab fa-instagram"></i>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link px-4" href="#">
                  <i className="fab fa-linkedin"></i>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
