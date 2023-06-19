import React from 'react';
import SearchBar from './searchBar/component';

export default function DrinkRecipe() {

    
    function Component() {
        return (
            <div>
                <div className='header-container'>
                    <h1 className='header'>Drinkar</h1>
                    <p className='subHeader'>Goda drinkrecept online</p>
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