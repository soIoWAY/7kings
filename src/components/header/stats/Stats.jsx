import styles from './Stats.module.scss'
import {useSelector} from "react-redux";
const Stats = () => {
    const selectedStats = state => state.stats
    const {stats} = useSelector(selectedStats)
    // ререндеринг
    return(
        <div className={styles.stats}>
            <div>
                <span>W: {stats.wins}</span>
            </div>
            <div>
                <span>L: {stats.loses}</span>
            </div>
        </div>
    )
}

export default Stats;