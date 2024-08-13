import './App.css';
//REACT SLICEK-CARASOUL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//ROUTES
import { Routes,Route } from 'react-router-dom';
//IMPORT PAGES TO ROUTES
import HomePage from './pages/Home.Page';
import MoviesPage from './pages/Movies.Page';
import PlayPage from './pages/Play.Page'; 

function App() {
  return (
    <Routes>
      <Route path='/'  element={<HomePage/>} />
      <Route path='/movie/:id' element={<MoviesPage/>}  />
      <Route path='/plays' element={<PlayPage/>}  />

      
    </Routes>
  );
}

export default App;
