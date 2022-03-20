import React, { useState, useEffect } from "react";
import './GameBoard.css'

export const GameBoard = (props) => {
    const [allData, setAllData] = useState([]);

    return(
        <section className="game-board">
            <h1>{props.selectedGame}</h1>
            <h2>{props.selectedDataPair[0]}</h2>
            <h2>{props.selectedDataPair[1]}</h2>
        </section>
    )
}