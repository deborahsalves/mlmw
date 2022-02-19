import React, {useState} from "react";
import './MainMenu.css';
import { SelectGame } from '../SelectGame/SelectGame';

export const MainMenu = () => {
    const [selectedGame, setSelectedGame] = useState("");

    const handleSelect = (e) => {
        const selectedGame = e.target.value; 
        setSelectedGame(selectedGame);
    }

    return(
        <nav className="main-menu">
            <SelectGame handleSelect={handleSelect}/>
        </nav>
    )
}