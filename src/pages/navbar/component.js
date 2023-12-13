import React from 'react';
import SearchBar from '../searchBar/component';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function navbar() {
 
    function Component() {
        return (
            <div>
                <div className='header-container'>
                    <div className='header'>
                    <Link to="/">Drinkar</Link>
                    <p className='subHeader'>Goda drinkrecept online</p>
                    </div>
                </div>
                <SearchBar />
            </div>
        );
    }

    return function DrinkRecipe(){
        return (
            <Component />
        );
    }
}