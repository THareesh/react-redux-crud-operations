import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './Reducer/index'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import watchFetchData from './Saga/saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk,sagaMiddleware))  
);
sagaMiddleware.run(watchFetchData)

export default store