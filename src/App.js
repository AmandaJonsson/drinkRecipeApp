import './App.css';
import drinkRecipeMaker from './drinkRecipe/component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import drinkDetailsMaker from './drinkRecipe/drinkCard/drinkDetails/component';


function App() {

  const DrinkRecipe = drinkRecipeMaker();
  const DrinkDetails = drinkDetailsMaker();
  return (

    
    <div className="App body">

       <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<DrinkRecipe />} />
          <Route path='details/*' element={<DrinkDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
