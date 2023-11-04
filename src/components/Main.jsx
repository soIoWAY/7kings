import Header from "./header/Header.jsx";
import Navbar from "./navbar/Navbar.jsx";
import WelcomeMessage from "./welcomeMessage/WelcomeMessage.jsx";
import Games from "./games/Games.jsx";

const Main = () => {
    return(
        <div>
            <Header />
            <Navbar />
            <WelcomeMessage />
            <Games />
        </div>
    )
}

export default Main;