import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" container-fluid page-footer font-small  bg-dark">
        <div className="text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mt-4   mx-auto">
              <h2 className="fcolor py-4">Logo</h2>
            </div>
            <div className="mt-4 col-md-6 mx-auto">
              <h2 className="fcolor">Hallow</h2>
              <h4 className="fcolor">My Name is</h4>
              <hr />

              <h4 className="fcolor">My Email is</h4>
              <hr />
            </div>
            <div className="row-md-3 mt-auto">
              <button className="btn btn-dark ">SUBMIT</button>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-3 mx-auto">
              <h5 className=" fcolor text-uppercase mt-3 mb-4">Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Magestic Art</a>
                </li>
                <li>
                  <a href="#!">About Board Member</a>
                </li>
                <li>
                  <a href="#!">Events</a>
                </li>
                <li>
                  <a href="#!">Artist</a>
                </li>
                <li>
                  <a href="#!">Book a Tour</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 fcolor mx-auto">
              <h5 className="text-uppercase mt-3 mb-4">Corporate</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Press</a>
                </li>
                <li>
                  <a href="#!">Updates</a>
                </li>
                <li>
                  <a href="#!">News</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Carrers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className=" text-uppercase mt-3 mb-4 fcolor">Supports</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Contact us</a>
                </li>
                <li>
                  <a href="#!">About us us</a>
                </li>
                <li>
                  <a href="#!">Location</a>
                </li>
                <li>
                  <a href="#!">Faqs</a>
                </li>
                <li>
                  <a href="#!">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className=" fcolor text-uppercase mt-3 mb-4">Services</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Scientific Authentication</a>
                </li>

                <li>
                  <a href="#!">Resolution of Auth</a>
                </li>
                <li>
                  <a href="#!">Evaluation Art</a>
                </li>
                <li>
                  <a href="#!">Locating Masterpices</a>
                </li>
                <li>
                  <a href="#!">Buyer Advising</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ height: "3px", backgroundColor: "black" }}></div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div
              style={{ color: "white" }}
              className="footer-copyright text-center py-3 "
            >
              © 2020 Copyright: MDBootstrap.com
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="text-center py-3">
              <ul style={{ display: "flex", color: "white" }}>
                <a className="ml-3" href="/">
                  <i style={{ color: "white" }} className="fab fa-linkedin"></i>
                </a>

                <a className="ml-3" href="#!">
                  <i style={{ color: "white" }} className="fab fa-twitter" />
                </a>
                <a className="ml-3" href="#!">
                  <i style={{ color: "white" }} className="fab fa-facebook"></i>
                </a>
                <a className="ml-3" href="#!">
                  <i
                    style={{ color: "white" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
