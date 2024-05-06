import "./Herosection.css";
import banner from "../../assets/banner.jpg";
import banner_shape from "../../assets/banner_shape.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section" style={{ backgroundImage: `url(${banner})`, width: '100%' }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div className="hero-section-heading">
                <h1>Hi, I'm Hikmat!
                  <br />
                  <span>Pentester and <br />Front-end Developer</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias ipsa saepe dolores facilis earum minus repudiandae illo? Nemo ratione dolore maxime eum, corporis reprehenderit tempora labore deleniti quo velit..</p>
                <ul>
                  <li><a href="#" className='common-btn'>Download CV<i className="fa-solid fa-arrow-down"></i></a></li>
                  <li><a href="#" style={{display: 'flex', alignItems: 'center'}}><i className="fa-sharp fa-solid fa-circle-play"></i>Watch the video</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="hero-section-img">
                <div className="img">
                  <img src={banner_shape} alt="" className='img-fluid w-100' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
