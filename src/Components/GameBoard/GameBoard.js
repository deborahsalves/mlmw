import React, { useState, useEffect } from "react";
import './GameBoard.css';
import { data } from '../../api/data';
import {RandomWord} from "../RandomWord/RandomWord";

export const GameBoard = (props) => {
    const [ filteredData, setFilteredData ] = useState([]);
    // const [ renderData, setRenderData ] = useState([]);

    useEffect(() => {
        setFilteredData(() => {
            console.log('entered setFilteredData');
            const currentFirstSelection = props.selectedDataPair[0];
            const firstSelected = data.filter(vocab => vocab.hasOwnProperty(currentFirstSelection));
            const currentSecondSelection = props.selectedDataPair[1];
            const secondSelected = firstSelected.filter(vocab => vocab.hasOwnProperty(currentSecondSelection));
            return secondSelected;
        });     
    }, [props.selectedDataPair]);

    return(
        <section className="game-board">
            {/* <h1>{props.selectedGame}</h1>
            <h2>{props.selectedDataPair[0]}</h2>
            <h2>{props.selectedDataPair[1]}</h2> */}
            <p>This project is still under development. As of May 22, it is not yet connected to a database, so you can't yet login and add your own notes/words. You are welcome to play with mine, though :)</p>
            <p>The games are also not ready to be publicly available. If you have suggestions, contact me at <a href="mailto:salves.deborah@gmail.com">salves.deborah@gmail.com</a></p>

            {props.selectedGame === 'tic-tac-toe' && <p>selectedGame === 'tic-tac-toe'</p>}
            {props.selectedGame === 'memory-game' && <p>selectedGame === 'memory-game'</p>}
            {props.selectedGame === 'random-word' && <RandomWord />}
        </section>
    )
}