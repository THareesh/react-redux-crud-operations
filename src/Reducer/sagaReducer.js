import *as actionTypes from '../Action/actionTypes'


const intialState ={
      sagaData : [],
      sagaLoading:false,
      sagaError:null
}

const sagaReducer = (state=intialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_DATA_START_SAGA:
            return{
                ...state,
                sagaLoading:true
            }
         case actionTypes.FETCH_DATA_SUCCESS_SAGA:
             return{
                 ...state,
                 sagaData:action.payload,
                 sagaLoading:false
             }  
          case actionTypes.FETCH_DATA_FAILURE_SAGA:
              return{
                  ...state,
                  sagaLoading:false,
                  sagaError:action.payload
              }     
            default:
                return state;
    }

}
export default sagaReducer