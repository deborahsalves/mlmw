import React, { useState, useEffect } from 'react';
import './RandomWord.css';
import { data } from '../../api/data';

export const RandomWord = () => {
    const [ currentWord, setCurrentWord ] = useState({});
    const [ showMeaning, setShowMeaning ] = useState(false);

    const selectRandomWord = () => {
        const rand = Math.floor(Math.random() * data.length)
        const newWord = data[rand].word;
        return newWord !== "" ? data[rand] : selectRandomWord();
    }

    useEffect( () => {
        const rand = Math.floor(Math.random() * data.length)
        const newWord = data[rand].word;
        const newCurrent = newWord !== "" ? data[rand] : selectRandomWord();
        setCurrentWord(newCurrent) ;
    }, []);

    const handleClick = () => {
        setCurrentWord(selectRandomWord());
        if (showMeaning) toggleMeaning();
    }

    const toggleMeaning = (event) => {
        return setShowMeaning(showMeaning ? false : true)
    }

    return (
        <section className='random-word'>
            <h2 onClick={handleClick}>{currentWord.word}</h2>
            {
                currentWord.meaning ?
                    <button className={showMeaning ? 'word-meaning isVisible' : 'word-meaning isHidden'} onClick={toggleMeaning}>
                        {showMeaning ? currentWord.meaning : 'show meaning'}
                    </button>
                    : <></>
            }
        </section>
    )
}