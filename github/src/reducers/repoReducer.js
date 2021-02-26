
const INITIAL_STATE={
    repoList:[]
}
const repoReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
            case 'FETCH_REPO' :
                return {
                  ...state, repoList:action.payload}
        default:
        return state
    }
    
}
export default repoReducer;