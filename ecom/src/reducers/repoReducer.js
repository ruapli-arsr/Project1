const { TYPES } = require('../actions/type')
const INITIAL_STATE = {
  repoList:[],
}
const gitHubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.REPO_LIST:
      return { ...state, repoList: action.payload}
      default:
      return state
  }
}

export default gitHubReducer
