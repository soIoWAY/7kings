/* eslint-disable react/prop-types */
import styles from './Game.module.scss'
const Game = (props) => {
    return(
        <div>
            {props.games.map((game, index) => (
                <div key={index}>
                    <div className={styles.game} onClick={() => {console.log(game.id)}}>
                        <div>
                            {game.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Game;