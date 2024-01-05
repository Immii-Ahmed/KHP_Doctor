import React from 'react'
import HeroSection from '../HeroSection'

const Doctors = () => {
  return (
    <>
    <section>
  <div className="container py-5" style={{marginTop:'16rem'}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5 w-100">
        <div style={{borderRadius: '15px', border:'1px solid #ebeced', boxShadow: '5px 10px #ebeced'}}>
          <div className="card-body p-4 text-black">
            <div>
              <h6 className="mb-4">Radiologist (FCPS)</h6>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p className="small mb-0"><i className="far fa-clock me-2"></i>3 hrs</p>
                <p className="fw-bold mb-0">Rs 400</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                  alt="Generic placeholder image" className="img-fluid rounded-circle border border-dark border-3"
                  style={{width: '70px'}}/>
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="d-flex flex-row align-items-center mb-2">
                  <p className="mb-0 me-2">Lt Col Mazhar Shafique</p>
                  <ul className="mb-0 list-unstyled d-flex flex-row" style={{color: '#1B7B2C'}}>
                    <li>
                      {/* <i className="fas fa-star fa-xs"></i> */}
                      <i class="fa-solid fa-car fa-xs"></i>

                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                  </ul>
                </div>
                <div>
                  <button type="button" className="btn btn-outline-dark btn-rounded btn-sm"
                    data-mdb-ripple-color="dark">+ Check Records</button>
                  <button type="button" className="btn btn-outline-dark btn-rounded btn-sm mx-3"
                    data-mdb-ripple-color="dark">See profile</button>
                  <button type="button" className="btn btn-outline-dark btn-floating btn-sm"
                    data-mdb-ripple-color="dark"><i className="fas fa-comment"></i></button>
                </div>
              </div>
            </div>
            <hr/>
            <p className="my-4 pb-1">52 Patients</p>
            <button type="button" className="btn btn-dark btn-rounded btn-block btn-lg"><i
                className="far fa-clock me-2"></i>Get a Apointment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Doctors
