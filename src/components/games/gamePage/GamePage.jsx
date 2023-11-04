import Header from "../../header/Header.jsx";
import Navbar from "../../navbar/Navbar.jsx";
import { useParams } from "react-router-dom";
import CherrySlot from "../gamesLogic/cherrySlot/CherrySlot.jsx";

const GamePage = () => {
    let {gameId} = useParams()

    return(
        <div>
            <Header />
            <Navbar />
            {gameId === 'slots_cherry' && <CherrySlot />}
        </div>
    )
}

export default GamePage;