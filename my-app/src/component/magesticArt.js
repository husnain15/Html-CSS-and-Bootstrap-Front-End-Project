import React from "react";

const MagesticArt = () => {
  return (
    <div className="bgcolor4">
      <h1 className="text-center text-monospace display-4 fcolor">
        The Magestic Arts
      </h1>
      {/* Images */}
      <div className="container">
        <div className="row border-round">
          <div className=" col">
            <div>
              <img
                style={{ height: "30vh", width: "55vh" }}
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col mt-5 ">
            <div>
              <img
                style={{ height: "30vh", width: "55vh" }}
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h3 className="text-center py-4">A Premier Art Curetor Part Excelence</h3>
      <div className="row" style={{ marginRight: "15px" }}>
        <div className="container">
          <div className="col-12 ml-3">
            <p className="text-center text-sm-start text-monospace justify-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              pariatur laboriosam facilis beatae quas hic error, qui iusto alias
              aut deserunt temporibus ex illo quaerat esse quibusdam! Est
              tempore maiores voluptates velit voluptas vero in illo corrupti,
              eligendi quod nemo dolore autem, fuga explicabo sunt? Dolorum
              dolor exercitationem officia eveniet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dolorem quos cupiditate
              exercitationem minus doloremque facere nemo voluptatum quae
              quaerat dicta? Culpa velit consequuntur cumque totam possimus
              autem ad, aut assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagesticArt;
