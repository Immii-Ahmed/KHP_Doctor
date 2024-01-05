import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import image from "./ambulance.png";
import dentalImage from "./clean.png";
import heartImage from "./heart-rate.png";
import bloodImage from "./blood-test.png";
import serviceImage from "./customer-service.png";
import secureImage from "./verified.png";

const Services = () => {
  return (
    <Navbar>
      <HeroSection />
      <section
        id="services"
        className="services"
        style={{ marginBottom: "5rem" }}
      >
        <div className="text-center">
          <h2
            style={{
              color: "#181919",
              fontSize: "40px",
              fontFamily: "Alatsi, sans-serif",
              margin: "0px",
              marginTop: "4rem",
            }}
          >
            Our Services
            <span style={{ color: "#d12d33" }}>
              <strong>&nbsp;</strong>
            </span>
          </h2>
          <p className="d-inline-block" style={{ width: "50%" }}>
            <strong>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </strong>
            <br />
            &nbsp; &nbsp;&nbsp;
          </p>
        </div>
        <div className="container-md section-title">
          <div
            className="row d-flex d-xxl-flex justify-content-center justify-content-xxl-center"
            style={{ width: "fit-content" }}
          >
            <div className="col-9 text-center col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="text-center icon-box">
                <div className="icon">
                  <img
                    src={image}
                    alt="Ambulance Image"
                    style={{ width: "80px", marginBottom: "15px" }}
                  />
                  <h4 className="title">
                    Emergency Care<a href="#"></a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 text-center col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="text-center icon-box">
                <div className="icon">
                  <img
                    src={dentalImage}
                    alt="Dental Image"
                    style={{ width: "80px", marginBottom: "15px" }}
                  />
                  <h4 className="title">Dental Care</h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 text-center col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="text-center icon-box">
                <div className="icon">
                  <img
                    src={heartImage}
                    alt="Heart Image"
                    style={{ width: "80px", marginBottom: "15px" }}
                  />
                  <h4 className="title">
                    Heart Disease<a href="#"></a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row d-flex d-xxl-flex justify-content-center justify-content-xxl-center"
            style={{ width: "fit-content" }}
          >
            <div className="col-9 text-center col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="text-center icon-box">
                <div className="icon">
                  <img
                    src={bloodImage}
                    alt="Blood Image"
                    style={{ width: "80px", marginBottom: "15px" }}
                  />
                  <h4 className="title">
                    Blood Test<a href="#"></a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 text-center col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="text-center icon-box">
                <div className="icon">
                  <img
                    src={serviceImage}
                    alt="Service Image"
                    style={{ width: "80px", marginBottom: "15px" }}
                  />
                  <h4 className="title">
                    Outdoor Services<a href="#"></a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 text-center col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="text-center icon-box">
                <div className="icon">
                  <img
                    src={secureImage}
                    alt="Secure Image"
                    style={{ width: "80px", marginBottom: "15px" }}
                  />
                  <h4 className="title">
                    Private &amp; Secure<a href="#"></a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Navbar>
  );
};

export default Services;
