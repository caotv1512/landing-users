import React, { useState } from "react";
import './contact.css'
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
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item" data-aos-delay={200}>
                    <i className="bi bi-geo-alt" />
                    <h3>Địa Chỉ</h3>
                    <p>Hà Nội</p>
                    <p>123 Phương Canh</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item" data-aos-delay={300}>
                    <i className="bi bi-telephone" />
                    <h3>Điện Thoại</h3>
                    <p>+84 327627261</p>
                    <p>+84 388300798</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item" data-aos-delay={400}>
                    <i className="bi bi-envelope" />
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item" data-aos-delay={500}>
                    <i className="bi bi-clock" />
                    <h3>Thời Gian Mở</h3>
                    <p>Monday - Friday</p>
                    <p>9:00AM - 05:00PM</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>
            <div className="col-lg-6">
              <form
                method="post"
                className="php-email-form"
                data-aos-delay={200}
                onSubmit={handleSubmit}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
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
                      placeholder="Your Email"
                      required=""
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required=""
                      value={formData.message}
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
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
}

export default Contact;
