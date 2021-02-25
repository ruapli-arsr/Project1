import axios from 'axios'
import jsonPlaceholder from '../api/baseurl'

export const fetchRepo=()=>async (dispatch)=>{
    const response = await jsonPlaceholder.get('/repos');
        dispatch({type:'FETCH_REPO',payload:response.data})
    }
