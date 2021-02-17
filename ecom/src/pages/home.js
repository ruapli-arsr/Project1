import React from 'react'
import Header from '../components/header'
import  Profile  from './profile'

class Home extends React.Component{
    render(){
        return(
            <div className="container">
             <h1>GitHub</h1>  
            </div>
        )
    }
}
export default Home
//  const myname="Rupali Patel"
//  const Home=()=>{
//     return(
//     <div>
//         <h1>Profile Lists</h1>
//         <Profile name={myname}/>
//     </div>
//     )
// }
// export default Home;