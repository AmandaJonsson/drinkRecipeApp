import './App.css';
import navbarMaker from './pages/navbar/component';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import drinkDetailsMaker from './pages/drinkDetails/component';
import {Start} from './pages/start/component';

function App() {

  const Navbar = navbarMaker();
  const DrinkDetails = drinkDetailsMaker();
  return (
    <div className="App body">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path='details/*' element={<DrinkDetails />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
