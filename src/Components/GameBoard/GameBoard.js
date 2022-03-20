import React, { useState, useEffect } from "react";
import './GameBoard.css';
import { data } from '../../api/data';

export const GameBoard = (props) => {
    const [ filteredData, setFilteredData ] = useState([]);
    // const [ renderData, setRenderData ] = useState([]);

    console.log(data)
    useEffect(() => {
        setFilteredData(() => {
            console.log('entered setFilteredData');
            const currentFirstSelection = props.selectedDataPair[0];
            const firstSelected = data.filter(vocab => vocab.hasOwnProperty(currentFirstSelection));
            const currentSecondSelection = props.selectedDataPair[1];
            const secondSelected = firstSelected.filter(vocab => vocab.hasOwnProperty(currentSecondSelection));
            secondSelected.map(item => console.log(item));
            return secondSelected;
        });     
    }, [props.selectedDataPair]);

    // useEffect(() => {
    //     setRenderData(() => {
    //         const propertiesToRender = [];
    //         filteredData.map((vocab) => {
    //             // pra cada key/property do vocab 
    //             for (const [key, value] of Object.entries(vocab)) {
    //                 console.log(`vocab no entries: ${vocab}`)
    //                 console.log(`key no entries: ${key}`)
    //                 console.log(`value no entries: ${value}`)
    //                 if (props.selectedDataPair.includes(key)) {
    //                     console.log('it does');
    //                     propertiesToRender.push(key);
    //                 }
    //             }
    //             return false;
    //         });
    //         console.log(`propertiesToRender: ${propertiesToRender}`)
    //     });
    // }, [filteredData]);

    return(
        <section className="game-board">
            <h1>{props.selectedGame}</h1>
            <h2>{props.selectedDataPair[0]}</h2>
            <h2>{props.selectedDataPair[1]}</h2>
            <ul>
                {filteredData.length !==0 && filteredData.map((vocab) => {
                    const firstDataColumn = props.selectedDataPair[0];
                    const secondDataColumn = props.selectedDataPair[1];
                    return (
                        <li key={vocab.word+1} id={vocab.word}>
                            first: {vocab[firstDataColumn]}<br/>
                            second: {vocab[secondDataColumn]}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}