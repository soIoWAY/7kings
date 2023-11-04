import styles from './CherrySlotInterface.module.scss'
import {useEffect, useState} from "react";
const CherrySlotInterface = () => {
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
        const arr = [fruit1, fruit2, fruit3]
        if (isGameStarted) {
            if (fruit1 === '🍒' && fruit2 === '🍒' && fruit3 === '🍒') {
                console.log('x30')
            } else if ((fruit1 === '🍒' && fruit2 === '🍒' && fruit3 === '💰') || (fruit1 === '💰' && fruit2 === '🍒' && fruit3 === '🍒')) {
                console.log('x6')
            } else if ((fruit1 === '🍒' && fruit2 === '🍒' && fruit3 === '💣') || (fruit1 === '💣' && fruit2 === '🍒' && fruit3 === '🍒')) {
                console.log('x0')
            } else if (fruit1 === '🍇' && fruit2 === '🍇' && fruit3 === '🍇') {
                console.log('x20')
            } else if ((fruit1 === '🍇' && fruit2 === '🍇' && fruit3 === '💰') || (fruit1 === '💰' && fruit2 === '🍇' && fruit3 === '🍇')) {
                console.log('x4')
            } else if ((fruit1 === '🍇' && fruit2 === '🍇' && fruit3 === '💣') || (fruit1 === '💣' && fruit2 === '🍇' && fruit3 === '🍇')) {
                console.log('x0')
            } else if (fruit1 === '🍋' && fruit2 === '🍋' && fruit3 === '🍋') {
                console.log('x20')
            } else if ((fruit1 === '🍋' && fruit2 === '🍋' && fruit3 === '💰') || (fruit1 === '💰' && fruit2 === '🍋' && fruit3 === '🍋')) {
                console.log('x4')
            } else if ((fruit1 === '🍋' && fruit2 === '🍋' && fruit3 === '💣') || (fruit1 === '💣' && fruit2 === '🍋' && fruit3 === '🍋')) {
                console.log('x0')
            } else if (fruit1 === '🍏' && fruit2 === '🍏' && fruit3 === '🍏') {
                console.log('x10')
            } else if ((fruit1 === '🍏' && fruit2 === '🍏' && fruit3 === '💰') || (fruit1 === '💰' && fruit2 === '🍏' && fruit3 === '🍏')) {
                console.log('x3')
            } else if ((fruit1 === '🍏' && fruit2 === '🍏' && fruit3 === '💣') || (fruit1 === '💣' && fruit2 === '🍏' && fruit3 === '🍏')) {
                console.log('x0')
            } else if (fruit1 === '💰' && fruit2 === '💰' && fruit3 === '💰') {
                console.log('x5')
            } else if (arr.every(fruit => fruit !== '💣' && fruit !== '💰') && (fruit1 === fruit2 || fruit2 === fruit3)) {
                console.log('x2')
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
        </div>
    )
}

export default CherrySlotInterface;