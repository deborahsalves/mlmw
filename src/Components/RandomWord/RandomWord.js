import React, { useState, useEffect } from 'react';
import './RandomWord.css';
import { data } from '../../api/data';

export const RandomWord = () => {
    const [ currentWord, setCurrentWord ] = useState('');
    const [ showMeaning, setShowMeaning ] = useState(false);

    const selectRandomWord = () => {
        const rand = Math.floor(Math.random() * data.length)
        return setCurrentWord(data[rand]);
    }

    useEffect( () => {
        const rand = Math.floor(Math.random() * data.length)
        console.log(`data[rand]: ${data[rand].word}`);
        return setCurrentWord(data[rand]);;
    }, []);

    const toggleMeaning = (event) => {
        return setShowMeaning(showMeaning ? false : true)
    }

    return (
        <section className='random-word'>
            {console.log(`currentWord: ${currentWord.word}`)}
            <h2 onClick={selectRandomWord}>{currentWord.word}</h2>
            <button className='word-meaning' onClick={toggleMeaning}>
                { console.log(`showMeaning no corpo: ${showMeaning}`) }
                {showMeaning ? currentWord.meaning.join(', ') : 'show meaning'}
            </button>
        </section>
    )
}