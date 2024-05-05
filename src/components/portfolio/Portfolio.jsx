import "./Portfolio.css"
import portfolio1 from "../../assets/portfolio-1.jpeg"
import portfolio2 from "../../assets/portfolio-2.jpeg"
import portfolio3 from "../../assets/portfolio-3.jpeg"
import portfolio4 from "../../assets/portfolio-4.jpeg"

export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-9" style={{ marginBottom: "30px" }}>
                        <div className="section-heading">
                            <h5>My Recent Portfolio</h5>
                            <h2>Elevate your brand to new
                                <br />
                                heights with our portfolio expertise</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-md-6">
                        <a href="..." className="portfolio-item play-btn">
                            <img src={portfolio1} alt="" className="img-fluid w-100" />
                            <div className="text">
                                <h4>sheet metal bending</h4>
                                <p>youtube</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <a href="..." className="portfolio-item play-btn">
                            <img src={portfolio2} alt="" className="img-fluid w-100" />
                            <div className="text">
                                <h4>sheet metal bending</h4>
                                <p>youtube</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <a href="..." className="portfolio-item play-btn">
                            <img src={portfolio3} alt="" className="img-fluid w-100" style={{height: "550px"}} />
                            <div className="text">
                                <h4>sheet metal bending</h4>
                                <p>youtube</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <a href="..." className="portfolio-item play-btn">
                            <img src={portfolio4} alt="" className="img-fluid w-100" style={{height: "550px"}} />
                            <div className="text">
                                <h4>sheet metal bending</h4>
                                <p>youtube</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}