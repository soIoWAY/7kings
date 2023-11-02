import styles from './GamesList.module.scss'
import Game from "./game/Game.jsx";
import Games from "../Games.jsx";
const GamesList = () => {
    const slots = [
        {
            name: '7 7 7',
            id: 'slots_777'
        },
        {
            name: '🍒🍒🍒',
            id: 'slots_cherry'
        }
    ]

    const crushes = [
        {
            name: '✈️',
            id: 'crushes_plane'
        }
    ]

    const simples = [
        {
            name: '🎱',
            id: 'simples_guess'
        }
    ]

    return (
        <div className={styles.gamesList}>
            <div className={styles.category}>
                <div className={styles.name}>
                    Slots
                </div>
                <Game games={slots} />
            </div>
            <div className={styles.category}>
                <div className={styles.name}>
                    Crushes
                </div>
                <Game games={crushes} />
            </div>
            <div className={styles.category}>
                <div className={styles.name}>
                    Simples
                </div>
                <Game games={simples}/>
            </div>
        </div>
    )
}

export default GamesList;