import styles from './CherrySlotInterface.module.scss'
import {useEffect, useState} from "react";
// import {checker} from "./checker.js";
import {useActions} from "../../../../../hooks/useActions.js";
import Controls from "../../../controls/Controls.jsx";
import {useSelector} from "react-redux";

const CherrySlotInterface = () => {

    const { updateWins, updateLoses, updateBalance, cashOutBalance } = useActions();

    const {balance} = useSelector(state => state)

    const fruits = ['💰', '🍒', '🍋', '🍏', '💣', '🍇']; //, '🍋', '🍏', '💰', '💣', '🍒' 🍇

    const randomFruit = () => {
        return Math.floor(Math.random() * fruits.length)
    }

    const [fruit1, setFruit1] = useState('🍒');
    const [fruit2, setFruit2] = useState('🍋');
    const [fruit3, setFruit3] = useState('🍇');

    const [isGameStarted, setIsGameStarted] = useState(true)

    const [userBet, setUserBet] = useState(0)

    const [disabled, setDisabled] = useState(false)

    const userBetHandler = (bet) => {
        setUserBet(parseInt(bet))
    }

    const updateFruits = () => {
        if ((balance.balance - userBet) >= 0) {
            setFruit1(fruits[randomFruit()])
            setFruit2(fruits[randomFruit()])
            setFruit3(fruits[randomFruit()])

            setIsGameStarted(true)
        } else if (userBet === 0) {
            alert('Сума ставки не може бути 0')
        } else {
            alert('Недостатньо грошей на балансі')
        }
    }

    const updateAnim = (spans, anim) => {
        spans.forEach((e) => {
            if (e) {
                e.classList.add(anim)
            }
        })
    }

    const delayAnim = (spans, anim, time) => {
        console.log(spans)
        const timer = setTimeout(() => {
            setDisabled(false)
            spans.forEach((e) => {
                if (e) {
                    e.classList.remove(anim)
                }
            })
        }, time)
    }


    useEffect(() => {
        const fruits = [fruit1, fruit2, fruit3]

        const spans = document.getElementsByClassName('cherrySpan')
        const spansArray = Array.from(spans)
        // checker(isGameStarted, fruits)

        if (isGameStarted) {
            const winAnim = 'animate-blinkWinAnim'
            setIsGameStarted(false)
            cashOutBalance(userBet)

            if (fruits.every(fruit => fruit === '🍒')) {
                const anim = 'animate-blinkWinCherryAnim'
                setDisabled(true)
                updateAnim(spansArray, anim)
                updateBalance(userBet * 30)
                updateWins()
                delayAnim(spansArray, anim, 2500)
            } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
                setDisabled(true)
                updateAnim(spansArray, winAnim)
                updateBalance(userBet * 6)
                updateWins()
                delayAnim(spansArray, winAnim, 1500)
            } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍇')) {
                const anim = 'animate-blinkWinGrapeAnim'
                setDisabled(true)
                updateAnim(spansArray, anim)
                updateBalance(userBet * 20)
                updateWins()
                delayAnim(spansArray, anim, 2500)
            } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
                setDisabled(true)
                updateAnim(spansArray, winAnim)
                updateBalance(userBet * 4)
                updateWins()
                delayAnim(spansArray, winAnim, 1500)
            } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍋')) {
                const anim = 'animate-blinkWinLemonAnim'
                setDisabled(true)
                updateAnim(spansArray, anim)
                updateBalance(userBet * 20)
                updateWins()
                delayAnim(spansArray, anim, 2500)
            } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
                setDisabled(true)
                updateAnim(spansArray, winAnim)
                updateBalance(userBet * 4)
                updateWins()
                delayAnim(spansArray, winAnim, 1000)
            } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍏')) {
                setDisabled(true)
                const anim = 'animate-blinkWinLemonAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 10)
                updateWins()
                delayAnim(spansArray, anim, 2500)
            } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
                setDisabled(true)
                updateAnim(spansArray, winAnim)
                updateBalance(userBet * 3)
                updateWins()
                delayAnim(spansArray, winAnim, 1500)
            } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
                updateLoses()
            } else if (fruits.every(fruit => fruit === '💰')) {
                setDisabled(true)
                const anim = 'animate-blinkWinBagAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 5)
                updateWins()
                delayAnim(spansArray, anim, 2500)
            } else if (fruits.every(fruit => fruit !== '💣' && fruit !== '💰') && (fruits[0] === fruits[1] || fruits[1] === fruits[2])) {
                setDisabled(true)
                updateAnim(spansArray, winAnim)
                updateBalance(userBet * 2)
                updateWins()
                delayAnim(spansArray, winAnim, 1000)
            } else {
                updateLoses()
            }
        }
    }, [isGameStarted, fruit1, fruit2, fruit3]);


    return(
        <div className={styles.cherrySlot}>
            <div className={styles.cherrySlotInterface}>
                <span className='cherrySpan'>{fruit1}</span>
                <span className='cherrySpan'>{fruit2}</span>
                <span className='cherrySpan'>{fruit3}</span>
            </div>
            <div className={styles.btnCont}>
                <button onClick={updateFruits} disabled={disabled}>
                    Start
                </button>
            </div>
            <Controls userBetHandler={userBetHandler}/>
        </div>
    )
}

export default CherrySlotInterface;