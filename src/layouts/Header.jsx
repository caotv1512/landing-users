import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Khi cuộn xuống hơn 100px từ đỉnh trang, ẩn component Header
      if (currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    // Đăng ký sự kiện cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Hủy đăng ký sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {visible && (
        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <header
            id="header"
            className="header fixed-top d-flex align-items-center"
          >
            <div className="container-fluid d-flex align-items-center justify-content-between">
              <a
                href="index.html"
                className="logo d-flex align-items-center me-auto me-xl-0"
              >
                {/* Uncomment the line below if you also wish to use an image logo */}
                {/* <img src="assets/img/logo.png" alt=""> */}
                <h1>Tranh 5D</h1>
                <span>.</span>
              </a>
              {/* Nav Menu */}
              <nav id="navmenu" className="navmenu">
                <ul>
                  <li>
                    <a className="active">Home</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.scrollTo(0, 500);
                      }}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      a
                      onClick={() => {
                        window.scrollTo(0, 3000);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list" />
              </nav>
              {/* End Nav Menu */}
              <a className="btn-getstarted" href="index.html#about">
                Liên hệ
              </a>
            </div>
          </header>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            Liên hệ
          </Link>
        </header>
      )}
    </div>
  );
}

export default Header;
