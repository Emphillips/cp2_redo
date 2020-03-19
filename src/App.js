import React from 'react';
// Import Components
import NavMenu from './components/NavMenu';
// Import Router
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
// Import Redux
import { Provider } from 'react-redux';
import store from './redux/Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavMenu />
      <Router />
    </BrowserRouter>
    </Provider>
  );
};

export default App;
