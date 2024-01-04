// Product.js
import React from "react";
import styles from "./Product.scss";
import classNames from "classnames/bind";
import CardProduct from "../../Components/Layout/components/Card/Card";
import imgBanner from "../../Assets/banner1.jpg";
import CardDiscount from "../../Components/Layout/components/CardDiscount/CardDiscount";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div>
      <section className="section-products">
        <div>
          <div className="row">
            <div className="col-md-12">
              <figure>
                <img src={imgBanner} alt="product-banner" className={cx("product-banner")} />
              </figure>
            </div>
          </div>
          <div className="row justify-content-center text-center mt-5">
            <div className="col-md-8 col-lg-6">
              <div className={cx("header")}>
                <h3>Featured Product</h3>
                <h2>Discounted products</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <CardProduct />
          </div>
          <div className="row justify-content-around">
            <div className="row justify-content-center text-center mt-5">
              <div className="col-md-8 col-lg-6">
                <div className={cx("header")}>
                  <h3>Featured Product</h3>
                  <h2>Outstanding products</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <CardDiscount />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
