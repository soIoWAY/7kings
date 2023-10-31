import Balance from "./Balance.jsx";
import Stats from "./Stats.jsx";
import styles from './FullStats.module.scss'
const FullStats = () => {
    return(
        <div className={styles.fullStats}>
            <Balance />
            <Stats />
        </div>
    )
}

export default FullStats;