import $ from "jquery";
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import P1 from './Images/1.png';
import P2 from './Images/2.png';
import P3 from './Images/3.png';
import P4 from './Images/4.png';
import P5 from './Images/5.png';
import P6 from './Images/6.png';
import P7 from './Images/7.png';
import Img1 from './Images/zucorians1.jpg';
import Img2 from './Images/zucorians2.jpg';
import Img3 from './Images/zucorians3.jpg';
import Img4 from './Images/zucorians4.jpg';
import Img5 from './Images/zucorians5.jpg';
import Img6 from './Images/zucorians6.jpg';
import logo from './logo.svg';

export class App extends Component {
    componentDidUpdate() {
        $('#carousel-example').on('slide.bs.carousel', function (e) {
            /*
                CC 2.0 License Iatek LLC 2018 - Attribution required
            */
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 5;
            var totalItems = $('.carousel-item').length;

            if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                    // append slides to end
                    if (e.direction == "left") {
                        $('.carousel-item').eq(i).appendTo('.carousel-inner');
                    }
                    else {
                        $('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className='container'>
                        <div style={{ height: '20px', backgroundColor: '#36384B', color: 'white', fontSize: '10px', height: 'auto', paddingTop: '2px' }}>
                            <div style={{ textAlign: 'center' }} className='row'>
                                <div className='col-lg-7 col-md-7  col-sm-12 col-xs-12'>
                                    CANADA WIDE SHIPPING AVAILABLE. FREE ON ON ORDERS ABOVE $39*
                        </div>
                                <div style={{ textAlign: 'center' }} className='col-lg-5 col-md-5  col-sm-12 col-xs-12'>
                                    ABOUT US &nbsp; &nbsp;  BLOG &nbsp; &nbsp; <span style={{ backgroundColor: '#A3ACFF', padding: '2px' }}>MEMBER CENTER</span>
                                </div>
                            </div>
                        </div>

                        {/* ---------------Navbar-------------- */}
                        <div>
                            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                                <img src={logo} style={{ width: '200px', height: '50px' }} class="navbar-brand" />
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul class="nav navbar-nav ml-auto ">
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-outline-light" href="#">SERVICE REQUEST</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="nextPage">WHAT IS SMARTER LIVING?</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="nextPage">SERVICE PLANS</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="nextPage">SMARTER HOME PRODUCTS</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="nextPage">SHOP NOW</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>



                        {/* --------------Community Info Section----------------- */}
                        <div>
                            <img src={'./Images/community-banner.jpg'} class="img-fluid" alt="Responsive image" />
                        </div>
                        <div className='ml-5 mr-5' style={{ textAlign: 'center', maxWidth: '1000px', color: '#A3ACFF' }}>
                            <h1 style={{ textAlign: 'center', marginTop: '-20px', color: '#434DA0' }}>
                                Zacorians in the Community
                        </h1>
                            <p style={{ fontSize: '20px' }}>
                                Zucoiran have a lot of things in common, but  one
                                of the most important qualities we share, is our
                                passion for qiving back to our community by supporting
                                not-for-print organizations such as Junior Achievement
                                South Western Ontario, Habitat for Humanity, Diabetes
                                Canada, and  London Community Founation.
                        </p>
                            <p style={{ fontSize: '20px' }}>
                                As part of out belief that business is not just  about
                                numbers, we support nationwide  movements that positively
                                impact our industry while keeping people  at the heart
                                of our mission.
                        </p>
                            <p style={{ fontSize: '20px' }}>
                                The Retail Sales Professional Award program is an annual
                                celebration that recognizes excellence in Canada's Home
                                Furnishings Industry. By celebrating outstanding achievement
                                on a peer-recognized basis, the RSP Awards
                                acknowledge the industry sales professionals who go above
                                and beyond service excellence.
                        </p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                        {/* ---------Carousel---------- */}
                        <div>
                            <div class="top-content">
                                <div class="container-fluid">
                                    <div id="carousel-example" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner row w-100 mx-auto" role="listbox">
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                                                <img src={Img1} class="img-fluid mx-auto d-block" alt="img1" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img2} class="img-fluid mx-auto d-block" alt="img2" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img3} class="img-fluid mx-auto d-block" alt="img3" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img4} class="img-fluid mx-auto d-block" alt="img4" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img5} class="img-fluid mx-auto d-block" alt="img5" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img6} class="img-fluid mx-auto d-block" alt="img6" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img1} class="img-fluid mx-auto d-block" alt="img7" />
                                            </div>
                                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                                <img src={Img2} class="img-fluid mx-auto d-block" alt="img8" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />


                        {/* ------------Our Partners------------- */}
                        <div className='row' >
                            <div className='col lg-4'>
                                <div className='firstCardHolder'>
                                    <p style={{ color: '#434DA0' }}>OUR PARTNERS</p>
                                    <h2 style={{ color: '#434DA0' }}>Organizations we support</h2>
                                </div>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white roundedshadow p-3 mb-5 bg-white rounded'>
                                    <img className='imgCardHolder mx-auto' src={P3} alt='Not Available' />
                                </div>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white rounded'>
                                    <img className='imgCardHolder' src={P6} alt='Not Available' />
                                </div>
                            </div>
                            <div className='col lg-4'>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white rounded'>
                                    <img className='imgCardHolder' src={P1} alt='Not Available' />
                                </div>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white rounded'>
                                    <img className='imgCardHolder' src={P4} alt='Not Available' />
                                </div>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white rounded'>
                                    <img className='imgCardHolder' src={P7} alt='Not Available' />
                                </div>
                            </div>
                            <div className='col lg-4 '>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white rounded'>
                                    <div className='cardBodyHolder card-body'>
                                        <img className='imgCardHolder' src={P2} alt='Not Available' />
                                    </div>
                                </div>
                                <div className='cardHolder card container shadow p-3 mb-5 bg-white rounded'>
                                    <div className='cardBodyHolder card-body'>
                                        <img className='imgCardHolder' src={P5} alt='Not Available' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        {/* ----------Hiring Section------------ */}
                        <div>
                            <h1 style={{ textAlign: 'center', color: '#434DA0' }}>Currently Hiring</h1>
                            <div className="card container shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '600px', marginBottom: '20px' }}>
                                <div class="card-body" style={{ color: '#434DA0' }}>
                                    <h3>Hiring Manager</h3>
                                    <h6>Full-time, London, ON</h6>
                                </div>
                            </div>
                            <div className="card container shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '600px', marginBottom: '20px' }}>
                                <div className="card-body" style={{ color: '#434DA0' }}>
                                    <h3>Junior Front-end Developer</h3>
                                    <h6>Contract: 6 months, London, ON</h6>
                                </div>
                            </div>
                        </div>

                        {/* ------------Footer Section------------ */}
                        <div style={{ width: '100%', backgroundColor: '#434DA0', color: 'white', padding: '10px', fontSize: '10px' }}>
                            <div className='row mx-auto'>
                                <div style={{ textAlign: 'center' }} className='col-lg-3 col-md-12 col-sm-12 col-xs-12' >
                                    <br />
                                    <img src={logo} alt='Img not available' style={{ width: '150px', height: '50px' }} />
                                </div>
                                <div style={{ textAlign: 'center' }} className='col-lg-2 col-md-12 col-sm-12 col-xs-12' >
                                    <p>ABOUT US<br />Contact Us <br />Our Story<br />Our Team<br />Join Us</p>
                                </div >
                                <div style={{ textAlign: 'center' }} className='col-lg-2 col-md-12col-sm-12 col-xs-12'>
                                    <p>MEMBER CENTER<br />What is Smarter Living ?<br />Member Login<br />FAQ</p>
                                </div>
                                <div style={{ textAlign: 'center' }} className='col-lg-2 col-md-12 col-sm-12 col-xs-12'>
                                    <p>PRODUCTS AND SERVICES<br />Service Plans <br />Smarter Home Products<br />Orders and Returns<br />Shop Now</p>
                                </div>
                                <div style={{ textAlign: 'center' }} className='col-lg-3 col-md-12 col-sm-12 col-xs-12' >
                                    <br />
                                    <button className="btn btn-outline-light">Service Request</button>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div style={{ backgroundColor: '#36384B', color: 'white', fontSize: '10px', width: '100%' }}>
                                <div className='row'>
                                    <div className='col-lg-1 col-md-12 sm-12'></div>
                                    <div style={{ textAlign: 'center' }} className='col-lg-3 col-md-12 sm-12'>Copyright&copy; Zucora Inc. 2019 </div>
                                    <div style={{ textAlign: 'center' }} className='col-lg-3 col-md-12 sm-12'>
                                        Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Terms of Service &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sitemap</div>
                                    <div className='col-lg-5 col-md-12 sm-12'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </React.Fragment >
        )
    }
}

export default App
