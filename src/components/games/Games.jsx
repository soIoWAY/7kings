import GamesText from "./gamesText/GamesText.jsx";
import GamesList from "./gamesList/GamesList.jsx";
import styles from './Games.module.scss'

const Games = () => {
    return(
        <div className={styles.games}>
            <GamesText />
            <GamesList />
        </div>
    )
}

export default Games;