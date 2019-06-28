import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './parts/footer';
import Header from './parts/header';
import Home from './parts/home';
import Contact from './parts/contact';
import Lost from './parts/lost';
import LostDogsPage from './parts/lost-dogs-page';


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
     <Route path="/lost" component={Lost}></Route>
     <Route path="/baza-znalezionych" component={LostDogsPage}></Route>
     <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
