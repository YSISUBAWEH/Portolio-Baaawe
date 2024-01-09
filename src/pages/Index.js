import React, { Fragment } from 'react';
import logo from '../img/avatar1.jpg';

 function Index(){
 	return(
 		<Fragment>
 		<header className="header">
        <div className="container">
            <ul className="social-icons pt-3">
                <li className="social-item"><a className="social-link text-light" href="https://www.facebook.com/subaweh.subaweh.73"><i className="ti-facebook" aria-hidden="true"></i></a></li><></>
                <li className="social-item"><a className="social-link text-light" href="https://www.instagram.com/_baaawe"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div className="header-content">
                <h4 className="header-subtitle" >Hello, I am</h4>
                <h1 className="header-title">Subaweh</h1>
                <h6 className="header-mono" >Progammer | Student of SMKN 6 Jember</h6>
                <a className="btn btn-primary btn-rounded p-2">Mulai Sekarang</a>
            </div>
        </div> 
    </header>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                </ul>
                <ul className="navbar-nav brand">
                    <img src={logo} className="brand-img" />
                    <li className="brand-txt">
                        <h5 className="brand-title">Subaweh</h5>
                        <div className="brand-subtitle">Web Designer | Developer</div>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#resume" className="nav-link">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Who am I ?</h3>
                <span className="line mb-5"></span>
                <h5 className="mb-3">"Seorang Pengembang dan Pelajar Berbasis di Bumi yang Indah"</h5>
                <p className="mt-20">Sebagai seorang pelajar dan programmer, saya menggali kreativitas untuk menciptakan solusi digital yang menakjubkan dan fungsional.</p>
                <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Personal Info</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 15/03/2006</li>
                    <li><span>Email</span> : seeyou6411@gmail.com</li>
                    <li><span>Phone</span> : +62 85 604 664 184</li>
                    <li><span>Skype</span> : _Baaawe </li>
                    <li><span>Address</span> :  Gg. Mawar 3 , Rowotengah , Sumberbaru , Jember.</li>
                </ul>
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">My Expertise</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p className="subtitle">...</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p className="subtitle">...</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
     <section className="section" id="resume">
        <div className="container">
            <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
            <div className="row">
                
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Pendidikan</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">2020 - Present</h6>
                            <p>SMKN 6 Jember</p>
                            <p className="subtitle">Selam saya belajar disini saya mempelajari beberapa bahas pemograman.</p>
                            <hr />
                            <h6 className="title text-danger">2016 - 2019</h6>
                            <p>MTs Tuhfatul Ahbab</p>
                            <p className="subtitle">...</p>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Skills</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>HTML5 &amp; CSS3</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <h6>JavaScript</h6>
                              <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <h6>PHP</h6>
                              <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <h6>SQL</h6>
                              <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6 col-lg-4"> 
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Languages</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>English</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Indonesia</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
            <div className="portfolio">
                <div className="portfolio-container"> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src="assets/imgs/ldpg-babakasir.png" className="img-fluid" alt="..." />
                            <div className="content-holder">
                                <a className="img-popup" href="assets/imgs/ldpg-babakasir.png"></a>
                                <div className="text-holder">
                                    <h6 className="title">Website Baba Cashier</h6>
                                    <p className="subtitle">...</p>
                                </div>
                            </div>   
                        </div>             
                    </div>
                    <p></p>
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src="assets/imgs/mijm-motor.png" className="img-fluid" alt="..." />
                            <div className="content-holder">
                                <a className="img-popup" href="assets/imgs/mijm-motor.png"></a>
                                <div className="text-holder">
                                    <h6 className="title">Website Peminjaman Motor</h6>
                                    <p className="subtitle">...</p>
                                </div>
                            </div>   
                        </div>             
                    </div>
                </div> 
            </div>  
        </div>            
    </section>
    <footer className="footer py-3">
        <div className="container">
            <p className="small mb-0 text-light">
            Created From Baweeeeh
            </p>
        </div>
    </footer>

 		</Fragment>
 	)
 }

 export default Index;