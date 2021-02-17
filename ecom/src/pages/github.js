import React from "react"
import axios from 'axios'
import BreadCrumb from "../components/breadcrumb"


class GitHub extends React.Component{
    state={
        repo:[],
        breads: [
            { name: 'Home', link: '/home', active: false },
            { name: 'GitHub Repository', link: '/github', active: true }
          ],
    }

    async componentDidMount(){

       const data = axios.get('https://api.github.com/orgs/octo-org/repos',{
        
        })
        .then(res=>{
            console.log(res.data)
            this.setState({repo:res.data})
        })   
        console.log(data)
        // const url ="https://api.github.com/search/repositories?q=stars:>1000";
        // const response = await fetch(url)
        //  const data = await response.json();
        //  console.log(data)
         
    }
    render(){
        return(
            <div>
                <main className="px-xl-5 with-ease pb-5">
                <BreadCrumb breads={this.state.breads} />
                <div className="d-flex flex-row py-3 mb-4 justify-content-between">
                    <div className="">
                    <h2 className="page-title mb-3 mb-sm-0 h4">My GitHub</h2>
                    <p>Created 8 years ago • Report abuse</p>
                    </div>
                </div>
             
            
            <div className="container m-5">
             <table class="table table-hover">
             <tbody>
                {
                    this.state.repo.map((i)=>{
                        console.log(i.full_name)
                        return(
                                <tr onClick={() => this.props.history.push(`/signup`)}>
                                <td>{i.name}</td>
                                </tr>
                        )    
                        
                    })
                }
                </tbody>
                </table>
            </div>
            </main>
            </div>
        )
    }
}

export default GitHub;