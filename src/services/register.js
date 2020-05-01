import {USER_URL} from './../commons/constants/api-constant.js'

import axios from 'axios'

export const register = (user)=>{
  return axios.post(USER_URL,user)
}
