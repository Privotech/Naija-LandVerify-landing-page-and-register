import React from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const LANDlandingpage = () => {
    return (
        <div className="bg-light min-vh-100">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg sticky-top animate__animated animate__fadeInDown">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-2" href="#">NaijaLand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#court">Court Session</a></li>
                            <li className="nav-item"><a className="nav-link" href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-5 text-center bg-success text-white animate__animated animate__fadeIn" id="hero">
                <div className="container">
                    <h1 className="display-3 fw-bold mb-3">NaijaLand Verification Portal</h1>
                    <p className="lead mb-4">Secure, Fast, and Reliable Land Registration & Verification</p>
                    <Link to="/Register" className="btn btn-warning btn-lg shadow-lg animate__animated animate__pulse animate__infinite">Get Started</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5" id="features">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold fs-1 text-success">Why Choose NaijaLand?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg border-0 animate__animated animate__fadeInTopRight animate__delay-0s">
                                <div className="card-body text-center">
                                    <div className="display-1 mb-3 text-success">🔒</div>
                                    <h3 className="card-title mb-2">Secure Verification</h3>
                                    <p className="card-text">Your land records are protected with top-notch security.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg border-0 animate__animated animate__zoomI animate__delay-1s">
                                <div className="card-body text-center">
                                    <div className="display-1 mb-3 text-success">⚡</div>
                                    <h3 className="card-title mb-2">Fast Registration</h3>
                                    <p className="card-text">Register and verify lands in minutes, not days.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg border-0 animate__animated animate__bounceInRight animate__delay-2s">
                                <div className="card-body text-center">
                                    <div className="display-1 mb-3 text-success">🤝</div>
                                    <h3 className="card-title mb-2">Legal Support</h3>
                                    <p className="card-text">Access virtual court sessions for dispute resolution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-white animate__animated animate__fadeInUp" id="court">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="p-5 rounded shadow-lg text-center">
                                <h2 className="mb-4 fw-bold text-success">Court Session</h2>
                                <p className="mb-4 fs-5">Join our virtual court session for land dispute resolution and legal advice.</p>
                                <Link to="/Court" className="btn btn-primary btn-lg animate__animated animate__bounce">Join Court Session</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-light animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold fs-1 text-success">Our Impact</h2>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className="display-4 fw-bold text-success">10,000+</div>
                            <p>Lands Verified</p>
                        </div>
                        <div className="col-md-3">
                            <div className="display-4 fw-bold text-success">5,000+</div>
                            <p>Happy Users</p>
                        </div>
                        <div className="col-md-3">
                            <div className="display-4 fw-bold text-success">100+</div>
                            <p>Legal Partners</p>
                        </div>
                        <div className="col-md-3">
                            <div className="display-4 fw-bold text-success">50+</div>
                            <p>States Covered</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-white animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold fs-1 text-success">Testimonials</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-body">
                                    <p className="card-text text-center fw-bold">"NaijaLand made my land purchase stress-free and secure!"</p>
                                    <h5 className="card-title fw-bold fs-3 text-center mt-3">- Ridwan</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-body">
                                    <p className="card-text text-center fw-bold ">"The virtual court session helped resolve my dispute quickly."</p>
                                    <h5 className="card-title fw-bold fs-3 text-center mt-3">- Ajala bright</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-body">
                                    <p className="card-text text-center fw-bold ">"Highly recommend for anyone buying land in ogbomoso and other states"</p>
                                    <h5 className="card-title fw-bold fs-3 text-center mt-3">- Tunde Baki</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-light animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold fs-1 text-success">Frequently Asked Questions</h2>
                    <div className="accordion" id="faqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    How do I verify a land?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">Simply register and enter the land address to check its status.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Is my data secure?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">Yes, we use advanced encryption and security protocols.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    Can I join a court session online?
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">Yes, our platform offers virtual court sessions for land disputes.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-white animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold fs-1 text-success">Meet the Team</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Privilege Oyegbile</h5>
                                    <p className="card-text">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Legal" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Amina Sani</h5>
                                    <p className="card-text">Legal Advisor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Tech" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Tunde Ajayi</h5>
                                    <p className="card-text">Tech Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
            <section className="py-5 bg-white animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold fs-1 text-success">Stay Updated</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form className="d-flex flex-column align-items-center">
                                <input type="email" className="form-control mb-3" placeholder="Enter your email" required />
                                <button type="submit" className="btn btn-success btn-lg">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-light animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold fs-1 text-success">Registered Lands Map</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="rounded shadow-lg overflow-hidden" style={{ height: '400px' }}>
                                {/* Placeholder map - replace with real map integration if needed */}
                                <iframe
                                    title="Nigeria Map"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.676%2C4.272%2C14.678%2C13.892&amp;layer=mapnik"
                                    style={{ width: '100%', height: '100%', border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-5 bg-white animate__animated animate__fadeInUp">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold fs-1 text-success">Contact Us</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form className="d-flex flex-column align-items-center">
                                <input type="text" className="form-control mb-3" placeholder="Your Name" required />
                                <input type="email" className="form-control mb-3" placeholder="Your Email" required />
                                <textarea className="form-control mb-3" rows="4" placeholder="Your Message" required></textarea>
                                <button type="submit" className="btn btn-success btn-lg">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            
            <footer className="bg-success text-white py-5 mt-5 animate__animated animate__fadeInUp" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
                            <h5 className="fw-bold">NaijaLand</h5>
                            <p>Secure, Fast, and Reliable Land Registration & Verification.</p>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0 text-center">
                            <h5 className="fw-bold">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#hero" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
                                <li><a href="#court" className="text-white text-decoration-none">Court Session</a></li>
                                <li><a href="#footer" className="text-white text-decoration-none">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center text-md-end">
                            <h5 className="fw-bold">Connect With Us</h5>
                            <a href="mailto:privilegeoyegbile@gmail.com" className="text-white me-3 fs-4"><i className="bi bi-envelope"></i></a>
                            <a href="tel:+2347084689042" className="text-white me-3 fs-4"><i className="bi bi-telephone"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4"><i className="bi bi-twitter"></i></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                    <hr className="bg-white my-4" />
                    <div className="row">
                        <div className="col text-center">
                            <p className="mb-0">&copy; {new Date().getFullYear()} NaijaLand. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LANDlandingpage;