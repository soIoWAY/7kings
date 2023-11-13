/* eslint-disable react/prop-types */
import styles from './Game.module.scss'
import { Link } from "react-router-dom";
import React from "react";

const Game = (props) => {
    return(
        <div>
            {props.games.map((game, index) => (
                <Link to={`/game/${game.id}`} key={index}>
                    <div key={index}>
                        <div className={styles.game} onClick={() => {console.log(game.id)}}>
                            <div>
                                {game.name}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default React.memo(Game);