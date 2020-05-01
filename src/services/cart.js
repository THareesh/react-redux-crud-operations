import {CART_URL} from './../commons/constants/api-constant.js'

import axios from 'axios'

export const addToCart = (value) => {
    return axios.post(CART_URL, value, { headers: { 'x-access-token': localStorage.getItem('token') }, });
}


export const getCart =(id)=>{
    return axios.get(`${CART_URL}/${id}`,{headers:{'x-access-token':localStorage.getItem('token')},});
}

export const updateCart =(id,data)=>{
    return axios.put(`${CART_URL}/${id}`,data,{headers:{'x-access-token':localStorage.getItem('token')},})
}
