//import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';
import Footer from './Component/Footer/Footer';
import { Component } from 'react';

// import Error404 from './pages/Errors/Error404';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Error404 /> */}
        <Router>
          <Navbar />
          <div className="Body">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route exact path="/Pokedex">
                <Pokedex />
              </Route>
              <Route exact path="/Legendaries">
                <Legendaries />
              </Route>
              <Route exact path="/Documentation">
                <Documentation />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
