import {useSelector} from "react-redux";
// import {useActions} from "../../../hooks/useActions.js";
import {useState} from "react";
import ModalBalance from "./ModalBalance.jsx";

const Balance = () => {
    const {balance} = useSelector(state => state.balance)

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div>
            <div>Balance: <span>{balance}</span>₴ <span onClick={openModal}>+</span></div>
            <ModalBalance modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
    )
}

export default Balance;