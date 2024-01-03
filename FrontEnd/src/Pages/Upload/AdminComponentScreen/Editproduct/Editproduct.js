import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    size: "",
    color: "",
    stock: "",
    image: "",
    imagedetails: [], // Thêm trường này để lưu trữ danh sách imagedetails
  });
  const [fileImage, setFileImage] = useState(null);
  const [fileImageDetails, setFileImageDetails] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setFileImage(event.target.files[0]);
  };

  const handleImageDetailsChange = (event) => {
    setFileImageDetails(event.target.files);
  };

  const uploadProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("_method", "post");
      formData.append("name", inputs.name);
      formData.append("description", inputs.description);
      formData.append("price", inputs.price);
      formData.append("discount", inputs.discount);
      formData.append("size", inputs.size);
      formData.append("color", inputs.color);
      formData.append("stock", inputs.stock);
      formData.append("image", fileImage);

      //Thêm imagedetails vào formData
      for (let i = 0; i < fileImageDetails.length; i++) {
        formData.append(`imagedetails[${i}]`, fileImageDetails[i]);
      }

      const response = await axios.post(`http://127.0.0.1:8000/api/productsupdate/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    withCredentials: false,
      });
      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/upload");
      }, 2000);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage(error.response.data.message || "Đã xảy ra lỗi nào đó!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };

  useEffect(() => {
    const get = async () => {
      await getproduct();
    }
    get();
  }, []);

  async function getproduct() {

    const { data } = await axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/products/${id}`,
      withCredentials: false,
    })
    setInputs(data.product);

  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Edit Product </h5>
            <p className="text-success">
              <b>{message}</b>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">Product Title </label>
                <div className="col-sm-9">
                  <input type="text" value={inputs.name} className="form-control" name="name" onChange={handleChange} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Description </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.description}
                    className="form-control"
                    name="description"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Price </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.price}
                    className="form-control"
                    name="price"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Discount</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.discount}
                    className="form-control"
                    name="discount"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Size</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.size}
                    className="form-control"
                    name="size"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Color</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.color}
                    className="form-control"
                    name="color"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Stock</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.stock}
                    className="form-control"
                    name="stock"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Product Image</label>
                <div className="col-sm-9">
                  <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width={300} />
                  <input type="file" className="form-control" onChange={handleImageChange} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Product Image Details</label>
                <div className="col-sm-9">
                  {inputs.imagedetails.map((image, index) => (
                    <img key={index} src={`http://127.0.0.1:8000/storage/${image}`} alt="" height={50} width={90} />
                  ))}
                  <input type="file" className="form-control" onChange={handleImageDetailsChange} multiple />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default EditProduct;

// import React, { useState, useEffect } from "react";

// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function EditProduct() { 
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
//     formData.append("_method", "post");
//     formData.append("name", inputs.name);
//     formData.append("description", inputs.description);
//     formData.append("image", fileimage);

//     const response = await axios.post("http://127.0.0.1:8000/api/productsupdate/" + id, formData, {
//       headers: [{ "Content-Type": "multipart/form-data" }, { "Access-Control-Allow-Origin": "*" }],
//       withCredentials: false,
//     });
//     setMessage(response.data.message); //"message": "Product successfully updated.."
//     console.log(response);
//     setTimeout(() => {
//       navigate("/upload");
//     }, 2000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await uploadProduct();
//   };

//   useEffect(() => {
//     const get = async () => {
//       await getproduct();
//     }
//     get();
//   }, []);

//   async function getproduct() {

//     const { data } = await axios({
//       method: 'get',
//       url: `http://127.0.0.1:8000/api/products/${id}`,
//       withCredentials: false,
//     })
//     setInputs(data.product);

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
// export default EditProduct;
