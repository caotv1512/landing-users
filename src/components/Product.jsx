import React, { useEffect, useState } from "react";
import { baseUrl } from "../server/baseUrl";
import axios from "axios";
const DOMAIN_SERVER = baseUrl.domainServer;
function Product() {
  console.log(DOMAIN_SERVER);
  // const products = [
  //   {
  //     title: "Product 1",
  //     image:
  //       "assets/img/products/z4766755517684_99fdf85dd944ec3c3ac6757998f3be93.jpg",
  //     description: "Product 1 description",
  //     category: 1,
  //   },
  // ];
  const [products, setProduct] = useState([]);

  const fetchProduct = async () => {
    const data = await axios.get(`${DOMAIN_SERVER}/product`);
    console.log(data);
    setProduct(data.data);
  };
  console.log(products);
  const initialProductCount = 6; // Số lượng sản phẩm hiển thị ban đầu
  const productsPerPage = 3; // Số lượng sản phẩm mỗi lần hiển thị thêm

  const [currentCategory, setCurrentCategory] = useState("*");
  const [displayedProductCount, setDisplayedProductCount] =
    useState(initialProductCount);

  const filterProducts = (category) => {
    setCurrentCategory(category);
    setDisplayedProductCount(initialProductCount);
  };

  const loadMoreProducts = () => {
    setDisplayedProductCount(displayedProductCount + productsPerPage);
  };

  const hideProducts = () => {
    if (displayedProductCount > initialProductCount) {
      setDisplayedProductCount(displayedProductCount - productsPerPage);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container section-title">
          <h2>Best Seller</h2>
          <p>
            Dưới đây là một số sản phẩm đang được bán chạy nhất trên thị trường
            hiện nay.
          </p>
        </div>
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
              <li
                data-filter="*"
                className={currentCategory === "*" ? "filter-active" : ""}
                onClick={() => filterProducts("*")}
              >
                Tất cả
              </li>
              <li
                data-filter=".filter-app"
                className={currentCategory === "1" ? "filter-active" : ""}
                onClick={() => filterProducts("1")}
              >
                Phòng ngủ
              </li>
              <li
                data-filter=".filter-product"
                className={currentCategory === "2" ? "filter-active" : ""}
                onClick={() => filterProducts("2")}
              >
                Phòng khách
              </li>
              <li
                data-filter=".filter-branding"
                className={currentCategory === "3" ? "filter-active" : ""}
                onClick={() => filterProducts("3")}
              >
                Cầu thang
              </li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos-delay={200}>
              {products
                ?.filter(
                  (product) =>
                    currentCategory === "*" ||
                    product.category === parseInt(currentCategory)
                )
                .slice(0, displayedProductCount)
                .map((product, index) => (
                  <div
                    className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-app`}
                    key={index}
                  >
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.title}
                    />
                    <div className="portfolio-info">
                      <h4>{product.title}</h4>
                      <p>{product.description}</p>
                      <a
                        href={product.image}
                        title={product.title}
                        data-gallery={`portfolio-gallery-app`}
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a title="More Details" className="details-link">
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            {displayedProductCount <
              products.filter(
                (product) =>
                  currentCategory === "*" ||
                  product.category === parseInt(currentCategory)
              ).length && (
              <div className="text-center mt-3">
                <button
                  className="btn-outline-dark mr-2 rounded-lg "
                  onClick={loadMoreProducts}
                >
                  Xem thêm ...
                </button>
                {displayedProductCount > initialProductCount && (
                  <button
                    className="btn-outline-dark ml-1 rounded-lg"
                    onClick={hideProducts}
                  >
                    Ẩn bớt
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
