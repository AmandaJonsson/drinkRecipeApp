import './start.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import DrinkCard from '../drinkCard/component';

export const Start = () => {

    const [startDrinks, setStartDrinks] = useState({});

    useEffect(() => {
        getStartReceipes();
    }, []);

    const getStartReceipes = () => {
        return axios
        .get(`https://api.api-ninjas.com/v1/cocktail?name=ice`, 
        {
            headers: { 'x-api-key': 'fJR1zoUWJD+FffdLqsNs/Q==BnHDAc8V0uR2GJou' }
        }
        )
        .then((res) => {
            console.log(res.data);
            setStartDrinks(res.data);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
        <div className="intro-text">
            <h2>Njut av goda drinkar</h2>
            <p>Drinkar är nåt de flesta av oss vill njuta av ibland, inte minst vid högtider som jul, nyår, påsk och midsommar. 
                Här hittar du alla möjliga goda drinkar från A till Ö med tillhörande drinkrecept. 
                Lär dig att blanda drinkar redan idag!</p>
        </div>
        <div className='flex-container'>
            {startDrinks.length > 0 ? startDrinks.map((drink) => {
                    return <DrinkCard key={drink.name} name={drink.name} ingredients={drink.ingredients} instructions={drink.instructions}/>
                }) : null}
        </div>
        </div>

    );
}

