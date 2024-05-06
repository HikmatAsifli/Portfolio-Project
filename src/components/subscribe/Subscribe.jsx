import "./Subscribe.css"

export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-10 m-auto">
                            <div className="subscribe-text">
                                <h3>SUBSCRIBE MY NEWSLETTER</h3>
                                <form action="#">
                                    <input type="text" placeholder="Enter Your Email" />
                                    <button type="submit" className="common-btn">Notify Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}