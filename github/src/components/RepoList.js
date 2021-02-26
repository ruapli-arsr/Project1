import React from 'react'
import {connect} from 'react-redux'
import { fetchRepo } from '../actions' 

class RepoList extends React.Component{
    state={
        List:[]
    }
    componentDidMount(){
        this.props.fetchRepo()  
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.List !== this.props.List) {
          const { List } = this.props
          this.setState({
            List
          })
        }
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
         <table className="table table-hover">
         <tbody>
            {this.state.List.map((i,dc)=>(
            <tr onClick={() => this.props.history.push(`/issues`)}>
            <td>{i.name}</td>
            </tr>
            ))
            }
            </tbody>
            </table>
        </div>
        </main>
        </div>
        )
    }
}
const mapStateToProps=(state)=>({
    List:state.repoReducer.repoList
})
export default connect(mapStateToProps,{fetchRepo})(RepoList);