import React from 'react';
import IMAGES from '../images'
export default function About() {
  const cardStyle = {
    textAlign:'justify',
  };

  return (
    <div>
     <div>
     <section className="bg-success py-5">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-8 text-white">
            <h1>About Me</h1>
            <h4>I'm Jason Neiman! a passionate Fullstack WEB Developer!</h4>
            <p style={cardStyle}>
              What can a “full-stack web developer” do, you ask?
              I can conjur a website from nothing into existence, fully formed. I do not use tricks, nor is this magic. I specialize in manipulating the very fabric of the web, its raw materials of HTML, CSS, JavaScript, and SVG.
              I'm graduated from the Univercity of Washington Fullstack Javascript Bootcamp. I can plan, design, build, launch, and maintain a website.
              A full-stack developer knows no bounds. And when they find one they cross it without hesitation, boldly going into the unknown to return richer for it.
            </p>
          </div>
          <div className="col-md-4">
            <img src={IMAGES.aboutImg} alt="About Hero" />
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">My Projects</h1>
            <p>
              Define the solution, create a roadmap,
              establish architecture and design the product.
            </p>
          </div>
        </div>
        <div className="row">

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
              <h2 className="h5 mt-4 text-center">Create a Roadmap</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fas fa-exchange-alt"></i></div>
              <h2 className="h5 mt-4 text-center">Research</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
              <h2 className="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fa fa-user"></i></div>
              <h2 className="h5 mt-4 text-center">24 Hours Support</h2>
            </div>
          </div>
        </div>
      </section><section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Technologies</h1>
              <p>
                Here is some of the Technologies I use in my projects
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a className="h1" href="#slide-brand" role="button" data-bs-slide="prev">
                    <i className="text-light fas fa-chevron-left"></i>
                  </a>
                </div>

                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-3 pt-md-3" id="slide-brand" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">

                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo13} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo2} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo3} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo4} alt="Brand Logo" />
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo5} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo6} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo7} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo8} alt="Brand Logo" />
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo9} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo1} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo11} alt="Brand Logo" />
                          </div>
                          <div className="col-3 p-md-5">
                            <img className="img-fluid brand-img" src={IMAGES.techLogo12} alt="Brand Logo" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <a className="h1" href="#slide-brand" role="button" data-bs-slide="next">
                    <i className="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    </div>
  );
}
