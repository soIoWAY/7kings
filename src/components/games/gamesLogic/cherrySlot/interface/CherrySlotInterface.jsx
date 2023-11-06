import styles from './CherrySlotInterface.module.scss'
import {useEffect, useState} from "react";
// import {checker} from "./checker.js";
import {useActions} from "../../../../../hooks/useActions.js";
import Controls from "../../../controls/Controls.jsx";

const CherrySlotInterface = () => {

    const { updateWins, updateLoses } = useActions();

    const fruits = ['🍒','🍇', '🍋', '🍏', '💣', '💰'];

    const randomFruit = () => {
        return Math.floor(Math.random() * fruits.length)
    }

    const [fruit1, setFruit1] = useState('🍒');
    const [fruit2, setFruit2] = useState('🍒');
    const [fruit3, setFruit3] = useState('🍒');

    const [isGameStarted, setIsGameStarted] = useState(false)

    const updateFruits = () => {
        setFruit1(fruits[randomFruit()])
        setFruit2(fruits[randomFruit()])
        setFruit3(fruits[randomFruit()])

        setIsGameStarted(true)
    }

    useEffect(() => {
        const fruits = [fruit1, fruit2, fruit3]
        // checker(isGameStarted, fruits)
        if (isGameStarted) {
            if (fruits.every(fruit => fruit === '🍒')) {
                console.log('x30')
                updateWins()
            } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
                console.log('x6')
                updateWins()
            } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍇')) {
                console.log('x20')
                updateWins()
            } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
                console.log('x4')
                updateWins()
            } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍋')) {
                console.log('x20')
                updateWins()
            } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
                console.log('x4')
                updateWins()
            } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍏')) {
                console.log('x10')
                updateWins()
            } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
                console.log('x3')
                updateWins()
            } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '💰')) {
                console.log('x5')
                updateWins()
            } else if (fruits.every(fruit => fruit !== '💣' && fruit !== '💰') && (fruits[0] === fruits[1] || fruits[1] === fruits[2])) {
                console.log('x2')
                updateWins()
            } else {
                updateLoses()
            }
        }
    }, [isGameStarted, fruit1, fruit2, fruit3]);


    return(
        <div className={styles.cherrySlot}>
            <div className={styles.cherrySlotInterface}>
                <span>{fruit1}</span>
                <span>{fruit2}</span>
                <span>{fruit3}</span>
            </div>
            <div className={styles.btnCont}>
                <button onClick={updateFruits}>
                    Start
                </button>
            </div>
            <Controls />
        </div>
    )
}

export default CherrySlotInterface;