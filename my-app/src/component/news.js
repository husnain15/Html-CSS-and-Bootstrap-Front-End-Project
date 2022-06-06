import React from "react";
import NewsCarosel from "./newsCarosel";
const News = () => {
  return (
    <>
      <h2 className="fcolor py-5 text-center text-monospace">
        News And Articles
      </h2>
      <div className="container">
        <div className="row">
          <div className=" col">
            <h5 className="fcolor">
              Lorem ipsum dolor sit amet, consectetur adipisicing hjkdg tydtd.
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem
              sit pariatur dolor, sed dolorum magnam quisquam hic ullam
            </p>
            <p>
              amet, sit pariatur dolor, sed dolorum magnam quisquam hic ullam
              enim repellat aliquid nihil temporibus nesciunt eos quaerat beatae
              quidem itaque, a quo molestiae. Ratione accusantium nisi libero
              vitae tempore, dolore velit sint suscipit maxime autem. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Animi nemo
              ipsam, tempora voluptatum dignissimos hic.
            </p>
            <button type="button" className="btn-secondary btn-sm mb-4">
              Explore More
            </button>
          </div>
          <div className="col">
            <NewsCarosel />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
