import {BOOK_URL} from './../commons/constants/api-constant.js'

import axios from 'axios'

export const getBooks = ()=>{
    return axios.get(BOOK_URL, { headers: { 'x-access-token': localStorage.getItem('token') }, });
}
