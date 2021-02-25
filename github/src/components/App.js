import React from 'react'
import Header from './header';
import RepoList from './RepoList'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

const App=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={RepoList}/>
            {/* <Route exact path="/" component={GitHub} name="Repository"/> */}
        </Switch>
        </BrowserRouter>
        // <div>
        //     <Header/>
        //     <RepoList/>
        // </div>
    )
}
export default App;