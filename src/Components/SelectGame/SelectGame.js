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

export const SelectGame = ( {handleSelect} ) => {
    return(
        <select className="select-game" defaultValue="" onChange={handleSelect}>
            <option name="default" value="default">Select a game</option>
            {gameOptions.map((option) => (
                <option name={option.name} key={option.name} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}