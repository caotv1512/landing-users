import React from "react";
import "../styles/layout.css";
import { baseUrl } from "../server/baseUrl";
const DOMAIN_SERVER =baseUrl.domainServer
function Header() {
  console.log(DOMAIN_SERVER, '++++');
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;

  //     // Khi cuộn xuống hơn 100px từ đỉnh trang, ẩn component Header
  //     if (currentScrollPos > 100) {
  //       setVisible(false);
  //     } else {
  //       setVisible(true);
  //     }
  //   };

  //   // Đăng ký sự kiện cuộn trang
  //   window.addEventListener("scroll", handleScroll);

  //   // Hủy đăng ký sự kiện khi component bị hủy
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center fixed-header"
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
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
                <a
                  className="active"
                  onClick={() => {
                    const element = document.getElementById("hero");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const element = document.getElementById("portfolio");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Tất Cả Sản Phẩm
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Đặt Hàng
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          {/* End Nav Menu */}
          <a
            className="btn-getstarted"
            onClick={() => {
              const element = document.getElementById("add-info");
              element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Liên hệ
          </a>

          {/* <a
            className="btn-getstarted"
          >
            Login
          </a> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
