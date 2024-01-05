import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.scss";
import { useNavigate } from "react-router";
import { Figure } from "react-bootstrap";
import classNames from "classnames/bind";
import Form from "react-bootstrap/Form";
const cx = classNames.bind(styles);

function ProductDetail({ product }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({ imagedetails: [] });

  useEffect(() => {
    getproduct();
  }, []);

  function getproduct() {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      .then(function (response) {
        console.log(response.data.product);
        setInputs(response.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/api/cart/add', {
        product_id: product.id,
        quantity: 1,
      });
      console.log(response.data.message);
      console.log("da duoc them")
      // Add logic to update the UI or show a success message to the user
    } catch (error) {
      console.error('Error adding product to cart', error);
      // Add logic to handle errors
    }
  };

  return (
    <div className={cx("wrapper-product-details")}>
      <section className={cx("section-details")}>
        <article className={cx("details-left")}>
          <div className={cx("row")}>
            <Figure className={cx("column")}>
              <Figure.Image
                alt="500x500"
                src={inputs.image}
                className={cx("img-details")}
              />
            </Figure>
          </div>
          <div className={cx("about")}>
            <span className={cx("about-title")}>About the Product</span> <br /> <br />
            <span className={cx("descriptions-details")}>
              {inputs.description}
            </span>
          </div>
        </article>
        <article className={cx("details-right")}>
          <div className={cx("detailsright")}>
            <span className={cx("detailsright-title")}>{inputs.name}</span>
            <span className={cx("detailsright-price", "text-details")}>
              {inputs.price}$ <span className={cx("sell")}>{inputs.discount}% off</span>{" "}
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
              <button className={cx("btn-addcart")} onClick={handleAddToCart}>Add to Cart - ${inputs.priceafterdiscount}</button>
            </div>

            {/* <span className={cx("detailsright-related")}>Related products</span>
            <div>
              <Figure className={cx("column")}>
                <Figure.Image alt="250x250" src={imgdetail} className={cx("img-details-related")} />
                <Figure.Image alt="250x250" src={imgdetail} className={cx("img-details-related")} />
                <div className="container-title-related">
                  <span className={cx("detailsright-related-title")}>Classic Smooth Cotton</span>
                  <span className={cx("detailsright-related-title")}>Cotton Classics 5-Pack </span>
                </div>
              </Figure>
            </div> */}
          </div>
        </article>
      </section>
    </div>
  );
}

export default ProductDetail;

