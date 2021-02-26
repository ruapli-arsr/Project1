const INITIAL_STATE={
    issueList:[]
}
const issueReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'REPO_ISSUE':
            return{...state,issueList:action.payload}
            default:
                return state
    }

}
export default issueReducer;