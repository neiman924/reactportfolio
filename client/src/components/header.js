import * as React from 'react';
//import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

//import IMAGES from './images';
//import bootstrap from "../assets/js/bootstrap.bundle.min.js";
import '../../src/assets/css/fontawesome.min.css';

export default function Header(){

    return(
        <div>
            {/* <!-- Header --> */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center" href="/">
                        JNeiman
                    </a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className= 'nav-link'  to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className= 'nav-link'  to="/about">about</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className= 'nav-link'  to="/projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className= 'nav-link'  to="/contact">Contact</Link>                          
                                </li>
                            </ul>

                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a> */}
                        </div>
                    </div>

                </div>
        </nav>
    {/* <!-- Close Header --> */}
    {/* <script src={bootstrap} integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> */}

        </div>
    );
}
