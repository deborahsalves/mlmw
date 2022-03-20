import React, {useState} from "react";
import './MainMenu.css';
import { SelectGame } from "../SelectGame/SelectGame";

export const MainMenu = (props) => {
    const handleChange = (event) => {
        props.handleGameSelect(event.target.value);
    };

    return(
        <nav className="main-menu">
            <SelectGame handleChange={handleChange}/>
            <div className="profile-data">WillBeProfile</div>
        </nav>
    )
}