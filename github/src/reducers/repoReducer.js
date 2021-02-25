
const INITIAL_STATE={
    repoList:[]
}


export default(state=[],action)=>{
    switch(action.type){
        case 'FETCH_REPO':
        return action.payload
        default:
        return state
    }
    
}