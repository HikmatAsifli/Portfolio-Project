import "./Navbar.css"
import logo from "../../assets/logo.png"

export default function Navbar() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navbar-content">
                                <div className='navbar-left'>
                                    <a href="">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <div className='navbar-pages'>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div className='navbar-right'>
                                    <div className='navbar-right__burger'>
                                        <i className="fa-solid fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}