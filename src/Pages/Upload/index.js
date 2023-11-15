import styles from "./ProductDetail.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function ProductDetail() {
  return (
    <div className={cx("wrapper-productDetails")}><h2>ProductDetail</h2></div>
  );
}

export default ProductDetail;
