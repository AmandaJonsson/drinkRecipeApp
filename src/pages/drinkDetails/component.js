import React from 'react';
import { useLocation } from 'react-router-dom';


export default function DrinkDetails() {

    
    function Component() {
        const location = useLocation();

        const name = location.state?.drinkName;
        const instructions = location.state?.instructions;
        const ingredients = location.state?.ingredients;
        const img = location.state?.imgIndex;
        console.log(img);

        return (
            <div>
            <h2>{name}</h2>
            <div className='drink-container'>
            <div className='row'>
                <div className='col-6'>
                <img src={img} alt="Avatar" style={{ width: '30%' }} />
                </div>
            </div>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient) => {
                return  <li key={ingredient}>{ingredient}</li>
            })}
            <p className='instructions'>{instructions}</p>
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