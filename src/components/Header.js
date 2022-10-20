import classes from './Header.module.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className={classes.AppHeader}>
            <a className={classes.AppHeader_icon} href="/home">إتقـــان</a>
            <Navbar/>
        </header>
    );
};

export default Header;