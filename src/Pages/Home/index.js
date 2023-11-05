import styles from "./Home.scss";
import classNames from "classnames/bind";
import img1 from "../../Assets/banner.jpg";
// import img2 from "../../Assets/img-slide-1.jpg";
// import img3 from "../../Assets/img-slide-2.jpg";
// import img4 from "../../Assets/img-slide-3.jpg";
// import img5 from "../../Assets/img-slide-4.jpg";

const cx = classNames.bind(styles);

function Home() {
  return (
    <article className={cx("wrapper")}>
      <section>
        <figure className={cx("banner")}>
          <img src={img1} alt="banner" id={cx("image")} />
        </figure>
        <p className={cx("banner-text")}>D2 HORSEBIT 1995 IN DEMETRA</p>
        <button className={cx("btn-banner-discover")}>SHOP NOW</button>
      </section>
      <section>
        <div id={cx("slider")}>
          <input type="radio" name="slider" id="slide1" />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
          <input type="radio" name="slider" id="slide4" />
          <div id={cx("slides")}>
            <div id={cx("overflow")}>
              <div className={cx("inner")}>
                <div class={cx("slide slide_1")}>
                  <div className={cx("slide-content")}>
                    {/* <figure>
                      <img src={img2} alt="slider" />
                    </figure> */}
                  </div>
                </div>
                <div class={cx("slide slide_2")}>
                  <div className={cx("slide-content")}>
                    {/* <figure>
                      <img src={img3} alt="slider" />
                    </figure> */}
                  </div>
                </div>
                <div class={cx("slide slide_3")}>
                  <div className={cx("slide-content")}>
                    {/* <figure>
                      <img src={img4} alt="slider" id = {cx("img4")}/>
                    </figure> */}
                  </div>
                </div>
                <div class="slide slide_4">
                  <div className={cx("slide-content")}>
                    {/* <figure>
                      <img src={img5} alt="slider" />
                    </figure> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id={cx("controls")}>
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
          </div>
          <div id={cx("bullets")}>
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
          </div>
        </div>
      </section>
      <section>
        <h1>HomePage</h1>
      </section>
      <section>
        <h1>HomePage</h1>
      </section>
    </article>
  );
}

export default Home;
