import React from 'react';
import './drinkCard.css';
import {Link} from 'react-router-dom'

// import DrinkDetails from './drinkDetails/component';

//functional component using an arrow function
const DrinkCard = ({ name, ingredients, instructions }) => {
    let number;

    function randomizeNumber() {
        number =  Math.floor(Math.random() * 10) + 1;
        return number;
    }

    const drinkName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className='link'>
        <Link to='details/${name}' state={{ drinkName: drinkName, ingredients: ingredients, instructions: instructions, imgIndex: number}}> 
        <div className="card">
            <img src={`images/${randomizeNumber()}.png`} alt="Avatar" style={{ width: '100%' , height: '300px'}} />
            <div className="container">
                <h3>{drinkName}</h3>
            </div>
        </div>
        </Link>
        </div>
    );

};

export default DrinkCard;