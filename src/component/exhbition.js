import React from "react";

function Exhbition() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="bgimage1 img-fluid img-responsive">
              <div className="container">
                <div className="row">
                  <h1 className="mt-4 ml-4 text-monospace fcolor">
                    Exhibition
                  </h1>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img
                          src="./assets/slider2.jpg"
                          className="mx-auto d-block img-fluid"
                          alt="Image"
                          width="350"
                          height="200"
                        />
                      </div>
                      <div className="col py-5">
                        <img
                          src="./assets/slider2.jpg"
                          className="mx-auto d-block img-fluid"
                          alt="Image"
                          width="350"
                          height="200"
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
    </>
  );
}

export default Exhbition;
