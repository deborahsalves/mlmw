import React, { useState, useEffect } from 'react';
import './App.css';
import { MainMenu } from '../MainMenu/MainMenu';
import { Submenu } from '../SubMenu/SubMenu';
import { GameBoard } from '../GameBoard/GameBoard';

export const App = () => {
    const [ selectedGame, setSelectedGame ] = useState('fill-the-gap');
    // const [ firstSelectedData, setfirstSelectedData ] = useState('word');
    // const [ secondSelectedData, setsecondSelectedData ] = useState('meaning');
    const [ selectedDataPair, setSelectedDataPair ] = useState(['word', 'meaning']);

    const handleGameSelect = (gameName) => {
        setSelectedGame(gameName)
    }

    const handleDataPairSelect = (whichSubmenu, selectedData) => {
        setSelectedDataPair(prev => {
            console.log(`whichSubmenu: ${whichSubmenu}`)
            console.log(`selectedData: ${selectedData}`)
            const dataPosition = whichSubmenu === 'first-data-selection' ? 0 : 1;
            console.log(`dataPosition: ${dataPosition}`)
            console.log(`prev b4: ${prev}`)
            prev[dataPosition] = selectedData;
            const newSelection = prev.slice(0,2);
            return newSelection[0] !== newSelection[1] ? newSelection : validateDataSelection(prev);
            // if (prev.length > 2) {
            //     prev.unshift(selectedData)
            //     return prev.slice(0,2)
            // }
            // return [data, ...prev];
        })
    }

    const validateDataSelection = (previousSelection) => {
        alert('choose diff');
        return previousSelection;
    }
 
    return(
        <main className="main-tag">
            {/* getUserDatabase(); */}
            <MainMenu
                selectedGame={selectedGame} 
                handleGameSelect={handleGameSelect}/>
            <Submenu
                selectedDataPair={selectedDataPair} 
                handleDataPairSelect={handleDataPairSelect}/>
            <GameBoard 
                selectedGame={selectedGame}
                selectedDataPair={selectedDataPair}/>
        </main>
    )
}