import styles from './CherrySlot.module.scss'
import CherrySlotInterface from "./interface/CherrySlotInterface.jsx";
const CherrySlot = () => {
    return(
        <div className={styles.cherrySlot}>
            <CherrySlotInterface />
        </div>
    )
}

export default CherrySlot;