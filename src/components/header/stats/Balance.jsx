import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/useActions.js";

const Balance = () => {
    const {balance} = useSelector(state => state)
    const {updateBalance} = useActions()

    const addBalanceHandler = () => {
        updateBalance(100)
    }
    return(
        <div>
            <div>Balance: <span>{balance.balance}</span>₴ <span onClick={addBalanceHandler}>+</span></div>
        </div>
    )
}

export default Balance;