import React from "react";
import Homepage from './components/elements/Homepage';
import Dishes from './components/dishes/Dishes';
import Navbar from './components/elements/Navbar';
import Navbarsec from './components/elements/Navbarsec';
import AddDish from './components/dishes/AddDish';
import EditDish from './components/dishes/EditDish';
import Userpage from './components/dishes/Userpage';
import './styles/App.scss';
import {Provider } from 'react-redux';
import store from "./store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Provider store={store}>
      <Router basename='/foodlist'>
        <div className="App">
          <header className="App-header">
            <div className="container">
              
              
              <Switch>
                <Route exact path="/admin" component={Navbar}/>
                <Route exact path="/" component={Navbarsec}/>
                <Route exact path="/user" component={Navbarsec}/>
                <Route exact path="/admin/dishes/AddDish" component={Navbar}/>
                <Route exact path="/admin/dishes/EditDish/:id" component={Navbar}/>
              </Switch>
              <div className="py-3"></div>
              <Switch>
                <Route exact path="/admin/dishes/AddDish" component={AddDish}/>
                <Route exact path="/admin/dishes/EditDish/:id" component={EditDish}/>
                <Route exact path="/admin" component={Dishes}/>
                <Route exact path="/user" component={Userpage}/>
                <Route exact path="/" component={Homepage}/>
              </Switch>
            </div>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
