import React, { Component} from 'react';
import Routes from './routes';

import "./styles.css";
//https://skylab.rocketseat.com.br/node/curso-react-js/lesson/o-que-sao-componentes

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
 <div className="App">
   <Header/>
   <Routes/>
 </div>
);


export default App;
