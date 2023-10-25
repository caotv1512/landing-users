import React, { useState } from "react";
import "./contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
          {/* <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p> */}
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
              <h3>Tiêu đề</h3>
              <p>nội dung ....</p>
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
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Số điện thoại"
                    required=""
                    value={formData.email}
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
