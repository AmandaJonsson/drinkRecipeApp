import React, { useState, useEffect} from 'react';
import DrinkCard from '../drinkCard/component';
import './searchBar.css';
//functional component using an arrow function
const SearchBar = () => {

    //creating a variable using the useState  hook
    const [searchInput, setSearchInput] = useState("");
    const [apiResponse, setApiResponse] = useState({});

      async function getDrinkRecipes () {
        if(!searchInput) {
          alert('Please enter a search word.')
        }

        const endpoint = new URL(`https://api.api-ninjas.com/v1/cocktail?name=${searchInput}`);

        const response = await fetch(endpoint, {
          method: 'GET',
          headers: { 'x-api-key': 'fJR1zoUWJD+FffdLqsNs/Q==BnHDAc8V0uR2GJou' }
        });


        const data = await response.json();
        setApiResponse(data);
        console.log(apiResponse);

      } 

      const submitDrinkSearch = (e) => {
        e.preventDefault();
        getDrinkRecipes();
      }

      useEffect(() => {
        // getDrinkRecipes();
           // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
      
      return (
        <div className='body'>
          <form className='form' onSubmit={(e) => submitDrinkSearch(e)}> 
            <input className='input' type="text" placeholder="Sök på recept" width="200px" value={searchInput || ''} onChange={(e) => setSearchInput(e.target.value)} />
            <input className='input' type="submit" value="Sök"/>
            <div className='flex-container'>
              {apiResponse.length > 0 ? apiResponse.map((drink) => {
                return (
                    <DrinkCard key={drink.name} name={drink.name} ingredients={drink.ingredients} instructions={drink.instructions}/>
                );

              }) : null}
            </div>
            </form>
        </div>
      );

};

export default SearchBar;