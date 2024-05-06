import "./Offcanvas.css"

export default function OffCanvas({ toggleOffcanvas }) {
    return (
        <div className="offcanvas offcanvas-end" tabIndex={-1}>
            <div className="offcanvas-header">
                <a href="#" className="offcanvas-logo">
                    <img src="..." alt="Hikmat" className="img-fluid w-100" />
                </a>
                <button type="button" className="btn-close" onClick={toggleOffcanvas}>
                    <i className="fa-regular fa-xmark"></i>
                </button>
            </div>
            <div className="offcanvas-body">
                <div className="design-form offcanvas-form">
                    <div className="offcanvas-content-box">
                        <h4 className="offcanvas-title">
                            About US
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                            tempor incididunt ut labore et magna aliqua. Ut enim ad minim
                            veniam laboris.
                        </p>
                    </div>
                    <div className="offcanvas-contact-form">
                        <h4 className="offcanvas-title">
                            Get in Touch
                        </h4>
                        <form action="#">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea rows={4} placeholder="Message"></textarea>
                            <button type="submit" className="common-btn">Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}