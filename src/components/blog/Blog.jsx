import "./Blog.css"
import blog1 from "../../assets/blog-1.jpeg"
import blog2 from "../../assets/blog-2.jpeg"
import blog3 from "../../assets/blog-3.jpeg"


export default function Blog() {
    return (
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-9" style={{ marginBottom: "30px" }}>
                        <div className="section-heading">
                            <h5>My Blog</h5>
                            <h2>Unlocking the potential of your
                                <br />
                                personal brand</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="single-blog">
                            <a href="#" className="blog-img">
                                <img src={blog1} alt="" className="img-fluid w-100" />
                            </a>
                            <div className="blog-text">
                                <span>
                                    31 December, 2022
                                </span>
                                <ul>
                                    <li><i className="fa-solid fa-user"></i> By admin</li>
                                    <li><i className="fa-solid fa-comments"></i> Comments (05)</li>
                                </ul>
                                <a href="#">
                                    The standard personal My portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="single-blog">
                            <a href="#" className="blog-img">
                                <img src={blog2} alt="" className="img-fluid w-100" />
                            </a>
                            <div className="blog-text">
                                <span>
                                    31 December, 2022
                                </span>
                                <ul>
                                    <li><i className="fa-solid fa-user"></i> By admin</li>
                                    <li><i className="fa-solid fa-comments"></i> Comments (05)</li>
                                </ul>
                                <a href="#">
                                    The standard personal My portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="single-blog">
                            <a href="#" className="blog-img">
                                <img src={blog3} alt="" className="img-fluid w-100" />
                            </a>
                            <div className="blog-text">
                                <span>
                                    31 December, 2022
                                </span>
                                <ul>
                                    <li><i className="fa-solid fa-user"></i> By admin</li>
                                    <li><i className="fa-solid fa-comments"></i> Comments (05)</li>
                                </ul>
                                <a href="#">
                                    The standard personal My portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <a href="#" className="common-btn">More Blog +</a>
                    </div>
                </div>
            </div>
        </section>
    )
}