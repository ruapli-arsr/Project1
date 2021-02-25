import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from "./pages/home"
import Header from "./components/header"
import GitHub from './pages/github';



class App extends React.Component {
  
  render(){
  return (
    <BrowserRouter>
      <Header/>
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/github" component={GitHub} name="Repository"/>
    </Switch>
    </BrowserRouter>
  );
}
}

export default App;
