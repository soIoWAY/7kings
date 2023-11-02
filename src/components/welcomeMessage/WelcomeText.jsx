import styles from './WelcomeText.module.scss'
const WelcomeText = () => {
    return(
        <div className={styles.welcomeText}>
            <h1>Welcome <span>Admin</span>, choose game and play!</h1>
        </div>
    )
}

export default WelcomeText;