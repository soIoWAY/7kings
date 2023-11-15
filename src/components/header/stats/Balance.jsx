import {useSelector} from "react-redux";
// import {useActions} from "../../../hooks/useActions.js";
import {useEffect, useState} from "react";
import ModalBalance from "./ModalBalance.jsx";

const Balance = () => {
    const {balance} = useSelector(state => state.balance)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [modalIsOpen, setIsOpen] = useState(false);

    const resizeWindowHandler = () => {
        setWindowWidth(window.innerWidth)
    }

    const closeOpenModal = () => {
        setIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWindowHandler)

        return () => {
            window.removeEventListener('resize', resizeWindowHandler)
        }
    }, []);

    return(
        <div>
            <div><span>{windowWidth > 425 ? 'Balance:' : 'B:'}</span> <span>{balance}</span>₴ <span onClick={closeOpenModal}>+</span></div>
            <ModalBalance modalIsOpen={modalIsOpen} closeModal={closeOpenModal}/>
        </div>
    )
}

export default Balance;