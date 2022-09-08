import * as React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default function navbar() {
    var permission = false;
    if(Auth.loggedIn()){
     permission = Auth.getProfile().data.permission;
    }
        const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
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
                        <div>
                                    {permission?(
                                    <Link className="btn btn-lg btn-info m-2" to="/me">
                                        {Auth.getProfile().data.name}
                                    </Link>
                                    ):null}
                                    {Auth.loggedIn() ? (
                                        <>
                                        <Link className="btn btn-lg btn-info m-2" to="/">
                                            {Auth.getProfile().data.name}'s profile
                                        </Link>
                                        <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                            Logout
                                        </button>
                                        </>
                                    ) : (
                                        <>
                                        <Link className="btn btn-lg btn-info m-2" to="/login">
                                            Login
                                        </Link>
                                        <Link className="btn btn-lg btn-light m-2" to="/signup">
                                            Signup
                                        </Link>
                                        </>
                                    )}
                            </div>
                    </div>
                    <div>
                        <a className="text-light" rel="noopener noreferrer" href="https://fb.com/neiman924" target="_blank"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" rel="noopener noreferrer" href="https://www.instagram.com/h.neiman" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" rel="noopener noreferrer" href="https://twitter.com/neiman924" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" rel="noopener noreferrer" href="https://www.linkedin.com/in/neiman924" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
 
                    </div>
                </div>
            </div>
        </nav>
        // <!-- Close Top Nav -->
    );
}