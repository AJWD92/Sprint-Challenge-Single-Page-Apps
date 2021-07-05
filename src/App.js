import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList";
import {NavLink, Route} from "react-router-dom"
import Styled from "styled-components";
import RmBG from "./assets/RmBg.jpg";

const StyledMain = Styled.main`
  width: 100%;
  background: url(${RmBG});
  background-repeat:no-repeat;
  background-position: center;
  background-size: cover;
`

export default function App() {
  return (
    <StyledMain>
      <div className='topNav'>
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="/CharacterList"><button>Character Cast</button></NavLink>
      </div>
      <Header/>
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path="/CharacterList" component={CharacterList}/>
    </StyledMain>
    
  );
}
