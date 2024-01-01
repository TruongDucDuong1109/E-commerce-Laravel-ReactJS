import styles from "./Card.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect, useState } from "react";
import http from "../../../../http";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const cx = classNames.bind(styles);

function CardProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getproducts = () =>{
      fetch("http://127.0.0.1:8000/api/products")
      .then((res) => {return res.json()})
      .then(response => {
        console.log(response);
        setProducts(response.products);
      })
      .catch(error => console.log(error));

    }
    getproducts();
  }, []);

  return (
    <Fragment>
      <section className="section-products">
        <div className={cx("container")}>
          <div className="row justify-content-center text-center">
            {products.map((product, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                <Card className="Card_product">
                  <Card.Img variant="top" src={`http://127.0.0.1:8000/storage/${product.image}`} height={400} width={320}/>
                  <Card.Body className="Card_body">
                    <Card.Title style={{fontSize: 16, fontWeight: 400}}>{product.name}</Card.Title>
                    <Card.Text className="Card_text">{product.price}$</Card.Text>
                    <Link to={`/productdetail/${product.id}`} className="btn btn-success mx-2">
                        Details
                      </Link>
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


