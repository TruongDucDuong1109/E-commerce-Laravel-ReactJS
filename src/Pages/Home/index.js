import styles from './Home.scss';
import classNames from 'classnames/bind';
import img1 from '../../Assets/banner.jpg'

const cx = classNames.bind(styles);

function Home() {
  return (
    <article className= {cx ('wrapper')}>
      <section>
        <figure className={cx ('banner')}>
        <img src={img1} alt="banner" id = {cx ('image')}/>  
        </figure>
      </section>
      <section><h1>HomePage</h1></section>
      <section><h1>HomePage</h1></section>
      <section><h1>HomePage</h1></section>
    </article>
  );
}

export default Home;
