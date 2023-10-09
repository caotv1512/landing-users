import React from "react";

function Header() {
  return (
    <div>
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
                <a href="index.html#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html#about">Shop</a>
              </li>
              <li>
                <a href="index.html#services">Services</a>
              </li>
              <li>
                <a href="index.html#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="index.html#contact">Contact</a>
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
    </div>
  );
}

export default Header;
