import axios from 'axios'
import { TYPES } from './type'


export const GitHubRepo =()=> async(dispatch) => {
    const response = await axios.post(`https://api.github.com/orgs/octo-org/repos`)
    dispatch({ type: TYPES.REPO_LIST, payload: response.data})
  }

  // export const GitHubRepo = () => async (dispatch) => {
  //   dispatch({ type: TYPES.REPO_LIST})
  //   const resp = await axios.post(`https://api.github.com/orgs/octo-org/repos`)
  //   dispatch({ type:TYPES.PROFILE_ORDER_LIST, payload: resp.data.directory})
  // }