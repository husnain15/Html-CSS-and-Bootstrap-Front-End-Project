import React from "react";

const TourVideo = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12 ">
            <div className="embed-responsive embed-responsive-16by9 ">
              <iframe
                style={{
                  borderRadius: "20px",
                }}
                className="embed-responsive-item "
                width="620px"
                height="350px"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel= "
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourVideo;
