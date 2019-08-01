import React from 'react';
import './css/App.css';
import Footer from './parts/footer';
import Header from './parts/header';
import Home from './parts/home';
import Contact from './parts/contact';
import Lost from './parts/lost';
import Found from './parts/found';
import LostDogsPage from './parts/lost-dogs-page';
import LostDog from './parts/lost-dog';
import Login from './parts/login-cookie';
import { CookiesProvider } from 'react-cookie';
import Registration from './parts/registration';
import AddPet from './parts/add-pet';



import {
  HashRouter,
  Route
} from 'react-router-dom';

function App() {
  return (
    <CookiesProvider>
    <HashRouter>
    <div className="App">
     <Header/>
     <Route exact path="/" component={Home}></Route>
     <Route path="/contact" component={Contact}></Route>
     <Route path="/lost" component={Lost}></Route>
     <Route path="/found" component={Found}></Route>
     <Route path="/base/:status" component={LostDogsPage}></Route>
     <Route path="/dogs-base/dog/:id" component={LostDog}></Route>
     <Route path="/dodaj" component={AddPet}></Route>
     <Route path="/registration" component={Registration}/>
     <Route path="/login" component={Login}/>
     <Footer/>
    </div>
    </HashRouter>
    </CookiesProvider>
  );
}

export default App;
