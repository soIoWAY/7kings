import styles from './ModalBalance.module.scss'
import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/useActions.js";
/* eslint-disable react/prop-types */
const ModalBalance = (props) => {
    const { balance } = useSelector(state => state.balance)
    const { updateBalance } = useActions();

    const depBalance = (event) => {
        const dep = parseInt(event.target.value)
        updateBalance(dep)
    }


    return(
        <div>
            {props.modalIsOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button onClick={props.closeModal} className={styles.closeBtn}>×</button>
                        <div className={styles.bets}>
                            <h1>Balance: <span>{balance}₴</span></h1>
                            <div className={styles.depBtns}>
                                <div className={styles.firstRow}>
                                    <button value='50' onClick={depBalance}>50</button>
                                    <button value='100' onClick={depBalance}>100</button>
                                </div>
                                <div className={styles.secondRow}>
                                    <button value='250' onClick={depBalance}>250</button>
                                    <button value='500' onClick={depBalance}>500</button>
                                    <button value='1000' onClick={depBalance}>1000</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalBalance;