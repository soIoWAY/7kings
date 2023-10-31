import Logo from "./Logo.jsx";
import FullStats from "./stats/FullStats.jsx";
import styles from './Header.module.scss'
const Header = () => {
    return(
        <div className={styles.header}>
            <Logo />
            <FullStats />
        </div>
    )
}

export default Header;