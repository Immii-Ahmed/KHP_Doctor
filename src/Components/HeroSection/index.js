import React from "react";
import PictureImage from './Astronout.png'

const HeroSection = () => {
  return (
    <>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style={{ maxWidth: "350px" }}>
              <h2
                className="text-uppercase fw-bold"
                style={{ fontFamily: "Abril Fatface serif" }}
              >
                KHP DOCTORS
              </h2>
              <p className="my-3">
                <span style={{ color: "rgb(55, 65, 81)" }}>
                  "Hospitals are places that should be associated with healing,
                  hope, and humanity."
                </span>
              </p>
              <a
                className="btn btn-primary btn-lg me-2"
                role="button"
                href="#"
                style={{
                  background: "rgb(28, 30, 33)",
                  borderColor: "rgb(37, 32, 32)",
                  borderTopColor:
                    "rgb(255,;border-right-color: 255, ;border-bottom-color: 255)",
                  borderLeftColor: "255",
                }}
              >
                Signup
              </a>
              <a
                className="btn btn-outline-dark btn-lg"
                role="button"
                href="#"
                style={{
                  borderColor: "rgb(38, 40, 42)",
                  borderTopColor:
                    "rgb(13,borderRightColor: 110,borderBottomColor: 253)",
                  borderLeftColor: "110,color: rgb(13, 13, 13)",
                }}
              >
                Login
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-xl-5 m-xl-5">
              <img
                className="rounded img-fluid w-100 fit-cover"
                style={{
                  minHeight: "300px",
                  transform: "perspective(990px) translate(0px) scale(1.62)",
                }}
                src={PictureImage}
                width="354"
                height="354"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
