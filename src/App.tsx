import React from 'react';
import * as C from './App.styled';
import { NavBar } from './components/navBar'
import { NavBarHeaderContent } from './components/headerContent'
import ContainerCards from './components/cards'
function App() {

  return (
    <div className="App">
      <C.container>
        <NavBar></NavBar>
        <div className="content">
          <NavBarHeaderContent></NavBarHeaderContent>
          <ContainerCards />
        </div>
      </C.container >
    </div >
  );
}

export default App;
