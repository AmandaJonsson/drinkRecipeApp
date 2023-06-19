import React from 'react';
import SearchBar from '../../searchBar/component';
import { useLocation } from 'react-router-dom';


export default function DrinkDetails() {

    
    function Component() {
        const location = useLocation();

        const name = location.state?.drinkName;
        const instructions = location.state?.instructions;
        const ingredients = location.state?.ingredients;

        return (
            <div>
            <div className='header-container'>
                <h1 className='header'>Drinkar</h1>
                <p className='subHeader'>Goda drinkrecept online</p>
            </div>
            <SearchBar />
            <h2>{name}</h2>
            <div className='drink-container'>
            <div className='row'>
                <div className='col-6'>
                <img src="/images/drink.png" alt="Avatar" style={{ width: '40%' }} />
                </div>
            </div>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient) => {
                return  <li key={ingredient}>{ingredient}</li>
            })}
            <p>{instructions}</p>
            </div>
        </div>
        );
    }

    return function DrinkDetails(){
        return (
            <Component />
        );
    }
}