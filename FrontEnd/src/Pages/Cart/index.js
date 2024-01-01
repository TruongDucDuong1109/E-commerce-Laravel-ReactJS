import React from "react";
import styles from "./Cart.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";


const cx = classNames.bind(styles);
function Cart() {
  const [cart, setcart] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    const getCart = () => {
      fetch("http://127.0.0.1:8000/api/cart")
        .then((res) => res.json())
        .then((response) => {
          console.log("response", response.cart);
          setcart(response.cart || []); // Set to an empty array if undefined
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getCart();
  }, []);
  return (
    <div>
      <div className={cx("wrapper-cart")}>
        <section className={cx("section-details")}>
          <div className={cx("cart-container")}>
            <div className={cx("list-product")}>
              <div className={cx("d-flex justify-content-around")}>
                <h1>Shopping Cart</h1>
                <h3>item</h3>
              </div>
              <hr />
              <div className={cx("list")}>
                {cart.map((pdata, index) => (
                  <div key={index} className={cx("d-flex justify-content-around")}>
                    <div className={cx("product")}>
                      <div className={cx("d-flex justify-content-around")}>
                        <div className={cx("image")}>
                          <img src={`http://127.0.0.1:8000/storage/${pdata.image}`} alt="" />
                        </div>
                        <div className={cx("name")}>
                          <p>{pdata.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx("quantity")}>
                      <div className={cx("d-flex justify-content-around")}>
                        <div className={cx("minus")}>-</div>
                        <div className={cx("number")}>{pdata.quantity}</div>
                        <div className={cx("plus")}>+</div>
                      </div>
                    </div>
                    <div className={cx("price")}>
                      <div className={cx("d-flex justify-content-around")}>
                        <div className={cx("price")}>${pdata.price}</div>
                      </div>
                    </div>
                    <div className={cx("remove")}>
                      <div className={cx("d-flex justify-content-around")}>
                        <div className={cx("remove")}>X</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("sumary")}>
              <h1>Summary</h1>
              <hr />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cart;
