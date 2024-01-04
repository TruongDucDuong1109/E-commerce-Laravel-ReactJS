import React from "react";
import styles from "./Cart.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const cx = classNames.bind(styles);

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token from the meta tag
    const metaCsrfToken = document.head.querySelector('meta[name="csrf-token"]');
    if (metaCsrfToken) {
      setCsrfToken(metaCsrfToken.content);
    }
  }, []);

  useEffect(() => {
    const getCart = () => {
      fetch("http://127.0.0.1:8000/api/cart")
        .then((res) => res.json())
        .then((response) => {
          console.log("response", response.cart);
          setCart(response.cart || []);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCart();
  }, []);

  const removeItem = async (id) => {
    const product_cart_id = id;

    await axios.delete(`http://localhost:8000/api/cart-delete/${product_cart_id}`, {
      withCredentials: false,
      headers: { "Content-Type": "multipart/form-data", "X-CSRF-TOKEN": csrfToken },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err.response.data, err.response.status, err.response.headers))
  }


  return (
    <div className={cx("wrapper-cart")}>
      <section className={cx("section-details")}>
        <div className={cx("cart-container")}>
          <div className={cx("list-product")}>
            <div className={cx("d-flex justify-content-around")}>
              <h1>Shopping Cart</h1>
            </div>
            <hr />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {!loading ? cart.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={product.product.image} alt="" height={100} width={100} />
                    </td>
                    <td>{product.product.name}</td>
                    <td>{product.product.price}$</td>
                    <td>{product.quantity}</td>
                    <td>{product.product.price * product.quantity}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeItem(product.id)}>Remove</button>
                    </td>
                  </tr>
                )) : <tr><td colSpan={7} className={cx('font')}>No product in cart</td></tr>
                }
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
