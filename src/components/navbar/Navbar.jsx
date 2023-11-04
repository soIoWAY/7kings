import styles from './Navbar.module.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a href="#">Bonuses</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;