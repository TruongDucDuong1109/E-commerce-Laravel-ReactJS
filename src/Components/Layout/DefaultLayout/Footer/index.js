import { Fragment } from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <Fragment>
      <div className={cx("footer")}>
        <div className={cx("footer-1")}>
          <a href="/"><i class="bi bi-facebook" id={cx("icon-footer")}></i></a>
          <a href="/"><i class="bi bi-instagram" id={cx("icon-footer")}></i></a>
          <a href="/"><i class="bi bi-github" id={cx("icon-footer")}></i></a>
          <a href="/"><i class="bi bi-twitter" id={cx("icon-footer")}></i></a>
        </div>
        <div><p>No copyright @2023 all rights reserved | This website is made with by <span >Fashionfits.com</span> </p> </div>
        <div className={cx("footer-logo-text")}>FASHION FITS</div>
      </div>
    </Fragment>
  );
}
export default Footer;
