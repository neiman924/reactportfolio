import React from 'react';
import formSubmit from '../../assets/js/formsubmit'
// import IMAGES from '../images';

export default function Contact() {
  return (
    <div>

          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />


          {/* <!-- Modal --> */}
          <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="w-100 pt-1 mb-5 text-right">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form action="" method="get" className="modal-content modal-body border-0 p-0">
                      <div className="input-group mb-2">
                          <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                          <button type="submit" className="input-group-text bg-success text-light">
                              <i className="fa fa-fw fa-search text-white"></i>
                          </button>
                      </div>
                  </form>
              </div>
          </div>


          {/* <!-- Start Content Page --> */}
          <div className="container-fluid bg-light py-5">
              <div className="col-md-6 m-auto text-center">
                  <h1 className="h1">Contact</h1>
                  <p>

                  </p>
              </div>
          </div>

          {/* <!-- Start Contact --> */}
          <div className="container py-5">
              <div className="row py-5">
                  <form className="col-md-9 m-auto" method="post">
                      <div className="row">
                          <div className="form-group col-md-6 mb-3">
                              <label for="inputname">Name</label>
                              <input type="text" className="form-control mt-1" id="username" name="name" placeholder="Name"/>
                          </div>
                          <div className="form-group col-md-6 mb-3">
                              <label for="inputemail">Email</label>
                              <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email"/>
                          </div>
                      </div>
                      <div className="mb-3">
                          <label for="inputmessage">Message</label>
                          <textarea className="form-control mt-1" id="comment" name="message" placeholder="Message" rows="8"></textarea>
                      </div>
                      <div className="row">
                          <div className="col text-end mt-2">
                              <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                          </div>
                      </div>
                  </form>


              </div>
          </div>
          {/* <!-- End Contact --> */}

          <script src={formSubmit}></script>

    </div>
  );
}
