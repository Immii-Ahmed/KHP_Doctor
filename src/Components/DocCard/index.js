import React, { useState } from "react";
import Image from './pexels-karolina-grabowska-4021775.jpg'

const DocCard = () => {
  return (
    <>
      <div className="col">
      <div className="card" style={{    width: '100%',
    padding: '0rem'}}>
        <img className="card-img-top w-100 d-block" src={Image} />
        <div className="card-body">
          <h4 className="card-title">Col: Mazhar Shafique</h4>
          <p className="card-text">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background: "rgb(22,24,27)",
              borderColor: "rgb(16,15,15)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default DocCard;
