import React, { useState } from "react";
import "./contact.css";
import { baseUrl } from "../server/baseUrl";
import axios from "axios";
const DOMAIN_SERVER = baseUrl.domainServer;
function Contact() {
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

    axios
      .post(DOMAIN_SERVER + "/contact", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // Simulate sending data to a server (you can replace this with actual API calls)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsFormSubmitted(true);
  };
  return (
    <div>
      {" "}
      {/* Contact Section - Home Page */}
      <section id="contact" className="contact">
        {/*  Section Title */}
        <div className="container section-title">
          <h2>Liên hệ</h2>
        </div>
        {/* End Section Title */}
        <div className="container ">
          <div className="align-content-around">
            <form
              id="add-info"
              method="post"
              className="php-email-form"
              data-aos-delay={200}
              onSubmit={handleSubmit}
            >
              <h3>Xưởng Tranh Tráng Gương</h3>
              <p>
                Nhận thiết kế theo yêu cầu, tư vấn mẫu phù hợp theo không gian,
                nội thất căn nhà{" "}
              </p>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tên"
                    required=""
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    // type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Số điện thoại"
                    required=""
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  {isFormSubmitted ? (
                    <div className="sent-messagees">
                      Thông tin liên hệ đã được gửi. Cảm ơn bạn!
                    </div>
                  ) : (
                    <button type="submit">Gửi</button>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
          {/* </div> */}
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
}

export default Contact;
