import { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GifProvider from './context/gifProvider';
import './App.css';

//pages
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import GifDetails from './pages/GifDetails';
import SearchBar from './components/searchBar/searchBar';


function App() {

  return (
    <Fragment>
      <div className="app-container">
        <Router>
          <SearchBar/>
          <Switch>
            <GifProvider>
              <Route exact path='/' component={Home} />
              <Route exact path='/search/:keyword' component={SearchResults} />
              <Route exact path='/gif/:id' component={GifDetails} />
            </GifProvider>
          </Switch>
        </Router>
      </div>

    </Fragment>
  );
}

export default App;
