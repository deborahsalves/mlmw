import React from "react";
import './SelectGame.css';

const gameOptions = [
    {
        name: 'tic-tac-toe',
        value: 'tic-tac-toe',
        label: 'Tic-tac-toe'
    },
    {
        name: 'memory-game',
        value: 'memory-game',
        label: 'Memory game'
    }
]

export const SelectGame = (props) => {
    return(
        <form id='mainmenu'>
            <select className="select-game" defaultValue="" onChange={props.handleChange}>
                <label for="game-selection" name="game-selection" value="Select your game"></label>
                {/* <option name="default" value="default">Select a game</option> */}
                {gameOptions.map((option) => (
                    <option id={option.name} name={option.name} key={option.name} value={option.value}>{option.label}</option>
                ))}
            </select>
        </form>
    )
}