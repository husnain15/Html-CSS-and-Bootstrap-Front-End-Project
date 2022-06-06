import React from "react";
import Navbar from "./navbar";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ padding: "0!important" }}
        data-ride="carousel"
      >
        <Navbar />

        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "100vh" }}
              src="./assets/slider1.jpg"
              className="d-block w-100"
              alt="slider img"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "100vh" }}
              src="./assets/slider2.jpg"
              className="d-block w-100"
              alt="slider"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "100vh" }}
              src="./assets/slider3.jpg"
              className="d-block w-100"
              alt="slider image"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Slider;
