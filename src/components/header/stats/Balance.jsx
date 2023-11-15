import {useSelector} from "react-redux";
// import {useActions} from "../../../hooks/useActions.js";
import {useState} from "react";
import ModalBalance from "./ModalBalance.jsx";

const Balance = () => {
    const {balance} = useSelector(state => state.balance)

    const [modalIsOpen, setIsOpen] = useState(false);

    const closeOpenModal = () => {
        setIsOpen(!modalIsOpen)
    }

    return(
        <div>
            <div>Balance: <span>{balance}</span>₴ <span onClick={closeOpenModal}>+</span></div>
            <ModalBalance modalIsOpen={modalIsOpen} closeModal={closeOpenModal}/>
        </div>
    )
}

export default Balance;