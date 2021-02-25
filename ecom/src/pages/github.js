import React from "react"
// import axios from 'axios'
import { connect } from 'react-redux'
import BreadCrumb from "../components/breadcrumb"
import{ GitHubRepo} from "../actions/index"
import {gitHubReducer} from '../reducers'

class GitHub extends React.Component{
    state={
        
        breads: [
            { name: 'Home', link: '/home', active: false },
            { name: 'Repository', link: '/github', active: true }
          ],
    }
        componentDidMount = () => {
        this.props.GitHubRepo()
      } 
    //  componentDidMount=()=>{
    //     this.props.GitHubRepo()
    //    const data = axios.get('https://api.github.com/orgs/octo-org/repos',{
    //     })
    //     .then(res=>{
    //         console.log(res.data)
    //         this.setState({repo:res.data})
    //     })   
    //     console.log(data)  onClick={() => this.props.history.push(`/home`)}       
    // }
    render(){
        return(
            <div>
                <main className="px-xl-5 with-ease pb-5">
                <BreadCrumb breads={this.state.breads} />
                <div className="d-flex flex-row py-3 mb-4 justify-content-between">
                    <div className="">
                    <h2 className="page-title mb-3 mb-sm-0 h4">My GitHub</h2>
                    </div>
                </div>
            <div className="container m-5">
             <table class="table table-hover">
             <tbody>
                {
                    this.state.repo.map((i)=>{
                        console.log(i.full_name)
                        console.log("hello")
                        return(
                                <tr>
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

const mapStateToProps = (state) => ({
    repo:state.gitHubReducer.repo, 
  })
  
  export default connect(mapStateToProps,{GitHubRepo})(GitHub)