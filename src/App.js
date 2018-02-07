import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import MainContainer from './containers/MainContainer';

const App = () => (<BrowserRouter>
  <MainContainer/>
</BrowserRouter>)

export default App;
