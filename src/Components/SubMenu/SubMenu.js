import React from 'react';
import './SubMenu.css';

export const Submenu = (props) => {
    const handleChange = (event) => {
        const whichSubmenu = event.target.name;
        const selectedData = event.target.value;
        props.handleDataPairSelect(whichSubmenu, selectedData);
    };

    return(
        <nav className='sub-menu'>
            <form id='submenu' className='sub-menu form'>
                <label name="first-data-selection" value="Select your first data column">
                    <select id="first-data-selection" name="first-data-selection" value={props.selectedDataPair[0]} onChange={handleChange}>
                        <option id="word" name="word" value="word">Word</option>
                        <option id="meaning" name="meaning" value="meaning">Meaning</option>}
                        <option id="gender" name="gender" value="gender">Gender</option>
                    </select>
                </label>
                <label name="second-data-selection" value="Select your first data column">
                    <select id="second-data-selection" name="second-data-selection" value={props.selectedDataPair[1]} onChange={handleChange}>
                        <option id="word" name="word" value="word">Word</option>
                        <option id="meaning" name="meaning" value="meaning">Meaning</option>
                        <option id="gender" name="gender" value="gender">Gender</option>
                    </select>
                </label>
            </form>
        </nav>
    )
};