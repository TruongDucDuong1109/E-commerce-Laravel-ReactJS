import React from "react";
import styles from "./Login.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const cx = classNames.bind(styles);
function Register() {
    const [registerInput, setRegister] = useState(
        {
            name: "",
            email: "",
            password: "",
            error_list: [],
        }
    )
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value})
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`http://127.0.0.1:8000/api/register`, data).then(res =>{
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success")
                }
                else {
                    setRegister({...registerInput, error_list: res.data.validation_errors})
                }
        })
        });
    }
  return (
    <div className={cx("wrapper-login")}>
      <section className={cx("section-login")}>
        <div className={cx("container py-5")}>
          <div className={cx("row justify-content-center")}>
            <div className={cx("col-md-6")}>
              <div className={cx("card-header")}>
                <h4 className={cx("text-center")}>Register</h4>
              </div>
              <div className={cx("card-body")}>
                <form onSubmit ={registerSubmit}>
                  <div className={cx("form-group row")}>
                    <label htmlFor="fullname" className={cx("col-md-4 col-form-label text-md-right")}>
                      FullName
                    </label>
                    <div className={cx("col-md-6")}>
                      <input
                        type="text"
                        id="fullname"
                        value={registerInput.name}
                        onChange={handleInput}
                        className={cx("form-control")}
                        name="name"
                        required
                        autoFocus
                      />
                    </div>
           
                  </div>
                  <div className={cx("form-group row")}>
                    <label htmlFor="email_address" className={cx("col-md-4 col-form-label text-md-right")}>
                      E-Mail Address
                    </label>
                    <div className={cx("col-md-6")}>
                      <input
                        type="text"
                        id="email_address"
                        value={registerInput.email}
                        onChange={handleInput}
                        className={cx("form-control")}
                        name="email"
                        required
                        autoFocus
                      />
                    </div>
             

                  </div>
                  <div className={cx("form-group row")}>
                    <label htmlFor="password" className={cx("col-md-4 col-form-label text-md-right")}>
                      Password
                    </label>
                    <div className={cx("col-md-6")}>
                      <input type="password" id="password" className={cx("form-control")} name="password" value={registerInput.password}
                        onChange={handleInput} />
                    </div>
              

                  </div>
                  
                  <div className={cx("col-md-6 offset-md-4")}>
                    <button type="submit" className={cx("btn btn-primary")}>
                      Register
                    </button>
                    <Link href="#" className={cx("btn btn-link")}>
                      Login?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
