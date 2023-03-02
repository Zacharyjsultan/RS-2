import React from "react";
import "./Biofield.css";

const Biofield = () => {
  return (
    <div className="bio-container">
      <h1 className="zach">Biofield Tuning</h1>
      <h2 className="blog-header">What is BioField Tuning?</h2>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YqQ4QlBbJFQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className="blog">sdfs</p>
      </div>
      <div className="biofield-disclaimer">
        Note: Biofield Tuning is not intended for those with cancer, in
        palliative care or with heavy metal toxicity, as your detox pathways
        need to be functioning well in order for clearing to take place. For a
        full list of cautions
        see: biofieldtuningstore.com/pages/cautions-guidance
      </div>
    </div>
  );
};

export default Biofield;
