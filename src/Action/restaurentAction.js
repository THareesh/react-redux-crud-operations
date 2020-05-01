import *as actionTypes from './actionTypes';

export const getData = ()=>({
    type: actionTypes.GET_RESTAURENT_DATA
})


export const add = (val)=>({
    type : actionTypes.ADD_RESTAURENT_DATA,
    payload :val
})
export const remove = (id)=>({
    type:actionTypes.REMOVE_RESTAURENT_DATA,
    payload:id

})

export const edit = (item,id)=>({
    type :actionTypes.EDIT_RESTAURENT_DATA,
    payload1:item,
    payload2:id
})