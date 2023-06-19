import React from 'react';
import './drinkCard.css';
import {Link} from 'react-router-dom'

// import DrinkDetails from './drinkDetails/component';

//functional component using an arrow function
const DrinkCard = ({ name, ingredients, instructions }) => {

   /* function showRecipe() {
        return <DrinkDetails name={drinkName} ingredients={ingredients} instructions={instructions}/>
    }*/
    const drinkName = name.charAt(0).toUpperCase() + name.slice(1);

    const goToDrink = () => {
        console.log('Drink pressed')
    }

    return (
        <Link to='details/${name}' state={{ drinkName: drinkName, ingredients: ingredients, instructions: instructions}}> 
        <div className="card" onClick={() => goToDrink()}>
            <img src="images/drink.png" alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h3>{drinkName}</h3>
            </div>
        </div>
        </Link>
    );

};

export default DrinkCard;