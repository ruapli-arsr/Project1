import axios from 'axios'
import{ BASE_URL,FETCH_URL} from '../api/baseurl';



export const fetchRepo=()=>async (dispatch)=>{
    const response = await axios.get(`${BASE_URL}/repos`);
        dispatch({type:'FETCH_REPO',payload:response.data})
}
export const fetchIssue=()=>async (dispatch)=>{
    const response = await axios.get(`${FETCH_URL}/issues`);
        dispatch({type:'REPO_ISSUE',payload:response.data})
}