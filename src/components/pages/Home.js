import React from 'react';
import IMAGES from '../images';
import Resume from '../../assets/doc/Resume.pdf';
import bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  const cardStyle = {
    textAlign:'justify',
  };
  const card2Style = {
    textAlign: 'center',
    textDecoration:'none'
  }
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



    {/* <!-- Start Banner Hero --> */}
    <div id="template-mo-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#template-mo-hero-carousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#template-mo-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={IMAGES.Java} alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-success"><b>Jason</b> Neiman</h1>
                                <h3 className="h2">Talented Web Developer with a background in Customer Service.</h3>
                                <p style={cardStyle}>
                                    Talented Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and persistent problem-solver. 
                                    Excellent communicator with effective client relationship-building skills. Graduate of (FULL STACK FLEX Bootcamp) through (University of Washington).
                                    <div>
                                        {/* <!-- <iframe src=" " name="iframe_a" height="100%" width="100%" title="Iframe Example"></iframe> --> */}
                                        <a href={Resume} target="iframe_a" className="input-group-text btn-success text-light" style={card2Style}>Download Resume</a>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={IMAGES.challenges} alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Passionate about </h1>
                                <h3 className="h2">approaching programming challenges</h3>
                                <p>
                                    from multiple viewpoints and collaborating with others to provide purposeful and memorable web applications. <strong>Eager to leverage skills </strong>in the future as part of a fast-paced, quality-driven team in order to build better, innovative, and memorable experiences on the web.                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={IMAGES.learn} alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">I'M ALWAYS INTERESTED </h1>
                                <h3 className="h2">ABOUT</h3>
                                <p>
                                    UX/UI Design , Frontend and Backend Development , WEBFlow Develpment , New Businesses, Startups ...!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-hero-carousel" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-hero-carousel" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
        </a>
    </div>
    {/* <!-- End Banner Hero --> */}


    {/* <!-- Start Categories of The Month --> */}
    <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Process of designing new applications</h1>
                <p>
                    This is the main three process of desinging new applications:
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <img src={IMAGES.one} alt="" className="rounded-circle img-fluid border"/>
                <h5 className="text-center mt-3 mb-3">Research</h5>
                <p className="text-center"><button className="btn btn-success">
                    Understand the market, define the audience, and 
                    ideate potential solutions.</button></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <img src={IMAGES.two} alt="" className="rounded-circle img-fluid border"/>
                <h2 className="h5 text-center mt-3 mb-3">Product Design</h2>
                <p className="text-center"><button className="btn btn-success">
                    Define the solution, create a roadmap, establish 
                    architecture and design the product.</button></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <img src={IMAGES.three} alt="" className="rounded-circle img-fluid border"/>
                <h2 className="h5 text-center mt-3 mb-3">Testing</h2>
                <p className="text-center"><button className="btn btn-success">
                    Establish usability, meet accessibility needs and 
                    ensure a delightful solution.</button></p>
            </div>
        </div>
    </section>
    {/* <!-- End Categories of The Month --> */}



    {/* <!-- Start technical skills --> */}
    <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-5 m-auto">

                    <h1 className="h1">Technical Skills</h1>
                    <p>

                    </p>
                    
            <div className="row">
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.Reactjs} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">React.js</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.mongodb} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.mysql} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">MySQL</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.nodejs} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Node.js</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.express} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Express</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.javascript} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.HTML} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">HTML</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.css} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">CSS</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.bootstrap} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Bootstrap</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* <!-- End technical skills --> */}

    {/* <!-- Start softskills  --> */}
    <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-5 m-auto">

                    <h1 className="h1">Soft Skills</h1>
                    <p>

                    </p>
                    
            <div className="row">
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.Workethic} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Work ethic</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.timemanagement} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Time management</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.communication} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Communication</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.problemSolving} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Problem-Solving</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.teamwork} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Teamwork</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={IMAGES.creativity} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="text-decoration-none text-dark">Creativity</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* <!-- End soft skills --> */}

    <script src={bootstrap} integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
   </div>
  );
}
