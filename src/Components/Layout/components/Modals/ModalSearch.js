import React from "react";
import { useState, useEffect } from "react";
import styles from "./ModalSearch.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function ModalSearch({closeModal}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [product, setproduct] = useState([]);
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
  });
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = product.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    //console.log(searchWord);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className= {cx ("row d-flex justify-content-center " , "wrapper_search")}>
      <div className={cx("col-md-12")}>
        <div className="form">
          <div className={"d-flex justify-content-around"}>
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder= "What you looking for ?"
            className={cx("form-control form-input", "search_form")}
            value={wordEntered}
            onChange={handleFilter}
          />
          <button onClick={()=> {closeModal(false)}} className={cx("btn_close")}><u>Cancel</u></button>
          </div>
          {/* <span className={cx("span_search")}></span> */}

        </div>

        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, index) => {
              return (
                <div>
                  <div className="list border-bottom" key={index}>
                    <div className= {cx("")}>
                          <Link to={`/productdetail/${value.id}`} className={cx("search_content")}>
                          {value.name}
                        </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalSearch;
