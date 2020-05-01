import {combineReducers} from 'redux'
import countReducer from './counterReducer'
import thunkReducer from './thunkReducer'
import sagaReducer from './sagaReducer'
import restaurentReducer from './restaurentReducer'
const rootReducer = combineReducers({
    count : countReducer,
    data :thunkReducer,
    saga :sagaReducer,
    text :restaurentReducer
     
})
export default rootReducer