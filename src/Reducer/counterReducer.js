import * as actionTypes from './../Action/actionTypes'

const initialState = {
    count: 0,
    title: "counter"
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                count: state.count + action.payload
            }
        case actionTypes.SUB_COUNTER:
            return {
                ...state,
                count: state.count - action.payload
            }



        default:
            return state;
    }

}
export default counterReducer