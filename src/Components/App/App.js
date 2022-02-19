import React from "react";
import './App.css';
import { MainMenu } from '../MainMenu/MainMenu';
import { GameBoard } from '../GameBoard/GameBoard';

export const App = () => {
    return(
        <main className="main-tag">
            <MainMenu />
            <GameBoard />
        </main>
    )
}