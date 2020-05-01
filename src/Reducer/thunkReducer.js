import *as actionTypes from './../Action/actionTypes'


const initialState = {
    data :[],
    loading :false,
    error : null
}


const ThunkReducer = (state =initialState,action)=>{
  switch(action.type){
      case actionTypes.START_FETCHING_DATA:
        return {
            ...state,
            loading:true
        } 
        case actionTypes.FETCHING_DATA_SUCCESS:
            return{
                ...state,
                data:action.payload,
                loading:false
            } 
         case actionTypes.FETCHING_DATA_FAILURE:
             return {
                 ...state,
                 loading:false,
                 error :action.payload
             }   
          default:
              return state;
  }
}
export default ThunkReducer