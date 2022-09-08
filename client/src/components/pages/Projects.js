import * as React from 'react';
import IMAGES from '../images';

export default function Projects(){
    return(
        <div>

            
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



    {/* <!-- Start Content --> */}
    <div className="container py-5">
        <div className="row">
            {/* {{!-- drop down menu --}} */}
            <div className="col-lg-3">
                <h1 className="h2 pb-4">Categories</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#Status">
                            Status
                            <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul className="collapse show list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#Finished">Finished</a></li>
                            <li><a className="text-decoration-none" href="#ComingSoon">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#Technology">
                            Technology
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#FullSTACK">Full STACK</a></li>
                            <li><a className="text-decoration-none" href="#Backend">Backend</a></li>
                            <li><a className="text-decoration-none" href="#FrontEnd">Front End</a></li>
                        </ul>
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#Product">
                            Product
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseThree" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#Ecommerce">Ecommerce</a></li>
                            <li><a className="text-decoration-none" href="#WEBapplications">WEB applications</a></li>
                            <li><a className="text-decoration-none" href="#StaticWebsites">Static Websites</a></li>

                        </ul>
                    </li>
                </ul>
            </div>
            <div className="col-lg-9">
                <div className="row">
                    {/* {{!-- nav bar --}} */}
                    <div className="col-md-6">
                        <ul className="list-inline shop-top-menu pb-3 pt-1">
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#All">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#Comingsoon">Comingsoon</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none" href="#Published">Published</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="d-flex">
                            {/* {{!-- <select className="form-control">
                                <option>Featured</option>
                                <option>A to Z</option>
                                <option>Item</option>
                            </select> --}} */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={IMAGES.CoMed} alt="" />
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white mt-2" href="https://comed-main-jkgmxnk2ilqbfiz9mjb.herokuapp.com/" target="_blank"  rel="noopener noreferrer" ><i className="far fa-eye"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="https://comed-main-jkgmxnk2ilqbfiz9mjb.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="h3 text-decoration-none">COVID Medication</a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li><a href="https://github.com/neiman924/CoMed" target="_blank" rel="noopener noreferrer" className="h3 text-decoration-none">Github</a></li>
                                </ul>
                                <p className="text-center mb-0">Technologies:</p>
                                <p>JavaScript | Express | API | MySQL</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={IMAGES.eCommerce} alt="" />
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white mt-2" href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank"  rel="noopener noreferrer" ><i className="far fa-eye"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank" rel="noopener noreferrer" className="h3 text-decoration-none">eCommerce</a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li><a href="https://github.com/neiman924/eCommerce" target="_blank" rel="noopener noreferrer" className="h3 text-decoration-none">Github</a></li>
                                </ul>
                                <p className="text-center mb-0">Technologies:</p>
                                <p>JavaScript | Express | API | MySQL</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={IMAGES.library} alt=""/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white mt-2" href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank"  rel="noopener noreferrer" ><i className="far fa-eye"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank" rel="noopener noreferrer" className="h3 text-decoration-none">Library</a>
                                 <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li><a href="https://github.com/neiman924/library" target="_blank"  rel="noopener noreferrer" className="h3 text-decoration-none">Github</a></li>
                                </ul>
                                <p className="text-center mb-0">Technologies:</p>
                                <p>JavaScript | Express | API | MySQL</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={IMAGES.Marvel} alt=""/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white mt-2" href="https://moetive.github.io/Project-1/" target="_blank"  rel="noopener noreferrer" ><i className="far fa-eye"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="https://moetive.github.io/Project-1/" target="_blank"  rel="noopener noreferrer" className="h3 text-decoration-none">Marvel</a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li><a href="https://github.com/Moetive/Project-1" target="_blank"  rel="noopener noreferrer" className="h3 text-decoration-none">Github</a></li>
                                </ul>
                                <p className="text-center mb-0">Technologies:</p>
                                <p>JavaScript | Express | API</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid " src={IMAGES.MyDriver} alt="" />
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white mt-2" href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank" rel="noopener noreferrer" ><i className="far fa-eye"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank" rel="noopener noreferrer" className="h3 text-decoration-none">My-Driver APP</a>
                                 <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li><a href="https://github.com/neiman924/mydriver" target="_blank" rel="noopener noreferrer"  className="h3 text-decoration-none">Github</a></li>
                                </ul>
                                <p className="text-center mb-0">Technologies:</p>
                                <p>JavaScript | Express | API | MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={IMAGES.selfcheckout} alt=""/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white mt-2" href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank" rel="noopener noreferrer" ><i className="far fa-eye"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="https://jneiman.herokuapp.com/comingsoon.html" target="_blank" rel="noopener noreferrer"  className="h3 text-decoration-none">Self Checkout</a>
                                 <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li><a href="https://github.com/neiman924/selfcheckout" target="_blank" rel="noopener noreferrer"  className="h3 text-decoration-none">Github</a></li>
                                </ul>
                                <p className="text-center mb-0">Technologies:</p>
                                <p>JavaScript | Express | API | MySQL</p>
                            </div>
                        </div>
                    </div>
                    
                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#1" tabindex="-1">1</a>
                        </li>
                        {/* <li className="page-item">
                            <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                        </li> */}
                    </ul>
                </div>
            </div>

        </div>
    </div>
    {/* <!-- End Content --> */}


                        {/* <!--Controls--> */}
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                        {/* <!--End Controls--> */}
                    </div>
    </div>

    );
}