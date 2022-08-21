import * as React from 'react';

export default function navbar() {
    return(
        // <!-- Start Top Nav -->
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <i className="fa fa-envelope mx-2"></i>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:neiman924@gmail.com">neiman924@gmail.com</a>
                        <i className="fa fa-phone mx-2"></i>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="tel:2067715104">(206)771-5104</a>
                    </div>
                    <div>
                        <a className="text-light" rel="noreferrer" href="https://fb.com/neiman924" target="_blank"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" rel="noreferrer" href="https://www.instagram.com/h.neiman" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" rel="noreferrer" href="https://twitter.com/neiman924" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" rel="noreferrer" href="https://www.linkedin.com/in/neiman924" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                    </div>
                </div>
            </div>
        </nav>
        // <!-- Close Top Nav -->
    );
}