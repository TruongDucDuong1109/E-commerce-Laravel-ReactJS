import styles from "./HeaderBasic.module.scss";
import React from "react";
import { useNavigate } from 'react-router-dom';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function HeaderBasic() {
  const navigate = useNavigate();
  return (
    <header className={cx("wrapper")}>
      <div className={cx("header-content")}>
        <ul className={cx("icon-header")}>
          <li>
            <a onClick={() => navigate('/product')}>
              <i className={cx("bi bi-list" , "icon")}></i>
              <span className={cx("text-icon")}>Menu</span>
            </a>
          </li>
          <li>
            <a  onClick={() => navigate('/')}>
              <i className={cx("bi bi-search" , "icon")}></i>
              <span className={cx("text-icon")}>Search</span>
            </a>
          </li>
        </ul>

        <div className={cx("text_logo")}>
          <a  onClick={() => navigate('/')}>
            <span className={cx("text_logo")}>Fashion Fits</span>
          </a>
        </div>

        <ul className={cx("icon-header")}>
          <li>
            <a  onClick={() => navigate('/upload')}>
              <i className={cx("bi bi-person" , "icon")}></i>
              <span className={cx("text-icon")}>User</span>
            </a>
          </li>
          <li>
            <a  onClick={() => navigate('/product')}>
              <i className={cx("bi bi-cart" , "icon")}></i>
              <span className={cx("text-icon")}>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderBasic;
