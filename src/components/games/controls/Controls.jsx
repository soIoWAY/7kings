/* eslint-disable react/prop-types */
import {useState} from "react";
import styles from './Controls.module.scss'

const Controls = (props) => {
    const [userBet, setUserBet] = useState(0)

    const userBetHandler = (event) => {
        const value = event.target.value
        setUserBet(value)
        props.userBetHandler(value)
    }

    const multipHandler = () => {
        const value = userBet * 2
        setUserBet(value)
        props.userBetHandler(value)
    }

    const halfHandler = () => {
        const value = userBet / 2
        setUserBet(value)
        props.userBetHandler(value)
    }

    const uniHandler = (event) => {
        const valueInt = parseInt(event.target.value)
        setUserBet(valueInt)
        props.userBetHandler(valueInt)
    }

    const maxHandler = () => {
        setUserBet(props.balance)
        props.userBetHandler(props.balance)
    }

    return (
        <div className={styles.controls}>
            <div>
                <input type="number"
                       className={styles.userBet}
                       value={userBet}
                       onChange={userBetHandler}
                />
                <button onClick={multipHandler}>x2</button>
                <button onClick={halfHandler}>1/2</button>
                <button onClick={uniHandler} value='0'>0</button>
                <button onClick={maxHandler} value='max'>max</button>
            </div>
            <div>
                <button onClick={uniHandler} value='10'>10</button>
                <button onClick={uniHandler} value='25'>25</button>
                <button onClick={uniHandler} value='50'>50</button>
                <button onClick={uniHandler} value='100'>100</button>
                <button onClick={uniHandler} value='500'>500</button>
            </div>
        </div>
    )
}

export default Controls;