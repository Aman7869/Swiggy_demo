import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
          <div className="container-fluid my-5" style={{padding: "0px"}}>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#3e4551' }}>
        <div className="container-fluid p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">FOOTER CONTENT</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis assumenda iusto sapiente inventore animi?
                </p>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>

              {/* Add the remaining columns similarly */}
            </div>
          </section>

          <hr className="mb-4" />

          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button type="button" className="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>

          <hr className="mb-4" />

          <section className="mb-4 text-center">
            {/* Add social media buttons here */}
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
        </>
    )
}

export default Footer;