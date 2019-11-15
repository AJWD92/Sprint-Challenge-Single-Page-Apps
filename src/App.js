import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from ".//components/CharacterList";
import {NavLink, Route} from "react-router-dom"

export default function App() {
  return (
    <main>
      <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/WelcomePage">Welcome Page</NavLink>
      <NavLink to="/CharacterList">Character Cast</NavLink>
      </div>
      <Route exact path="/" component={Header}/>
      <Route exact path='/WelcomePage' component={WelcomePage}/>
      <Route exact path="/CharacterList" component={CharacterList}/>
    </main>
    
  );
}
