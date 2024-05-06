import "./Brand.css"

export default function Brand() {
    return (
        <section className="brand">
            <div className="cotainer">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee">
                            <marquee direction="left" scrollamount="40" >*PHP *Python *Design *World *Development</marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}