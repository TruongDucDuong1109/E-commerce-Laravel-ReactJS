import styles from "./SidebarOrder.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar_container")}>
          <div className={cx("logo_sidebar")}><a href="/" className={cx("btn_back")}><i class="bi bi-arrow-left"></i>Back to Home</a></div>
          <hr className={cx("line")} />
          <div className={cx("sidebar_content")}>
            <div className= {cx("box_content")}>
              <a href="upload">
                <i className= {cx("bi bi-person-fill  ", "icon" )}></i>
                <span className={cx("text_content")}>Products</span>
              </a>
            </div>
            <div className= {cx("box_content")}>
              <a href="addproduct">
                <i className= {cx("bi bi-person-fill  ", "icon" )}></i>
                <span className={cx("text_content")}>Add Product</span>
              </a>
            </div>
            <div className= {cx("box_content")}>
              <a href="!#">
                <i className= {cx("bi bi-person-fill  ", "icon" )}></i>
                <span className={cx("text_content")}>Products</span>
              </a>
            </div>
            <div className= {cx("box_content")}>
              <a href="!#">
                <i className= {cx("bi bi-person-fill  ", "icon" )}></i>
                <span className={cx("text_content")}>Products</span>
              </a>
            </div>
            <div className= {cx("box_content")}>
              <a href="!#">
                <i className= {cx("bi bi-person-fill  ", "icon" )}></i>
                <span className={cx("text_content")}>Products</span>
              </a>
            </div>
            

            <hr className={cx("line")} />
          </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
