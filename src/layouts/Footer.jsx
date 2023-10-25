import React from "react";

function Footer() {
  return (
    <div>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>Tranh 5D</span>
              </a>
              <p>
                Từ lâu tranh treo tường không chỉ là sự lựa chọn mang tính thẩm
                mỹ cho ngôi nhà mà với tranh còn giúp cho không gian nội thất
                trong trong nhà chở nên lung linh, ấn tượng tạo điểm nhấn cho
                ngôi nhà bạn . Tranh treo tường đẹp không chỉ để trang trí mà
                treo tranh hợp tuổi, hợp phong thủy sẽ mang lại nhiều tài lộc
                may mắn cho gia chủ.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              {/* <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-2 col-6 footer-links">
              {/* <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Liên hệ</h4>
              <p>123 Phương Canh </p>
              <p>Hà Nội</p>
              {/* <p>Việt Nam</p> */}
              <p className="mt-4">
                <strong>Phone:</strong> <span>+84 327 627 261</span>
              </p>
              <p>
                {" "}
                <strong>Phone:</strong> <span>+84 327 627 261</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1">CaoTV</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="https://github.com/caotv1512">Hoang Nam Cao</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* Scroll Top Button */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
}

export default Footer;
