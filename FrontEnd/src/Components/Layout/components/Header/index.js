import styles from "./Header.module.scss";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import ModalSearch from "../Modals/ModalSearch";
const cx = classNames.bind(styles);

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [allProduct, setProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    //add class khi scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      //remove class khi scroll
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={cx("wrapper", { toggleHeader: scrolled })}>
      <div className={cx("header-content")}>
        <ul className={cx("icon-header")}>
          <li>
            <a href="product">
              <i className={cx("bi bi-list", "icon", { toggleTextHeader: scrolled })}></i>
              <span className={cx("text-icon", { toggleTextHeader: scrolled })}>Category</span>
            </a>
          </li>
          <li>
            <a onClick={() => { setOpenModal(true) }}>
              <i className={cx("bi bi-search", "icon", { toggleTextHeader: scrolled })}></i>
              <span className={cx("text-icon", { toggleTextHeader: scrolled })}>Search</span>
            </a>
            {openModal && <ModalSearch closeModal={setOpenModal} />}

          </li>
        </ul>

        <div className={cx("text_logo")}>
          <a href="/">
            <span className={cx("text_logo", { toggleTextHeader: scrolled })}>Fashion Fits</span>
          </a>
        </div>

        <ul className={cx("icon-header")}>
          <li>
            <a href="upload">
              <i className={cx("bi bi-person", "icon", { toggleTextHeader: scrolled })}></i>
              <span className={cx("text-icon", { toggleTextHeader: scrolled })}>User</span>
            </a>
          </li>
          <li>
            <a href="cart">
              <i className={cx("bi bi-cart", "icon", { toggleTextHeader: scrolled })}></i>
              <span className={cx("text-icon", { toggleTextHeader: scrolled })}>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
