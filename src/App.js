
import {  Navbar , Nav } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import ActorsPage from './components/ActorsPage';
import MoviesPage from './components/MoviesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
    <HashRouter>
     <Navbar>
        <Nav.Link href="/#/home">Home</Nav.Link>
        <Nav.Link href="/#/actors">Actors</Nav.Link>
        <Nav.Link href="/#/movies">Movies</Nav.Link>
     </Navbar>
      <Route exact path='/'>
          <HomePage />
      </Route>
      <Route  exact path='/actors'>
          <ActorsPage />
      </Route>
      <Route  exact path='/movies'>
          <MoviesPage />
      </Route>   
      <Route  exact path='/movie-card/:index'>
          <MoviesPage />
      </Route>   
     </HashRouter>
    
    </div>
    
  );
}

export default App;
