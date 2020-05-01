import  * as actionTypes from './actionTypes'

export const increment = ()=>({
      type : actionTypes.INCREMENT_COUNT
})
export const decrement = ()=>({
    type: actionTypes.DECREMENT_COUNT
})

export const addCounter = (value)=>({
    type:actionTypes.ADD_COUNTER,
    payload:value
})
export const subCounter = (count)=>({
    type:actionTypes.SUB_COUNTER,
    payload:count
})