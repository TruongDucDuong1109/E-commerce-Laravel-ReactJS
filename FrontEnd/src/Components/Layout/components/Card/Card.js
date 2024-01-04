import styles from "./Card.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const cx = classNames.bind(styles);

function CardProduct() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token from the meta tag
    const metaCsrfToken = document.head.querySelector('meta[name="csrf-token"]');
    if (metaCsrfToken) {
      setCsrfToken(metaCsrfToken.content);
    }
  }, []);

  useEffect(() => {
    const getproducts = () => {
      fetch("http://127.0.0.1:8000/api/products")
        .then((res) => { return res.json() })
        .then(response => {
          console.log(response);
          setProducts(response.products);
        })
        .catch(error => console.log(error));

    }
    getproducts();
  }, []);

  const addToCart = async (product) => {
    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("quantity", quantity);

    await axios.post(`http://localhost:8000/api/add-to-cart`, formData, {
      withCredentials: false,
      headers: { "Content-Type": "multipart/form-data", "X-CSRF-TOKEN": csrfToken },
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err.response))
  }

  return (
    <Fragment>
      <section className="section-products">
        <div className={cx("container")}>
          <div className="row justify-content-center text-center">
            {products.map((product, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                <Card className="Card_product">
                  <Card.Img variant="top" src={product.image} height={400} width={320} />
                  <Card.Body className="Card_body">
                    <Card.Title style={{ fontSize: 16, fontWeight: 400 }}>{product.name}</Card.Title>
                    <Card.Text className="Card_text">{product.price}$</Card.Text>
                    <Link to={`/productdetail/${product.id}`} className="btn btn-success mx-2">
                      Details
                    </Link>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CardProduct;


