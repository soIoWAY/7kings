import {useSelector} from "react-redux";

const Balance = () => {
    const {balance} = useSelector(state => state)
    return(
        <div>
            <div>Balance: <span>{balance.balance}</span>₴</div>
        </div>
    )
}

export default Balance;