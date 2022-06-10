import React from "react";

const ExploreCollection = () => {
  return (
    <>
      <div className="display-3 text-monospace text-center p-3">
        Art Inspiration of the
        <br /> 12th Century
        <h2 className="fcolor">Explore Collection</h2>
      </div>

      <div className="container ">
        <div className="row ">
          <div className="col ">
            <div
              id="multi-item-example"
              className=" carousel slide carousel-multi-item"
              data-ride="carousel"
            >
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
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        style={{ position: "none ! important" }}
                        className="card mb-2"
                      >
                        <img
                          style={{
                            borderRadius: "25px 25px",
                            height: "320px",
                          }}
                          className="card-img-top outlinr"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                          alt="Card image"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "25px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "25px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "0px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "0px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "0px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "0px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "0px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img
                          style={{
                            borderRadius: "0px 25px",
                            height: "320px",
                          }}
                          className="card-img-top"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mr-4 mt-5">
        <div className="row ">
          <div className="col-md-5">
            <img
              style={{
                borderRadius: "50px 0px 50px 50px",
                height: "65%",
                width: "75%",
              }}
              src="./assets/news.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div className="col-md-6">
            <p className=" mt-3 mr-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus illum quia velit expedita rem perferendis vitae
              possimus facilis. Quod facere repudiandae reiciendis soluta
              cupiditate suscipit laborum nam commodi atque, laudantium harum
              adipisci, qui quibusdam iure consectetur voluptate autem?
              Corporis, voluptates at natus deserunt doloremque quas quam
              officia quo voluptatum ea?
            </p>
          </div>
          <h2 className="text-center ml-4 mb-4 mr-3">BuY and Sell With us</h2>
        </div>
      </div>
    </>
  );
};

export default ExploreCollection;
