import axios from 'axios'
import {BASE_URL} from '../api/baseUrl'

export const fetchCurrency = ()=> async(dispatch)=>{
    const response = await axios.get(`${BASE_URL}/latest`);
    dispatch({type:'FETCH_CURRENCY',payload:response.data.rates});
    console.log(response.data.rates)

}