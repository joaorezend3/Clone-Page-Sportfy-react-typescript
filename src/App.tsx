import React from 'react';
import * as C from './App.styled';
import { NavBar } from './components/navBar'
import { NavBarHeaderContent } from './components/headerContent'
function App() {
  return (
    <div className="App">
      <C.container>
        <NavBar></NavBar>
        <div className="content">
        <NavBarHeaderContent></NavBarHeaderContent>
        </div>
      </C.container>

    </div>
  );
}

export default App;
