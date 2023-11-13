import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("header-content")}>
        <ul className={cx("icon-header")}>
          <li>
            <a href="product">
              <i class="bi bi-list" id={cx("icon")}></i>
              <span className= {cx("text-icon")}>Menu</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="bi bi-search" id={cx("icon")}></i>
              <span className= {cx("text-icon")}>Search</span>
            </a>
          </li>
        </ul>

        <div id={cx("text_logo")}>
          <a href="/">
            <span id={cx("text_logo")}>Fashion Fits</span>
          </a>
        </div>

        <ul className={cx("icon-header")}>
          <li>
            <a href="product">
              <i class="bi bi-person" id={cx("icon")}></i>
              <span className= {cx("text-icon")}>User</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="bi bi-cart" id={cx("icon")}></i>
              <span className= {cx("text-icon")}>Cart</span>

            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
