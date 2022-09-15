import React, {Component}from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './Common/header/index.js';
import store from './store/index.js'
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <div>
      <Header />
      <Router>
        <div>
          <Routes path='/' exact render={<Home/>}></Routes>
          <Routes path='/detail' exact render={<Detail/>}></Routes>
        </div>
      </Router>
      </div>
      </Provider>
    )
  }
}

export default App;
