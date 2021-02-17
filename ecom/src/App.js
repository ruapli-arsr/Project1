import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home"
import SignUp from './pages/signup';
import Header from "./components/header"
import Profile from "./pages/profile"
import GitHub from './pages/github';

class App extends React.Component {
  render(){
  return (
    <main>
      <Header/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/github" component={GitHub} name="GitHub Repository"/>
        <Route exact path="/signup" component={SignUp} />
    </Switch>
</main>
  );
}
}

export default App;
