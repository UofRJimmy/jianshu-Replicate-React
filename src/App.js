import React, {Component}from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './Common/header/index.js';
import store from './store/index.js'
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Recommend from './pages/home/component/Recommend';
import Writer from './pages/home/component/Writer';
import Topic from './pages/home/component/Topic';
import Login from './pages/login/index';
import Write from './pages/write/index';

class App extends Component{

  render(){
    return(
      <Provider store={store}>
      <div>
      <Header />
      <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/Recommend' element={<Recommend/>}/>
          <Route path='/Writer' element={<Writer/>}/>
          <Route path='/Topic' element={<Topic/>}/>
      </Routes>
      </Router>
      </div>
      </Provider>
    )
  }
}

export default App;
