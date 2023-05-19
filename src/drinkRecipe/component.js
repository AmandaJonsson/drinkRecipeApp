import React from 'react';
import SearchBar from './searchBar/component';

export default function DrinkRecipe() {

    
    function Component() {
        return (
            <div>
                <h1 className='header'>Drinkar</h1>
                <p className='subHeader'>Goda drinkrecept online</p>
                <hr></hr>
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