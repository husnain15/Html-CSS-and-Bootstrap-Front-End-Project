import React from "react";

const NewsCarosel = () => {
  return (
    <>
      <div
        id="multi-item-example"
        className="carousel slide carousel-multi-item"
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
                <div className="card mb-2">
                  <img
                    style={{
                      borderRadius: "0px 25px",
                      height: "220px",
                    }}
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" style={{ position: "none" }}>
                  <img
                    style={{
                      borderRadius: "0px 25px",
                      height: "220px",
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
                      borderRadius: "0px 25px",
                      height: "220px",
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
                      height: "220px",
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
                      height: "220px",
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
                      height: "220px",
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
                      height: "220px",
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
                      height: "220px",
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
                      height: "220px",
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
    </>
  );
};

export default NewsCarosel;
