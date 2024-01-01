import React from "react";
import styles from "./Login.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("wrapper-login")}>
      <section className={cx("section-login")}>
        <div className={cx("container py-5")}>
            <div className={cx("row justify-content-center")}>
                <div className={cx("col-md-6")}>
                    <div className={cx("card-header")}>
                        <h4 className={cx("text-center")}>Login</h4>
                    </div>
                    <div className={cx("card-body")}>
                        <form>
                            <div className={cx("form-group row")}>
                                <label htmlFor="email_address" className={cx("col-md-4 col-form-label text-md-right")}>E-Mail Address</label>
                                <div className={cx("col-md-6")}>
                                    <input type="text" id="email_address" className={cx("form-control")} name="email-address" required autoFocus />
                                </div>
                            </div>
                            <div className={cx("form-group row")}>
                                <label htmlFor="password" className={cx("col-md-4 col-form-label text-md-right")}>Password</label>
                                <div className={cx("col-md-6")}>
                                    <input type="password" id="password" className={cx("form-control")} name="password" required />
                                </div>
                            </div>
                            <div className={cx("form-group row")}>
                                <div className={cx("col-md-6 offset-md-4")}>
                                    <div className={cx("checkbox")}>
                                        <label>
                                            <input type="checkbox" name="remember" /> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("col-md-6 offset-md-4")}>
                                <button type="submit" className={cx("btn btn-primary")}>
                                    Login
                                </button>
                                <Link href="#" className={cx("btn btn-link")}>
                                    Forgot Your Password?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login
