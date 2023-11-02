import WelcomeText from "./WelcomeText.jsx";
import styles from './WelcomeMessage.module.scss'
const WelcomeMessage = () => {
    return(
        <div className={styles.welcomeMessage}>
            <WelcomeText />
        </div>
    )
}

export default WelcomeMessage;