import *as actionTypes from './actionTypes'
import  axios from 'axios'


export const fetchUserRequest = ()=>({
    type : actionTypes.START_FETCHING_DATA
})
export const fetchUseSuccess = (data)=>({
    type:actionTypes.FETCHING_DATA_SUCCESS,
    payload: data
})
export const fetchUserFailure = (error)=>({
    type:actionTypes.FETCHING_DATA_FAILURE,
    payload:error
})

export const fetchUsers = ()=>{
    return dispatch =>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res=>{
             const user = res.data
             dispatch(fetchUseSuccess(user.slice(0,6)))
         })
         .catch((err)=>{
             dispatch(fetchUserFailure(err))
         })
    }
}