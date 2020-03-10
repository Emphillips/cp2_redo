import React from 'react';
import NavMenu from './components/NavMenu';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Router />
    </BrowserRouter>
    
  );
}

export default App;
