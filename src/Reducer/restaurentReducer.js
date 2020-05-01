import *as actionTypes from '../Action/actionTypes'
import data from '../data/data.json'


const intialState = {
    title: "Restaurent App",
    post: data.restaurent

}


const RestaurentApp = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESTAURENT_DATA:
            return {
                ...state
            }
        case actionTypes.ADD_RESTAURENT_DATA:
            return {
                ...state,
                post: state.post.concat(action.payload)
            }
        case actionTypes.REMOVE_RESTAURENT_DATA:
            return {
                ...state,
                post: state.post.filter(item => item.id !== action.payload)
            }
        case actionTypes.EDIT_RESTAURENT_DATA:
           const updatedItem =  action.payload1 
           
           
        const hari =  {
            post: [...state.post].map(item => {
                if (item.id == action.payload2) {
                    return {...updatedItem,id:action.payload2}
                }
                else return item;
 
            })
               
            }
            return hari

            
        default:
            return state;
    }


}
export default RestaurentApp