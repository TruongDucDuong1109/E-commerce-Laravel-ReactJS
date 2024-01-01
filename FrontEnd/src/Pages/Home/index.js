import styles from "./Home.scss";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
// import img1 from "../../Assets/banner.jpg";
import img2 from "../../Assets/img-slide-1.jpg";
import img3 from "../../Assets/imgfull-1.jpg";
// import img4 from "../../Assets/img-slide-3.jpg";
// import img5 from "../../Assets/img-slide-4.jpg";

const cx = classNames.bind(styles);
function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide < 4 ? currentSlide + 1 : 1;
      document.getElementById(`slide${nextSlide}`).checked = true;
      setCurrentSlide(nextSlide);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <article className={cx("wrapper-home")}>
      <section>
        <figure className={cx("banner")}>
          <img src={img3} alt="banner" id={cx("image")} />
        </figure>
        <div className={cx("text-fixed")}>
          <span className={cx("banner-text")}>D2 HORSEBIT 1995 IN DEMETRA</span>
          <button className={cx("btn-banner-discover")}>SHOP NOW</button>
        </div>
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
                <div className={cx("slide slide_1")}>
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
        <div className={cx("section2")}>
          <aside className={cx("aside-1")}>
            <figure className={cx("banner")}>
              <img src={img2} alt="banner" id={cx("img-section2")} />
            </figure>
          </aside>
          <aside className={cx("aside-2")}>
            <span className={cx("banner-text-section2")}>D2 HORSEBIT 1995 IN DEMETRA</span>
            <span className={cx("text-banner")}>
              Billie Eilish presents the first Gucci bag ever to be crafted in Demetra
            </span>
            <a href="/">
              <span id={cx("discover-more")}>DISCOVER MORE</span>
            </a>
            <hr id={cx("thread1")} className={cx("hr-animation")} />
          </aside>
        </div>
      </section>
    </article>
  );
}

export default Home;
