import * as React from 'react';
//import IMAGES from './images';
//import bootstrap from "../assets/js/bootstrap.bundle.min.js";


export default function Header({ currentPage, handlePageChange }){
    return(
        <div>
            {/* <!-- Header --> */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center" href="/reactportfolio">
                        JNeiman
                    </a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                <a
                                    href="#home"
                                    onClick={() => handlePageChange('Home')}
                                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                                    >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#about"
                                    onClick={() => handlePageChange('About')}
                                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                    >
                                    About
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#Projects"
                                    onClick={() => handlePageChange('Projects')}
                                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                    >
                                    Projects
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#Contact"
                                    onClick={() => handlePageChange('Contact')}
                                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                    >
                                    Contact
                                </a>                                
                                </li>
                                <li className="nav-item">
                                    {/* {permission ? (
                                    <a className="nav-link" href="/admin">Admin</a>):(
                                    <></>
                                    )} */}
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
