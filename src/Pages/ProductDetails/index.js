import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.scss";
import { useNavigate } from "react-router";
import { Figure } from "react-bootstrap";
import classNames from "classnames/bind";
import imgdetail from "../../Assets/img-slide-1.jpg";
import Form from "react-bootstrap/Form";
const cx = classNames.bind(styles);

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({ imagedetails: [] });

  useEffect(() => {
    getproduct();
  }, []);

  function getproduct() {
    axios.get("http://127.0.0.1:8000/api/products/" + id).then(function (response) {
      setInputs(response.data.product);
    });
  }

  return (
    <div className={cx("wrapper-product-details")}>
      <section className={cx("section-details")}>
        <article className={cx("details-left")}>
          <div className={cx("row")}>
            {inputs.imagedetails.map((detail) => (
              <Figure className={cx("column")}>
                <Figure.Image
                  alt="500x500"
                  src={`http://127.0.0.1:8000/storage/${detail}`}
                  className={cx("img-details")}
                />
              </Figure>
            ))}
          </div>
          <div className={cx("about")}>
            <span className={cx("about-title")}>About the Product</span> <br /> <br />
            <span className={cx("descriptions-details")}>
              An iconic essential, our reimagined jeans are made with signature logo accents, a Calvin Klein hallmark.
              Cut in a standard straight fit with considered detailing and reinforced seams.
            </span>
          </div>
        </article>
        <article className={cx("details-right")}>
          <div className={cx("detailsright")}>
            <span className={cx("detailsright-title")}>{inputs.name}</span>
            <span className={cx("detailsright-price", "text-details")}>
              {inputs.price} <span className={cx("sell")}>30% off</span>{" "}
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

// import React, { useState, useEffect } from "react";

// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function ProductDetail() {
//   const navigate = useNavigate();

//   const { id } = useParams();

//   const [message, setMessage] = useState("");

//   const [inputs, setInputs] = useState([]);
//   const [fileimage, setPhoto] = useState("");

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const uploadProduct = async () => {
//     const formData = new FormData();
//     formData.append("_method", "PUT");
//     formData.append("name", inputs.name);
//     formData.append("description", inputs.description);
//     formData.append("price", inputs.price);
//     formData.append("image", fileimage);
//     const response = await axios.post("http://127.0.0.1:8000/api/productsupdate/" + id, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     setMessage(response.data.message); //"message": "Product successfully updated.."
//     setTimeout(() => {
//       navigate("/upload");
//     }, 2000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await uploadProduct();
//   };

//   useEffect(() => {
//     getproduct();
//   }, []);

//   function getproduct() {
//     axios.get("http://127.0.0.1:8000/api/products/" + id).then(function (response) {
//       setInputs(response.data.product);
//     });
//   }

//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 mt-4">
//             <h5 className="mb-4">Edit Product </h5>
//             <p className="text-success">
//               <b>{message}</b>
//             </p>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-3 row">
//                 <label className="col-sm-3">Product Title </label>
//                 <div className="col-sm-9">
//                   <input type="text" value={inputs.name} className="form-control" name="name" onChange={handleChange} />
//                 </div>
//               </div>

//               <div className="mb-3 row">
//                 <label className="col-sm-3">Description </label>
//                 <div className="col-sm-9">
//                   <input
//                     type="text"
//                     value={inputs.description}
//                     className="form-control"
//                     name="description"
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="mb-3 row">
//                 <label className="col-sm-3">Price </label>
//                 <div className="col-sm-9">
//                   <input type="text" value={inputs.price} className="form-control" name="price" onChange={handleChange} />
//                 </div>
//               </div>

//               <div className="mb-3 row">
//                 <label className="col-sm-3">Product Image</label>
//                 <div className="col-sm-9">
//                   <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width={300} />
//                   <input type="file" className="form-control" onChange={(e) => setPhoto(e.target.files[0])} />
//                 </div>
//               </div>

//               <div className="mb-3 row">
//                 <label className="col-sm-3"></label>
//                 <div className="col-sm-9">
//                   <button type="submit" className="btn btn-success">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
// export default ProductDetail;
