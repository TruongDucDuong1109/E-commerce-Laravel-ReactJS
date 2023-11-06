import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <header className= {cx ('wrapper')}>
            <div className = {cx ('header-content')}>
                <div><p>Contast Us</p></div>
                
                <div id={cx ('text_logo')}><a href='/'><p>Fashion Fits</p></a></div>

                <ul className={cx ('icon-header')}>
                   <li><a href='product'><i class="bi bi-person" id= {cx ('icon')}></i></a></li>
                    <li><a href='/'><i class="bi bi-search" id= {cx ('icon')}></i></a></li>
                   <li><a href='/'><i class="bi bi-list" id= {cx ('icon')}></i></a></li>
                </ul>
            </div>
        </header>
     );
}

export default Header;