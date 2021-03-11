const INITIAL_STATE={
    currList:[]
}


const curReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
            case'FETCH_CURRENCY' :
                return {
                  ...state,currList:action.payload}
        default:
        return state
    }
}
export default curReducer;