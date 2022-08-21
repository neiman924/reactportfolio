import * as React from "react";
import IMAGES from "./images";
// import jQuery from '../assets/js/jquery-1.11.0.min.js';
// import jQueryMigrate from '../assets/js/jquery-migrate-1.2.1.min.js';
// import Bootstrap from '../assets/js/bootstrap.bundle.min.js';
// import templatemo from '../assets/js/templatemo.js';

export default function Footer() {
    return (
    <div>
    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">JNeiman</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            Great Seattle Area
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:206-771-5104">206-771-5104</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:neiman924@gmail.com">neiman924@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none" href="/">Home</a></li>
                        <li><a className="text-decoration-none" href="/about">About</a></li>
                        <li><a className="text-decoration-none" href="/projects">Projects</a></li>
                        <li><a className="text-decoration-none" href="/contact">Contact</a></li>
                        <li>
                            {/* {{#if logged_in}} 
                               <a class="text-decoration-none" href="/logout">logout</a>
                            {{else}}
                               <a class="text-decoration-none" href="/login">login</a>
                            {{/if}} */}
                        </li>    
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noreferrer" href="http://facebook.com/neiman924"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noreferrer" href="https://www.instagram.com/h.neiman"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noreferrer" href="https://twitter.com/neiman924"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/neiman924"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div>
                        <img src={IMAGES.signature} alt="" width="167"/>
                    </div>
                </div>
            </div>
        </div>

    </footer>

    {/* <!-- Start Script --> */}
    {/* <script src={templatemo}></script> */}
    {/* <script src={Bootstrap}></script> */}
    {/* <script src={jQueryMigrate}></script> */}
    {/* <script src={jQuery}></script> */}
    {/* <!-- End Script --> */}

    </div>
    );
  }