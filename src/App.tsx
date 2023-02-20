import React from 'react';
import './App.css';
import Routers from './components/Routers';
import PlayingField from './page/PlayingField/PlayingField';
import Home from './page/StartMenu/Home';


function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
