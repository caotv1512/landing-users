import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  return (
    <div>
      {/* Hero Section - Home Page */}
      {/* <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}> */}
      <div>
        <section id="hero" className="hero">
          <img src="assets/img/background/1.jpg" className="img-fluid" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2 data-aos-delay={100}>Cảm ơn đã tin tưởng. </h2>
                <p data-aos-delay={200}>
                  Để lại số điện thoại để chúng tôi ọi tư vấn trực tiếp nhé
                </p>
              </div>
              <div className="col-lg-5">
                <form
                  // action="#"
                  className="sign-up-form d-flex"
                  data-aos-delay={300}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Chỉ cần để lại số điện thoại ..."
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
      </div>
      {/* </Carousel> */}
      {/* End Hero Section */}
    </div>
  );
}

export default Hero;
