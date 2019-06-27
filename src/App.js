import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './parts/footer';
import Header from './parts/header';
import Home from './parts/home';
import Contact from './parts/contact';

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
     <Header/>
     <Route exact path="/" component={Home}></Route>
     <Route path="/contact" component={Contact}></Route>
     <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
