import styles from './Stats.module.scss'
const Stats = () => {
    return(
        <div className={styles.stats}>
            <div>
                <span>W: 0</span>
            </div>
            <div>
                <span>L: 0</span>
            </div>
        </div>
    )
}

export default Stats;