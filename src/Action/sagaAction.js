import *as actionTypes from './actionTypes'


export const fetchDataStart = ()=>({
    type:actionTypes.FETCH_DATA_START_SAGA
})
export const fetchDataSuccess = (data)=>({
    type: actionTypes.FETCH_DATA_SUCCESS_SAGA,
    payload:data
})
export const fetchDataFailure = (err)=>({
    type:actionTypes.FETCH_DATA_FAILURE_SAGA,
    payload:err
})
export const fetchData = ()=>({
    type: actionTypes.FETCH_DATA_SAGA
})