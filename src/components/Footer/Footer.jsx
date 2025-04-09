
import React from "react";
import './Footer.css';
import zepto from '../../assets/logo.svg';
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
const Footer = () => {
    return (
        <footer class="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top " style={{ padding: '20px' }}>
            <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src={zepto} alt="" />
                </a>
                <div className="footer-icons d-flex gap-3">
                    <IoLogoInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                    <FaLinkedinIn />
                </div>
                <p class="text-body-secondary mt-3">©  KiranaKart Private Limited</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">

                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Delivery Address</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Carrers</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Customers</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Press</a></li>
                </ul>
            </div>

            <div class="col mb-3">

                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms of use</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Responsible Policy</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mojo - a Zepto Blog</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Downlaod App</h5>
                <button type="button" class="btn btn-outline-secondary"><IoLogoGooglePlaystore />
                    Get it on Playstore</button>
                <button type="button" class="btn btn-outline-secondary"><FaApple />
                    Get it on appstore</button>

            </div>
        </footer>
    )
}
export default Footer;