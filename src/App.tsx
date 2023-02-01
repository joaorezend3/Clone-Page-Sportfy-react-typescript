import React from 'react';
import * as C from './App.styled';
import { NavBar } from './components/navBar'
function App() {
  return (
    <div className="App">
      <C.container>
        <NavBar></NavBar>

        <div className="content">
         </div>
      </C.container>

    </div>
  );
}

export default App;
