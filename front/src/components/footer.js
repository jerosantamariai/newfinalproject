import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>

            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="copyrights">
                    <div className="container-fluid">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-links">
                                    <Link to="#">Home</Link>
                                    <Link to="#">Blog</Link>
                                    <Link to="#">Pricing</Link>
                                    <Link to="#">About</Link>
                                    <Link to="#">Faq</Link>
                                    <Link to="#">Contact</Link>
                                </p>
                                <p className="footer-company-name">All Rights Reserved. &copy; 2018 <Link to="#">SMBarber</Link> Design By : <Link to="https://html.design/">html design</Link></p>
                            </div>

                            <div className="footer-right">
                                <form method="get" action="#">
                                    <input placeholder="Subscribe our newsletter.." name="search" />
                                    <i className="fas fa-envelope-o"></i>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;