import HeaderOrder from "../components/HeaderOrder/index";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div>
      <div className={cx("Container")}>
        <div className={cx("sidebar")}>
          <HeaderOrder />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
