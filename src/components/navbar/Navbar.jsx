import { useState } from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";
import OffCanvas from '../offcanvas/Offcanvas';

export default function Navbar() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
        document.body.classList.toggle('no-scroll', isOffcanvasOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg main-menu">
                <div className="container main-menu-bg">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="Hikmat" className="img-fluid w-100" />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleOffcanvas}>
                        <i className={`fa-solid ${isOffcanvasOpen ? 'fa-circle-xmark' : 'fa-bars'}`}></i>
                    </button>
                    <div className={`collapse navbar-collapse ${isOffcanvasOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    HOME
                                    <i className="fa-solid fa-angle-down close-icon"></i>
                                </a>
                                <ul className="droap-menu">
                                    <li><a href="#">Home 1</a></li>
                                    <li><a href="#">Home 2</a></li>
                                    <li><a href="#">Home 3</a></li>
                                    <li><a href="#">Home 4</a></li>
                                    <li><a href="#">Home RTL</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    ABOUT US
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    SERVICES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    PROJECTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    BLOG
                                    <i className="fa-solid fa-angle-down"></i>
                                </a>
                                <ul className="droap-menu">
                                    <li>
                                        <a href="#">Blog List</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    CONTACT
                                </a>
                            </li>

                        </ul>
                        <span className="toggle-icon c-pointer" onClick={toggleOffcanvas}>
                            <i className="fa-solid fa-bars" ></i>
                        </span>
                    </div>
                </div>
            </nav>
            {isOffcanvasOpen && <OffCanvas toggleOffcanvas={toggleOffcanvas} />}
        </>
    );
}
