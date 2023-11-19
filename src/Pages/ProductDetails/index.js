import React from "react";
import styles from "./ProductDetails.scss";
import { Figure } from "react-bootstrap";
import classNames from "classnames/bind";
import imgdetail from "../../Assets/img-slide-1.jpg";
import detal1 from "../../Assets/detail1.jpeg";
import detal2 from "../../Assets/detail2.jpeg";
import detal3 from "../../Assets/detail3.jpeg";
import detal4 from "../../Assets/detail4.jpeg";
import Form from "react-bootstrap/Form";
const cx = classNames.bind(styles);

function ProductDetail() {
  return (
    <div className={cx("wrapper-product-details")}>
      <section className={cx("section-details")}>
        <article className={cx("details-left")}>
          <div className={cx("row")}>
            <Figure className={cx("column")}>
              <Figure.Image alt="500x500" src={detal1} className={cx("img-details")} />
              <Figure.Image alt="500x500" src={detal2} className={cx("img-details")} />
            </Figure>
            <Figure className={cx("column")}>
              <Figure.Image alt="500x500" src={detal3} className={cx("img-details")} />
              <Figure.Image alt="500x500" src={detal4} className={cx("img-details")} />
            </Figure>
          </div>
          <div className={cx("about")}>
            <span className={cx("about-title")}>About the Product</span> <br/> <br/>
            <span className={cx("descriptions-details")}>
              An iconic essential, our reimagined jeans are made with signature logo accents, a Calvin Klein hallmark.
              Cut in a standard straight fit with considered detailing and reinforced seams.
            </span>
          </div>
        </article>
        <article className={cx("details-right")}>
          <div className={cx("detailsright")}>
            <span className={cx("detailsright-title")}>Standard Straight Jean</span>
            <span className={cx("detailsright-price", "text-details")}>
              $62.54 <span className={cx("sell")}>30% off</span>{" "}
            </span>
            <span className={cx("detailsright-color", "text-details")}> Color: </span>
            <div className={cx("btn-change-color")}>
              <button className={cx("btn-color-1", "btn-color")}></button>
              <button className={cx("btn-color-2", "btn-color")}></button>
              <button className={cx("btn-color-3", "btn-color")}></button>
              <button className={cx("btn-color-4", "btn-color")}></button>
              <button className={cx("btn-color-5", "btn-color")}></button>
            </div>
            <span className={cx("detailsright-size", "text-details")}> Size: </span>
            <div className={cx("btn-change-size")}>
              <button className={cx("btn-size-1", "btn-size")}>S</button>
              <button className={cx("btn-size-2", "btn-size")}>M</button>
              <button className={cx("btn-size-3", "btn-size")}>L</button>
              <button className={cx("btn-size-4", "btn-size")}>XL</button>
              <button className={cx("btn-size-4", "btn-size")}>XXL</button>
            </div>

            <div className={cx("container-btn-add")}>
              <div className={cx("select-qlt")}>
                <Form.Select aria-label="Default select example" className={cx("select-form")}>
                  <option value="1" selected>
                    One
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <button className={cx("btn-addcart")}>Add to Cart - $62.54</button>
            </div>

            <span className={cx("detailsright-related")}>Related products</span>
            <div>
              <Figure className={cx("column")}>
                <Figure.Image alt="250x250" src={imgdetail} className={cx("img-details-related")} />
                <Figure.Image alt="250x250" src={imgdetail} className={cx("img-details-related")} />
                <div className="container-title-related">
                  <span className={cx("detailsright-related-title")}>Classic Smooth Cotton</span>
                  <span className={cx("detailsright-related-title")}>Cotton Classics 5-Pack </span>
                </div>
              </Figure>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default ProductDetail;
