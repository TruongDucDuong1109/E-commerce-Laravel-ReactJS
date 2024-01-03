import { useState, useEffect } from "react";
import React from "react";
import styles from "./Upload.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


import axios from "axios";
function Upload() {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
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
            <h5 className="mb-4">Product List</h5>
            <p className="text-danger"> </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Price after Discount</th>
                  <th scope="col">imagedetails</th>
                  <th scope="col">Product Image</th>
                  <th scope="col" width="200">
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
                    <td>
                      {pdata.imagedetails.map((detail, detailIndex) => (
                        <img key={detailIndex} src={`http://127.0.0.1:8000/storage/${detail}`} alt="" height={50} width={90} />
                      ))}
                    </td>
                    <td>
                      <img src={`http://127.0.0.1:8000/storage/${pdata.image}`} alt="" height={50} width={90} />
                    </td>
                    <td>
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



