import {LOGIN_URL} from './../commons/constants/api-constant.js'

import axios from 'axios'

export const login = (user)=>{
  return axios.post(LOGIN_URL,user)
}
