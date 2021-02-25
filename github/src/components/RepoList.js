import React from 'react'
import {connect} from 'react-redux'
import { fetchRepo } from '../actions' 

class RepoList extends React.Component{
    componentDidMount(){
        this.props.fetchRepo()  
    }
    render(){
        console.log(this.props.repo)
        return(
            <div>
            <main className="px-xl-5 with-ease pb-5">
            <div className="d-flex flex-row py-3 mb-4 justify-content-between">
                <div className="">
                <h2 className="page-title mb-3 mb-sm-0 h4">My GitHub</h2>
                </div>
            </div>
        <div className="container m-5">
         <table class="table table-hover">
         <tbody>
            {
                this.props.repo.map((i)=>{
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
const mapStateToProps=(state)=>{
    return{repo:state.repo}
}
export default connect(mapStateToProps,{fetchRepo})(RepoList);