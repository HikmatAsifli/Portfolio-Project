import "./About-Me.css"
import about from "../../assets/about.png"

export default function AboutMe() {
    return (
        <section className="about">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-7 col-lg-6 col-xl-6">
                        <div className="about-heading">
                            <h5>About Me</h5>
                            <h2>
                                Transforming visions into
                                <br />
                                exceptional portfolios
                            </h2>
                        </div>
                        <div className="about-text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ducimus perferendis itaque. Dolorem, explicabo aut.</p>
                            <a href="#" className="common-btn">Download CV<i className="fa-solid fa-arrow-down"></i></a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-xl-6">
                        <div className="about-img" style={{ translate: "none", rotate: "none", scale: "none", transform: "transform: translate(0px, 0px);", opacity: "1" }}>
                            <img src={about} alt="" className="img-fluid w-100" />
                            <div className="about-img-text">
                                <i className="fa-solid fa-chart-pie"></i>
                                <div className="about-img-content">
                                    <h4>Daily Activity</h4>
                                    <p>Lorem, ipsum dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}