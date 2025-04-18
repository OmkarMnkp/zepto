import React, { useContext, useState } from "react";
import zepto from "../../assets/zepto.svg";
import phone from '../../assets/phone.webp'
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoCafeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineToys } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";
import { IoMdHeadset } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaBaby } from "react-icons/fa";
import logo from '../../assets/logo.svg'
import '../Navbar/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import Cart from "../Cart/Cart";
import { ThemeContext } from "../../context/ThemeContext";
import CartContext from "../../context/CartContext";

const Navbar = () => {
    const playstore = '	https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.64.1/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-play-store.svg';
    const applestore = 'https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.64.1/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-app-store.svg';

    const [isCartOpen, setIsCartOpen] = useState(false);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const { cartItems } = useContext(CartContext);


     // Calculate total item quantity
  const totalCartItems = cartItems.reduce((total, item) => total + item.qty, 0);
    return (
        <>
            <ToastContainer />

            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: "linear-gradient(to bottom, #f8e7f6, white)", display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                        <img src={zepto} style={{ height: '40px' }} alt="Logo" />
                    </a>

                    {/* Toggle Switch */}
                    <div className="form-check form-switch">
                        <input
                            style={{ height: '20px' }}
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="themeSwitch"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown" >

                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#zeptoModal"
                                    aria-expanded="false"
                                >
                                    Select Location
                                </a>

                                {/* Bootstrap Modal location */}
                                <div className="modal fade" id="zeptoModal" tabIndex="-1" aria-labelledby="zeptoModalTitle" aria-hidden="true" >
                                    <div className=" modal-dialog ">
                                        <div className="  modal-content mod1"  >
                                            <div className="modal-header"style={{backgroundColor:'white'}}>
                                                <h1 className="modal-title fs-5" id="zeptoModalTitle">Your Location</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body"style={{backgroundColor:'white'}}>
                                                <div class="mb-3">
                                                    {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}

                                                    <div className="inp" style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                                        <FiSearch className="search-icon" style={{ display: 'flex', margin: '10px' }} /><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Search a new Address" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* input */}

                                        </div>

                                    </div>

                                </div>


                                {/* login*/}
                                <div className="modal fade" id="CardModal" tabIndex="-1" aria-labelledby="CardModalTitle" aria-hidden="true" >
                                    <div className="modal-dialog" >
                                        <div className="modal-content" style={{ width: '590px', height: '470px' }}>
                                            <div className="row p-3">

                                                <div className="col-md-6 d-flex flex-column align-items-center profile1">
                                                    <img src={logo} alt="Logo" className="img-fluid mb-3" />
                                                    <h2>Groceries delivered in 10Min</h2>
                                                    <form >
                                                        <input type="email" className="form-control mb-2" placeholder="Enter email" />
                                                        <input type="password" className="form-control mb-2" placeholder="Enter password" />
                                                        <p>Do not have an account?<a className="register" href=""
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#RegisterModal"
                                                            data-bs-dismiss="modal">Register</a>
                                                        </p>


                                                        <button type="submit" class="btn btn-danger">Login</button>

                                                    </form>
                                                </div>


                                                <div className="col-md-6 d-flex flex-column align-items-center profile2">
                                                    <img src={phone} alt="Phone" className=" mb-3" />
                                                    <h2 className="text-center">Order Faster and Easier Every Time</h2>
                                                    <p>With Zepto App</p>

                                                    <img src={playstore} alt="" />
                                                    <img src={applestore} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* register */}
                                <div className="modal fade" id="RegisterModal" tabIndex="-1" aria-labelledby="CardModalTitle" aria-hidden="true" >
                                    <div className="modal-dialog" >
                                        <div className="modal-content" style={{ width: '590px', height: '470px' }}>
                                            <div className="row p-3">

                                                <div className="col-md-6 d-flex flex-column align-items-center profile1">
                                                    <img src={logo} alt="Logo" className="img-fluid mb-3" />
                                                    <h2>Groceries delivered in 10Min</h2>
                                                    <form >
                                                        <input type="text" className="form-control mb-2" placeholder="Enter name" />
                                                        <input type="email" className="form-control mb-2" placeholder="Enter email" />
                                                        <input type="password" className="form-control mb-2" placeholder="Enter password" />
                                                        <p>Do  have an account?
                                                            <a href="#" className="register" data-bs-toggle="modal" data-bs-target="#RegisterModal" data-bs-dismiss="modal">Register</a>


                                                        </p>
                                                        <button type="button" class="btn btn-danger">Register</button>

                                                    </form>
                                                </div>


                                                <div className="col-md-6 d-flex flex-column align-items-center profile2">
                                                    <img src={phone} alt="Phone" className=" mb-3" />
                                                    <h2 className="text-center">Order Faster and Easier Every Time</h2>
                                                    <p>With Zepto App</p>

                                                    <img src={playstore} alt="" />
                                                    <img src={applestore} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                        <FiSearch className="search-icon" style={{ display: 'flex', margin: '10px' }} />

                        <input type="text" class="form-control w-75 mx-3" placeholder="Search for apple name" aria-label="First name" />

                        <div className="d-flex gap-3 mt-3">
                            <div data-bs-toggle="modal"
                                data-bs-target="#CardModal">
                                <FaRegCircleUser style={{ fontSize: '25px' }} />
                                <p  >profile</p>
                            </div>

                            <div onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer', position: 'relative' }}>
                                <IoCartOutline style={{ fontSize: '28px' }} />
                                <p>Cart</p>

                                {/* Show badge only if there are items */}
                                {totalCartItems > 0 && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: -5,
                                            background: 'red',
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '2px 6px',
                                            fontSize: '12px',
                                        }}
                                    >
                                        {totalCartItems}
                                    </span>
                                )}
                            </div>

                            {/* Show cart if open */}
                            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                        </div>
                    </div>
                </div>


                {/* select categories */}
                <div className="categories" style={{ display: 'flex', alignItems: 'start', gap: '13px', justifyContent: 'center' }} >
                    <div className="nav-container">
                        <Link to='/all' className="nav-item" href="./all">
                            <IoBagCheckOutline className="icon" />
                            <span>All</span>
                        </Link>
                        <Link to='/cafe' className="nav-item" href="./cafe">
                            <IoCafeOutline className="icon" />
                            <span>Cafe</span>
                        </Link>
                        <Link to='/home' className="nav-item" href="./home">
                            <MdOutlineCleaningServices className="icon" />
                            <span>Home</span>
                        </Link>
                        <Link to='/toys' className="nav-item" href="./toys">
                            <MdOutlineToys className="icon" />
                            <span>Toys</span>
                        </Link>
                        <Link to='/fresh' className="nav-item" href="./fresh">
                            <SiCodefresh className="icon" />
                            <span>Fresh</span>
                        </Link>
                        <Link to='/electronics' className="nav-item" href="./electronics">
                            <IoMdHeadset className="icon" />
                            <span>Electronics</span>
                        </Link>
                        <Link to='/mobile' className="nav-item" href="./mobile">
                            <FaMobileScreenButton className="icon" />
                            <span>Mobile</span>
                        </Link>
                        <Link to='/beauty' className="nav-item" href="./beauty">
                            <GiPencilBrush className="icon" />
                            <span>Beauty</span>
                        </Link>
                        <Link to='/fashion' className="nav-item" href="./fashion">
                            <GiClothes className="icon" />
                            <span>Fashion</span>
                        </Link>
                        <Link to='/deal' className="nav-item" href="./deal">
                            <RiDiscountPercentLine className="icon" />
                            <span>Deal</span>
                        </Link>
                        <Link to='/baby' className="nav-item" href="./baby">
                            <FaBaby className="icon" />
                            <span>Baby Store</span>
                        </Link>
                    </div>



                </div>


            </nav>
            <hr />
            <ToastContainer />
        </>

    );
};

export default Navbar;
