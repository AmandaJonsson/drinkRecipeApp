import './App.css';
import drinkRecipeMaker from './drinkRecipe/component';

function App() {

  const DrinkRecipe = drinkRecipeMaker();
  return (
    <div className="App">
        <DrinkRecipe />
    </div>
  );
}

export default App;
