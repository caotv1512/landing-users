import { baseUrl } from "../server/baseUrl";
import axios from "axios";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const DOMAIN_SERVER = baseUrl.domainServer;

function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(DOMAIN_SERVER + "/contact", formData);
      console.log(response);

      // Simulate sending data to a server (you can replace this with actual API calls)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Hero Section - Home Page */}
      <div>
        <section id="hero" className={`hero ${isFormSubmitted ? 'submitted' : ''}`}>
          <img src="assets/img/background/1.jpg" className="img-fluid" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                {isFormSubmitted ? (
                  <>
                    <h2 data-aos-delay={100}>Gửi thông tin thành công!</h2>
                    <p data-aos-delay={200}>
                      Cảm ơn bạn đã liên hệ với chúng tôi.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 data-aos-delay={100}>Cảm ơn đã tin tưởng.</h2>
                    <p data-aos-delay={200}>
                      Liên hệ với chúng tôi để nhận được khuyến mại mua một tặng một
                    </p>
                  </>
                )}
              </div>
              <div className="col-lg-5">
                {!isFormSubmitted && (
                  <form
                    className="sign-up-form d-flex"
                    data-aos-delay={300}
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Để lại số điện thoại ..."
                    />
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Sign up"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Hero Section */}
    </div>
  );
}

export default Hero;
