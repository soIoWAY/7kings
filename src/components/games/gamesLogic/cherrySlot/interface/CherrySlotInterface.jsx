import styles from './CherrySlotInterface.module.scss'
import {useEffect, useState} from "react";
// import {checker} from "./checker.js";
import {useActions} from "../../../../../hooks/useActions.js";
import Controls from "../../../controls/Controls.jsx";
import {useSelector} from "react-redux";

const CherrySlotInterface = () => {

    const { updateWins, updateLoses, updateBalance, cashOutBalance } = useActions();

    const {balance} = useSelector(state => state)

    const fruits = ['💰', '🍋', '🍏', '🍒', '🍇', '💣']; //, '🍋', '🍏', '💰', '💣', '🍒' 🍇

    const randomFruit = () => {
        return Math.floor(Math.random() * fruits.length)
    }

    const [fruit1, setFruit1] = useState('🍒');
    const [fruit2, setFruit2] = useState('🍒');
    const [fruit3, setFruit3] = useState('🍒');

    const [isGameStarted, setIsGameStarted] = useState(false)

    const [userBet, setUserBet] = useState(0)

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

    useEffect(() => {
        const fruits = [fruit1, fruit2, fruit3]

        const spans = document.getElementsByClassName('cherrySpan')
        const spansArray = Array.from(spans)
        // checker(isGameStarted, fruits)

        if (isGameStarted) {
            setIsGameStarted(false)
            cashOutBalance(userBet)

            if (fruits.every(fruit => fruit === '🍒')) {
                const anim = 'animate-blinkWinCherryAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 30)
                updateWins()
            } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
                console.log('x6')
                updateBalance(userBet * 6)
                updateWins()
            } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍇')) {
                const anim = 'animate-blinkWinGrapeAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 20)
                updateWins()
            } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
                console.log('x4')
                updateBalance(userBet * 4)
                updateWins()
            } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍋')) {
                const anim = 'animate-blinkWinLemonAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 20)
                updateWins()
            } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
                console.log('x4')
                updateBalance(userBet * 4)
                updateWins()
            } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '🍏')) {
                const anim = 'animate-blinkWinLemonAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 10)
                updateWins()
            } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
                console.log('x3')
                updateBalance(userBet * 3)
                updateWins()
            } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
                console.log('x0')
                updateLoses()
            } else if (fruits.every(fruit => fruit === '💰')) {
                const anim = 'animate-blinkWinBagAnim'
                updateAnim(spansArray, anim)
                updateBalance(userBet * 5)
                updateWins()
            } else if (fruits.every(fruit => fruit !== '💣' && fruit !== '💰') && (fruits[0] === fruits[1] || fruits[1] === fruits[2])) {
                console.log('x2')
                updateBalance(userBet * 2)
                updateWins()
            } else {
                updateLoses()
                console.log(userBet)
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
                <button onClick={updateFruits}>
                    Start
                </button>
            </div>
            <Controls userBetHandler={userBetHandler}/>
        </div>
    )
}

export default CherrySlotInterface;