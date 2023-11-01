import styles from './Navbar.module.scss'
const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
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