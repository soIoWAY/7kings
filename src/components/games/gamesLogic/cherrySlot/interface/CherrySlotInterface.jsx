import styles from './CherrySlotInterface.module.scss'
import {useEffect, useState} from "react";
import {useActions} from "../../../../../hooks/useActions.js";
import Controls from "../../../controls/Controls.jsx";
import {useSelector} from "react-redux";

import useSound from "use-sound";
import magicalwin from '../../../../../assets/sounds/magicalwin.mp3'
import payotaward from '../../../../../assets/sounds/payoutaward.mp3'
import mixkitaward from '../../../../../assets/sounds/mixkitaward.mp3'

import { checker } from "./checker.js";

const CherrySlotInterface = () => {

    const { updateWins, updateLoses, updateBalance, cashOutBalance } = useActions();

    const {balance} = useSelector(state => state)

    const fruits = ['💰', '🍒', '🍋', '🍏', '💣', '🍇']; // '💰', '🍒', '🍋', '🍏', '💣', '🍇'

    const [magicalWin] = useSound(magicalwin)
    const [payotAward] = useSound(payotaward)
    const [mixkitAward] = useSound(mixkitaward)


    const randomFruit = () => {
        return Math.floor(Math.random() * fruits.length)
    }

    const [fruit1, setFruit1] = useState('🍒');
    const [fruit2, setFruit2] = useState('🍒');
    const [fruit3, setFruit3] = useState('🍒');

    const [isGameStarted, setIsGameStarted] = useState(false)

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

        if (isGameStarted) {
            setIsGameStarted(false)
            cashOutBalance(userBet)
            checker(fruits, userBet, spansArray, setDisabled, updateBalance, updateWins, updateLoses, updateAnim, delayAnim, mixkitAward, payotAward, magicalWin)
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
            <Controls userBetHandler={userBetHandler} balance={balance.balance}/>
        </div>
    )
}

export default CherrySlotInterface;