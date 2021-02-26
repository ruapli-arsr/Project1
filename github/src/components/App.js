import React from 'react'
import Header from './header';
import RepoList from './RepoList'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Issues from './Issues';

const App=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={RepoList}/>
            <Route exact path="/issues" component={Issues}/>
        </Switch>
        </BrowserRouter>
    )
}
export default App;
