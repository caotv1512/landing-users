import React from "react";
// import a from "../../public/assets/img/hero-bg.jpg";

function Hero() {
  return (
    <div>
      {" "}
      {/* Hero Section - Home Page */}
      <section id="hero" className="hero">
        <img
          src="assets/img/background/2.jpg"
          className="img-fluid"
          alt=""
          // data-aos="fade-in"
        />
        {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/img/hero-bg.jpg" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="path_to_image2.jpg" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="path_to_image3.jpg" alt="Slide 3" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h2 data-aos-delay={100}>Welcome to Our Website</h2>
              <p data-aos-delay={200}>
                We are team of talented designers making websites with Bootstrap
              </p>
            </div>
            <div className="col-lg-5">
              <form
                action="#"
                className="sign-up-form d-flex"
                // data-aos="fade-up"
                data-aos-delay={300}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email address"
                />
                <input
                  type="submit"
                  className="btn btn-primary"
                  defaultValue="Sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
    </div>
  );
}

export default Hero;
