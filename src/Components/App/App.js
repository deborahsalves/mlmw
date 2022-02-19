import React from "react";
import './App.css';
import { MainMenu } from '../MainMenu/MainMenu';
import { SubMenu } from '../SubMenu/SubMenu';
import { GameBoard } from '../GameBoard/GameBoard';

export const App = () => {
    return(
        <main className="main-tag">
            <MainMenu />
            <SubMenu />
            <GameBoard />
        </main>
    )
}