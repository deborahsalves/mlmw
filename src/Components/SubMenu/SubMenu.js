import React from 'react';
import './SubMenu.css';

const miniDic = [
    {
        id: 1,
        word: 'Wohnung',
        meaning: 'apartamento',
        gender: 'die'
    },
    {
        id: 2,
        word: 'Haus',
        meaning: 'casa',
        gender: 'das'
    },
];

export const Submenu = (props) => {
    const handleChange = (event) => {
        const whichSubmenu = event.target.name;
        const selectedData = event.target.value;
        props.handleDataPairSelect(whichSubmenu, selectedData);
    };
    console.log(`data on submenu render: ${props.selectedDataPair}`);
    console.log(`data1 on submenu render: ${props.selectedDataPair[0]}`);
    console.log(`data2 on submenu render: ${props.selectedDataPair[1]}`);
    return(
        <nav className='sub-menu'>
        <form id='submenu' className='sub-menu form'>
            <label for="first-data-selection" name="first-data-selection" value="Select your first data column"></label>
            <select id="first-data-selection" name="first-data-selection" value={props.selectedDataPair[0]} onChange={handleChange}>
                <option id="word" name="word" value="word">Word</option>
                <option id="meaning" name="meaning" value="meaning">Meaning</option>}
                <option id="gender" name="gender" value="gender">Gender</option>
            </select>

            <label for="second-data-selection" name="second-data-selection" value="Select your first data column"></label>
            <select id="second-data-selection" name="second-data-selection" value={props.selectedDataPair[1]} onChange={handleChange}>
                <option id="word" name="word" value="word">Word</option>
                <option id="meaning" name="meaning" value="meaning">Meaning</option>
                <option id="gender" name="gender" value="gender">Gender</option>
            </select>
        </form>
        </nav>
    )
};