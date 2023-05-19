import React from 'react';
import './drinkCard.css';

//functional component using an arrow function
const DrinkCard = ({name}) => {
    const drinkName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(drinkName);
      return (
            <div class="card">
                <img src="images/drink.png" alt="Avatar" style={{width: '100%'}}/>
                <div class="container">
                    <h3>{drinkName}</h3>
                </div>
            </div>
      );

};

export default DrinkCard;