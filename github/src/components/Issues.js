import React from 'react'
import {connect} from 'react-redux'
import { fetchIssue } from '../actions'


class Issues extends React.Component{
    state={
        Issues:[]
    }

     componentDidMount=()=>{
         this.props.fetchIssue()      
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.Issues!== this.props.Issues) {
    
          const { Issues} = this.props
          this.setState({
            Issues
          })
        }
      }

    render(){
         console.log(this.props.issueList)
        return(
        
        <div className="container m-5">
         <table className="table table-hover">
                 <thead>
                 <tr>
                 <th scope="col">Issue</th>
                 <th scope="col">Title</th>
                 <th scope="col">Created</th>
                 <th scope="col">State</th>
                 </tr>
                 </thead>
            <tbody>
             {this.state.Issues.map((i,dc)=>(
            <tr>
            <td>{i.number}</td>
            <td>{i.title}</td>
            <td>{i.created_at}</td>
            <td>{i.state}</td>
            </tr>
            ))
            }
             </tbody>
         </table>
        </div>

        )
    }
}
const mapStateToProps=(state)=>({
    Issues:state.issueReducer.issueList
})
export default connect(mapStateToProps,{fetchIssue})(Issues);