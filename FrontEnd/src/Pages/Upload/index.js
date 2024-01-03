import { useState, useEffect } from "react";
import React from "react";
import styles from "./Upload.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

function Upload() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
  const discountedProducts = product.filter((pdata) => parseFloat(pdata.discount) > 0);

  const handleSearch = (query) => {
    const results = product.filter((pdata) => pdata.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
    setShowSearchResults(query && query.trim() !== "");
    console.log("searchTerm:", query);
    console.log("searchResults:", results);
    console.log("showSearchResults:", showSearchResults);
  };

  useEffect(() => {
    console.log("product:", product);
    handleSearch(searchTerm);
  }, [searchTerm, product]);

  useEffect(() => {
    const getproduct = () => {
      fetch("http://127.0.0.1:8000/api/products")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log("response", response.products);
          setproduct(response.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getproduct();
  }, []);

  const deleteProduct = (id) => {
    axios.delete("http://127.0.0.1:8000/api/productsdelete/" + id).then(function (response) {
      console.log(response.data);
      // alert("Successfully Deleted, please refresh the page");
      window.location.reload();
    });
  };

  return (
    <React.Fragment>
      <div className="container container_overflow">
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label textSearch">Search Product</label>
              <input
                type="text"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {showSearchResults && searchResults.length > 0 && (
              <div>
                <h6 className={cx("textSearch")}>Search Results:</h6>
                <table className={cx("table", "table-warning", "table-bordered")}>
                  <thead>
                    <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">Product Title</th>
                      <th scope="col">Product Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Price after Discount</th>
                      <th scope="col">size</th>
                      <th scope="col">color</th>
                      <th scope="col">stock</th>
                      <th scope="col" class="align-middle text-center">
                        imagedetails
                      </th>
                      <th scope="col" class="align-middle text-center">
                        Product Image
                      </th>
                      <th scope="col" width="200" class="align-middle text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((pdata, index) => (
                      <tr key={index}>
                        <td>{index + 1} </td>
                        <td>{pdata.name} </td>
                        <td>{pdata.description} </td>
                        <td>{pdata.price}</td>
                        <td>{pdata.discount}</td>
                        <td>{pdata.priceafterdiscount}</td>
                        <td>{pdata.size}</td>
                        <td>
                          <div
                            style={{ backgroundColor: pdata.color, width: "20px", height: "20px", borderRadius: "50%" }}
                          ></div>
                        </td>
                        <td>{pdata.stock}</td>
                        <td className={cx("image-details-cell")}>
                          {pdata.imagedetails.map((detail, detailIndex) => (
                            <img
                              key={detailIndex}
                              src={`http://127.0.0.1:8000/storage/${detail}`}
                              alt=""
                              className={cx("image-detail")}
                            />
                          ))}
                        </td>
                        <td>
                          <img
                            src={`http://127.0.0.1:8000/storage/${pdata.image}`}
                            alt=""
                            className={cx("image-product")}
                          />
                        </td>

                        <td class="align-middle text-center">
                          <Link to={`/editproduct/${pdata.id}`} className="btn btn-success mx-2">
                            Edit
                          </Link>
                          <button onClick={() => deleteProduct(pdata.id)} className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <h5 className="mb-4">Discounted Products</h5>

            <table className="table table-bordered table-light">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Price after Discount</th>
                  <th scope="col">size</th>
                  <th scope="col">color</th>
                  <th scope="col">stock</th>
                  <th scope="col" className="align-middle text-center">
                    imagedetails
                  </th>
                  <th scope="col" className="align-middle text-center">
                    Product Image
                  </th>
                  <th scope="col" width="200" className="align-middle text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {discountedProducts.map((pdata, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pdata.name}</td>
                    <td>{pdata.description}</td>
                    <td>{pdata.price}</td>
                    <td>{pdata.discount}</td>
                    <td>{pdata.priceafterdiscount}</td>
                    <td>{pdata.size}</td>
                    <td>
                      <div
                        style={{ backgroundColor: pdata.color, width: "20px", height: "20px", borderRadius: "50%" }}
                      ></div>
                    </td>
                    <td>{pdata.stock}</td>
                    <td className={cx("image-details-cell")}>
                      {pdata.imagedetails.map((detail, detailIndex) => (
                        <img
                          key={detailIndex}
                          src={`http://127.0.0.1:8000/storage/${detail}`}
                          alt=""
                          className={cx("image-detail")}
                        />
                      ))}
                    </td>
                    <td>
                      <img
                        src={`http://127.0.0.1:8000/storage/${pdata.image}`}
                        alt=""
                        className={cx("image-product")}
                      />
                    </td>
                    <td className="align-middle text-center">
                      <Link to={`/editproduct/${pdata.id}`} className="btn btn-success mx-2">
                        Edit
                      </Link>
                      <button onClick={() => deleteProduct(pdata.id)} className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="mb-4">Product List</h5>

            <table className="table table-bordered table-light">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Price after Discount</th>
                  <th scope="col">size</th>
                  <th scope="col">color</th>
                  <th scope="col">stock</th>
                  <th scope="col" class="align-middle text-center">
                    imagedetails
                  </th>
                  <th scope="col" class="align-middle text-center">
                    Product Image
                  </th>
                  <th scope="col" width="200" class="align-middle text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.map((pdata, index) => (
                  <tr key={index}>
                    <td>{index + 1} </td>
                    <td>{pdata.name} </td>
                    <td>{pdata.description} </td>
                    <td>{pdata.price}</td>
                    <td>{pdata.discount}</td>
                    <td>{pdata.priceafterdiscount}</td>
                    <td>{pdata.size}</td>
                    <td>
                      <div
                        style={{ backgroundColor: pdata.color, width: "20px", height: "20px", borderRadius: "50%" }}
                      ></div>
                    </td>
                    <td>{pdata.stock}</td>
                    <td className={cx("image-details-cell")}>
                      {pdata.imagedetails.map((detail, detailIndex) => (
                        <img
                          key={detailIndex}
                          src={`http://127.0.0.1:8000/storage/${detail}`}
                          alt=""
                          className={cx("image-detail")}
                        />
                      ))}
                    </td>
                    <td>
                      <img
                        src={`http://127.0.0.1:8000/storage/${pdata.image}`}
                        alt=""
                        className={cx("image-product")}
                      />
                    </td>
                    <td class="align-middle text-center">
                      <Link to={`/editproduct/${pdata.id}`} className="btn btn-success mx-2">
                        Edit
                      </Link>
                      <button onClick={() => deleteProduct(pdata.id)} className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Upload;
