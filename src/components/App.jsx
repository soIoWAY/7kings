import Main from "./Main.jsx";
import GamePage from "./games/gamePage/GamePage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/game/:gameId" element={<GamePage />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App
