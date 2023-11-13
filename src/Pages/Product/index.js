import styles from "./Product.scss";
import classNameNames from "classnames/bind";
import Card from "../../Components/Layout/components/Card/Card";
const cx = classNameNames.bind(styles);

function Product() {
  return (
    <div>
      <section className="section-products">
        <div className={cx("container")}>
          {/* <div className="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header">
                <h3>Fashion Men</h3>
                <h2>Classic Gentleman</h2>
              </div>
            </div>
          </div> */}

          <div className="row">
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
