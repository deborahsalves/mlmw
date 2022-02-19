import React from "react";
import './SubMenu.css';

export const SubMenu = (props) => {
    return(
        <nav className="sub-menu">
            {props.selectedGame.length === 0 ? 'Please select a game' : props.selectedGame}
        </nav>
    )
} 