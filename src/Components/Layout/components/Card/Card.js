import styles from "./Card.scss";
import classNameNames from "classnames/bind";
import { Fragment } from "react";

const cx = classNameNames.bind(styles);

function Card() {
  return (
    <Fragment>
      <section class="section-products">
        <div class= {cx("container")}>
          <div class="row justify-content-center text-center">
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" class="single-product">
                <div class="part-1">
                  <span class="discount">15% off</span>
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" class="single-product">
                <div class="part-1">
                  <span class="new">new</span>
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-5" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-6" class="single-product">
                <div class="part-1">
                  <span class="discount">15% off</span>
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-7" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-8" class="single-product">
                <div class="part-1">
                  <span class="new">new</span>
                  <ul>
                    <li>
                      <a href="!#">
                        <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-heart-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i class="bi bi-arrows-angle-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Here Product Title</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Card;
