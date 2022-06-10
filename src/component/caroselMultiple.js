import React from "react";

const CaroselMultiple = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div
          id="multi-item-example"
          className="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          <div className="controls-top">
            <a
              className="btn-floating"
              href="#multi-item-example"
              data-slide="prev"
            ></a>
            <a
              className="btn-floating"
              href="#multi-item-example"
              data-slide="next"
            ></a>
          </div>

          <ol className="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row" style={{ margin: "0!important" }}>
                <div className="col-md-2">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row" style={{ margin: "0!important" }}>
                <div className="col-md-2">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row" style={{ margin: "0!important" }}>
                <div className="col-md-2">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-2 clearfix d-none d-md-block">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Component start  */}

      <div className="container">
        <div className="row mb-4" style={{ margin: "0!important" }}>
          <div className="col">
            <h3 className="">Renanscian</h3>
            <h1>1400 - 1700</h1>
          </div>
          <div className="col-1 border-left bold "></div>

          <div className="col mr-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              architecto voluptatum nesciunt corporis! Deleniti ratione odit
              distinctio similique nihil ipsam vel hic reiciendis eveniet.
              Quibusdam rerum temporibus cum nobis nulla!
            </p>
          </div>

          <div className="col-md-2 mx-auto">
            <button className="mt-3 mb-1">Explore More</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ margin: "0!important" }}>
          <div className=" col ">
            <div>
              <img
                style={{ height: "45vh", width: "35vh" }}
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                className="card-img-top figure-img img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p>1455/55</p>
                <h5 className="card-title">Ece Agnus Die</h5>
                <p className="card-text">By:Gulvani Paule</p>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <div>
              <img
                style={{ height: "45vh", width: "35vh" }}
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                className="card-img-top figure-img img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p>1455/55</p>
                <h5 className="card-title">Ece Agnus Die</h5>
                <p className="card-text">By:Gulvani Paule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn-secondary btn-sm mb-4">
          Most Renancia Collection
        </button>
      </div>
    </>
  );
};

export default CaroselMultiple;
