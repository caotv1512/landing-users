import React from 'react'

function Product() {
  return (
    <div>    {/* About Section - Home Page */}
    <section id="portfolio" className="portfolio">
      {/*  Section Title */}
      <div className="container section-title" >
        <h2>Best Seller</h2>
        <p>
          Dưới đây là một số sản phẩm đang được bán chạy nhất trên thị trường hiện nay.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            
            data-aos-delay={100}
          >
            <li data-filter="*" className="filter-active">
              Tất cả
            </li>
            <li data-filter=".filter-app">Phòng ngủ</li>
            <li data-filter=".filter-product">Phòng khách</li>
            <li data-filter=".filter-branding">Cầu thang</li>
          </ul>
          {/* End Portfolio Filters */}
          <div
            className="row gy-4 isotope-container"
            
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img
                src="assets/img/products/z4766755517684_99fdf85dd944ec3c3ac6757998f3be93.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/products/z4766755527780_20e713a61b9c4658f8adf2f034a9c218.jpg"
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src="assets/img/products/z4766755775444_0b3916cdbb4dde6e49e47d01b42b8394.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img
                src="assets/img/products/z4766755742185_013ec7f2bd1517d4c0d65c747b48b6dd.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="/assets/img/products/z4766755737485_7086408ab3c3cecb7e348ec71031e3c7.jpg"
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img
                src="assets/img/products/z4766755737485_7086408ab3c3cecb7e348ec71031e3c7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  title="App 2"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src="assets/img/products/z4766755705497_04695b39fcce62e42b9752f1708e1c34.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/products/z4766755705497_04695b39fcce62e42b9752f1708e1c34.jpg"
                  title="Product 2"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                  title="App 3"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                  title="Product 3"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}</div>
  )
}

export default Product