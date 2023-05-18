import React, { useState, useEffect} from 'react';

//functional component using an arrow function
const SearchBar = () => {

    //creating a variable using the useState  hook
    const [searchInput, setSearchInput] = useState("");
    const [apiResponse, setApiResponse] = useState({});

      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput);
      };

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

      useEffect(() => {
        getDrinkRecipes();

      }, []);
      
      return (
        <div>
            <input 
                type="text" 
                placeholder="Sök på recept" 
                width="200px" 
                onChange={handleChange} />
            <button onClick={() => getDrinkRecipes()}>Sök</button>
            <div>
              {apiResponse.length > 0 ? apiResponse.map((drink) => {
                return (
                  <p key={drink.name}>{drink.name}</p>
                );

              }) : null}
            </div>

        </div>
      );

};

export default SearchBar;