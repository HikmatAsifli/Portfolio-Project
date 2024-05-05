import "./Testimonial.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial1 from "../../assets/testomonial-1.jpeg"


const testimonialData = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquet ex.",
        level: "Marketing Coordinator",
        author: "John Doe"
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquet ex.",
        level: "Marketing Coordinator",
        author: "Jane Doe"
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquet ex.",
        level: "Marketing Coordinator",
        author: "Jane Doe"
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquet ex.",
        level: "Marketing Coordinator",
        author: "Jane Doe"
    },
    {
        id: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquet ex.",
        level: "Marketing Coordinator",
        author: "Jane Doe"
    },
    {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquet ex.",
        level: "Marketing Coordinator",
        author: "Jane Doe"
    }
];


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 m-auto">
                        <div className="section-heading">
                            <h5>Client Review</h5>
                            <h2>My Testimonial</h2>
                        </div>
                    </div>
                </div>
                <div className="row testi-slider">
                    <Slider {...settings}>
                        {testimonialData.map(testimonial => (
                            <div key={testimonial.id}>
                                <div className="testimonial-card">
                                    <div className="img">
                                        <img src={testimonial1} alt="" className="img-fluid w-100" />
                                    </div>
                                    <p className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </p>
                                    <h3>{testimonial.author}</h3>
                                    <p>{testimonial.level}</p>
                                    <p className="description">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section >
    )
}