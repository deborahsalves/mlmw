import {isDisabled} from "@testing-library/user-event/dist/utils";
import React from "react";
import './SelectGame.css';

const gameOptions = [
    {
        name: 'tic-tac-toe',
        value: 'tic-tac-toe',
        label: 'Tic-tac-toe',
        isDisabled: true
    },
    {
        name: 'memory-game',
        value: 'memory-game',
        label: 'Memory game',
        isDisabled: true
    },
    {
        name: 'random-word',
        value: 'random-word',
        label: 'Random Word',
        isDisabled: false
    }
]

export const SelectGame = (props) => {
    return(
        <form id='mainmenu'>
            <label name="game-selection" value="Select your game">
                <select className="select-game" value={props.selectedGame} onChange={props.handleChange}>
                    {/* <option name="default" value="default">Select a game</option> */}
                    {gameOptions.map((option) => (
                        <option id={option.name} name={option.name} key={option.name} value={option.value} disabled={option.isDisabled ? 'disabled' : ''}>{option.label}</option>
                    ))}
                </select>
            </label>
        </form>
    )
}